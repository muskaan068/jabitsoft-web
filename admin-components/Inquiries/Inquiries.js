import { Container } from "react-bootstrap";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./Inquiries.module.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";

//import Snackbar from "@mui/material/Snackbar";
//import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import { endPoint, envUrl } from "../../utils/Factory";
import parse from "html-react-parser";
import moment from "moment";
const Inquiries = () => {
  const [ContactListData, setContactListData] = useState([]);

  // Alert State
  const [messageState, setMessageState] = useState("");
  const [messageStatus, setMessageStatus] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  // handle Edit
  const actionEditHandle = (path) => {
    router.push(path);
  };

  const loadContactList = async () => {
    try {
      let token = null;
      if (typeof window !== "undefined") {
        token = await localStorage.getItem("token");
      }
      const url = `${envUrl.baseUrl}${endPoint.adminContactList}`;
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
            setContactListData(response && response.data.result);
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
  //console.log(ContactListData);
  useEffect(() => {
    loadContactList();
  }, []);
  return (
    <div className={styles.PostListWrapper}>
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
          <div className={styles.PostConatiner}>
            <div className={styles.UploadedBlogs}>
              {ContactListData &&
                ContactListData.map((item, index) => (
                  <div className={styles.UploadedBlogBox} key={index}>
                    <div className={styles.PostList}>
                      <div>
                        <h3>
                          Name &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                          <span className={styles.Content}>
                            {item && item.name}
                          </span>
                        </h3>
                      </div>
                      <div>
                        <h3>
                          Contact &nbsp; &nbsp; &nbsp; &nbsp;
                          <span className={styles.Content}>
                            {item && item.phone}
                          </span>
                        </h3>
                      </div>
                      <div>
                        <h3>
                          Email &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                          <span className={styles.Content}>
                            {item && item.email}
                          </span>
                        </h3>
                      </div>
                      <div className={styles.PageContent}>
                        <h3>Message</h3>
                        {item && item.message}
                      </div>
                      <br></br>
                      <br></br>

                      <span>
                        {" "}
                        <p className={styles.PostDate}>
                          {moment(item && item.created_on).format(
                            "Do  MMMM , YYYY  kk:mm:ss "
                          )}
                        </p>{" "}
                      </span>
                    </div>

                    <div
                      className={styles.PostAction}
                      onClick={(e) => actionEditHandle("")}
                    >
                      <img src="/images/admin/response.png" alt="response" />
                      <h4>Response</h4>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Inquiries;
