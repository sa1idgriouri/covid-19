import React, { Component } from 'react'

import { Card, Chart, CountryPiker } from "./compenents"
import image from './images/image.png';

import style from "./App.module.css"
import { fetchData } from "./api"
class App extends Component {
  state = {
    data: [],
    country: '',
  }
  async componentDidMount() {


    const data = await fetchData()

    this.setState({ data: data })

  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={style.container}>
        <img className={style.image} src={image} alt="COVID-19" />
        <Card data={data} />
        <CountryPiker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />

      </div>
    )
  }
}

export default App
