import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideos(evento) {
    evento.preventDefault();
    const imagem = document.querySelector("[data-imagem").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();
    try {

        await conectaApi.criaVideos(imagem, url, titulo, descricao);

        window.location.href = "../pages/envio-concluido.html";
    } catch {
        (e)
        alert(e);
    }
}

formulario.addEventListener("submit", evento => criarVideos(evento));