import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import styles from "./PostList.module.scss";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import { endPoint, envUrl } from "../../utils/Factory";
import parse from "html-react-parser";
import moment from "moment";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function PostList() {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [titleName, setTitleName] = useState("");
  const [coverImg, setCoverImg] = useState(null);
  const [coverImgPrev, setCoverImgPrev] = useState(null);
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(0);
  const [id, setId] = useState(0);

  const [blogListData, setBlogListData] = useState([]);
  const [draftBlogListData, setDraftBlogListData] = useState([]);

  // Alert State
  const [messageState, setMessageState] = useState("");
  const [messageStatus, setMessageStatus] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  // handle Edit
  const actionEditHandle = (id, type) => {
    router.push({
      pathname: "/admin/blog/post",
      query: { type: type, post_id: id },
    });
  };
  const actionUnPublishHandle = async (id, type) => {
    try {
      let token = null;
      if (typeof window !== "undefined") {
        token = await localStorage.getItem("token");
      }

      const url = `${envUrl.baseUrl}${endPoint.blogtoUnpublish}`;
      const obJson = { id: id, type: type };
      await axios
        .post(url, obJson, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (
            response &&
            response.data &&
            response.data.status === 200 &&
            response.data.statusType === 1
          ) {
            setOpen(true);
            setMessageState("blog unpublished successfully");
            setMessageStatus("success");
            setTimeout(() => {
              loadBlogList();
            }, 2000);
          }
          console.log(response);
        })
        .catch((error) => {
          //console.log(error);
          const err = new Error(error);
          setOpen(true);
          setMessageState(err.message);
          setMessageStatus("error");
        });
    } catch (error) {
      const err = new Error(error);
      setOpen(true);
      setMessageState(err.message);
      setMessageStatus("error");
    }
  };
  //handle publish
  const actionPublishHandle = async (id, type) => {
    try {
      let token = null;
      if (typeof window !== "undefined") {
        token = await localStorage.getItem("token");
      }

      const url = `${envUrl.baseUrl}${endPoint.blogDraftToPublish}`;
      const obJson = { id: id, type: type };
      await axios
        .post(url, obJson, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (
            response &&
            response.data &&
            response.data.status === 200 &&
            response.data.statusType === 1
          ) {
            setOpen(true);
            setMessageState("Draft blog published successfully");
            setMessageStatus("success");
            setTimeout(() => {
              loadBlogList();
            }, 2000);
          }
          console.log(response);
        })
        .catch((error) => {
          //console.log(error);
          const err = new Error(error);
          setOpen(true);
          setMessageState(err.message);
          setMessageStatus("error");
        });
    } catch (error) {
      const err = new Error(error);
      setOpen(true);
      setMessageState(err.message);
      setMessageStatus("error");
    }
  };

  //Hnadle close Alert
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // Load Bloglist
  const loadBlogList = async () => {
    try {
      let token = null;
      if (typeof window !== "undefined") {
        token = await localStorage.getItem("token");
      }
      const url = `${envUrl.baseUrl}${endPoint.blogList}`;
      await axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response);
          if (
            response &&
            response.data.status === 200 &&
            response.data.statusType === 1
          ) {
            setBlogListData(response && response.data.result.publishedBlog);
            setDraftBlogListData(response && response.data.result.draftBlog);
          }
          if (
            response &&
            response.data.status === 401 &&
            response.data.statusType === "expired"
          ) {
            console.log(response);
            setOpen(true);
            setMessageState("Token has been expired");
            setMessageStatus("error");
            setTimeout(() => {
              router.push("/admin");
            }, 3000);
          }

          //console.log(response);
        })
        .catch((error) => {
          console.log(error);
          const err = new Error(error);
          setOpen(true);
          setMessageState(err.message);
          setMessageStatus("error");
        });
    } catch (error) {
      const err = new Error(error);
      setOpen(true);
      setMessageState(err.message);
      setMessageStatus("error");
    }
  };

  useEffect(() => {
    loadBlogList();
  }, []);

  // console.log("list",blogListData)
  return (
    <div className={styles.PostListWrapper}>
      <Container>
        <div className={styles.PostConatiner}>
          <div className={styles.UploadedBlogs}>
            <h2>Uploaded Blogs</h2>

            {blogListData &&
              blogListData.map((item, index) => (
                <div className={styles.UploadedBlogBox} key={index}>
                  <div className={styles.PostList}>
                    <p className={styles.PostDate}>
                      {" "}
                      {moment(item && item.created_on).format(
                        "Do  MMMM , YYYY"
                      )}
                    </p>
                    <h3>{item && item.title}</h3>
                    <div className={styles.PageContent}>
                      {parse(
                        item && item.description.length > 100
                          ? item.description.substr(0, 100) + "..."
                          : item.description
                      )}
                    </div>
                  </div>
                  <div className={styles.PostAction}>
                    <div>
                      <img
                        src="/images/admin/edit.png"
                        alt="edit"
                        onClick={(e) =>
                          actionEditHandle(item && item.id, "edit")
                        }
                      />
                      <h4>Edit</h4>
                    </div>

                    <div>
                      <img
                        src="/images/admin/unpublish.png"
                        alt="unpublish"
                        onClick={() =>
                          actionUnPublishHandle(item && item.id, "unpublish")
                        }
                      />
                      <h4>UnPublish</h4>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {draftBlogListData && draftBlogListData.length > 0 && (
            <div className={styles.UploadedBlogs}>
              <h2>Draft</h2>
              {draftBlogListData &&
                draftBlogListData.map((item, index) => (
                  <div className={styles.DraftUploadedBlogBox} key={index}>
                    <div className={styles.PostList}>
                      <p className={styles.PostDate}>
                        {" "}
                        {moment(item && item.created_on).format(
                          "Do  MMMM , YYYY"
                        )}
                      </p>
                      <h3>{item && item.title}</h3>
                      <div
                        className={styles.PageContent}
                        dangerouslySetInnerHTML={{
                          __html:
                            item && item.description.length > 300
                              ? item.description.substr(0, 300) + "..."
                              : item.description,
                        }}
                      />
                    </div>
                    <div className={styles.PostAction}>
                      <div
                        className={styles.EditAction}
                        onClick={(e) => actionEditHandle(item.id, "draft")}
                      >
                        <img src="/images/admin/edit.png" alt="edit" />
                        <h4>Edit</h4>
                      </div>
                      <div
                        className={styles.PublishAction}
                        onClick={(e) => actionPublishHandle(item.id, "publish")}
                      >
                        <img src="/images/admin/publish.png" alt="publish" />
                        <h4>Publish</h4>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </Container>
      {/* Alert Message */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={messageStatus}
          sx={{ width: "100%" }}
        >
          {messageState && messageState}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default PostList;
