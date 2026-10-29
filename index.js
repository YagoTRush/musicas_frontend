const urlBackend = "http://localhost:3000"

const listaMusicas = document.getElementById("listaMusicas")

async function buscarMusicas(){
    const resposta = await fetch(urlBackend)
    const musicas = await resposta.json()

    musicas.forEach((musica) => { 
    })
}