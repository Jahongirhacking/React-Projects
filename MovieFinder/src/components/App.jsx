import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import "./App.css";
import Footer from "./Footer/Footer";

const API_URL = "http://www.omdbapi.com/?apikey=3181e1b1";
const SEARCH_PARAM = "s=";
// const PAGE_PARAM = "page=";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searched: "Puss in boots"
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ searched: event.target.value });
  }

  onSubmit(event) {
    this.fetchingProcess(this.state.searched);
    event.preventDefault();
  }

  /**
   * Fetch and Set
   * @param {*} res 
   */
  settingProcess(res) {
    this.setState({ data: res.Search });
  }

  fetchingProcess(searched) {
    const url = `${API_URL}&${SEARCH_PARAM}${searched.toLowerCase()}`;
    fetch(url)
      .then((response) => response.json())
      .then((result) => this.settingProcess(result));
  }

  componentDidMount() {
    this.fetchingProcess(this.state.searched);
  }

  // 53fe3f72

  render() {
    return (
      <div className="container">
        <Navbar 
          searched={this.state.searched} 
          onChange={this.onChange}
          onSubmit={this.onSubmit} 
        />
        <Main
          data={this.state.data} 
        />
        <Footer />
      </div>
    );
  }
}

export default App;
