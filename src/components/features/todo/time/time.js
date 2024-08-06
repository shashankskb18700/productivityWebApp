import "./time.css";

const Time = () => {
  let arr = [];

  for (let i = 0; i <= 23; i++) {
    arr.push(i);
  }
  return (
    <div className="time">
      <div>Time</div>
      <div className="timeCont">
        {arr.map((a) => (
          <div key={a}>
            {a < 10 ? 0 : ""}
            {a}:00
          </div>
        ))}
      </div>
    </div>
  );
};

export default Time;
