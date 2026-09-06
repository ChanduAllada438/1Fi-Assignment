import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Icon } from './icon';

export const colors = { purple: '#7628E8', ink: '#13182A', muted: '#7B8090', canvas: '#F8F8FA', line: '#E7E5EB', lavender: '#F2EDFF' };

export function SectionLabel({ children }: { children: string }) {
  return <View style={styles.labelRow}><View style={styles.bar} /><Text style={styles.label}>{children}</Text></View>;
}
export function BottomNav() {
  const items: [string, string][] = [['home-outline', 'Home'], ['storefront', 'Shop'], ['receipt-outline', 'EMI Dues'], ['stats-chart-outline', 'Limit'], ['person-outline', 'Profile']];
  return <View style={styles.nav}>{items.map(([icon, text]) => <View key={text} style={styles.navItem}>{text === 'Shop' && <View style={styles.activeDash} />}<Icon name={icon} size={25} color={text === 'Shop' ? colors.purple : '#A4A8B2'} /><Text style={[styles.navText, text === 'Shop' && styles.activeText]}>{text}</Text></View>)}</View>;
}
export function PrimaryButton({ title, onPress }: { title: string; onPress: () => void }) { return <Pressable onPress={onPress} style={styles.button}><Text style={styles.buttonText}>{title}</Text><Icon name="arrow-forward" color="white" size={20} /></Pressable>; }
const styles = StyleSheet.create({
  labelRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 16 }, bar: { height: 30, width: 6, borderRadius: 5, backgroundColor: colors.purple }, label: { color: '#5C2AB8', fontSize: 15, fontWeight: '800', letterSpacing: 3 },
  nav: { position: 'absolute', height: 91, borderRadius: 45, left: 20, right: 20, bottom: 16, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-around', paddingTop: 14, shadowColor: '#222', shadowOpacity: .09, shadowRadius: 20, elevation: 8 }, navItem: { alignItems: 'center', minWidth: 52, gap: 4 }, activeDash: { width: 38, height: 5, borderRadius: 4, backgroundColor: colors.purple, position: 'absolute', top: -8 }, navText: { color: '#9AA0AC', fontSize: 12, fontWeight: '600' }, activeText: { color: colors.purple, fontWeight: '800' },
  button: { minHeight: 56, backgroundColor: colors.purple, borderRadius: 30, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 8 }, buttonText: { color: 'white', fontSize: 17, fontWeight: '800' }
});
