import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { IDay } from "src/component/DayList";

export default function CreateWord() {
  const [isLoading, setIsLoading] = useState(false);
  const days: IDay[] = useFetch(`http://localhost:3001/days`);
  const history = useNavigate();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!isLoading && dayRef.current && engRef.current && korRef.current) {
      setIsLoading(true);
      const day = dayRef.current.value;
      const eng = engRef.current.value;
      const kor = korRef.current.value;

      fetch(`http://localhost:3001/words/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          day: day,
          eng: eng,
          kor: kor,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("Create is complete");
          history(`/day/${day}`);
          setIsLoading(false);
        }
      });
    }
  }

  const engRef = useRef<HTMLInputElement>(null);
  const korRef = useRef<HTMLInputElement>(null);
  const dayRef = useRef<HTMLSelectElement>(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef} />
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="컴퓨터" ref={korRef} />
      </div>
      <div className="input_area">
        <select ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
        <button style={{ opacity: isLoading ? 0.3 : 1 }}>
          {isLoading ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  );
}
