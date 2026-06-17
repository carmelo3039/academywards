// Constante original com o filme anunciado incorretamente
const bestMovie = "O vencedor de Melhor Filme é: La La Land";

// console.log(bestMovie); // Comentado conforme enunciado

/**
 * Arrow function que recebe uma string e substitui o nome do filme
 * @param {string} texto - A string original
 * @param {string} filmeReal - O nome correto do filme
 * @returns {string} - A nova string com o nome correto
 */
const corrigirFilme = (texto, filmeReal) => {
    return texto.replace("La La Land", filmeReal);
};

// Após a const bestMovie, declaramos realBestMovie
const realBestMovie = corrigirFilme(bestMovie, "Moonlight");

// Função para exibir no console do navegador e na interface
const exibirResultado = () => {
    // Exibe no console do navegador (DevTools)
    console.log(realBestMovie);
    
    // Exibe na interface visual
    const consoleBox = document.getElementById('consoleOutput');
    const bestMovieEl = document.getElementById('bestMovie');
    const realBestMovieEl = document.getElementById('realBestMovie');
    
    // Renderiza os valores nos cards
    bestMovieEl.textContent = "La La Land";
    realBestMovieEl.textContent = "Moonlight";
    
    // Log formatado na tela
    const timestamp = new Date().toLocaleTimeString('pt-BR');
    consoleBox.innerHTML += `
        <div class="log-info">[${timestamp}] Constante "bestMovie" declarada</div>
        <div class="log-info">[${timestamp}] Arrow function "corrigirFilme" executada</div>
        <div class="log-success">[${timestamp}] realBestMovie = "${realBestMovie}"</div>
    `;
    
    // Efeito de destaque no card correto
    document.querySelector('.correto').style.transform = 'scale(1.05)';
    setTimeout(() => {
        document.querySelector('.correto').style.transform = 'scale(1)';
    }, 300);
    
    // Desabilita o botão após clicar
    const btn = document.getElementById('btnCorrigir');
    btn.textContent = "Vencedor Revelado!";
    btn.disabled = true;
    btn.style.opacity = "0.6";
    btn.style.cursor = "not-allowed";
};

// Event listener no botão
document.getElementById('btnCorrigir').addEventListener('click', exibirResultado);

// Mensagem inicial no console visual
document.getElementById('consoleOutput').innerHTML = `
    <span style="color: #888">// Aguardando clique no botão para executar o console.log...</span>
`;
