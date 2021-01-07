import styles from './Footer.module.css'

export default function Footer({props}) {
    return <div className={[styles.footer, "flex-align-items-center"].join(' ')}>
        Made with 🐑 from Paris
    </div>
}