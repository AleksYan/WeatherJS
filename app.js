const storage = new Storage();
//get stored location
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city);
const ui = new UI();

//get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    console.log(city);

    weather.changeLocation(city);

    //save in LS
    storage.setLocationData(city);

    //get and disp weather
    getWeather();

    //close model
    $('#locModal').modal('hide');
})


function getWeather() {
    weather.getWeather()
        .then(res => {
            console.log(res)
            ui.paint(res);
         })
        .catch(err => console.log(err));
}