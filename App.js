import { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import OrderSummary from './components/OrderSummary';
import MenuItem from './components/MenuItem';

const DAFTAR_MENU = [
  { id: '1', nama: 'Kopi Susu Catnip', harga: 20000 },
  { id: '2', nama: 'Matcha Paw Latte', harga: 25000 },
  { id: '3', nama: 'Croissant Ikan Tuna', harga: 18000 },
];

export default function App() {
  // State global: total seluruh item yang sudah dipesan
  const [totalPesanan, setTotalPesanan] = useState(0);

  const handleTambahPesanan = () => {
    setTotalPesanan((prev) => prev + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.title}>🐱 Kafe Kucing</Text>
        <Text style={styles.subtitle}>Pilih menu favoritmu!</Text>
      </View>

      <OrderSummary totalCount={totalPesanan} />

      <ScrollView contentContainerStyle={styles.list}>
        {DAFTAR_MENU.map((item) => (
          <MenuItem
            key={item.id}
            nama={item.nama}
            harga={item.harga}
            onTambahPesanan={handleTambahPesanan}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF8F0', paddingTop: 40 },
  header: { alignItems: 'center', paddingVertical: 16 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#5D4037' },
  subtitle: { fontSize: 14, color: '#8D6E63', marginTop: 4 },
  list: { padding: 16 },
});
