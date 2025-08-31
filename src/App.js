import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './index.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  // Sample data for the BI dashboard
  const salesData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales Revenue ($)',
        data: [12000, 19000, 15000, 25000, 22000, 30000],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Sales Revenue',
      },
    },
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Business Intelligence Dashboard</h1>
        <p>Real-time analytics and insights</p>
      </div>
      
      <div className="chart-container">
        <Bar data={salesData} options={chartOptions} />
      </div>
      
      <div className="chart-container">
        <h3>Key Metrics</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          <div style={{ textAlign: 'center', padding: '20px', background: '#e3f2fd', borderRadius: '8px' }}>
            <h2>$123,000</h2>
            <p>Total Revenue</p>
          </div>
          <div style={{ textAlign: 'center', padding: '20px', background: '#f3e5f5', borderRadius: '8px' }}>
            <h2>1,234</h2>
            <p>Total Orders</p>
          </div>
          <div style={{ textAlign: 'center', padding: '20px', background: '#e8f5e8', borderRadius: '8px' }}>
            <h2>98.5%</h2>
            <p>Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
