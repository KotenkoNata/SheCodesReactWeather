import React from "react";

const FormattedDate = (props) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const month = months[props.date.getMonth()];
  const date = props.date.getDate();
  const year = props.date.getFullYear();
  const weekDay = weekDays[props.date.getDay()]

  return(
    <p className="date" id="date">{`${month} ${date}-${year} - ${weekDay}`}</p>
  )
}

export default FormattedDate;