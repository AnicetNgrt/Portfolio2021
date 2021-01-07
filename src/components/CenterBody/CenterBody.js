import styles from "./CenterBody.module.css";

export default function CenterBody({ children }) {
    return <div className={styles["center-body"]}>
        {children}
    </div>
}