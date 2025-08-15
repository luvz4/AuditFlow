import React, { useEffect, useState } from "react";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/transactions")
      .then(res => res.json())
      .then(data => setTransactions(data));
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Recent Transactions</h2>
      {transactions.map((t) => (
        <div key={t.id}>
          {t.description} — {t.amount} {t.currency}
        </div>
      ))}
    </div>
  );
}
