function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes().toString().padStart(2, '0');
    let s = now.getSeconds().toString().padStart(2, '0');
    let ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    h = h ? h : 12; // the hour '0' should be '12'
    h = h.toString().padStart(2, '0');
    clock.innerHTML = `<span class="neon-digit">${h}</span><span class="neon-colon">:</span><span class="neon-digit">${m}</span><span class="neon-colon">:</span><span class="neon-digit">${s}</span> <span class="ampm">${ampm}</span>`;
}

setInterval(updateClock, 1000);
window.onload = updateClock;
