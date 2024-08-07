import { useState, useEffect } from "react";
import { ReactComponent as Left } from "../../../../assets/svg/left-circle-svgrepo-com (1).svg";
import { ReactComponent as Right } from "../../../../assets/svg/right-circle-svgrepo-com.svg";

import "./Calendar.css";
const Calender = ({ calValue }) => {
  const [moment, setMoment] = useState([]);
  const [calender, setCalender] = useState([]);
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let cal = [];

  useEffect(() => {
    const d = new Date();
    const day =
      days[d.getMonth()] +
      (d.getMonth() == 2 ? (d.getFullYear() % 4 == 0 ? 1 : 0) : 0);

    setMoment([
      ...[
        d.getMonth() + 1,
        d.getFullYear(),
        day,
        d.toLocaleString("default", { month: "long" }),
      ],
    ]);

    for (let i = 1; i <= day; i++) {
      cal.push(i);
    }
    setCalender([...cal]);
  }, []);

  const handleMomentChange = (a) => {
    let month = moment[0];
    let year = moment[1];

    if (a == "backward") {
      if (month == 1) {
        month = 12;
        year--;
      } else month--;
    }

    if (a == "forward") {
      if (month == 12) {
        month = 1;
        year++;
      } else month++;
    }
    const monthName = new Date(year, month - 1, 1);

    const day = days[month - 1] + (month == 2 ? (year % 4 == 0 ? 1 : 0) : 0);

    setMoment([
      ...[
        month,
        year,
        day,
        monthName.toLocaleString("default", { month: "long" }),
      ],
    ]);
    cal = [];
    for (let i = 1; i <= day; i++) {
      cal.push(i);
    }
    setCalender([...cal]);
  };

  return (
    <div className="calendar">
      <div>Calendar</div>
      <div className="momentDetail">
        <span>{moment[3]}</span>
        <span>{moment[1]}</span>
      </div>

      <div className="calendarCont">
        <span
          onClick={() => {
            handleMomentChange("backward");
          }}
        >
          <Left></Left>
        </span>
        <div className="calendarDate">
          {calender.map((a) => (
            <div onClick={calValue} value={a} key={a}>
              {" "}
              {a}
            </div>
          ))}
        </div>
        <span
          onClick={() => {
            handleMomentChange("forward");
          }}
        >
          <Right></Right>
        </span>
      </div>
    </div>
  );
};

export default Calender;
