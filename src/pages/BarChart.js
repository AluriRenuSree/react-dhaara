import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';

const BarChart = () => {
  const xAxisData = [
    { name: '1 Mar' },
    { name: '2 Mar' },
    { name: '3 Mar' },
    { name: '4 Mar' },
    { name: '1 Mar' },
    { name: '1 Mar' },
    { name: '1 Mar' },
    { name: '1 Mar' },
    { name: '1 Mar' },
    { name: '1 Mar' },
    { name: '1 Mar' },
    { name: '1 Mar' },
    { name: '1 Mar' },
    { name: '1 Mar' },
    { name: '1 Mar' },
    { name: '1 Mar' },
    { name: '1 Mar' },
    { name: '1 Mar' },
    { name: '1 Mar' },
    { name: '1 Mar' },
    { name: '1 Mar' },
  ];

  const yAxisData = [
    { count: 10 },
    { count: 60 },
    { count: 30 },
    { count: 10 },
    { count: 90 },
    { count: 60 },
    { count: 40 },
    { count: 100 },
    { count: 10 },
    { count: 60 },
    { count: 30 },
    { count: 10 },
    { count: 60 },
    { count: 30 },
    { count: 10 },
    { count: 10 },
    { count: 10 },
    { count: 60 },
    { count: 30 },
    { count: 100 },
    { count: 10 },
  ];

 
  const getBackgroundColor = (value) => {
    const count = value.count; 
    if (count > 70) {
      return "rgba(200, 60, 54, 0.8)";
    } else if (count > 50) {
      return "#FDB740";
    } else {
      return "#0AB8D9";
    }
  };

  const chartData = {
    labels: xAxisData.map((value) => value.name),
    datasets: [
      {
        label: "",
        data: yAxisData.map((value) => value.count),
        backgroundColor: yAxisData.map((value) => getBackgroundColor(value)),
        borderColor: yAxisData.map((value) => getBackgroundColor(value)),
        borderWidth: 2,
        borderRadius: 10
      }
    ]
  };
const options={}

  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px',marginBottom:"20px" }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ flex: 1 }}>
          <h2>Water Usage Report</h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <select>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </select>
          <select style={{ marginLeft: '10px' }}>
            <option value="30days">30 days</option>
            <option value="15days">15days</option>
          </select>
        </div>
      </div>
      <div style={{ backgroundColor: 'white', padding: '20px', border: '1px solid #ccc' }}>
        <h3>Daily Water Extraction (Apr 2024)</h3>
        <hr style={{ margin: '10px 0' }} />
        <Bar data={chartData} options={options} className="bar-chart" />
      </div>
    </div>
  );
};

export default BarChart;
