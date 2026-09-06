import { Text, TextStyle } from 'react-native';

const glyphs: Record<string, string> = {
  'arrow-forward': '→', 'arrow-back': '←', 'home-outline': '⌂', storefront: '♜',
  'receipt-outline': '▤', 'stats-chart-outline': '⌁', 'person-outline': '♙',
  'bag-handle': '▱', search: '⌕', 'chevron-forward': '›', 'alert-circle-outline': '!', checkmark: '✓'
};

export function Icon({ name, size = 20, color, style }: { name: string; size?: number; color: string; style?: TextStyle }) {
  return <Text style={[{ color, fontSize: size, fontWeight: '700', lineHeight: size + 4 }, style]}>{glyphs[name] ?? '•'}</Text>;
}
