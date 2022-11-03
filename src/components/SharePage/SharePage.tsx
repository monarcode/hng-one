import styles from "./SharePage.module.scss";
import { useCopyToClipboard } from "react-use";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export function SharePage() {
  const [{ error }, copyToClipboard] = useCopyToClipboard();
  const link = import.meta.env.PROD ? "www.hng-one.vercel.app" : "...";

  useEffect(() => {
    if (error) {
      toast.error("Could not copy");
    } else {
      // toast.success("Link copied, spread the word");
    }
  }, [error]);

  return (
    <div className={styles.SharePage} onClick={() => copyToClipboard(link)}>
      <img src="/share.svg" alt="share-link" />
    </div>
  );
}
