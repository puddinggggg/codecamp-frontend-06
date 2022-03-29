// import "antd/dist/antd.css";
import { useState } from "react";
import { Rate } from "antd";
export default function LibraryStarPage() {
  const [value, setValue] = useState(5);

  const handleChange = (value: number) => {
    setValue(value);
  };

  return (
    <div>
      <Rate onChange={handleChange} value={value} />
    </div>
  );
}
