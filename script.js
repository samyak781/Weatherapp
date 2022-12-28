let weather= {
    "apiKey": "<your api key!>",
    
    fetchweather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayweather(data));
        
    },

    displayweather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed)
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org./img/wn/"+icon+".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".wind").innerText = "Wind Speed: "+speed+" Km/h";
        document.querySelector(".humidity").innerText = "Humidity: "+humidity+"%";
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function(){
        this.fetchweather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("Enter",function(){
    weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup",function(event) {
    if(event.key=="Enter") {
        weather.search();
    }
});

weather.fetchweather("Jaipur");
