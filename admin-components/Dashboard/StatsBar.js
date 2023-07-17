import moment from "moment";
import React from "react";

function StatsBar({ styles, dashboardStatus }) {
  return (
    <div className={styles.StatsBoxContainer}>
      <div className={styles.ItemBox}>
        <h3>
          {dashboardStatus && dashboardStatus.totalBlog
            ? dashboardStatus.totalBlog
            : "..."}
        </h3>
        <div className={styles.StatusText}>
          <h4>Blogs</h4>
          <span>
            Last update{" "}
            {moment(dashboardStatus && dashboardStatus.blogLatestUpdate).format(
              "Do MMMM YYYY"
            )}
          </span>
        </div>
      </div>
      <div className={styles.ItemBox}>
        <h3>
          {dashboardStatus && dashboardStatus.totalPortfolio
            ? dashboardStatus.totalPortfolio
            : "..."}
        </h3>
        <div className={styles.StatusText}>
          <h4>Case Study</h4>
          <span>
            Last update{" "}
            {moment(
              dashboardStatus && dashboardStatus.portfolioLatestUpdate
            ).format("Do MMMM YYYY")}
          </span>
        </div>
      </div>
      <div className={styles.ItemBox}>
        <h3>
          {dashboardStatus && dashboardStatus.totalInquiries
            ? dashboardStatus.totalInquiries
            : "..."}
        </h3>
        <div className={styles.StatusText}>
          <h4>Inquiries</h4>
          <span>
            Last update{" "}
            {moment(
              dashboardStatus && dashboardStatus.inquiriesLatestUpdate
            ).format("Do MMMM YYYY")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default StatsBar;
