import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <main>
            <h1 className="not-found-header">404</h1>
            <div className="not-found-text-container">
                <h2 className="not-found-h2">Page not found.</h2>
                <Link className="body-link not-found-link" to="/">Return home</Link>
            </div>
        </main>
    )
}