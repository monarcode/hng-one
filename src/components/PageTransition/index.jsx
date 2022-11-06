import styles from "./styles.module.scss";
import { motion } from "framer-motion";
const pageTransition = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      duration: 0.6,
    },
  },
};

export const PageTransition = ({
  children,
}) => {
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="show"
      exit="hidden"
      className={styles.containPage}
    >
      {children}
    </motion.div>
  );
};
