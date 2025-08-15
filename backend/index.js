import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to Supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

app.get("/", (req, res) => {
  res.send("AuditFlow backend is running");
});

// Example: Get payments
app.get("/payments", async (req, res) => {
  const { data, error } = await supabase.from("payments").select("*");
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
