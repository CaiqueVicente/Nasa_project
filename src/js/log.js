let botaoProcurar = document.querySelector("#btn")
const paragrafo = document.createElement("p");



botaoProcurar.addEventListener("click", () =>{-
    console.log("button pressed")
    sendApiResquest()
})

async function sendApiResquest(){
    let API_KEY = "wO6JkQXkkL9SSTCmeDzR2V4A54URBrycwwzduCDT";
    let input = document.querySelector("#Time").value;
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${input}`);
    console.log(response)
    let data = await response.json()
    console.log (data)
    useApiData(data)
}

function useApiData (data){
    document.querySelector(".info").innerHTML = ` <h1> ${data.title} </h1> <p> ${data.explanation} </p><img width="30%" src="${data.url}">`  
    let paragrafo = document.querySelector('p');
    let image = document.querySelector('img');
    let title = document.querySelector('h1')

    title.style.backgroundColor = "rgb(9, 8, 10)";
    title.style.padding = "20px 0 0 83px";

    paragrafo.style.backgroundColor = "rgb(9, 8, 10)";
    paragrafo.style.padding="1rem"
    paragrafo.style.fontSize = "1.2rem"
    paragrafo.style.fontFamily = "minhaFonte";

    image.style.margin= "30px 0 0 450px"
    

    
}