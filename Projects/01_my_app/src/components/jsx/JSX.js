const JSX = () => {
  //*burası javascript kodlari yazabilecegimiz bolum
  const ad = "Devrim";

  const kullanici = {
    ad: "Devrim",
    soyad: "Yakin",
    email: "devrim@yakin.com",
    telefon: "555555555",
  };

  return (
    //*bu divleri span icerisine alip yazsak da hata vermez, ama inline eleman icinde block eleman kullanmak cok desteklenmiyor
    <div>
      Merhaba {kullanici.ad} {kullanici.soyad}
      <div>Eposta: {kullanici.email}</div>
    </div>
  );
};
export default JSX;
