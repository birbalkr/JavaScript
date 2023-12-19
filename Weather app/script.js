const apikey="53c88e493bc6ada092db270d2cafbb73";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon")

async function checkWeather(city){
    const response =await fetch(apiurl + city +`&appid=${apikey}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";

    if (data.weather[0].main=="Clouds") {
        weathericon.src="images/clouds.png"
    }
    else if (data.weather[0].main=="Clear") {
        weathericon.src="images/Clear.png"
    }
    else if (data.weather[0].main=="Rain") {
        weathericon.src="images/rain.png"
    }
    else if (data.weather[0].main=="Drizzle") {
        weathericon.src="images/drizzle.png"
    }
    else if (data.weather[0].main=="Mist") {
        weathericon.src="images/mist.png"
    }
    document.querySelector(".weather").style.display="block";

}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
