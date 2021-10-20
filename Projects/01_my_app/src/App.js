import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Hello from "./components/hello/Hello";
import Test from "./components/test/Test";
import JSX from "./components/jsx/JSX";
import InlineStyle from "./components/style/InlineStyle";
import InternalStyle from "./components/style/InternalStyle";
import ExternalStyle from "./components/style/ExternalStyle";
import Clock1 from "./components/clock1/Clock1";
import Props from "./components/props/Props";
import Clock2 from "./components/clock2/Clock2";
import Profile from "./components/profile/Profile";
import Image from "./components/image/Image";
import BSClassic from "./components/bootstrap-classic/BSClassic";
import BSReact from "./components/bootstrap-react/BSReact";
import Shop from "./components/shop/Shop";
import State from "./components/state/State";
import Counter from "./components/counter/Counter";
import BornToday from "./components/bornToday/BornToday";
import Clock3 from "./components/clock3/Clock3";
import ChangeTitle from "./components/useeffect/ChangeTitle";
import UserCards from "./components/usercards/UserCards";
import Countries from "./components/countries/Countries";
import Posts from "./components/posts/Posts";
import RandomImages from "./components/randomImages/RandomImages";
import Form1 from "./components/forms/Form1";
import Form2 from "./components/forms/Form2";
import Form3 from "./components/forms/Form3";
import Form4 from "./components/forms/Form4";
import Header from "./components/shared/Header";
import Menu from "./components/shared/Menu";
import HomePage from "./pages/HomePage";
import BornTodayPage from "./pages/BornTodayPage";
import BSClassicPage from "./pages/BSClassicPage";
import ToDoAppPage from "./pages/ToDoAppPage";
import { StoreContext } from "./store";
import axios from "axios";
import ExchangePage from "./pages/ExchangePage";

function App() {
  const [kurlar, setKurlar] = useState({});

  useEffect(() => {
    axios("https://api.frankfurter.app/latest?from=try").then((resp) => {
      console.log(resp.data);
      setKurlar(resp.data.rates);
    });
  }, []);

  const avatarUrl =
    "https://images.unsplash.com/photo-1470163395405-d2b80e7450ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80";
  return (
    <StoreContext.Provider value={{ kurlar }}>
      {/* Bu kurlara artık her yerden ulasilir hale geldi */}
      <Router>
        {/*<div className="App">Merhaba Dünya(App)</div>
       <Hello />
      <Test />
      <JSX />
      <InlineStyle />
      <InternalStyle />
      <ExternalStyle />
      <Clock1 /> 
      <Props ad="Faruk" soyad="T" />
      <Props ad="Ali" soyad="E" />
      <Props ad="Ayse" soyad="P" />
      <Props ad="Hakan" soyad="D" />
      <Clock2 yaziRengi="rgb(81, 207, 238)" zeminRengi="black" />
      <Clock2 yaziRengi="white" zeminRengi="purple" />
      <Clock2 yaziRengi="orange" zeminRengi="navy" />
      

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Profile
          avatar={avatarUrl}
          name="Grace Boyle"
          location="Berlin, Germany"
          shot="57"
          followers="124"
          following="43"
        />
        <Profile
          avatar="https://images.unsplash.com/photo-1550985607-b636cef44ec4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=535&q=80"
          name="Moon Light"
          location="London, England"
          shot="10"
          followers="234"
          following="45"
        />
      </div>
     
      <Image />
      <BSClassic />
      <BSReact />       
      <Shop />
      <State />
      <Counter />
      <BornToday />
      <Clock3 />
      <ChangeTitle />
      <UserCards />
      <Countries />
      <Posts />
      <RandomImages />
      <Form1 />
      <Form2 />
      
      <Form3 />
      
      <Form4 />
      */}

        <Header />
        <Container>
          <Row>
            <Col md={4}>
              <Menu />
            </Col>
            <Col md={8}>
              <Switch>
                <Route path="/borntoday">
                  <BornTodayPage />
                </Route>
                <Route path="/bs-classic">
                  <BSClassicPage />
                </Route>
                <Route path="/todoapp">
                  <ToDoAppPage />
                </Route>
                <Route path="/exchange">
                  <ExchangePage />
                </Route>
                <Route path="/">
                  <HomePage />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    </StoreContext.Provider>
  );
}

export default App;
