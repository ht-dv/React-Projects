import React, { useState } from "react"; //* 1. Burada useState hookunu import ettik */
import { Button } from "react-bootstrap";

const State = () => {
  //* 2. useState tanimlanmali
  //* parametrelerden ilki (count) degeri saklar, ikincisi ise (setSayac) degeri degistiren methoddur. Esitlikten sonra useState () parantezi icine de baslangic degerini yaziyoruz
  const [count, setCount] = useState(0);

  const artir = () => {
    setCount(count + 1);
  };
  //*3.Burada fonksiyon tanimladik, count'u artirmak icin. Bu sekilde methodun icinde artirabiliyoruz ancak degeri

  //! state yerine normal bir degisken ile yapilabilir mi?
  //   var count = 0;
  //   const artir = () => {
  //     count = count + 1;
  //     console.log(count);
  //   };
  //! Bu ustteki yontemle biz butona bastikca log yazdirir ama altta return render edilmez, bu yuzden h1 icindeki sayac gostergesinde degisiklik olmaz hep 0 kalir. Bu sebeple state yontemi kullanmaliyiz

  return (
    <div>
      <h1>Sayac degeri: {count}</h1>
      {/* Asagida butona tiklandikca sayac degeri artacak onClick ile bunu sagladik */}
      <Button variant="info" onClick={artir}>
        Artir
      </Button>
    </div>
  );
};

export default State;
