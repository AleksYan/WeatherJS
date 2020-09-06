class Storage {
    constructor() {
        this.city;
        this.defaultcity = 'Kyiv';
    }

    getLocationData(){
        if(localStorage.getItem('city') === null ){
            this.city = this.defaultcity;
        } else {
            this.city = localStorage.getItem('city');
        }

        return {
            city: this.city
        }
    }

    setLocationData(city){
        localStorage.setItem('city',city);
    }
}