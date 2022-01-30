import "./App.css";
import About from "./Component/About/About";
import Hero from "./Component/Hero/Hero";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blog from "./Component/Blog/Blog";
import Notfound from "./Component/NotFoundPage/Notfound";
import AnimatedCursor from "react-animated-cursor";
import Header from "./Component/Header/Header";

function App() {
  return (
    <Router>
      <AnimatedCursor
        innerSize={10}
        outerSize={15}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        trailingSpeed={10}
        style={{ zIndex: 9999999999 }}
      />
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
