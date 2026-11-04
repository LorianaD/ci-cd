import "./Main.css";

function Main({ page, children }) {
    return (
        <main className={`main-content ${page}`}>
            { children }
        </main>
    )
}

export default Main