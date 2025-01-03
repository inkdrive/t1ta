import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
import { SUPABASE_URL, SUPABASE_KEY } from './env.js';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { username } },
  });

  const message = document.getElementById('message');
  if (error) {
    message.textContent = `Error: ${error.message}`;
    message.style.color = 'red';
  } else {
    message.textContent = 'Signup successful! You can now log in.';
    message.style.color = 'green';
  }
});
