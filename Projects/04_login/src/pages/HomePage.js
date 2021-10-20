import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StoreContext } from "../store";

const HomePage = () => {
  const context = useContext(StoreContext);
  const { isUserLoggedin, user, setUser } = context;

  const logout = () => {
    setUser({});
  };

  return (
    <div className="text-center mt-5">
      <h1>Hoş geldin {user.firstname}</h1>
      {isUserLoggedin() ? (
        <Button variant="danger" onClick={logout}>
          Çıkış Yap
        </Button>
      ) : (
        <Button variant="success" as={Link} to="/login">
          Giriş Yap
        </Button>
      )}
    </div>
  );
};

export default HomePage;
