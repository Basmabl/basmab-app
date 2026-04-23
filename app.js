import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabase = createClient(
  'https://gewxcuajyxtkxukcrwqf.supabase.co',
  'sb_publishable_F-9lEBEgaXWlRHXM7ns0Lg_2OOh_aSj'
)

document.getElementById('registerBtn').onclick = async () => {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const { error } = await supabase.auth.signUp({ email, password })
  document.getElementById('msg').style.color = error ? '#f87171' : '#4ade80'
  document.getElementById('msg').textContent = error ? error.message : '✅ Compte créé ! Vérifie ton email.'
}

document.getElementById('loginBtn').onclick = async () => {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  document.getElementById('msg').style.color = error ? '#f87171' : '#4ade80'
  document.getElementById('msg').textContent = error ? error.message : '✅ Connecté !'
}