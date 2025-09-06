function formatTime24(date) {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  return { hours, minutes, seconds };
}

function updateClock() {
  const clock = document.getElementById('clock');
  const now = new Date();
  const { hours, minutes, seconds } = formatTime24(now);

  clock.innerHTML = `
    <span class="neon-digit">${hours}</span>
    <span class="neon-colon">:</span>
    <span class="neon-digit">${minutes}</span>
    <span class="neon-colon">:</span>
    <span class="neon-digit">${seconds}</span>
  `;

  // Date line
  const dateEl = document.getElementById('date');
  const weekday = now.toLocaleString(undefined, { weekday: 'long' });
  const month = now.toLocaleString(undefined, { month: 'long' });
  const day = now.getDate();
  const year = now.getFullYear();
  dateEl.textContent = `${weekday}, ${month} ${day}, ${year}`;
}

setInterval(updateClock, 1000);
window.addEventListener('load', updateClock);
