import React from "react"
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"


const API_KEY = "f543b89a5013636d1485802347cae1bc"
class App extends React.Component{

  state = {

    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if(city && country){
      console.log(data);
    this.setState({
      temperature : data.main.temp,
      city : data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: "",

    }
    )}

  }


  render(){
    return (

      <div>
        <Titles />
        


        <Form getWeather={this.getWeather}/>


        <Weather 
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        temperature={this.state.temperature}
        description={this.state.description}
        error ={this.state.error}
        
        
        />


      </div>

    );
  }

}

export default App;