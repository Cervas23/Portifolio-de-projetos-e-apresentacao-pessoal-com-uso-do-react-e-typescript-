import styles from './footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.format}>
                <p className={styles.text}>
                    © Lucas Cervavantes 2026 • Desenvolvido com React & TypeScript
                </p>
            </div>
        </footer>
    )
}