async function fetchCity() {
    let city;

const url = "http://api.weatherapi.com/v1/current.json?key=ca7685f4ad1240139bd154225240607&q=Ankara&aqi=no";

await fetch(url)
    .then(response =>{
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("error");
        }
    })
    .then(data => {
        city = {
            location: data.location.name + ", Turkey ",
            temperature: data.current.temp_c + "°C " 
        }
        return city;
    })
    
    
    const temperature = document.querySelector("#temperature"); 
    const ankara = document.querySelector("#city");

    temperature.innerHTML=city.temperature;
    ankara.innerHTML=city.location;

} 

fetchCity();





    