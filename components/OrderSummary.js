import { StyleSheet, Text, View } from 'react-native';

// Menerima props `totalCount` (number) dari App. Props hanya dibaca, tidak diubah.
export default function OrderSummary({ totalCount }) {
  return (
    <View style={styles.container}>
      <Text style={styles.total}>Total Item Dipesan: {totalCount}</Text>
      {totalCount >= 5 && (
        <Text style={styles.promo}>🎉 Selamat! Anda Mendapatkan Diskon 10%</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EFEBE9',
    alignItems: 'center',
  },
  total: { fontSize: 18, fontWeight: '600', color: '#4E342E' },
  promo: { marginTop: 8, fontSize: 14, fontWeight: 'bold', color: '#2E7D32' },
});
