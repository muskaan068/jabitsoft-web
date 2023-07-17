import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import styles from "./PortfolioList.module.scss";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { endPoint, envUrl } from "../../utils/Factory";
import axios from "axios";
import moment from "moment";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function PortfolioList() {
  const router = useRouter();
  const [portfolioListData, setPortfolioListData] = useState([]);
  const [draftPortfolioListData, setDraftPortfolioListData] = useState([]);

  // Alert State
  const [messageState, setMessageState] = useState("");
  const [messageStatus, setMessageStatus] = useState("");
  const [open, setOpen] = useState(false);

  // handle Edit
  const actionEditHandle = (id, type) => {
    router.push({
      pathname: "/admin/portfolio/project",
      query: { type: type, projecgt_id: id },
    });
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
      const url = `${envUrl.baseUrl}${endPoint.adminPortfolioList}`;
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
            const { published, unPublished } =
              response && response?.data?.result[0];
            console.log("portfolio", published[0].portfolioList);
            setPortfolioListData(published && published[0]?.portfolioList);
            setDraftPortfolioListData(
              unPublished && unPublished[0]?.portfolioList
            );
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

  return (
    <div className={styles.PostListWrapper}>
      <Container>
        <div className={styles.PostConatiner}>
          <div className={styles.UploadedBlogs}>
            <h2>Uploaded Case Study</h2>
            {portfolioListData &&
              Array.isArray(portfolioListData) &&
              portfolioListData.map((item, index) => (
                <div className={styles.UploadedBlogBox} key={index}>
                  <div className={styles.PostList}>
                    <p>
                      {moment(item && item.created_on).format(
                        "Do  MMMM , YYYY"
                      )}
                    </p>
                    <h3>{item && item.title}</h3>
                    <p>
                      {item && item.description.length > 100
                        ? item.description.substr(0, 100) + "..."
                        : item.description}
                    </p>
                  </div>
                  <div className={styles.PostAction}>
                    <div>
                      <img
                        src="/images/admin/edit.png"
                        onClick={(e) =>
                          actionEditHandle(item && item.pid, "edit")
                        }
                        alt="edit"
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
          {draftPortfolioListData && draftPortfolioListData.length > 0 && (
            <div className={styles.UploadedBlogs}>
              <h2>Draft</h2>
              {draftPortfolioListData &&
                Array.isArray(draftPortfolioListData) &&
                draftPortfolioListData.map((item, index) => (
                  <div className={styles.DraftUploadedBlogBox}>
                    <div className={styles.PostList}>
                      <p>
                        {moment(item && item.created_on).format(
                          "Do  MMMM , YYYY"
                        )}
                      </p>
                      <h3>{item && item.title}</h3>
                      <p>
                        {item && item.description.length > 100
                          ? item.description.substr(0, 100) + "..."
                          : item.description}
                      </p>
                    </div>
                    <div className={styles.PostAction}>
                      <div
                        className={styles.EditAction}
                        onClick={(e) =>
                          actionEditHandle(item && item.pid, "draft")
                        }
                      >
                        <img src="/images/admin/edit.png" alt="edit" />
                        <h4>Edit</h4>
                      </div>
                      <div className={styles.PublishAction}>
                        <img src="/images/admin/publish.png" alt="edit" />
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

export default PortfolioList;
