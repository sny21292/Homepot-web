// The app's categories (same list and colours as the Homepot app's
// src/constants/categories.ts), with their icons, for the website demos.
import { Bag, Bolt, Cap, Car, Cart, Heart, Home, Send, Trend, Utensils } from '@/components/Icons';

export const CATEGORIES = [
  { id: 'groceries', label: 'Groceries', color: '#2E7D32', Icon: Cart },
  { id: 'food', label: 'Food & Dining', color: '#EF6C00', Icon: Utensils },
  { id: 'shopping', label: 'Shopping', color: '#AD1457', Icon: Bag },
  { id: 'bills', label: 'Bills & Utilities', color: '#F9A825', Icon: Bolt },
  { id: 'fuel', label: 'Fuel & Transport', color: '#1565C0', Icon: Car },
  { id: 'rent_emi', label: 'Rent & Loans/EMI', color: '#6A1B9A', Icon: Home },
  { id: 'investments', label: 'Investments', color: '#00838F', Icon: Trend },
  { id: 'sent', label: 'Sent to Family/Others', color: '#5D4037', Icon: Send },
  { id: 'health', label: 'Health', color: '#C62828', Icon: Heart },
  { id: 'education', label: 'Education', color: '#283593', Icon: Cap },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]['id'];

export function category(id: CategoryId) {
  return CATEGORIES.find((c) => c.id === id)!;
}
