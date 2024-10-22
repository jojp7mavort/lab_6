//Consumo de API
let lk = async () => {
    try {
        const clima = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=-0.038823&lon=-78.982557&appid=325e170126e812ae5378d0f369507692");
        let resultado = await clima.json();
        
        let objeto = {
            name: resultado.name,
            pais: resultado.sys.country
        };

        guardar(objeto);

    } catch (error) {
        console.log("Error al obtener datos:", error);
    }
}

function guardar(data) {
    localStorage.setItem("Clima", JSON.stringify(data));
}
