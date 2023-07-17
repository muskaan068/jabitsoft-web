import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import styles from "./NewPortfolio.module.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { PlusOutlined } from "@ant-design/icons";
import { message, Modal, Upload } from "antd";
import Link from "next/link";
import { toolsImgData } from "../../utils/toos";
const { Dragger } = Upload;

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import { Grid } from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import { servicesData } from "../../utils/services";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { endPoint, envUrl } from "../../utils/Factory";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

function NewPortfolio() {
  const router = useRouter();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const [fileData, setFileData] = useState(null);

  // State of Timeline
  const [title, setTitle] = useState("");
  const [timeLineDesc, setTimelineDesc] = useState("");
  const [timelineDate, setTimelineDate] = useState("");
  const [timeLineDataList, setTimeLineDataList] = useState([]);
  //Timeline Error State
  const [titleError, setTitleError] = useState("");
  const [timeLineDescError, setTimelineDescError] = useState("");
  const [timelineDateError, setTimelineDateError] = useState("");

  // State Declaration for Portfolio
  const [portfolioTitle, setPortfolioTitle] = useState("");
  const [portfolioDesc, setPortfolioDesc] = useState("");
  const [overview, setOverview] = useState("");
  const [companyDesc, setCompanyDesc] = useState("");
  const [companyOverview, setCompanyOverview] = useState("");
  const [requirements, setRequirements] = useState("");
  const [duration, setDuration] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [projectImages, setProjectImages] = useState([]);
  const [tools, setTools] = useState([]);
  const [tootDesc, setToolDesc] = useState("");
  const [challenges, setChallenges] = useState("");
  const [services, setServices] = useState([]);
  const [conclusion, setConclusion] = useState("");
  const [id, setId] = useState(0);

  // Error State
  const [portfolioTitleError, setPortfolioTitleError] = useState("");
  const [portfolioDescError, setPortfolioDescError] = useState("");
  const [overviewError, setOverviewError] = useState("");
  const [companyDescError, setCompanyDescError] = useState("");
  const [companyOverviewError, setCompanyOverviewError] = useState("");
  const [requirementsError, setRequirementsError] = useState("");
  const [durationError, setDurationError] = useState("");
  const [projectDetailsError, setProjectDetailsError] = useState("");
  const [projectDescError, setProjectDescError] = useState("");
  const [projectImagesError, setProjectImagesError] = useState([]);
  const [toolsError, setToolsError] = useState([]);
  const [tootDescError, setToolDescError] = useState("");
  const [challengesError, setChallengesError] = useState("");
  const [servicesError, setServicesError] = useState([]);
  const [conclusionError, setConclusionError] = useState("");
  const [timeLineDataError, setTimelineDataError] = useState("");
  const [isCheckedTools, setIsCheckedTools] = useState(false);

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

  //handle change tools
  const handleChangeTools = (e, toolName) => {
    setToolsError("");
    let value = e.target.value;
    setTools([...tools, value]);
    const findArr = tools && tools.includes(toolName);
    //Remove when already selected
    if (findArr) {
      const filterItem = tools && tools.filter((item) => item !== toolName);
      setTools(filterItem);
    }
  };

  // handle services
  const handleServices = (e, serviceName) => {
    setServicesError("");
    console.log(serviceName);
    let value = e.target.value;
    setServices([...services, value]);
    const findArr = services && services.includes(serviceName);
    if (findArr) {
      const filterItem =
        services && services.filter((item) => item !== serviceName);
      setServices(filterItem);
    }
  };
  //console.log(services)

  const handleCancel = () => {
    setPreviewOpen(false);
    setFileData(null);
  };
  const handlePreview = (file) => {
    if (!file.url && !file.preview) {
      file.preview = getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.thumbUrl);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const [imgList, setImgList] = useState([]);
  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    setProjectImagesError("");
  };
  //console.log(fileList)
  const uploadButton = (
    <div title="upload image">
      <img src="/images/admin/upload.png" alt="upload" width={"80"} />
    </div>
  );

  const addTimeLine = () => {
    if (title === "") {
      setTitleError("Please enter the title!");
    }
    if (timelineDate === "") {
      setTimelineDateError("Please enter the date!");
    }
    if (timeLineDesc === "") {
      setTimelineDescError("Please enter the description!");
    }
    if (title !== "" && timeLineDesc !== "" && timelineDate !== "") {
      const rId = Math.floor(Math.random() * 90000) + 10000;
      const objData = { id: rId, title, timeLineDesc, timelineDate };
      setTimeLineDataList([...timeLineDataList, objData]);
      setTitle("");
      setTimelineDesc("");
      setTimelineDate("");
      setTimelineDataError("");
    }
  };

  const removeTimeline = (id) => {
    if (id) {
      const filterData = timeLineDataList.filter((item) => item.id !== id);
      setTimeLineDataList(filterData);
    }
  };

  // SaveAndUpdate Portfolio
  const saveUpdatePortfolio = async (type) => {
    if (portfolioTitle === "") {
      setPortfolioTitleError("Please enter the title");
    }
    if (portfolioDesc === "") {
      setPortfolioDescError("Please enter the description");
    }
    if (overview === "") {
      setOverviewError("Please enter the overview");
    }
    if (companyDesc === "") {
      setCompanyDescError("Please enter the company desc");
    }
    if (requirements === "") {
      setRequirementsError("Please enter the requirements");
    }
    if (duration === "") {
      setDurationError("Please enter the duration");
    }
    if (projectDetails === "") {
      setProjectDetailsError("Please enter the project details");
    }
    if (fileList.length === 0) {
      setProjectImagesError("Please select the project images");
    }
    if (timeLineDataList.length === 0) {
      setTimelineDataError("Please add the timeline");
    }
    if (tools.length === 0) {
      setToolsError("Please select the tools");
    }
    if (challenges === "") {
      setChallengesError("Please enter the challenges");
    }
    if (services.length === 0) {
      setServicesError("Please select the services");
    }
    if (conclusion === "") {
      setConclusionError("Please enter the conclusion");
    }
    //After fillup
    if (
      portfolioTitle !== "" &&
      portfolioDesc !== "" &&
      overview !== "" &&
      companyDesc !== "" &&
      requirements !== "" &&
      duration !== "" &&
      projectDetails !== "" &&
      fileList.length !== 0 &&
      timeLineDataList.length !== 0 &&
      tools.length !== 0 &&
      challenges !== "" &&
      services.length !== 0 &&
      conclusion !== ""
    ) {
      try {
        const portfolioId = uuidv4();
        const jsonObj = {
          id,
          portfolioId,
          type: type,
          portfolioTitle,
          portfolioDesc,
          overview,
          companyDesc,
          companyOverview,
          requirements,
          duration,
          projectDetails,
          projectDesc,
          projectImgs: fileList,
          timeLineDataList,
          tootDesc,
          tools,
          challenges,
          services,
          conclusion,
        };

        let token = null;
        if (typeof window !== "undefined") {
          token = await localStorage.getItem("token");
        }
        const url = `${envUrl.baseUrl}${endPoint.saveUpdatePortfolio}`;
        await axios
          .post(url, jsonObj, {
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
              uploadImages(portfolioId);
              setOpen(true);
              setMessageState("New Portfolio Created successfully");
              setMessageStatus("success");
              clearPortfolio();
              setTimeout(() => {
                router.reload();
              }, 2000);
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
        //console.log("form data",jsonObj)
      } catch (error) {
        console.log(error);
      }
    }
  };

  const uploadImages = async (portfolioId) => {
    try {
      const url = `${envUrl.baseUrl}${endPoint.uplodPortfolioImages}`;

      if (fileList && Array.isArray(fileList)) {
        for (let file of fileList) {
          const formData = new FormData();
          formData.append("portfolioId", portfolioId && portfolioId);
          formData.append("imageFiles", file && file.originFileObj);
          await axios
            .post(url, formData, {
              headers: {
                // "Authorization":`Bearer ${token}`,
                ContentType: "multipart/form-data",
              },
            })
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clearPortfolio = () => {
    // State Declaration for Portfolio
    setPortfolioTitle("");
    setPortfolioDesc("");
    setOverview("");
    setCompanyDesc("");
    setCompanyOverview("");
    setRequirements("");
    setDuration("");
    setProjectDetails("");
    setProjectDesc("");
    setProjectImages("");
    setTools([]);
    setToolDesc("");
    setChallenges("");
    setConclusion("");
    setServices([]);
    setFileList([]);
    setTimeLineDataList([]);
  };

  return (
    <div className={styles.PortfolioWrapper}>
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
          <div className={styles.PortfolioContainer} id="PostContainer">
            <div className={styles.FormGroup}>
              <label>Title</label>
              <input
                type={"text"}
                onChange={(e) => {
                  setPortfolioTitle(e.target.value);
                  setPortfolioTitleError("");
                }}
                value={portfolioTitle}
                placeholder="Write the Project Name"
              />
              <span style={{ fontSize: "14px", color: "red" }}>
                {portfolioTitleError && portfolioTitleError}
              </span>
            </div>

            <div className={styles.FormGroup}>
              <label>Description</label>
              <textarea
                rows={5}
                onChange={(e) => {
                  setPortfolioDesc(e.target.value);
                  setPortfolioDescError("");
                }}
                value={portfolioDesc}
                placeholder="Write about the description"
              ></textarea>
              <span style={{ fontSize: "14px", color: "red" }}>
                {portfolioDescError}
              </span>
            </div>
            <div className={styles.FormGroup}>
              <label>Overview</label>
              <textarea
                rows={3}
                onChange={(e) => {
                  setOverview(e.target.value);
                  setOverviewError("");
                }}
                value={overview}
                placeholder="Write the about overview"
              ></textarea>
              <span style={{ fontSize: "14px", color: "red" }}>
                {overviewError}
              </span>
            </div>
            <div className={styles.FormGroup}>
              <label>Company Description</label>
              <input
                type={"text"}
                onChange={(e) => {
                  setCompanyDesc(e.target.value);
                  setCompanyDescError("");
                }}
                value={companyDesc}
                placeholder="Write the company name?"
              />
              <span style={{ fontSize: "14px", color: "red" }}>
                {companyDescError}
              </span>
            </div>
            <div className={styles.FormGroup} style={{ marginTop: "-10px" }}>
              <textarea
                rows={3}
                onChange={(e) => {
                  setCompanyOverview(e.target.value);
                  setCompanyOverviewError("");
                }}
                value={companyOverview}
                placeholder="Write the company description"
              ></textarea>
            </div>
            <div className={styles.FormGroup}>
              <label>Requirements</label>
              <textarea
                rows={3}
                onChange={(e) => {
                  setRequirements(e.target.value);
                  setRequirementsError("");
                }}
                value={requirements}
                placeholder="Write the about overview"
              ></textarea>
              <span style={{ fontSize: "14px", color: "red" }}>
                {requirementsError}
              </span>
            </div>
            <div className={styles.FormGroup}>
              <label>Duration</label>
              <input
                type={"text"}
                onChange={(e) => {
                  setDuration(e.target.value);
                  setDurationError("");
                }}
                value={duration}
                placeholder="Write the company description?"
              />
              <span style={{ fontSize: "14px", color: "red" }}>
                {durationError}
              </span>
            </div>
            <div className={styles.FormGroup}>
              <label>Project Details</label>
              <input
                type={"text"}
                onChange={(e) => {
                  setProjectDetails(e.target.value);
                  setProjectDetailsError("");
                }}
                value={projectDetails}
                placeholder="Write the project details ?"
              />
              <span style={{ fontSize: "14px", color: "red" }}>
                {projectDetailsError}
              </span>
            </div>
            <div className={styles.FormGroup} style={{ marginTop: "-10px" }}>
              <textarea
                rows={3}
                onChange={(e) => {
                  setProjectDesc(e.target.value);
                  setProjectDescError("");
                }}
                value={projectDesc}
                placeholder="Write the project details description"
              ></textarea>
            </div>
            <div className={styles.FormGroup}>
              <label>Upload Project Images</label>
              <Upload
                // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
              >
                {fileList.length >= 5 ? null : uploadButton}
              </Upload>
              <Dialog
                open={previewOpen}
                onClose={handleCancel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth
                maxWidth="sm"
              >
                <DialogTitle
                  id="alert-dialog-title"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "8px 20px",
                    alignItems: "center",
                    background: "#0F89C1",
                    color: "#fff",
                  }}
                >
                  <span>{previewTitle}</span>
                  <CloseIcon
                    style={{ cursor: "pointer" }}
                    onClick={handleCancel}
                  />
                </DialogTitle>
                <DialogContent>
                  <img
                    alt="example"
                    style={{
                      width: "100%",
                    }}
                    src={previewImage}
                  />
                </DialogContent>
              </Dialog>
              <span style={{ fontSize: "14px", color: "red" }}>
                {projectImagesError}
              </span>
            </div>
            <div className={styles.TimelineContainer}>
              <h3>Timeline</h3>
              <p>
                Trace the timeline of the project from the start to end or
                current
              </p>
              <div className={styles.TimelineBox}>
                <Grid container direction={"row"} spacing={3}>
                  <Grid item sm={12} md={9} lg={9}>
                    <div className={styles.FormGroup}>
                      <input
                        type={"text"}
                        onChange={(e) => {
                          setTitle(e.target.value);
                          setTitleError("");
                        }}
                        value={title}
                        placeholder="Title"
                      />
                      <span style={{ color: "red", fontSize: "14px" }}>
                        {titleError}
                      </span>
                    </div>
                  </Grid>
                  <Grid item sm={12} md={3} lg={3}>
                    <div className={styles.FormGroup}>
                      <input
                        type={"date"}
                        onChange={(e) => {
                          setTimelineDate(e.target.value);
                          setTimelineDateError("");
                        }}
                        value={timelineDate}
                        placeholder="Date"
                      />
                      <span style={{ color: "red", fontSize: "14px" }}>
                        {timelineDateError}
                      </span>
                    </div>
                  </Grid>
                  <Grid item sm={12} md={12} lg={12}>
                    <div
                      className={styles.FormGroup}
                      style={{ marginTop: "-10px" }}
                    >
                      <textarea
                        rows={6}
                        placeholder="Description"
                        onChange={(e) => {
                          setTimelineDesc(e.target.value);
                          setTimelineDescError("");
                        }}
                        value={timeLineDesc}
                      ></textarea>
                      <span style={{ color: "red", fontSize: "14px" }}>
                        {timeLineDescError}
                      </span>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <span style={{ fontSize: "14px", color: "red" }}>
                {timeLineDataError}
              </span>
              <div className={styles.ButtonContainer}>
                <button
                  className={
                    timeLineDataList && timeLineDataList.length >= 7
                      ? styles.DisabledButton
                      : styles.EnabledButton
                  }
                  onClick={addTimeLine}
                  disabled={
                    timeLineDataList && timeLineDataList.length >= 7
                      ? "disabled"
                      : ""
                  }
                >
                  Add
                </button>
              </div>
              <div className={styles.ViewTimeLineContainer}>
                <table>
                  <thead>
                    <tr>
                      <th>SNo</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timeLineDataList &&
                      timeLineDataList.map((item, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{item && item.title}</td>
                          <td>{item && item.timeLineDesc}</td>
                          <td>{item && item.timelineDate}</td>
                          <td>
                            <CloseIcon
                              style={{ cursor: "pointer", color: "red" }}
                              onClick={(e) => removeTimeline(item && item.id)}
                            />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className={styles.ToolsContainer}>
              <h3>Tools</h3>
              <div className={styles.FormGroup}>
                <textarea rows={5} placeholder="Description"></textarea>
              </div>
              <div className={styles.ToolsItemBox}>
                {toolsImgData &&
                  toolsImgData.map((item, index) => (
                    <div className={styles.ToolsItem} key={index}>
                      <input
                        type={"checkbox"}
                        id={`itemselected${index}`}
                        onChange={(e) =>
                          handleChangeTools(e, item && item.name)
                        }
                        value={item && item.name}
                        name="tools"
                      />
                      <label htmlFor={`itemselected${index}`}>
                        <img
                          className={styles.defaultIcon}
                          src={item && item.defaultImgUrl}
                        />
                        <img
                          className={styles.activeIcon}
                          src={item && item.selectedImgUrl}
                        />
                      </label>
                    </div>
                  ))}
              </div>
              <span style={{ fontSize: "14px", color: "red" }}>
                {toolsError}
              </span>
            </div>
            <div className={styles.ChallengesContainer}>
              <div className={styles.FormGroup}>
                <h3>Challenges</h3>
                <textarea
                  rows={5}
                  onChange={(e) => {
                    setChallenges(e.target.value);
                    setChallengesError("");
                  }}
                  value={challenges}
                  placeholder="Write some of the challenges in the project."
                ></textarea>
                <span style={{ fontSize: "14px", color: "red" }}>
                  {challengesError}
                </span>
              </div>
            </div>
            <div className={styles.ServicesContainer}>
              <h3>Services</h3>
              <div className={styles.ServicesItem}>
                {servicesData &&
                  servicesData.map((item, index) => (
                    <div className={styles.Items} key={index}>
                      <input
                        type={"checkbox"}
                        id={`services${index}`}
                        onChange={(e) => handleServices(e, item.name)}
                        value={item && item.name}
                        name="services"
                      />
                      <label htmlFor={`services${index}`}>
                        {item && item.name}
                      </label>
                    </div>
                  ))}
              </div>
              <span
                style={{ fontSize: "14px", color: "red", marginTop: "5px" }}
              >
                {servicesError}
              </span>
            </div>
            <div className={styles.ChallengesContainer}>
              <div className={styles.FormGroup}>
                <h3>Conclusion</h3>
                <textarea
                  rows={5}
                  onChange={(e) => {
                    setConclusion(e.target.value);
                    setConclusionError("");
                  }}
                  value={conclusion}
                  placeholder="Write overall experiences of the project."
                ></textarea>
                <span style={{ fontSize: "14px", color: "red" }}>
                  {conclusionError}
                </span>
              </div>
            </div>
            <div className={styles.ButtonGroup}>
              <button onClick={() => saveUpdatePortfolio("publish")}>
                Publish
              </button>
              <button onClick={() => saveUpdatePortfolio("draft")}>
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

export default NewPortfolio;
