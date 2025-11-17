import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { AlertCircle, Clock, Repeat, ArrowRightLeft } from 'lucide-react';

interface ProcessStep {
  id: string;
  title: string;
  department: string;
  problems: string;
  issueType: 'bottleneck' | 'handoff' | 'redundancy' | 'inefficiency' | null;
}

export default function ProcessTable() {
  const processes: ProcessStep[] = [
    {
      id: 'P1',
      title: 'Perencanaan Kebutuhan (Material Requirement Planning)',
      department: 'Bagian Perencanaan Produksi',
      problems: 'Berbasis Forecast Manual. Perencanaan dilakukan bulanan berdasarkan perkiraan penjualan masa lalu. Tidak terhubung langsung dengan data inventori kain real-time. Hasilnya adalah perbedaan besar antara kebutuhan aktual dan pesanan.',
      issueType: 'inefficiency'
    },
    {
      id: 'P2',
      title: 'Permintaan Pembelian (Purchase Requisition)',
      department: 'Bagian Produksi',
      problems: 'Permintaan Mendesak & Manual. Permintaan diajukan di spreadsheet (Excel) yang dikirim melalui email ke Bagian Pembelian. Seringkali permintaan ini mendadak (rush order) karena stok habis (kehabisan kain).',
      issueType: 'handoff'
    },
    {
      id: 'P3',
      title: 'Persetujuan Pembelian',
      department: 'Manajer Pembelian & Direktur Keuangan',
      problems: 'Persetujuan Bertingkat & Lambat. Persetujuan fisik (tanda tangan manual) yang memakan waktu 1-2 minggu karena Manajer Keuangan sering bepergian. Ini adalah bottleneck utama yang memperpanjang siklus P2P.',
      issueType: 'bottleneck'
    },
    {
      id: 'P4',
      title: 'Pemesanan ke Supplier (Purchase Order)',
      department: 'Bagian Pembelian',
      problems: 'Supplier Terbatas & Tidak Terintegrasi. PO dibuat manual di sistem ERP stand-alone Pembelian, lalu dikirim ke supplier. Tidak ada koneksi otomatis untuk memantau status produksi di supplier.',
      issueType: 'inefficiency'
    },
    {
      id: 'P5',
      title: 'Penerimaan & Pengecekan Kualitas',
      department: 'Gudang & QC',
      problems: 'Pencatatan Ganda. Setelah material datang, Gudang mencatat di kartu stok, lalu QC mengecek, dan datanya diinput lagi secara terpisah di sistem inventori. Rentan terhadap kesalahan input dan data inventori tidak real-time.',
      issueType: 'redundancy'
    },
    {
      id: 'P6',
      title: 'Penjadwalan & Produksi',
      department: 'Bagian Produksi',
      problems: 'Pemotongan Tidak Efisien. Kain dipotong berdasarkan pesanan. Sisa-sisa potongan (scraps) yang seharusnya bisa dimanfaatkan (di bawah 18%) dibuang karena tidak ada sistem terpusat yang melacak sisa bahan per model.',
      issueType: 'inefficiency'
    }
  ];

  const getIssueIcon = (type: string | null) => {
    switch (type) {
      case 'bottleneck':
        return <Clock className="w-4 h-4 text-red-600" />;
      case 'handoff':
        return <ArrowRightLeft className="w-4 h-4 text-orange-600" />;
      case 'redundancy':
        return <Repeat className="w-4 h-4 text-yellow-600" />;
      case 'inefficiency':
        return <AlertCircle className="w-4 h-4 text-blue-600" />;
      default:
        return null;
    }
  };

  const getIssueBadge = (type: string | null) => {
    switch (type) {
      case 'bottleneck':
        return <Badge variant="destructive">Bottleneck</Badge>;
      case 'handoff':
        return <Badge className="bg-orange-500 hover:bg-orange-600">Handoff</Badge>;
      case 'redundancy':
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">Redundancy</Badge>;
      case 'inefficiency':
        return <Badge variant="outline" className="border-blue-500 text-blue-700">Inefficiency</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-20">Tahap</TableHead>
            <TableHead className="w-64">Proses</TableHead>
            <TableHead className="w-48">Pelaksana/Departemen</TableHead>
            <TableHead>Masalah & Kelemahan Proses</TableHead>
            <TableHead className="w-32">Jenis Isu</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {processes.map((process) => (
            <TableRow key={process.id} className={
              process.issueType === 'bottleneck' ? 'bg-red-50' :
              process.issueType === 'handoff' ? 'bg-orange-50' :
              process.issueType === 'redundancy' ? 'bg-yellow-50' :
              ''
            }>
              <TableCell>
                <Badge variant="outline" className="font-mono">{process.id}</Badge>
              </TableCell>
              <TableCell className="text-gray-900">{process.title}</TableCell>
              <TableCell className="text-gray-700">{process.department}</TableCell>
              <TableCell className="text-gray-600">{process.problems}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  {getIssueIcon(process.issueType)}
                  {getIssueBadge(process.issueType)}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <div className="border border-red-200 bg-red-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-red-600" />
            <h4 className="text-red-900">Bottleneck</h4>
          </div>
          <p className="text-gray-700">Persetujuan pembelian manual (P3) memakan waktu 1-2 minggu</p>
        </div>

        <div className="border border-orange-200 bg-orange-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <ArrowRightLeft className="w-5 h-5 text-orange-600" />
            <h4 className="text-orange-900">Handoff</h4>
          </div>
          <p className="text-gray-700">Permintaan manual via Excel/email antar departemen (P2)</p>
        </div>

        <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Repeat className="w-5 h-5 text-yellow-600" />
            <h4 className="text-yellow-900">Redundancy</h4>
          </div>
          <p className="text-gray-700">Pencatatan ganda di 3 sistem berbeda (P5)</p>
        </div>

        <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-5 h-5 text-blue-600" />
            <h4 className="text-blue-900">Waste</h4>
          </div>
          <p className="text-gray-700">18% limbah produksi karena tracking sisa bahan buruk (P6)</p>
        </div>
      </div>
    </div>
  );
}
