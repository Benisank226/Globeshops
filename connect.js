
//-------------------------
const { createClient } = supabase;
const supabaseUrl = 'https://dsxrfazhgfziaclyerpb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzeHJmYXpoZ2Z6aWFjbHllcnBiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk1Mjc1MDIsImV4cCI6MjA1NTEwMzUwMn0.YQTz4mmPiSWA7OQz41ZSbk6JciiA8V-cyK3frm7t7tU';

const supabaseClient = createClient(supabaseUrl, supabaseKey);

document.getElementById('loginForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const whatsapp = document.getElementById('whatsapp').value.trim();
  const errorDiv = document.getElementById('error');

  if (!validateEmail(email)) {
    errorDiv.textContent = 'Veuillez entrer un email valide.';
    return;
  }

  if (!validateWhatsApp(whatsapp)) {
    errorDiv.textContent = 'Veuillez entrer un numéro WhatsApp valide.';
    return;
  }

  errorDiv.textContent = '';

  try {
    // Enregistrement dans Supabase
    const { data, error: insertError } = await supabaseClient
      .from('users')  // Remplace 'users' par le nom de ta table
      .insert([{ email: email, whatsapp: whatsapp }]);

    if (insertError) throw insertError;

    // Envoi de l'email de confirmation
    const { error: authError } = await supabaseClient.auth.signUp({
      email: email,
      password: 'motdepasseTemporaire123!'  // Remplace par une gestion sécurisée des mots de passe
    });

    if (authError) throw authError;

    error.textContent=' Connexion réussi';
    error.style.color='green';
    window.location.href = 'accueil.html';
  } catch (error) {
    errorDiv.textContent = error.message;
  }
});

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}

function validateWhatsApp(whatsapp) {
  const re = /^\+?[1-9]\d{1,14}$/;
  return re.test(whatsapp);
}

//---------------------
