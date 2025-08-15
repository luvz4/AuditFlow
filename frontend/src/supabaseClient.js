import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pqggnweaahxzqamtnezy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxZ2dud2VhYWh4enFhbXRuZXp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwMTYxNTUsImV4cCI6MjA3MDU5MjE1NX0.yBkVTuZzsCdb-iqptmoGPxyS_l_TW1dRXUcXLQl-SHg';

export const supabase = createClient(supabaseUrl, supabaseKey);
