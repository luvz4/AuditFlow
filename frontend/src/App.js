import React from "react";
import Dashboard from "./components/Dashboard";
import Alerts from "./components/Alerts";
import Transactions from "./components/Transactions";

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>AuditFlow</h1>
      <Dashboard />
      <Alerts />
      <Transactions />
    </div>
  );
}
