const changeLocation = document.getElementById('change-location')
const card = document.getElementById('card')
const details = document.getElementById('details')
const weatherIcon = document.getElementById('weather-icon')
const btn = document.getElementById('btn')

const updataUI = (weather) => {
    console.log(weather)
    details.innerHTML = `
    <h5 class="mb-3">${weather.name},  ${weather.sys.country}</h5>
    <p class="mb-3">${weather.weather[0].main}</p>
    <div class="display-4 mb-3" >
        <span>${Math.trunc(weather.main.temp)}</span>
        <span>&deg;C</span>
    </div>

    `

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }
}

btn && btn.addEventListener("click" , function(){
        card.style.display = 'none'
})

const getWeather = async (city)=>{
    const data = await getData(city)

return data
}

changeLocation && changeLocation.addEventListener('submit' , (e) =>{
    e.preventDefault()
    const cityName =  changeLocation.city.value.trim()
    changeLocation.reset()
    getWeather(cityName).then((data) => updataUI(data))
})

