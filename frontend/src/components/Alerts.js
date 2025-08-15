import React from "react";

export default function Alerts() {
  const alerts = [
    "Bank loan payment of $500 due 2025-08-15",
    "Subscription renewal of $200 due 2025-08-20"
  ];

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Upcoming Payments</h2>
      <ul>
        {alerts.map((alert, idx) => (
          <li key={idx}>{alert}</li>
        ))}
      </ul>
    </div>
  );
}
