// ==================== CONFIGURACIÓN ====================
// Cambia aquí la fecha si quieres en el futuro
const targetDate = new Date("April 1, 2027 00:00:00").getTime();

// Mensaje que aparecerá cuando termine el conteo
const eventName = "¡Hasta el 1 de abril de 2027!";

// =======================================================

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const messageEl = document.getElementById('message');
const eventNameEl = document.getElementById('event-name');

// Actualizar nombre del evento
eventNameEl.textContent = eventName;

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector('.countdown').style.display = 'none';
        messageEl.classList.remove('hidden');
        messageEl.innerHTML = '🎉 ¡Llegó el día! 1 de abril de 2027 🎉';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
}, 1000);
