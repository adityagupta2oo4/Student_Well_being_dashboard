// Get 2D contexts
const gpaCtx = document.getElementById('gpaChart').getContext('2d');
const sleepCtx = document.getElementById('sleepGpaChart').getContext('2d');
const stressCtx = document.getElementById('stressSleepChart').getContext('2d');
const attendanceCtx = document.getElementById('attendanceChart').getContext('2d');

// Gradient helper
function createGradient(ctx, colorStart, colorEnd) {
  const gradient = ctx.createLinearGradient(0, 0, 0, 250);
  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(1, colorEnd);
  return gradient;
}

// Yearly GPA Line Chart
const gpaChart = new Chart(gpaCtx, {
  type: 'line',
  data: {
    labels: ['2020','2021','2022','2023','2024'],
    datasets: [{
      label: 'Average GPA',
      data: [2.9,3.0,3.1,3.05,3.15],
      borderColor: '#007bff',
      backgroundColor: createGradient(gpaCtx,'rgba(0,123,255,0.2)','rgba(0,123,255,0)'),
      tension: 0.4,
      fill: true,
      pointRadius: 5,
      pointBackgroundColor: '#007bff'
    }]
  },
  options: {
    responsive: true,
    plugins: { legend:{ labels:{ color:'#333' } } },
    scales: { y:{ min:2.5,max:4.0,ticks:{color:'#333'}}, x:{ticks:{color:'#333'}} }
  }
});

// Sleep vs GPA Scatter
const sleepGpaChart = new Chart(sleepCtx, {
  type:'scatter',
  data:{ datasets:[{
    label:'Sleep vs GPA',
    data:[{x:4,y:2.6},{x:5,y:2.9},{x:6,y:3.1},{x:7,y:3.4},{x:8,y:3.6}],
    backgroundColor:'#007bff'
  }]},
  options:{ responsive:true, plugins:{ tooltip:{ callbacks:{ label:(ctx)=>`Sleep: ${ctx.raw.x}h, GPA: ${ctx.raw.y}` } }, legend:{ labels:{ color:'#333' } } },
    scales:{ x:{ title:{ display:true,text:'Sleep (hrs)',color:'#333' }, min:3,max:9 }, y:{ title:{ display:true,text:'GPA',color:'#333' }, min:2.5,max:4.0 } } }
});

// Stress vs Sleep Bubble
const stressSleepChart = new Chart(stressCtx,{
  type:'bubble',
  data:{ datasets:[{
    label:'Stress vs Sleep',
    data:[{x:6,y:40,r:12},{x:7,y:35,r:10},{x:8,y:30,r:8},{x:5,y:50,r:15}],
    backgroundColor:'rgba(0,123,255,0.4)',
    borderColor:'#007bff',
    borderWidth:2
  }]},
  options:{ responsive:true, plugins:{ tooltip:{ callbacks:{ label:(ctx)=>`Sleep: ${ctx.raw.x}h, Stress: ${ctx.raw.y}%` } }, legend:{ labels:{ color:'#333' } } },
    scales:{ x:{ title:{ display:true,text:'Sleep (hrs)',color:'#333' }, min:4,max:9 }, y:{ title:{ display:true,text:'Stress (%)',color:'#333' }, max:60 } } }
});

// Attendance Trend Bar
const attendanceChart = new Chart(attendanceCtx,{
  type:'bar',
  data:{ labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], datasets:[{
    label:'Attendance (%)',
    data:[88,85,87,90,92,91,93,89,88,90,92,94],
    backgroundColor:'#007bff',
    borderRadius:6
  }]},
  options:{ responsive:true, plugins:{ legend:{ display:false }, tooltip:{ mode:'index', intersect:false } }, scales:{ y:{ beginAtZero:true, max:100, ticks:{color:'#333'}}, x:{ ticks:{color:'#333'} } } }
});

// Dynamic refresh
function refreshData(){
  document.getElementById('avgGPA').innerText=(3+Math.random()*0.3).toFixed(2);
  document.getElementById('avgAttendance').innerText=`${(85+Math.random()*10).toFixed(1)}%`;
  document.getElementById('avgStress').innerText=`${(40+Math.random()*10).toFixed(1)}%`;
  document.getElementById('avgSleep').innerText=(6+Math.random()*1.5).toFixed(1);
  updateTimestamp();
}

function updateTimestamp(){
  document.getElementById('lastUpdated').innerText=new Date().toLocaleString();
}

updateTimestamp();

// -----------------------------
//  PREDICTIVE RISK & ALERTS
// -----------------------------

const riskData = {
  2025: [
    { id: "25CS001", name: "Aarav K.", year: "1st Year", risk: 72, category: "High", action: "Refer to counselor" },
    { id: "25CS012", name: "Riya G.", year: "1st Year", risk: 61, category: "High", action: "Weekly counseling" },
    { id: "25CS018", name: "Kunal M.", year: "1st Year", risk: 49, category: "Medium", action: "Academic mentor check" },
    { id: "25CS021", name: "Sneha P.", year: "1st Year", risk: 33, category: "Low", action: "Normal" },
  ],
  2024: [
    { id: "24CS010", name: "Devansh S.", year: "2nd Year", risk: 67, category: "High", action: "Refer to counselor" },
    { id: "24CS022", name: "Meera T.", year: "2nd Year", risk: 55, category: "Medium", action: "Bi-weekly review" },
    { id: "24CS028", name: "Rohan P.", year: "2nd Year", risk: 42, category: "Medium", action: "Attendance follow-up" },
    { id: "24CS030", name: "Tina B.", year: "2nd Year", risk: 29, category: "Low", action: "Normal" },
  ],
  2023: [
    { id: "23CS005", name: "Ishita D.", year: "3rd Year", risk: 71, category: "High", action: "Refer to counselor" },
    { id: "23CS016", name: "Yash P.", year: "3rd Year", risk: 58, category: "Medium", action: "Mentor follow-up" },
    { id: "23CS020", name: "Sanya L.", year: "3rd Year", risk: 36, category: "Low", action: "Normal" },
  ]
};

function renderRiskTable(year) {
  const tableBody = document.getElementById("riskTableBody");
  const data = riskData[year];

  tableBody.innerHTML = data
    .map(
      (student) => `
      <tr>
        <td>${student.id} — ${student.name}</td>
        <td>${student.year}</td>
        <td>${student.risk}%</td>
        <td class="category-${student.category.toLowerCase()}">${student.category}</td>
        <td>${student.action}</td>
      </tr>`
    )
    .join("");

  const avgRisk = Math.round(data.reduce((a, b) => a + b.risk, 0) / data.length);
  document.getElementById("riskScore").textContent = `${avgRisk}%`;
}

// Connect it to the existing year selector
document.getElementById("yearSelector").addEventListener("change", (e) => {
  renderRiskTable(e.target.value);
});

// Initialize for the default selected year
renderRiskTable(document.getElementById("yearSelector").value);
