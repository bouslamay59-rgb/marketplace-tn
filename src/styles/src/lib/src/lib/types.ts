export type Listing = {
  id: number;
  title: string;
  description?: string;
  price: number;
  currency: 'TND';
  city?: string;
  zone?: string;
  status: 'active'|'paused'|'sold'|'removed'|'pending';
  created_at: string;
};
