let startTime, interval;
let running = false;

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    const milliseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
}

function updateDisplay(ms) {
    document.getElementById("display").textContent = formatTime(ms);
}

document.getElementById("startBtn").addEventListener("click", () => {
    if (running) return;
    running = true;
    startTime = Date.now() - (window.elapsed || 0);
    interval = setInterval(() => {
        window.elapsed = Date.now() - startTime;
        updateDisplay(window.elapsed);
    }, 100);
});

document.getElementById("stopBtn").addEventListener("click", () => {
    if (!running) return;
    running = false;
    clearInterval(interval);
});

document.getElementById("resetBtn").addEventListener("click", () => {
    running = false;
    clearInterval(interval);
    window.elapsed = 0;
    updateDisplay(0);
});
