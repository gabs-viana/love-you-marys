let currentIndex = 0; // Índice da mídia atual
const elements = document.querySelectorAll('.image-container img, .image-container video'); // Seleciona imagens e vídeos
const totalElements = elements.length;

function showNextElement() {
    currentIndex = (currentIndex + 1) % totalElements; // Incrementa o índice, reinicia ao final
    const offset = -currentIndex * 100; // Calcula o deslocamento
    document.querySelector('.image-container').style.transform = `translateX(${offset}%)`;
}

setInterval(showNextElement, 6000); // Muda para o próximo a cada 6 segundos

// Defina a data inicial (30/09/2024)
const startDate = new Date("2025-01-01T00:00:00");

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
