import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Container } from "react-bootstrap";
import { clearLocalStorage } from "../../utils/Factory";
import styles from "./TopHeader.module.scss";
function TopHeader() {
  const router = useRouter();
  const logOutHandle = () => {
    router.push("/admin");
    clearLocalStorage();
  };
  return (
    <div className={styles.HeaderWrapper}>
      <Container>
        <div className={styles.ContainerBox}>
          <div className={styles.LogoImg}>
            <img src="/images/Logo.png" alt="logo" />
          </div>
          <div className={styles.MenuItem}>
            <Link href={"/admin/dashboard"}>
              <a>
                <div className={styles.MenuLinkBar}>
                  <img src="/images/admin/dashboard.png" alt="dashboard" />
                  <span>Dashboard</span>
                </div>
              </a>
            </Link>
            <Link href={"/admin/inquiries"}>
              <a>
                <div className={styles.MenuLinkBar}>
                  <img
                    src="/images/admin/notification.png"
                    alt="notification"
                  />
                  <span>Inquiries</span>
                </div>
              </a>
            </Link>
            <Link href={"#"}>
              <a>
                <div className={styles.MenuLinkBar} onClick={logOutHandle}>
                  <img src="/images/admin/logout.png" alt="logout" />
                  <span>Log Out</span>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TopHeader;
