import { Link } from "react-router-dom";

export default function EmptyPage() {
  return (
    <>
      <h2>Not found.</h2>
      <Link to="/">Back to home.</Link>
    </>
  );
}
