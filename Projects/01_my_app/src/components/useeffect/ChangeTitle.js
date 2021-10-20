import React, { useState, useEffect } from "react";

const ChangeTitle = () => {
  const [sayac, setSayac] = useState(0);
  const artir = () => {
    setSayac(sayac + 1);
  };

  useEffect(() => {
    document.title = `${sayac} kere tiklandi`; //* bu bizim title'imizi degistirecek
  }, [sayac]); //* Sayac her guncellendiginde hook ici calisir

  return (
    <div>
      <h2>{sayac} kere tikladin</h2>
      <button onClick={artir}>Tikla</button>
    </div>
  );
};

export default ChangeTitle;
