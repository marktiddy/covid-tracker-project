import React from "react";
import "./App.css";

//import components
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";

//import API
import { fetchData } from "./api";

class App extends React.Component {
  //Set some state
  state = {
    data: {},
  };

  async componentDidMount() {
    const { data } = await fetchData();
    this.setState({ data: data });
  }

  render() {
    const data = this.state.data;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
