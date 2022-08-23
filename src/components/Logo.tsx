import { Link } from "react-router-dom";
import "../components/styles/logo.css";

export function Logo() {
  return (
    <div className="logo-container">
      <Link to="/">
        <p>
          <span className="logo-1">Github </span>
          <span className="logo-2">Jobs</span>
        </p>
      </Link>
    </div>
  );
}
