import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/">TOEIC vocabulary</Link>
      </h1>
      <div className="menu">
        <Link to="/create_word" className="link">
          add voca
        </Link>
        <Link to="/create_day" className="link">
          add day
        </Link>
      </div>
    </div>
  );
}
