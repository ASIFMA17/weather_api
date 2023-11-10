function city_Name() {

    let cityName = document.getElementById("cityName").value;
    // console.log(cityName);
    

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f7de36557f1a73aadd17a57bdcb22000&units=metric`)
        .then((res) => res.json())
        .then((data) => display_Details(data))
        .catch((err) => console.log(err))
}

function display_Details(data){
    // console.log(data);


    let temp = data.main.temp ;
    // console.log(temp);
    let cityName = data.name ;
    // console.log(cityName);
    let humidity = data.main.humidity ;
    // console.log(humidity);
    let wind = data.wind.speed ;
    // console.log(wind);

    const weatherIcon = document.querySelector(".weatherIcon");

    if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "image/OG-2.png" ;
    }else if (data.weather[0].main === "Clear"){
        weatherIcon.src = "image/OG-1.png"
    }else if (data.weather[0].main === "Rain"){
        weatherIcon.src = "image/OG-6.png"
    }else if (data.weather[0].main === "Drizzle"){
        weatherIcon.src = "image/OG-3.png"
    }else if (data.weather[0].main === "Mist"){
        weatherIcon.src = "image/OG-5.png"
    }else if (data.weather[0].main === "Snow"){
        weatherIcon.src = "image/OG-7.png"
    }

    document.querySelector(".temp").innerHTML = Math.round(temp) + "°C" ;
    document.querySelector(".city").innerHTML = cityName ;
    document.querySelector(".humidity").innerHTML = humidity + "%" ;
    document.querySelector(".wind").innerHTML = Math.round(wind) + " km/h" ;

    
}