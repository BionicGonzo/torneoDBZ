// Llamamos a la API (archivo .json)
let personajes = (() => {
    const url_dbz = 'dbz.json'; // En video se llama por live server, aquí de manera local
    try {
        const getData = async () => { // Función asíncrona
            const res = await fetch(url_dbz)
            const data = await res.json()
            return data
        }
        return {getData} // Retornar método getData dentro de un objeto
    }
    catch(error) {
        console.log(error)
    }
})();

export default personajes;