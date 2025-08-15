import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("AuditFlow Backend Running");
});

// Example: Endpoint to fetch transactions
app.get("/transactions", (req, res) => {
  res.json([
    { id: 1, description: "Office supplies", amount: -120, currency: "USD" },
    { id: 2, description: "Client payment", amount: 2400, currency: "USD" }
  ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
