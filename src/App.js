import "./App.css";
import About from "./Component/About/About";
import Hero from "./Component/Hero/Hero";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blog from "./Component/Blog/Blog";
import Notfound from "./Component/NotFoundPage/Notfound";

import Header from "./Component/Header/Header";
import Cursur from "./Component/Cursur/Cursur";

function App() {
  return (
    <Router>
      <Cursur />
      <Navbar style={{ zIndex: 11 }}></Navbar>
      <Header />

      <Switch>
        <Route exact path="/">
          <Hero />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>

        <Route path="*">
          <Notfound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
