import { useState } from "react";

export default function Word({ word }) {
  const [isShow, setIsShow] = useState(false);

  function toggleShow() {
    setIsShow((prev) => !prev);
  }

  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>{isShow ? "hide" : "mean"}</button>
        <button className="btn_del">delete</button>
      </td>
    </tr>
  );
}
