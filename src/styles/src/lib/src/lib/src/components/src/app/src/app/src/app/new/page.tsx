'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function NewListingPage() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [city, setCity] = useState('Tunis');
  const [desc, setDesc] = useState('');

  async function createListing() {
    const user = (await supabase.auth.getUser()).data.user;
    if (!user) { alert('Connecte-toi.'); return; }
    const { data, error } = await supabase
      .from('listings')
      .insert({ user_id: user.id, title, price, city, description: desc, status: 'active' })
      .select('id')
      .single();
    if (error) { alert(error.message); return; }
    window.location.href = `/l/${data.id}`;
  }

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl p-5 shadow">
      <h1 className="text-xl font-semibold mb-4">Nouvelle annonce</h1>
      <div className="space-y-3">
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Titre" className="w-full border rounded-lg px-3 py-2" />
        <input value={price} onChange={e=>setPrice(Number(e.target.value))} type="number" placeholder="Prix (TND)" className="w-full border rounded-lg px-3 py-2" />
        <input value={city} onChange={e=>setCity(e.target.value)} placeholder="Ville" className="w-full border rounded-lg px-3 py-2" />
        <textarea value={desc} onChange={e=>setDesc(e.target.value)} placeholder="Description" className="w-full border rounded-lg px-3 py-2 min-h-[120px]" />
        <button onClick={createListing} className="w-full py-2 rounded-lg bg-black text-white">Publier</button>
      </div>
    </div>
  );
}
