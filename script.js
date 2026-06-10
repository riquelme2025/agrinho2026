// Aguarda o DOM estar completamente carregado para rodar o script
document.addEventListener("DOMContentLoaded", function () {
    
    // Seleciona o elemento da imagem de introdução através da sua classe CSS
    const imagemIntroducao = document.querySelector('.imagem-introducao');

    // Verifica se a imagem realmente existe na página antes de alterá-la
    if (imagemIntroducao) {
        
        /* DICA: Renomeie o seu arquivo de imagem na pasta 'img' para: fazendeiro-pixel.png
           Isso evita que espaços e parênteses quebrem o link no navegador!
        */
        imagemIntroducao.src = "img/erwan-hesry-1q75BReKpms-unsplash.jpg"; 
        
        // Atualiza os atributos de acessibilidade (SEO e leitores de tela)
        imagemIntroducao.alt = 'Avatar em pixel art de um fazendeiro sorridente vestindo chapéu de palha e camisa azul';
        imagemIntroducao.title = 'Fazendeiro em pixel art. Desenvolvido por Riquelme Matos, 2026.';
        
        console.log("Imagem de introdução alterada com sucesso via JavaScript!");
    } else {
        console.error("A classe '.imagem-introducao' não foi encontrada no HTML.");
    }
});