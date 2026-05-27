const ctx = document.getElementById('revenueChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            data: [15, 21, 28, 24, 45, 42],
            borderColor: '#1a6bff',
            backgroundColor: 'rgba(26,107,255,0.1)',
            pointBackgroundColor: '#1a6bff',
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        plugins: { legend: { display: false } },
        scales: {
            y: { ticks: { color: '#6B7EA0' }, grid: { color: '#1E2F4A' } },
            x: { ticks: { color: '#6B7EA0' }, grid: { display: false } }
        }
    }
});