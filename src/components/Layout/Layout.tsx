import styles from "./Layout.module.scss";
import { Outlet } from "react-router-dom";
import { Footer } from "@components/Footer";

export function Layout() {
  return (
    <div className={styles.Layout}>
      <div className={styles.container}>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
