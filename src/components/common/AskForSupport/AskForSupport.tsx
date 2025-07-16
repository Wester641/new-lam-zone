import styles from "./AskForSupport.module.scss";

export default function AskForSupport() {
  return (
    <div className={styles.AskForSupport}>
      <h1>Don’t find your answer, Ask for support.</h1>
      <p>
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed
        molestie accumsan dui, non iaculis primis in faucibu raesent eget sem
        purus.
      </p>

      <div className={styles.AskForSupport_container}>
        <input
          className={styles.AskForSupport_container_input}
          type="text"
          placeholder="Email address"
        />
        <input
          className={styles.AskForSupport_container_input}
          type="text"
          placeholder="Subject"
        />
        <input
          className={styles.AskForSupport_container_inputMessag}
          type="text"
          placeholder="Message (Optional)"
        />
        <button className={styles.AskForSupport_container_button}>
          Send message
        </button>
      </div>
    </div>
  );
}
