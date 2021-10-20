import "./clock2.css";
import moment from "moment"; //**momentjs diye harici bir library, istedigimiz formatta bize tarih saat yazdiriyor */

//*moment anlık saat tarih almamıza yarıyor*/
const Clock2 = (props) => {
  const dateTime = moment(); //**moment'i sabitledik dateTime ile cagircaz artik */
  const timeStr = dateTime.format("HH:mm");
  const dateStr = dateTime.format("LL");
  const dayStr = dateTime.format("dddd");
  const hour = dateTime.format("HH");
  let dayTime = "";
  if (hour > 6 && hour < 12) dayTime = "Morning";
  else if (hour < 17) dayTime = "Afternoon";
  else if (hour < 24) dayTime = "Evening";
  else dayTime = "Night";

  return (
    <div
      className="clock-container"
      style={{ color: props.yaziRengi, backgroundColor: props.zeminRengi }}
    >
      <div className="clock">{timeStr}</div>
      <div>
        <div className="date">{dateStr}</div>
        <div className="day">
          {dayStr} {dayTime}
        </div>
      </div>
    </div>
  );
};
export default Clock2;
