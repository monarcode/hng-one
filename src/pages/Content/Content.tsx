import { Header } from "@components/Header";
import { listData, user } from "@constants/index";
import { motion } from "framer-motion";
import styles from "./Content.module.scss";
import ContentItem from "./ContentItem";

export function Content(): JSX.Element {
  return (
    <>
      <Header name={user.handle} imageUrl={user.img_url} />

      <div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              when: "beforeChildren",
              staggerChildren: 0.3,
            },
          }}
          className={styles.Content}
        >
          {listData.map((item) => (
            <ContentItem key={item.id} {...item} />
          ))}
          <ContentItem
            uid="contact"
            label="Contact me"
            href="/contact"
            userouter={true}
          />
          <div className={styles.socials}>
            <img
              id="slack"
              data-slack-name="MONARCODE"
              src="slack.svg"
              alt="slack"
            />
            <img src="git.svg" alt="git" />
          </div>
        </motion.div>
      </div>
    </>
  );
}
