import Home from "./components/home";
import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import About from "./components/about";
import Contact from "./components/contact";
import Post from "./components/post";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
class App extends Component {
  // state = {
  //   counters: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 1 }]
  // };
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </Router>
    );
  }
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDelete = counter => {
    const counters = this.state.counters.filter(c => c.id !== counter);
    this.setState({ counters });
  };
}
export default App;
