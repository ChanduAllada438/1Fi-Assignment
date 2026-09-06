import { router, useLocalSearchParams } from 'expo-router';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { colors, PrimaryButton } from '@/components/ui';
import { Icon } from '@/components/icon';

export default function SuccessScreen() {
  const { product, months, amount } = useLocalSearchParams<{ product: string; months: string; amount: string }>();
  return <SafeAreaView style={s.safe}><View style={s.center}><View style={s.icon}><Icon name="checkmark" size={48} color="white" /></View><Text style={s.eyebrow}>PLAN SELECTED</Text><Text style={s.title}>You’re all set!</Text><Text style={s.copy}>{product} will be paid in {months} no-cost monthly instalments of ₹{Number(amount).toLocaleString('en-IN')}.</Text></View><View style={s.button}><PrimaryButton title="Back to Marketplace" onPress={() => router.replace('/')} /></View></SafeAreaView>;
}
const s = StyleSheet.create({ safe: { flex: 1, backgroundColor: colors.canvas, justifyContent: 'space-between' }, center: { alignItems: 'center', paddingHorizontal: 34, marginTop: 170 }, icon: { height: 92, width: 92, borderRadius: 46, backgroundColor: colors.purple, alignItems: 'center', justifyContent: 'center', shadowColor: colors.purple, shadowOpacity: .3, shadowRadius: 18 }, eyebrow: { color: '#6A2BC3', fontWeight: '800', letterSpacing: 3, fontSize: 13, marginTop: 30 }, title: { color: colors.ink, fontSize: 31, fontWeight: '800', marginTop: 10 }, copy: { color: colors.muted, fontSize: 16, textAlign: 'center', lineHeight: 24, marginTop: 13 }, button: { padding: 20, paddingBottom: 34 } });
