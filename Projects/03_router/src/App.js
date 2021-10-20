import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/shared/Header";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Menu />
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/">
          {/* Buradaki slash hepsini yakaldığı icin yukaridakleri engellemesin diye bunu en sona alıyoruz */}
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
