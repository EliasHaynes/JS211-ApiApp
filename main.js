let arrayOfWeather;
let arrayOfForecast;
//Let the user type in a prefered city to be appended to the url of api
let city = localStorage.getItem('city')
const getCity = () => {
    city = document.getElementById('searchCity').value
    localStorage.setItem('city',city)
    const p = document.getElementById('display')
    p.innerHTML = city;
}

const returnWeather = () => {
    getCity()
fetch('https://api.openweathermap.org/data/2.5/weather?q=' +city+'&units=imperial&APPID=' + APPID)
 .then(res => res.json())
 .then(data => {
    arrayOfWeather = data;
    console.log('weather:', arrayOfWeather);
    //- Location Name

    //- Weather icon
    let iconNum = arrayOfWeather.weather[0].icon;
    const imgSrc = document.getElementById('icon');
    imgSrc.src = 'http://openweathermap.org/img/wn/' + iconNum + '.png';
    //- Weather Condition
    let grabWeatherConditon = arrayOfWeather.weather[0].main;
    const weatherConditon = document.getElementById('weather-condition')
    weatherConditon.innerHTML = grabWeatherConditon;
    //- Weather Temp
    let grabTemp = Math.floor(arrayOfWeather.main.temp);
    const weatherTemp = document.getElementById('weather-temp')
    weatherTemp.innerHTML = 'The temperature is ' + grabTemp + ' Fahrenheit.';
    //- Weather Temp: If temp is 32 Fah or lower than let user know it is freezing
            // if(grabTemp <= 32)
    //- If wind speed is above a certain speed that it can be of concern then let user know

    //- If humidity is above a certain percentage that its considered a humid day then let user know

})
}

const returnForecast = () => {
fetch('https://api.openweathermap.org/data/2.5/forecast?zip=' +city+'&units=imperial&APPID=' + APPID)
    .then(res => res.json())
    .then(data => {
        arrayOfForecast = data;
        console.log('forecast:', arrayOfForecast);

        //grab each date property from the data
        let arrayOfForecastDates = arrayOfForecast.list.map((obj,i) => obj = arrayOfForecast.list[i].dt_txt)
        console.log('Dates:', arrayOfForecastDates)

        //Forecasted Weather Condition
        let grabFcWeatherConditon = arrayOfForecast.list[0].weather[0].main;
        let displayFcCondition = document.getElementById('forecast-condition');
        displayFcCondition.innerHTML = grabFcWeatherConditon;
        console.log('Forecasted Weather Condition:', grabFcWeatherConditon);

        //Forecasted Weather Temp
        let grabFcWeatherTemp = Math.floor(arrayOfForecast.list[0].main.temp);
        let displayFcTemp = document.getElementById('forecast-temp');
        displayFcTemp.innerHTML = grabFcWeatherTemp;
        console.log('Forecasted Weather Temp', grabFcWeatherTemp);

        //Forecasted Icons
        // console.log('ICONS!!', arrayOfForecast.list[0].weather[0].icon)
        const fcImgSrc = document.getElementById('forecast-icon');
        const fcIconNum = arrayOfForecast.list.map((obj,i) => obj = arrayOfForecast.list[i].weather[0].icon)
        console.log('ICONS!', fcIconNum);
        
        fcImgSrc.src = 'http://openweathermap.org/img/wn/' + fcIconNum + '.png';
        






    })
}

const returnMap = () => {
fetch()
.then(res => res.json())
.then(data => {
    arrayOfMap = data;
    console.log('arrayOfMap:', arrayOfMap)
})
}





//Problems:






//Questions:
// Whats the difference between localstorage and sessionstorage
// How to hide api key in frontend applications
//Fetch and GET are the same? Are we messing with JQuery in this course?

