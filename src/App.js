import "./App.css";
import About from "./Component/About/About";
import Hero from "./Component/Hero/Hero";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blog from "./Component/Blog/Blog";
import Notfound from "./Component/NotFoundPage/Notfound";

import Header from "./Component/Header/Header";
import Cursur from "./Component/Cursur/Cursur";
import WhatWeDo from "./Component/WhatWeDo/WhatWeDo";
import Footer from "./Component/Footer/Footer";
import Pro from "./Component/Pro/Pro";
import Compare from "./Component/Compare/Compare";
import Contact from "./Component/Contact/Contact";

function App() {
  return (
    <Router>
      {/* <Cursur /> */}
      <Navbar style={{ zIndex: 11 }}></Navbar>
      <Header />

      <Switch>
        <Route exact path="/">
          <Hero />
          <WhatWeDo />
          <Compare />
        </Route>
        <Route exact path="/about">
          <About />
          <Pro />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <Notfound />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
