// 投资回报率图表
const investmentCtx = document.getElementById('investmentChart').getContext('2d');
new Chart(investmentCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: '投资回报 ($)',
      data: [100000, 105000, 110000, 115000, 120000, 135000],
      borderColor: '#0047ab',
      fill: false
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});

// 每支股票的图表
const stockCharts = {
  aapl: createStockChart('aaplChart', [130, 135, 140, 145, 150, 160], 'AAPL 股价变化'),
  aaplReturn: createStockChart('aaplReturnChart', [10000, 10500, 11000, 11500, 12000, 13500], 'AAPL 投资回报'),
  tsla: createStockChart('tslaChart', [120, 125, 130, 140, 150, 170], 'TSLA 股价变化'),
  tslaReturn: createStockChart('tslaReturnChart', [10000, 11000, 12000, 13000, 14000, 15000], 'TSLA 投资回报')
};

function createStockChart(id, data, label) {
  const ctx = document.getElementById(id).getContext('2d');
  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: label,
        data: data,
        borderColor: '#0047ab',
        fill: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}