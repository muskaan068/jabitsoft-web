import { Grid } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { endPoint, envUrl } from "../../utils/Factory";
import BlogBar from "./BlogBar";
import styles from "./Dashboard.module.scss";
import PortfolioBar from "./PortfolioBar";
import StatsBar from "./StatsBar";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function Dashboard() {
  const router = useRouter();
  const [dashboardStatus, setDashboardStatus] = useState(null);
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

  // Load Bloglist
  const getDashboardStatus = async () => {
    try {
      let token = null;
      if (typeof window !== "undefined") {
        token = await localStorage.getItem("token");
      }
      const url = `${envUrl.baseUrl}${endPoint.dashboardStats}`;
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
            setDashboardStatus(response && response.data.result);
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
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDashboardStatus();
  }, []);

  console.log(dashboardStatus);
  return (
    <Container>
      <div className={styles.ConatinerBox}>
        <div className={styles.StatsBarContainer}>
          <StatsBar styles={styles} dashboardStatus={dashboardStatus} />
        </div>
        <div className={styles.ContentBoxContainer}>
          <Grid container direction={"row"} spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <h1>Blogs</h1>
              <BlogBar styles={styles} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <h1>Portfolio</h1>
              <PortfolioBar styles={styles} />
            </Grid>
          </Grid>
        </div>
      </div>
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
    </Container>
  );
}

export default Dashboard;
