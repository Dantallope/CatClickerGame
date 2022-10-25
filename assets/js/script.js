const windowEl = {
    init: () => {

    },


    fetchWeather: (ev) => {
        let lat = '38.84';
        let lon = '-104.82';
        let key = '890c3bde92eb251b023ba65f63eb1c36';
        let url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + key + '&units=metric&lang=en';
        console.log(url);
        fetch(url)
            .then(resp => {
                if (!resp.ok) throw new Error(resp.statusText);
                return resp.json();
            })
            .then(data => {
                windowEl.showWeather(data.weather[0].description);
            })
            .catch(console.err);
    },
    getLocation: (ev) => {
        let opts = {
            enableHighAccuracy: true,
            timeout:1000 * 10,
            maximumAge: 1000 * 60 * 5,
        };
        navigator.geolocation.getCurrentPosition(windowEl.ftw, windowEl.wtf, opts)
    },
    ftw: (position) => {
        lat = position.coords.laitude.toFixed(2);
        lon = position.coords.longitude.toFixed(2);
    },

    showWeather: (resp) => {
        var h2El = document.getElementById('window');
        h2El.textContent = resp
        console.log(resp);

    },

};
windowEl.init();
windowEl.fetchWeather();