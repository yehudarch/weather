async function getTemp() {
    cities = ['london', 'jerusalem', 'dubai']
    for (let i = 0; i < cities.length; i++) {
        city = cities[i];
        url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=34c9128a8bacf38eaac5ffe8a60f81f9';
        const res = await fetch(url);
        const resJ = await res.json();
        temp = Math.round(Number(resJ.main.temp) - 273.15)
        document.getElementById(`${city}_temp`).innerHTML = temp;

    }
}
async function getTempByCity(city) {
    city = document.getElementById("city_id").value;
    url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=34c9128a8bacf38eaac5ffe8a60f81f9';
    const res = await fetch(url);
    const resJ = await res.json();
    temp = Math.round(Number(resJ.main.temp) - 273.15)
    document.getElementById('selectedCityID').innerHTML = temp;
    document.getElementById('cityName').innerHTML = city;

}
