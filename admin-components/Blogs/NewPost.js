import Link from "next/link";
import { Container } from "react-bootstrap";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import styles from "./Post.module.scss";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
// import CKEditor from './CKEditor';
// import React, { useState, useEffect } from "react";
import React, { useState, useRef, useMemo, useEffect } from "react";
const { Dragger } = Upload;
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
// import jwt_decode from 'jwt-decode';
import { endPoint, envUrl } from "../../utils/Factory";
import { useRouter } from "next/router";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
// import dynamic from 'next/dynamic';
// const JoditEditor =dynamic(()=>import('jodit-react'),{
//   ssr:false
// });
// import ReactQuill from "react-quill";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

function NewBlog() {
  const router = useRouter();
  //State Dclaration
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [titleName, setTitleName] = useState("");
  const [coverImg, setCoverImg] = useState(null);
  const [coverImgPrev, setCoverImgPrev] = useState(null);
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(0);
  const [id, setId] = useState(0);

  const editor = useRef(null);
  // const [content, setContent] = useState('');
  // const config = {
  // uploader: {
  //   insertImageAsBase64URI: flexbox
  // },
  // }

  //   const [blogListData,setBlogListData]=useState([]);
  // const [draftBlogListData,setDraftBlogListData]=useState([]);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  let formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "table",
  ];

  const [blogCategory, setBlogCategory] = useState([]);

  // Error State
  const [titleNameError, setTitleNameError] = useState("");
  const [coverImgError, setCoverImgError] = useState("");
  const [contentError, setContentError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  // Alert State
  const [messageState, setMessageState] = useState("");
  const [messageStatus, setMessageStatus] = useState("");
  const [open, setOpen] = useState(false);
  //Hnadle close Alert
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const onChangeImgFile = (coverImgFile) => {
    setCoverImgError("");
    if (coverImgFile) {
      const { file, fileList } = coverImgFile;
      if (fileList && fileList.length > 0) {
        const { originFileObj } = fileList[0];
        setCoverImg(originFileObj);
        getBase64(originFileObj, (url) => {
          setCoverImgPrev(url);
        });
      } else {
        setCoverImg(null);
      }
    } else {
      setCoverImg(null);
    }
  };

  console.log(coverImgPrev);

  // Handle publish
  const handlePublishAndDraft = async (status) => {
    try {
      if (titleName === "") {
        setTitleNameError("Please enter the title name");
      }
      if (coverImg === null) {
        setCoverImgError("Please select the cover image");
      }
      if (content === "") {
        setContentError("Please enter the content");
      }
      if (category === 0) {
        setCategoryError("Please select the category");
      }
      if (
        titleName !== "" &&
        coverImg !== null &&
        content !== "" &&
        category !== 0
      ) {
        let token = null;
        if (typeof window !== "undefined") {
          token = await localStorage.getItem("token");
        }
        // let decodedToken = jwt_decode(token);
        // const jsonObj={id,titleName,coverImg,content};
        // console.log(jsonObj);
        const url = `${envUrl.baseUrl}${endPoint.publishBlog}`;
        const formData = new FormData();
        formData.append("id", id);
        formData.append("titleName", titleName);
        formData.append("coverImge", coverImg);
        formData.append("content", content);
        formData.append("category", category);
        formData.append("status", status);
        await axios
          .post(url, formData, {
            headers: {
              Authorization: `Bearer ${token}`,
              ContentType: "multipart/form-data",
            },
          })
          .then((response) => {
            if (
              response &&
              response.data.status === 200 &&
              response.data.statusType === 1
            ) {
              setOpen(true);
              setMessageState("New Post Created successfully");
              setMessageStatus("success");
              clearPost();
              setTimeout(() => {
                router.push("/admin/blog/post-list");
              }, 3000);
            }
            console.log(response);
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
          })
          .catch((error) => {
            const err = new Error(error);
            setOpen(true);
            setMessageState(err.message);
            setMessageStatus("error");
          });
      }
    } catch (error) {
      const err = new Error(error);
      setOpen(true);
      setMessageState(err.message);
      setMessageStatus("error");
    }
  };

  const clearPost = () => {
    setCoverImg(null);
    setTitleName("");
    setContent("");
  };

  // Load Bloglist
  const loadCategoryList = async () => {
    try {
      let token = null;
      if (typeof window !== "undefined") {
        token = await localStorage.getItem("token");
      }
      const url = `${envUrl.baseUrl}${endPoint.blogCategory}`;
      await axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (
            response &&
            response.data.status === 200 &&
            response.data.statusType === 1
          ) {
            setBlogCategory(response && response.data.result);
          }

          //console.log(response);
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

  // Getblog By Id
  const loadBlogById = async () => {
    const Type = (await router) && router.query.type;
    const postId = (await router) && router.query.post_id;
    try {
      let token = null;
      if (typeof window !== "undefined") {
        token = await localStorage.getItem("token");
      }
      if (postId && Type) {
        const url = `${envUrl.baseUrl}${endPoint.blogGetById}`;
        const obJson = { type: Type && Type, id: Number(postId && postId) };
        await axios
          .post(url, obJson, {
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
              console.log("hhhhhhhh");
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
            //console.log(error);
            const err = new Error(error);
            setOpen(true);
            setMessageState(err.message);
            setMessageStatus("error");
          });
      }
    } catch (error) {
      const err = new Error(error);
      setOpen(true);
      setMessageState(err.message);
      setMessageStatus("error");
    }
  };

  // Load Editor
  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  useEffect(() => {
    loadCategoryList();
  }, []);

  useEffect(() => {
    if (router && router.query && router.query.type !== "new") loadBlogById();
  }, [router && router.query]);

  return (
    <div className={styles.PostWrapper}>
      <Container>
        <div className={styles.ContainerBox}>
          <div className={styles.BackContainer}>
            <Link href={"/admin/dashboard"}>
              <a>
                {" "}
                <ArrowBackIosIcon
                  fontSize="large"
                  className={styles.BackIcon}
                />
                <span>Cancel</span>
              </a>
            </Link>
          </div>
          <div className={styles.PostContainer} id="PostContainer">
            <div className={styles.FormGroup}>
              <label>Title</label>
              <input
                type={"text"}
                onChange={(e) => {
                  setTitleName(e.target.value);
                  setTitleNameError("");
                }}
                value={titleName}
                placeholder="Write the title of the blog."
              />
              <span style={{ color: "red", fontSize: "14px" }}>
                {titleNameError && titleNameError}
              </span>
            </div>
            <div className={styles.FormGroup}>
              <label>Cover Image</label>
              <Dragger
                onChange={(e) => onChangeImgFile(e)}
                onDrop={(e) => onChangeImgFile(e)}
                beforeUpload={(eventFile) => {
                  if (eventFile !== null) {
                    const { type } = eventFile;
                    if (
                      type !== "image/png" &&
                      type !== "image/jpg" &&
                      type !== "image/jpeg"
                    ) {
                      setCoverImg(null);
                      setOpen(true);
                      setMessageState(
                        "Resume file format should be pdf or docx only!!!"
                      );
                      setMessageStatus("error");
                      return Upload.LIST_IGNORE;
                    } else {
                      return eventFile;
                    }
                  }
                }}
                multiple={false}
                maxCount={1}
                name="file"
              >
                {!coverImgPrev ? (
                  <p className="ant-upload-drag-icon">
                    <img src="/images/admin/upload.png" alt="upload" />
                  </p>
                ) : (
                  <div style={{ width: "100%", height: "350px" }}>
                    <img
                      src={coverImgPrev && coverImgPrev}
                      alt="aaa"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                )}
              </Dragger>
              {/* <input type={"file"} onChange={(e)=>{setTitleName(e.target.value);setTitleNameError("")}} value={titleName} placeholder="Write the title of the blog." /> */}
              <span style={{ color: "red", fontSize: "14px" }}>
                {coverImgError && coverImgError}
              </span>
            </div>
            <div className={styles.FormGroup}>
              <label>Content</label>
              {/* <input type={"text"} placeholder="Write the title of the blog." /> */}
              {/* <textarea rows={15}></textarea> */}
              {/* <CKEditor
                  name="description"
                  onChange={(data) => {
                    setContent(data);
                    setContentError("")
                  }}
                  editorLoaded={editorLoaded}
                  value={content}
                 /> */}
              {/* <JoditEditor
                    ref={editor}
                    value={content}
                    // config={config}
                    onChange={(data) => {
                      setContent(data);
                      setContentError("")
                    }}
                  /> */}
              <ReactQuill
                theme="snow"
                value={content}
                onChange={(data) => {
                  setContent(data);
                  setContentError("");
                }}
                placeholder={"Write something awesome..."}
                modules={modules}
                formats={formats}
              />
              <span style={{ color: "red", fontSize: "14px" }}>
                {contentError && contentError}
              </span>
            </div>
            <div className={styles.FormGroup}>
              <label>Category</label>
              <select
                onChange={(e) => {
                  setCategory(e.target.value);
                  setCategoryError("");
                }}
              >
                <option value={0}>select category</option>
                {blogCategory &&
                  blogCategory.map((item, index) => (
                    <option key={index} value={item && item.id}>
                      {item && item.name}
                    </option>
                  ))}
              </select>
              <span style={{ color: "red", fontSize: "14px" }}>
                {categoryError && categoryError}
              </span>
            </div>
            <div className={styles.ButtonGroup}>
              <button onClick={() => handlePublishAndDraft(1)}>Publish</button>
              <button onClick={() => handlePublishAndDraft(0)}>
                Save as Draft
              </button>
            </div>
          </div>
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

export default NewBlog;
