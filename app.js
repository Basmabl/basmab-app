import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabase = createClient(
  'https://gewxcuajyxtkxukcrwqf.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdld3hjdWFqeXh0a3h1a2Nyd3FmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5NTE5ODYsImV4cCI6MjA5MjUyNzk4Nn0.uAy8E6nUPzEctUd7dw8Ghc7ho1QFczWhFhcvXKT9-IU'
)

document.getElementById('registerBtn').addEventListener('click', async () => {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const msg = document.getElementById('msg')
  const { error } = await supabase.auth.signUp({ email, password })
  msg.style.color = error ? '#f87171' : '#4ade80'
  msg.textContent = error ? '❌ ' + error.message : '✅ Compte créé !'
})

document.getElementById('loginBtn').addEventListener('click', async () => {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const msg = document.getElementById('msg')
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  msg.style.color = error ? '#f87171' : '#4ade80'
  msg.textContent = error ? '❌ ' + error.message : '✅ Connecté ! 🎉'
})