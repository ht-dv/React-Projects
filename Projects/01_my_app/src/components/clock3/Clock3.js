import React, { useState, useEffect } from "react";
import "./clock3.css";
import moment from "moment"; //**momentjs diye harici bir library, istedigimiz formatta bize tarih saat yazdiriyor */

//*moment anlık saat tarih almamıza yarıyor*/
const Clock3 = (props) => {
  const [dateTime, setDateTime] = useState(moment());

  const timeStr = dateTime.format("HH:mm");
  const dateStr = dateTime.format("LL");
  const dayStr = dateTime.format("dddd");
  const hour = dateTime.format("HH");
  const min = dateTime.format("mm");
  const sec = dateTime.format("ss");

  let dayTime = "";
  if (hour > 6 && hour < 12) dayTime = "Morning";
  else if (hour < 17) dayTime = "Afternoon";
  else if (hour < 24) dayTime = "Evening";
  else dayTime = "Night";

  /* setInterval(() => {
    setDateTime(moment());
  }, 1000); Burada normal consolelog yapsak onu normal yazar
  . Ama burada state degeri degistiriyoruz, surekli render ediyor 
    surekli state degisiyor ve setIntervallarin sayisi artiyor. 
    Boyle olunca her renderda kendini cogaltan hafızayı dolduran bir yapiya donduruyor.
    Bunu onlemenin yolu her render yerine ilk renderda calistirmak onu da useEffect ile yapacagiz*/

  useEffect(() => {
    //*Bu kisim ilk renderda calisir
    const sayac = setInterval(() => {
      console.log("deneme");
      setDateTime(moment());
    }, 1000);
    //*Bu alttaki return kismi ise unmount islemi sirasinda calisir
    return () => {
      clearInterval(sayac); //* bu da intervali durdurmak icin
    };
  }, []);
  return (
    <div
      className="clock-container"
      style={{ color: props.yaziRengi, backgroundColor: props.zeminRengi }}
    >
      <div className="clock">
        {hour}
        {sec % 2 == 0 ? ":" : " "}
        {min}
      </div>
      <div>
        <div className="date">{dateStr}</div>
        <div className="day">
          {dayStr} {dayTime}
        </div>
      </div>
    </div>
  );
};
export default Clock3;
