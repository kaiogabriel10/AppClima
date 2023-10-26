const apiKey = '664a608c09c86af6c2a8b50354a0755d'
let res = document.getElementById('resposta')
let flag = document.getElementById('bandeira')
const btn = document.getElementById('button')
let n = document.getElementById('nome')
btn.addEventListener("click", ()=>{
    let local = document.getElementById('city').value
    if(local == " "){
        res.innerHTML = `Porfavor, Digite um Local`
    }
    else{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${local}&units=metric&appid=${apiKey}&lang=pt_br`)
        .then((response) => response.json())
        .then((data) => resposta(data))
        .catch((err) => res.innerHTML = `Não foi possível localizar o local digitado.`)  
    } 
})
function resposta(data){    

     JSON.stringify(res.innerHTML = `
        Temperatura Atual: ${Math.round(data.main.temp)}º<br>
        Clima: ${data.weather[0].main}<br>
        Descrição: ${data.weather[0].description}<br> 
        Temperatura máxima: ${Math.round(data.main.temp_max)}º<br>
        Temperatura mínima: ${Math.round(data.main.temp_min)}º<br>
        Umidade: ${data.main.humidity}%`,2, null)

        let country = data.sys.country
        flag.innerHTML = `<img src="https://flagsapi.com/${country}/flat/32.png">`
        n.innerHTML = `<strong>${data.name}<strong/>`

        
}


const menu = document.getElementById('menu')
const opt = document.getElementById('opitions')

menu.addEventListener("click" , () => {
    if(opt.style.display === "none"){
        opt.style.display = "block"
    }
    else{
        opt.style.display = "none"
    }
})

