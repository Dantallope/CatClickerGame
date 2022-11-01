const windowEl = {
    init: () => {

        document
            .getElementById('getLocationLink')
            .addEventListener('click', windowEl.getLocation);
    },


    fetchWeather: (position) => {
        let lat = String(position.coords.latitude);
        let lon = String(position.coords.longitude);

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

            timeout: 1000 * 10,
            maximumAge: 1000 * 60 * 5,
        };
        navigator.geolocation.getCurrentPosition(windowEl.fetchWeather, windowEl.oops)
    },
    ftw: (position) => {
        // let lat =(position.coords.latitude);
        // let lon =(position.coords.longitude);
        // console.log(lat);
        // console.log(lon);

        windowEl.fetchWeather(position);
    },
    oops: () => {
        console.log("Oops");
    },

    showWeather: (resp) => {
        var imgWeather = document.getElementById('imgWeather');

        if (resp == 'few clouds'||resp == 'broken clouds' || resp == 'scattered clouds') {
            imgWeather.src = './assets/images/weather images/window partly cloudy.png';
        } else if (resp == 'clear sky') {
            imgWeather.src = './assets/images/weather images/window summer weather.png';
        } else if (resp === 'overcast clouds') {
            imgWeather.src = './assets/images/weather images/window fall weather.png';
        } else if (resp === 'light rain' ||resp ==  'moderate rain' ||resp ==  'heavy intensity rain' ||resp ==  'very heavy rain' ||resp ==  'extreme rain' ||resp ==  'freezing rain' ||resp ==  'light intensity shower rain' ||resp ==  'shower rain' ||resp ==  'heavy intensity shower rain' ||resp ==  'ragged shower rain'){
            imgWeather.src = './assets/images/weather images/window rainy.png';
        }else if (resp === 'light snow' ||resp === 'Snow' ||resp === 'Heavy snow' ||resp === 'Sleet' ||resp === 'Light shower sleet' ||resp === 'Shower sleet' ||resp === 'Light rain and snow' ||resp === 'Rain and snow' ||resp === 'Light shower snow' ||resp === 'Shower snow' ||resp === 'Heavy shower snow'){
            imgWeather.src = './assets/images/weather images/window winter weather.png';
        }


        console.log(resp);

    },

};
windowEl.init();

