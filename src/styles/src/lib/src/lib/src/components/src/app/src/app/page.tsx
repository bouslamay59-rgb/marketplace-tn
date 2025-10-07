'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function Home() {
  const [listings, setListings] = useState<any[]>([]);

  useEffect(() => {
    supabase
      .from('listings')
      .select('id,title,description,price,currency,city,zone,status,created_at, listing_images(url,is_cover)')
      .order('created_at', { ascending: false })
      .limit(24)
      .then(({ data, error }) => {
        if (error) console.error(error);
        setListings(data || []);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {listings.map((l: any) => (
        <a key={l.id} href={`/l/${l.id}`} className="bg-white rounded-2xl shadow p-3 hover:shadow-md transition">
          <div className="aspect-square rounded-xl bg-gray-100 overflow-hidden">
            {l.listing_images?.[0]?.url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={l.listing_images[0].url} alt={l.title} className="w-full h-full object-cover" />
            ) : null}
          </div>
          <div className="mt-2">
            <h3 className="font-semibold line-clamp-1">{l.title}</h3>
            <p className="text-sm text-gray-600">{Number(l.price).toFixed(3)} TND</p>
            <p className="text-xs text-gray-500 line-clamp-1">{l.city}{l.zone ? ` • ${l.zone}` : ''}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
