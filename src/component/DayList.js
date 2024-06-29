import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() {
  const days = useFetch(`http://localhost:3001/days`);
  console.log(`c.log ## days.length ##`, days.length);

  if (days.length === 0) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <ul className="list_day">
        {days.map((day) => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
