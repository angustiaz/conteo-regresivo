// Cambia esta fecha por la que quieras (formato: "Mes Día, Año Hora:Min:Seg")
const targetDate = new Date("December 31, 2026 23:59:59").getTime();

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const messageEl = document.getElementById('message');

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        clearInterval(countdown);
        messageEl.classList.remove('hidden');
        // Opcional: ocultar los números
        document.querySelector('.countdown').style.display = 'none';
        return;
    }

    // Cálculos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar con dos dígitos
    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
}, 1000);