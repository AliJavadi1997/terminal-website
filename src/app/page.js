import styles from "./page.module.css";
import TerminalPage from "./components/TerminalPage";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <TerminalPage />
      </main>
    </div>
  );
}
