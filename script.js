import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
import { SUPABASE_URL, SUPABASE_KEY } from './env.js';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Form submission
document.getElementById('note-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const content = document.getElementById('note-content').value;

  const { data, error } = await supabase.from('notes').insert([{ content }]);

  const message = document.getElementById('message');
  if (error) {
    message.textContent = `Error: ${error.message}`;
    message.style.color = 'red';
  } else {
    message.textContent = 'Note saved successfully!';
    message.style.color = 'green';
    document.getElementById('note-content').value = ''; // Clear the input
  }
});
