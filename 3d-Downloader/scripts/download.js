export default function download() {
    const Model = document.querySelector('.model')



    document.getElementById('downloadButton').addEventListener('click', () => {
        // URL do arquivo GLB que será baixado
        const glbFileUrl = Model.getAttribute('src');

        // Nome do arquivo a ser baixado
        const fileName = Model.getAttribute('src').replace("./Imgs/", "");

        // Cria um link temporário para o arquivo GLB
        const link = document.createElement('a');
        link.href = glbFileUrl;
        link.download = fileName;

        // Adiciona o link ao DOM e simula um clique para iniciar o download
        document.body.appendChild(link);
        link.click();

        // Remove o link do DOM
        document.body.removeChild(link);
    });
}