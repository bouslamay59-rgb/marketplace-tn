'use client';
import { supabase } from '@/lib/supabaseClient';

export function AuthButtons() {
  async function login() {
    const email = prompt('Ton email ?');
    if (!email) return;
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) alert(error.message);
    else alert('Vérifie ta boîte mail ✉️ (Magic link)');
  }
  async function logout() {
    await supabase.auth.signOut();
    window.location.reload();
  }
  return (
    <div className="flex gap-2">
      <button onClick={login} className="px-3 py-1.5 rounded-lg border">Se connecter</button>
      <button onClick={logout} className="px-3 py-1.5 rounded-lg border">Se déconnecter</button>
    </div>
  );
}
