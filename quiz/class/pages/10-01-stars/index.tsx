import { useState } from "react";
import { Rate } from "antd";
export default function StarRate() {
  const desc = ["1점", "2점", "3점", "4점", "5점"];
  const [value, setValue] = useState(5);

  const handleChange = (value) => {
    setValue(value);
  };
  return (
    <div>
      <Rate tooltips={desc} onChange={handleChange} value={value} />
      <br />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""}
    </div>
  );
}
