import Comp from "../comp/Comp";

//* Component olusturma: (ismi PascalCase olmalı, componenttan sonra export ediyoruz başka yerden import edilebilsin diye)
const Hello = () => {
  return (
    <div>
      Bu benim ilk componentim (Hello)
      <Comp />
    </div>
  );
};
export default Hello;
