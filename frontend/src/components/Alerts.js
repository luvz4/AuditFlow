import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from('alerts').select('*');
      if (!error) setAlerts(data);
    }
    fetchData();
  }, []);

  return <ul>{alerts.map(alert => <li key={alert.id}>{alert.message}</li>)}</ul>;
}
