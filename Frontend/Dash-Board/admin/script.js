// Chart references
const gpaCtx = document.getElementById('gpaChart');
const sleepCtx = document.getElementById('sleepGpaChart');
const stressCtx = document.getElementById('stressSleepChart');
const attendanceCtx = document.getElementById('attendanceChart');

// GPA Trend (Yearly Line Chart)
const gpaChart = new Chart(gpaCtx, {
  type: 'line',
  data: {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [{
      label: 'Average GPA',
      data: [2.9, 3.0, 3.1, 3.05, 3.15],
      borderColor: '#fff',
      backgroundColor: 'rgba(255,255,255,0.3)',
      tension: 0.3,
      fill: true
    }]
  },
  options: {
    scales: { y: { min: 2.5, max: 4.0 } },
    plugins: { legend: { labels: { color: '#fff' } } }
  }
});

// Sleep vs GPA (Scatter Chart)
const sleepGpaChart = new Chart(sleepCtx, {
  type: 'scatter',
  data: {
    datasets: [{
      label: 'Sleep vs GPA',
      data: [
        { x: 4, y: 2.6 },
        { x: 5, y: 2.9 },
        { x: 6, y: 3.1 },
        { x: 7, y: 3.4 },
        { x: 8, y: 3.6 }
      ],
      backgroundColor: '#00dbde'
    }]
  },
  options: {
    scales: {
      x: { title: { display: true, text: 'Sleep (hrs)' } },
      y: { title: { display: true, text: 'GPA' }, min: 2.5, max: 4.0 }
    }
  }
});

// Stress vs Sleep (Bubble Chart)
const stressSleepChart = new Chart(stressCtx, {
  type: 'bubble',
  data: {
    datasets: [{
      label: 'Stress vs Sleep',
      data: [
        { x: 6, y: 40, r: 12 },
        { x: 7, y: 35, r: 10 },
        { x: 8, y: 30, r: 8 },
        { x: 5, y: 50, r: 15 }
      ],
      backgroundColor: 'rgba(252,0,255,0.6)',
      borderColor: '#00dbde',
      borderWidth: 2
    }]
  },
  options: {
    scales: {
      x: { title: { display: true, text: 'Sleep (hrs)' } },
      y: { title: { display: true, text: 'Stress (%)' }, max: 60 }
    }
  }
});

// Attendance Trend (Bar Chart)
const attendanceChart = new Chart(attendanceCtx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Attendance (%)',
      data: [88, 85, 87, 90, 92, 91, 93, 89, 88, 90, 92, 94],
      backgroundColor: 'rgba(0,221,255,0.7)',
      borderColor: '#00dbde',
      borderWidth: 2
    }]
  },
  options: {
    scales: {
      y: { beginAtZero: true, max: 100 },
      x: { ticks: { color: '#333' } }
    }
  }
});

// Dynamic refresh
function refreshData() {
  document.getElementById('avgGPA').innerText = (3 + Math.random() * 0.3).toFixed(2);
  document.getElementById('avgAttendance').innerText = `${(85 + Math.random() * 10).toFixed(1)}%`;
  document.getElementById('avgStress').innerText = `${(40 + Math.random() * 10).toFixed(1)}%`;
  document.getElementById('avgSleep').innerText = (6 + Math.random() * 1.5).toFixed(1);
  updateTimestamp();
}

function updateTimestamp() {
  const now = new Date();
  document.getElementById('lastUpdated').innerText = now.toLocaleString();
}

updateTimestamp();
