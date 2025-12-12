// Data materi pembelajaran
const materiData = [
    {
        id: 1,
        judul: "Pengenalan HTML",
        kategori: "Web Development",
        deskripsi: "Pelajari dasar-dasar HTML untuk membuat struktur halaman web",
        konten: `
            <h3>Apa itu HTML?</h3>
            <p>HTML (HyperText Markup Language) adalah bahasa markup standar untuk membuat halaman web.</p>
            
            <h3>Struktur Dasar HTML</h3>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Judul Halaman&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Heading Pertama&lt;/h1&gt;
    &lt;p&gt;Paragraf pertama.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
            
            <h3>Elemen HTML Penting</h3>
            <ul>
                <li><code>&lt;h1&gt; - &lt;h6&gt;</code> untuk heading</li>
                <li><code>&lt;p&gt;</code> untuk paragraf</li>
                <li><code>&lt;a&gt;</code> untuk link</li>
                <li><code>&lt;img&gt;</code> untuk gambar</li>
                <li><code>&lt;div&gt;</code> untuk pembungkus</li>
            </ul>
        `
    },
    {
        id: 2,
        judul: "Dasar CSS",
        kategori: "Web Development",
        deskripsi: "Pelajari cara mendesain halaman web dengan CSS",
        konten: `
            <h3>Pengenalan CSS</h3>
            <p>CSS (Cascading Style Sheets) digunakan untuk mengatur tampilan elemen HTML.</p>
            
            <h3>Cara Menggunakan CSS</h3>
            <p>Ada 3 cara menggunakan CSS:</p>
            <ol>
                <li>Inline CSS: Langsung di elemen HTML</li>
                <li>Internal CSS: Dalam tag &lt;style&gt; di head</li>
                <li>External CSS: File CSS terpisah</li>
            </ol>
            
            <h3>Contoh CSS</h3>
            <pre><code>body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

h1 {
    color: blue;
    text-align: center;
}

.container {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
}</code></pre>
        `
    },
    {
        id: 3,
        judul: "JavaScript Dasar",
        kategori: "Programming",
        deskripsi: "Pelajari dasar pemrograman dengan JavaScript",
        konten: `
            <h3>Apa itu JavaScript?</h3>
            <p>JavaScript adalah bahasa pemrograman untuk membuat halaman web interaktif.</p>
            
            <h3>Variabel di JavaScript</h3>
            <pre><code>// Deklarasi variabel
let nama = "Andi";
const umur = 20;
var kota = "Jakarta";

// Menampilkan ke konsol
console.log("Halo, " + nama);</code></pre>
            
            <h3>Fungsi di JavaScript</h3>
            <pre><code>// Membuat fungsi
function sapa(nama) {
    return "Halo, " + nama + "!";
}

// Memanggil fungsi
let pesan = sapa("Budi");
console.log(pesan); // Output: Halo, Budi!</code></pre>
            
            <h3>Tipe Data</h3>
            <ul>
                <li>String: teks</li>
                <li>Number: angka</li>
                <li>Boolean: true/false</li>
                <li>Array: kumpulan data</li>
                <li>Object: data terstruktur</li>
            </ul>
        `
    },
    {
        id: 4,
        judul: "Responsive Design",
        kategori: "Web Design",
        deskripsi: "Pelajari cara membuat website yang responsif",
        konten: `
            <h3>Apa itu Responsive Design?</h3>
            <p>Responsive design adalah pendekatan desain web yang membuat website terlihat baik di semua perangkat.</p>
            
            <h3>Viewport Meta Tag</h3>
            <pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></pre>
            
            <h3>Media Queries</h3>
            <pre><code>/* Untuk desktop */
.container {
    width: 1200px;
}

/* Untuk tablet */
@media (max-width: 768px) {
    .container {
        width: 95%;
    }
}

/* Untuk smartphone */
@media (max-width: 480px) {
    .container {
        width: 100%;
        padding: 10px;
    }
}</code></pre>
            
            <h3>Tips Responsive Design</h3>
            <ol>
                <li>Gunakan unit relatif (%, em, rem)</li>
                <li>Gunakan flexbox atau grid</li>
                <li>Optimalkan gambar</li>
                <li>Uji di berbagai perangkat</li>
            </ol>
        `
    },
    {
        id: 5,
        judul: "Git dan GitHub",
        kategori: "Version Control",
        deskripsi: "Pelajari dasar version control dengan Git",
        konten: `
            <h3>Apa itu Git?</h3>
            <p>Git adalah sistem version control untuk melacak perubahan kode.</p>
            
            <h3>Perintah Git Dasar</h3>
            <pre><code># Inisialisasi repository
git init

# Menambahkan file
git add .

# Commit perubahan
git commit -m "Pesan commit"

# Mengecek status
git status

# Melihat history
git log</code></pre>
            
            <h3>GitHub</h3>
            <p>GitHub adalah platform untuk menyimpan repository Git di cloud.</p>
            
            <h3>Workflow Dasar</h3>
            <ol>
                <li>Clone repository</li>
                <li>Buat branch baru</li>
                <li>Commit perubahan</li>
                <li>Push ke GitHub</li>
                <li>Buat pull request</li>
            </ol>
        `
    },
    {
        id: 6,
        judul: "Algoritma Dasar",
        kategori: "Computer Science",
        deskripsi: "Pelajari konsep dasar algoritma dan pemecahan masalah",
        konten: `
            <h3>Apa itu Algoritma?</h3>
            <p>Algoritma adalah langkah-langkah logis untuk menyelesaikan masalah.</p>
            
            <h3>Karakteristik Algoritma</h3>
            <ul>
                <li>Input: menerima data masukan</li>
                <li>Proses: langkah-langkah penyelesaian</li>
                <li>Output: menghasilkan hasil</li>
                <li>Efektif: setiap langkah dapat dilakukan</li>
                <li>Terbatas: berakhir setelah langkah selesai</li>
            </ul>
            
            <h3>Contoh Algoritma: Mencari Nilai Terbesar</h3>
            <pre><code>Algoritma MencariNilaiTerbesar
1. Mulai
2. Input n (banyak data)
3. Input data[1], data[2], ..., data[n]
4. Set maks = data[1]
5. Untuk i = 2 sampai n
    5.1 Jika data[i] > maks maka
        5.1.1 Set maks = data[i]
6. Tampilkan maks
7. Selesai</code></pre>
            
            <h3>Jenis-jenis Algoritma</h3>
            <ul>
                <li>Algoritma sequential</li>
                <li>Algoritma percabangan</li>
                <li>Algoritma perulangan</li>
            </ul>
        `
    }
];

// Fungsi untuk menampilkan daftar materi
function tampilkanDaftarMateri() {
    const materiList = document.getElementById('materi-list');
    materiList.innerHTML = '';
    
    materiData.forEach(materi => {
        const card = document.createElement('div');
        card.className = 'materi-card';
        card.innerHTML = `
            <div class="materi-card-header">
                <h3>${materi.judul}</h3>
                <span>${materi.kategori}</span>
            </div>
            <div class="materi-card-body">
                <p>${materi.deskripsi}</p>
                <button class="btn-buka" onclick="bukaMateri(${materi.id})">
                    Buka Materi <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;
        materiList.appendChild(card);
    });
}

// Fungsi untuk membuka detail materi
function bukaMateri(id) {
    // Sembunyikan daftar materi
    document.getElementById('materi').style.display = 'none';
    document.getElementById('tentang').style.display = 'none';
    
    // Tampilkan detail materi
    const detailSection = document.getElementById('materi-detail');
    detailSection.style.display = 'block';
    
    // Cari materi berdasarkan ID
    const materi = materiData.find(m => m.id === id);
    
    // Tampilkan detail materi
    document.getElementById('detail-judul').textContent = materi.judul;
    document.getElementById('detail-konten').innerHTML = materi.konten;
    
    // Scroll ke atas
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Fungsi untuk kembali ke daftar materi
function kembaliKeDaftar() {
    // Tampilkan daftar materi
    document.getElementById('materi').style.display = 'block';
    document.getElementById('tentang').style.display = 'block';
    
    // Sembunyikan detail materi
    document.getElementById('materi-detail').style.display = 'none';
    
    // Scroll ke bagian materi
    document.getElementById('materi').scrollIntoView({behavior: 'smooth'});
}

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    tampilkanDaftarMateri();
    
    // Smooth scroll untuk navigasi
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if(this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if(targetElement) {
                    targetElement.scrollIntoView({behavior: 'smooth'});
                    
                    // Update active nav
                    document.querySelectorAll('nav a').forEach(a => {
                        a.classList.remove('active');
                    });
                    this.classList.add('active');
                }
            }
        });
    });
});