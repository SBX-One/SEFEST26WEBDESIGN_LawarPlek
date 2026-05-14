import express from 'express';
import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const KERANJANG_PATH = path.join(__dirname, '../Keranjang.json');

// Fungsi baca Keranjang.json
function readKeranjang() {
    try {
        const data = fs.readFileSync(KERANJANG_PATH, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

// Fungsi simpan ke Keranjang.json
function writeKeranjang(data) {
    fs.writeFileSync(KERANJANG_PATH, JSON.stringify(data, null, 4));
}

// POST: Tambah item ke keranjang
app.post('/api/keranjang', (req, res) => {
    try {

        console.log(req.body);
        // Accept both 'nama' dan 'namaBarang' field
        const { id, nama, namaBarang, harga, jumlah, variant } = req.body;
        const namaItem = nama || namaBarang;

        // Validasi input
        if (!id || !namaItem || !harga || !variant) {
            return res.status(400).json({ error: 'Data tidak lengkap' });
        }

        // Baca keranjang yang sudah ada
        let keranjang = readKeranjang();

        // Cek apakah item sudah ada di keranjang
        const existingItem = keranjang.find(item => item.id === id && item.variant === variant);

        if (existingItem) {
            // Jika sudah ada, update jumlahnya
            existingItem.jumlah = (existingItem.jumlah || 1) + (jumlah || 1);
        } else {
            // Jika belum ada, tambah item baru
            keranjang.push({
                id: id,
                namaBarang: namaItem,
                variant: variant,
                harga: harga,
                jumlah: jumlah || 1
            });
        }

        // Simpan ke file
        writeKeranjang(keranjang);

        res.json({ 
            success: true, 
            message: 'Item berhasil ditambahkan ke keranjang',
            keranjang: keranjang
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET: Ambil semua item keranjang
app.get('/api/keranjang', (req, res) => {
    try {
        const keranjang = readKeranjang();
        res.json(keranjang);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE: Hapus item dari keranjang
app.delete('/api/keranjang/:id/:variant', (req, res) => {
    try {
        const { id, variant } = req.params;
        let keranjang = readKeranjang();

        keranjang = keranjang.filter(item => !(String(item.id) === id && item.variant === variant));
        writeKeranjang(keranjang);

        res.json({ 
            success: true, 
            message: 'Item berhasil dihapus',
            keranjang: keranjang
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT: Update jumlah item
app.put('/api/keranjang/:id/:variant', (req, res) => {
    try {
        const { id, variant } = req.params;
        const { jumlah } = req.body;
        
        let keranjang = readKeranjang();
        const item = keranjang.find(item => String(item.id) === id && item.variant === variant);

        if (!item) {
            return res.status(404).json({ error: 'Item tidak ditemukan' });
        }

        if (jumlah <= 0) {
            keranjang = keranjang.filter(i => !(String(i.id) === id && i.variant === variant));
        } else {
            item.jumlah = jumlah;
        }

        writeKeranjang(keranjang);

        res.json({ 
            success: true, 
            message: 'Item berhasil diupdate',
            keranjang: keranjang
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Tambah item baru
app.post('/api/keranjang', (req, res) => {
    const { id, namaBarang, variant, harga, jumlah } = req.body;
    // logika simpan ke json...
    res.json({ success: true })
})

// Update jumlah
app.patch('/api/keranjang/:id', (req, res) => {
    const { id } = req.params;
    const { jumlah } = req.body;
    // logika update jumlah berdasarkan id...
    res.json({ success: true })
})

// Hapus item
app.delete('/api/keranjang/:id', (req, res) => {
    const { id } = req.params;
    // logika hapus berdasarkan id...
    res.json({ success: true })
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});

export default app;
