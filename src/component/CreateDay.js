import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateDay() {
  const days = useFetch(`http://localhost:3001/days`);
  const history = useNavigate();
  function addDay() {
    fetch(`http://localhost:3001/days/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("Create is complete");
        history(`/`);
      }
    });
  }
  return (
    <div>
      <h3>Current days : {days.length} day</h3>
      <button onClick={addDay}>Add day</button>
    </div>
  );
}
