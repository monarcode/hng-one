import styles from "./Layout.module.scss";
import { Outlet } from "react-router-dom";
import { Footer } from "@components/Footer";
import { PageTransition } from "@components/PageTransition";

export function Layout() {
  return (
    <div className={styles.Layout}>
      <div className={styles.container}>
        <PageTransition>
          <Outlet />
        </PageTransition>
        <Footer />
      </div>
    </div>
  );
}
