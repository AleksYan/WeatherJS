class Weather {
    constructor(city){
        this.apiKey = 'a895d62be5e3494e9be92bc28f4ae195';
        this.city = city;
    }

    //fetch from API
    async getWeather(){
        const response  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=a895d62be5e3494e9be92bc28f4ae195&units=metric`);

        const responseData = await response.json();

        return responseData;
    }

    //change weathre location
    changeLocation(city){
        this.city = city;
    }
}