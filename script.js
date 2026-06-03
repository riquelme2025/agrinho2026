// Aguarda o DOM estar completamente carregado para rodar o script
document.addEventListener("DOMContentLoaded", function () {
    
    // Seleciona o elemento da imagem de introdução através da sua classe CSS
    const imagemIntroducao = document.querySelector('.imagem-introducao');

    // Verifica se a imagem realmente existe na página antes de alterá-la
    if (imagemIntroducao) {
        
        // Substitui o caminho do arquivo para o seu novo arquivo de pixel art
        imagemIntroducao.src = 'img/New Piskel-1.png (1).png'; 
        
        // Atualiza os atributos de acessibilidade (SEO e leitores de tela)
        imagemIntroducao.alt = 'Avatar em pixel art de um fazendeiro sorridente vestindo chapéu de palha e camisa azul';
        imagemIntroducao.title = 'Fazendeiro em pixel art. Desenvolvido por Riquelme Matos, 2026.';
        
        console.log("Imagem de introdução alterada com sucesso via JavaScript!");
    } else {
        console.error("A classe '.imagem-introducao' não foi encontrada no HTML.");
    }
});