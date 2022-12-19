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
fetch('https://api.openweathermap.org/data/2.5/weather?zip=' +city+'&units=imperial&APPID=' + APPID)
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
    })
    .then(function displayForecast() {
    arrayOfForecast.list.map((user,i) => {   
    //Ul that will contain each li(forecast timestamp)
        const fcParentUl = document.getElementById('forecast-list');
    //Creating li and setting its id to each individual forecast time stamp
        const fcId = user.weather[0].id
        const fcli = document.createElement('li');
            fcli.setAttribute('id', fcId)
    //Creating img and grabbing the icon from data
        const fcimg = document.createElement('img')
            fcimg.src = 'http://openweathermap.org/img/wn/' + user.weather[0].icon + '.png';
    //HTML break element
        // const br = document.createElement('br')
        

        // li = document.createElement
        let grabFcWeatherConditon = user.weather[0].main;
            // console.log('grabFcWeatherConditon:',grabFcWeatherConditon)
        //Forecasted Weather Temp
            let grabFcWeatherTemp = Math.floor(user.main.temp);
            // console.log('grabFcWeatherTemp:',grabFcWeatherTemp)
        //Grab each date property from the data
            let grabFcDateofForecast = user.dt_txt
            // console.log('grabFcDateofForecast:', grabFcDateofForecast)
        //The content
            let fcContent = `${grabFcDateofForecast}: 
            Weather condition:  ${grabFcWeatherConditon} 
            Temp:${grabFcWeatherTemp}`
        // 
        // arrayOfForecast.list.map((user,i) => {
        // //Grabbing each individual forecast time stamp by the id we assigned each li from the data
        //     const currentLi = document.getElementById(fcId)
        //     currentLi.appendChild(fcParentUl)
        // })
        fcli.innerHTML = fcContent
        fcParentUl.appendChild(fcli);
        fcParentUl.appendChild(fcimg)
        })
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