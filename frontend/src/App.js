import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function App() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios.get("https://YOUR_BACKEND_URL/payments")
      .then(res => setPayments(res.data))
      .catch(err => console.error(err));
  }, []);

  const data = {
    labels: payments.map(p => p.date),
    datasets: [
      {
        label: "Payments",
        data: payments.map(p => p.amount),
        borderColor: "blue",
        fill: false
      }
    ]
  };

  return (
    <div>
      <h1>AuditFlow Dashboard</h1>
      <Line data={data} />
    </div>
  );
}

export default App;
