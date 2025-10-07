'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function ListingDetail({ params }: { params: { id: string } }) {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    supabase
      .from('listings')
      .select('id,title,description,price,currency,city,zone,created_at, listing_images(url,is_cover)')
      .eq('id', params.id)
      .single()
      .then(({ data, error }) => {
        if (error) console.error(error);
        setData(data);
      });
  }, [params.id]);

  if (!data) return <div>Chargement…</div>;

  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-2xl p-3 shadow">
        {data.listing_images?.[0]?.url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={data.listing_images[0].url} alt={data.title} className="w-full rounded-xl" />
        )}
      </div>
      <div className="space-y-3">
        <h1 className="text-2xl font-bold">{data.title}</h1>
        <p className="text-lg font-semibold">{Number(data.price).toFixed(3)} TND</p>
        <p className="text-sm text-gray-600">{data.city}{data.zone ? ` • ${data.zone}` : ''}</p>
        <p className="text-gray-800 whitespace-pre-line">{data.description}</p>
        <div className="flex gap-2">
          <a href={`/inbox?listing=${data.id}`} className="px-4 py-2 rounded-lg bg-black text-white">Contacter</a>
        </div>
      </div>
    </article>
  );
}
