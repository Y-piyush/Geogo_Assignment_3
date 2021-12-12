const button1=document.querySelector("#piyush");
var inputEl=document.querySelector("#input");
var namee=document.getElementById("city_name");
var temp=document.getElementById("temp");
//var wind=document.getElementById("wind");
//var hum=document.getElementById("hum");
var wind2=document.getElementById("wind2");
var hum2=document.getElementById("hum2");
var sky=document.getElementById("sky");
console.log("hello");
// if(button){
button1.addEventListener('click',function(){
    const city = inputEl.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=acbbab8031b844c9baa661e7d5e44001&units=metric`)
.then(response => response.json()).then(data=>{
    var name_value=data.name;
    namee.innerHTML=name_value;
    var temp_value=data.main.temp;
    temp.innerHTML=temp_value;
    var wind_value=data.wind.speed;
   // wind.innerHTML=wind_value;
    wind2.innerHTML=wind_value;
    var hum_value=data.main.humidity;
   // hum.innerHTML=hum_value;
    hum2.innerHTML=hum_value;
    var sky_value=data.weather[0].description;
    sky.innerHTML=sky_value;
})
.catch(err => {
	console.error(err);
})
})
   

