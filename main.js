
let arrayOfData;

//Let the user type in a prefered city and unit of measurement to be appended to the url of api
let city = localStorage.getItem('city')
const getCity = () => {
    city = document.getElementById('searchCity').value
    localStorage.setItem('city',city)
    const p = document.getElementById('display')
    p.innerHTML = city;
}

const returnData = () => {
    getCity()
fetch('https://api.openweathermap.org/data/2.5/weather?q=' +city+'&units=imperial&APPID=' + APPID)
 .then(res => res.json())
 .then(data => {
    arrayOfData = data;
    console.log('response:', data)

})
}
//units imperial will giv



// const returnData = () => {
//     $.getJson('https://api.openweathermap.org/data/2.5/weather?' + city +'&APPID=89bb67df08a2f3e6a96e53484658486c', function(apiRes){
//         document.write(apiRes.weather.main)
//     });

// }

//Problems:
//My code doesnt work on first display click but if i press it again then it shows the data





//Questions:
// Whats the difference between localstorage and sessionstorage
//How do you hide the api key again?
//Fetch and GET are the same? Are we messing with JQuery in this course?

