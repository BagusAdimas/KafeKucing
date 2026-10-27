import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Props: nama (string), harga (number), onTambahPesanan (function callback)
export default function MenuItem({ nama, harga, onTambahPesanan }) {
  // State mandiri: jumlah pesanan khusus menu ini
  const [qty, setQty] = useState(0);

  const handlePress = () => {
    setQty(qty + 1); // a. naikkan state internal qty sebanyak +1
    onTambahPesanan(); // b. beri tahu parent agar totalPesanan bertambah +1
  };

  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.nama}>{nama}</Text>
        <Text style={styles.harga}>Rp {harga.toLocaleString('id-ID')}</Text>
        <Text style={styles.qty}>Dipesan: {qty}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Tambah Pesanan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#EFEBE9',
  },
  info: { flex: 1, paddingRight: 12 },
  nama: { fontSize: 16, fontWeight: 'bold', color: '#4E342E' },
  harga: { fontSize: 14, color: '#6D4C41', marginTop: 2 },
  qty: { fontSize: 13, color: '#8D6E63', marginTop: 6 },
  button: {
    backgroundColor: '#8D6E63',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  buttonText: { color: '#FFFFFF', fontWeight: '600', fontSize: 13 },
});
