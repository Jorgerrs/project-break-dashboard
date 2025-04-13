const apikey ="0971dc36d1a9411cb4a110054250604";
const urlBase = "https://api.weatherapi.com/v1";

async function obtenerClima(ciudad) {
    try {
        const response = await fetch(`${urlBase}/forecast.json?key=${apikey}&q=${ciudad}&days=1&lang=es`);
        const data = await response.json();

        mostrarClimaActual(data);
        mostrarPrevisionPorHoras(data);
    }   catch (error) {
        console.error("Error al obtener los datos del clima:", error);
    }
}

function mostrarClimaActual(data) {
    const location = data.location;
    const current = data.current;

    document.getElementById("city").textContent = `${location.name}, ${location.country}`;
    document.getElementById("condition").textContent = current.condition.text;
    document.getElementById("temp").textContent = current.temp_c;
    document.getElementById("humidity").textContent = current.humidity;
    document.getElementById("wind").textContent = current.wind_kph;
}


function mostrarPrevisionPorHoras(data) {
    const forecastList = document.getElementById("forecast-list");
    forecastList.innerHTML = "";

    data.forecast.forecastday[0].hour.forEach(hourData => {
        const hour = new Date(hourData.time).getHours();
        const div = document.createElement("div");
        div.innerHTML = `
            <p><strong>Hora:</strong> ${hour}:00</p>
            <p><strong>Clima:</strong> ${hourData.condition.text}</p>
            <p><strong>Temperatura:</strong> ${hourData.temp_c} °C</p>
            <img src="${hourData.condition.icon}" alt="${hourData.condition.text}">
        `;
        forecastList.appendChild(div);
    });
}
obtenerClima("Madrid");