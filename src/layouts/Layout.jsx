import styles from "./Layout.module.css"


function Layout({children}) {
  return (
    <>
        <header className={styles.header}>
            <h1>Book App</h1>
            <p><a href="https://github.com/MojtabaNabid/book-app">My GitHub</a> | Mojtaba Nabid (Nik)</p>
        </header>

        {children}

        <footer className={styles.footer}>
            <p>Developed by Nik 🧑🏾‍💻</p>
        </footer>
    </>
  )
}

export default Layout
