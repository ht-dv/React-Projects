import React, { useState } from "react";
import { StoreContext } from "./store/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  const [user, setUser] = useState({});

  const isUserLoggedin = () => {
    return Object.keys(user).length > 0;
  };

  return (
    <StoreContext.Provider value={{ user, setUser, isUserLoggedin }}>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </StoreContext.Provider>
  );
};

export default App;
