import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/">TOEIC vocabulary</Link>
      </h1>
      <div className="menu">
        <a href="#x" className="link">
          add voca
        </a>
        <a href="#x" className="link">
          add day
        </a>
      </div>
    </div>
  );
}
