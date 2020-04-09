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
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data: data });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <h1>Covid-19 Tracker</h1>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
