// import React from "react";
import { DatePicker } from "antd";
import { useState } from "react";

export default function Calendar() {
  const [dateString, SetDateString] = useState("");
  const onChange = (date, dateString) => {
    SetDateString(dateString);
  };

  return (
    <div>
      <DatePicker onChange={onChange} />
      <br />
      {dateString}
      <br />
      {dateString && dateString.slice(5, 7)}
    </div>
  );
}
