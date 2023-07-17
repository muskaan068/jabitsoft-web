import { Grid } from "@mui/material";
import Link from "next/link";
import React from "react";

function FooterLinks({ styles }) {
  return (
    <div className={styles.FooterLinks}>
      <Grid container direction={"row"} spacing={3} marginBottom="15px">
        <Grid item sm={3}>
          <Link href={"/aboutus"}>
            <a className={styles.LinkTitle}>About Us</a>
          </Link>
        </Grid>
        <Grid item sm={5}>
          <Link href={"/services/uix-design"}>
            <a>Website Designing</a>
          </Link>
        </Grid>
        <Grid item sm={4}>
          <Link href={"/contactus"}>
            <a>Contact Us</a>
          </Link>
        </Grid>
      </Grid>
      <Grid container direction={"row"} spacing={3} marginBottom="15px">
        <Grid item sm={3}>
          <Link href={"/portfolio"}>
            <a className={styles.LinkTitle}>Portfolio</a>
          </Link>
        </Grid>
        <Grid item sm={5}>
          <Link href={"/services/web-development"}>
            <a>Website Development</a>
          </Link>
        </Grid>
        <Grid item sm={4}>
          <Link href={"/privacy-policy"}>
            <a>Privacy Policy</a>
          </Link>
        </Grid>
      </Grid>
      <Grid container direction={"row"} spacing={3} marginBottom="15px">
        <Grid item sm={3}>
          <Link href={"/portfolio"} className={styles.LinkTitle}>
            <a>Case Study</a>
          </Link>
        </Grid>
        <Grid item sm={5}>
          <Link href={"/services/mobile-application"}>
            <a>Mobile App Development</a>
          </Link>
        </Grid>
        <Grid item sm={4}>
          <Link href={"/aboutus"}>
            <a>Sitemap</a>
          </Link>
        </Grid>
      </Grid>
      <Grid container direction={"row"} spacing={3} marginBottom="15px">
        <Grid item sm={3}>
          <Link href={"/aboutus"}>
            <a className={styles.LinkTitle}>Strategies</a>
          </Link>
        </Grid>
        <Grid item sm={5}>
          <Link href={"/services/customize-software"}>
            <a>Customize Software</a>
          </Link>
        </Grid>
        <Grid item sm={4}>
          <Link href={"/terms-condition"}>
            <a>Terms & Condition</a>
          </Link>
        </Grid>
      </Grid>
      <Grid container direction={"row"} spacing={3} marginBottom="15px">
        <Grid item sm={3}>
          <Link href={"/blogs"}>
            <a className={styles.LinkTitle}>Blogs</a>
          </Link>
        </Grid>
        <Grid item sm={5}>
          <Link href={"/services/database-management"}>
            <a>Data Management Solutions</a>
          </Link>
        </Grid>
        <Grid item sm={4}>
          <Link href={"/disclaimer"}>
            <a>Disclaimer</a>
          </Link>
        </Grid>
      </Grid>
      <Grid container direction={"row"} spacing={3} marginBottom="15px">
        <Grid item sm={3}>
          <Link href={"/aboutus"}>
            <a className={styles.LinkTitle}>Inquiry</a>
          </Link>
        </Grid>
        <Grid item sm={5}>
          <Link href={"/services/billing-invoicing-software"}>
            <a>Billing and Invoicing Software</a>
          </Link>
        </Grid>
        {/* <Grid item sm={4}>
                            <Link href={"/aboutus"}><a>Contact Us</a></Link>
                            </Grid> */}
      </Grid>
    </div>
  );
}

export default FooterLinks;
