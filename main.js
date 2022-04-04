const cityField = document.getElementById("city-field").value;
const countryField = document.getElementById("country-field").value;
const btn = document.getElementById("btn");
const city = document.getElementById("city");
const country = document.getElementById("country");
const humdility = document.getElementById("humdility");
const temperature = document.getElementById("temperature");
const weather = document.getElementById("weather");

const API_KEY = "7d217e9f5cc2a26295b95b69d52e2906";

const apiRequest = `https://api.openweathermap.org/data/2.5/weather?q=${cityField},${countryField}&appid=${API_KEY}&units=metric`;

btn.addEventListener("click", () => {
   fetch 
   (apiRequest)
   .then((res) => res.json())
   .then((data) => console.log(data));
 });


 