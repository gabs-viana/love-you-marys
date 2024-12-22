let currentIndex = 0; // Índice da imagem atual
const images = document.querySelectorAll('.image-container img');
const totalImages = images.length;
const padding = 1; // 1rem de padding direito

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages; // Incrementa o índice, e reinicia ao chegar no fim
    const offset = -(currentIndex * (100 - padding)); // Subtrai o padding da largura do deslocamento
    document.querySelector('.image-container').style.transform = `translateX(${offset}%)`; // Aplica o deslocamento
}

setInterval(showNextImage, 6000); // Chama a função a cada 6 segundos

// Defina a data inicial (30/09/2024)
const startDate = new Date("2024-09-30T00:00:00");

// Função para calcular a diferença de tempo e atualizar o contador
function updateTime() {
    const now = new Date();
    const diff = now - startDate;

    // Calcular anos, meses, dias
    const years = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000)); // Aproximadamente 365.25 dias por ano
    const months = Math.floor((diff % (365.25 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000)); // Aproximadamente 30 dias por mês
    const days = Math.floor((diff % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)); // Restante de dias

    // Calcular horas, minutos, segundos
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Exibir tempo formatado no primeiro span
    document.getElementById("time-1").textContent = `${years} anos, ${months} meses, ${days} dias`;

    // Exibir tempo formatado no segundo span
    document.getElementById("time-2").textContent = `${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

// Atualizar o contador a cada segundo
setInterval(updateTime, 1000);
