export type EmiPlan = { months: number; monthly: number; total: number; savings: string };
export type Product = {
  id: string; name: string; brand: string; price: number; image: string;
  description: string; variants: string[]; emiPlans: EmiPlan[];
};

const products: Product[] = [
  { id: 'iphone-15', name: 'iPhone 15', brand: 'Apple', price: 66999, image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=900&q=80', description: 'Dynamic Island. A16 Bionic. A brilliant 48MP Main camera.', variants: ['128 GB', '256 GB', 'Black', 'Blue'], emiPlans: [{ months: 3, monthly: 22333, total: 66999, savings: 'No-cost EMI' }, { months: 6, monthly: 11167, total: 67002, savings: 'No-cost EMI' }, { months: 9, monthly: 7444, total: 66996, savings: 'No-cost EMI' }] },
  { id: 'macbook-air', name: 'MacBook Air M3', brand: 'Apple', price: 114900, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80', description: 'Supercharged by M3. Portable design with a stunning Liquid Retina display.', variants: ['8 GB / 256 GB', '16 GB / 512 GB', 'Midnight', 'Starlight'], emiPlans: [{ months: 3, monthly: 38300, total: 114900, savings: 'No-cost EMI' }, { months: 6, monthly: 19150, total: 114900, savings: 'No-cost EMI' }, { months: 12, monthly: 9575, total: 114900, savings: 'No-cost EMI' }] },
  { id: 'sony-headphones', name: 'Sony WH-1000XM5', brand: 'Sony', price: 29990, image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80', description: 'Industry-leading noise cancellation with immersive sound.', variants: ['Black', 'Silver'], emiPlans: [{ months: 3, monthly: 9997, total: 29991, savings: 'No-cost EMI' }, { months: 6, monthly: 4998, total: 29988, savings: 'No-cost EMI' }] },
  { id: 'samsung-tv', name: 'Samsung Crystal 4K TV', brand: 'Samsung', price: 42990, image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=900&q=80', description: 'Vivid 4K colour and a slim, elegant design for your home.', variants: ['43 inch', '50 inch', '55 inch'], emiPlans: [{ months: 3, monthly: 14330, total: 42990, savings: 'No-cost EMI' }, { months: 6, monthly: 7165, total: 42990, savings: 'No-cost EMI' }] }
];

export async function getProducts(): Promise<Product[]> {
  await new Promise(resolve => setTimeout(resolve, 800));
  return products;
}
export async function getProduct(id: string): Promise<Product> {
  await new Promise(resolve => setTimeout(resolve, 350));
  const product = products.find(item => item.id === id);
  if (!product) throw new Error('This product is unavailable right now.');
  return product;
}
