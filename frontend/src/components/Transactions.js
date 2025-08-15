import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from('transactions').select('*');
      if (!error) setTransactions(data);
    }
    fetchData();
  }, []);

  return <div>{JSON.stringify(transactions)}</div>;
}
