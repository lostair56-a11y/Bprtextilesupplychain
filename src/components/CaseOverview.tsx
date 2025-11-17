import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Target, AlertTriangle, TrendingUp } from 'lucide-react';

export default function CaseOverview() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
            Isu Utama
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-gray-900 mb-2">Waste Management & Inefisiensi Inventori</h3>
            <p className="text-gray-600">
              PT EcoGarmen Jaya mengalami tingkat limbah kain (sampah produksi) sebesar <strong>18% dari total bahan baku</strong>, 
              dan waktu siklus Procure-to-Pay (P2P) untuk bahan baku mencapai <strong>45 hari</strong>.
            </p>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <p className="text-gray-700">
              Perencanaan produksi terpisah dari data inventaris dan pembelian, menyebabkan 
              <strong> pembelian berlebihan dan penumpukan limbah</strong>.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-green-600" />
            Tujuan BPR (Business Process Reengineering)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="text-green-900 mb-2">Target SDG 12.5</h4>
              <p className="text-gray-700">
                Mengurangi limbah produksi melalui integrasi perencanaan material dan produksi
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="text-blue-900 mb-2">Efisiensi Siklus</h4>
              <p className="text-gray-700">
                Memperpendek waktu siklus P2P dari 45 hari menjadi <strong>{'< 20 hari'}</strong>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            Proses Utama: Procure-to-Produce (P2P)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-gray-600 mb-4">
              Alur proses dari perencanaan hingga produksi:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { num: 'P1', title: 'Perencanaan Kebutuhan Bahan Baku', dept: 'Perencanaan Produksi' },
                { num: 'P2', title: 'Permintaan Pembelian', dept: 'Produksi' },
                { num: 'P3', title: 'Persetujuan Pembelian', dept: 'Manajemen & Keuangan' },
                { num: 'P4', title: 'Pemesanan ke Supplier', dept: 'Pembelian' },
                { num: 'P5', title: 'Penerimaan & QC', dept: 'Gudang & QC' },
                { num: 'P6', title: 'Penjadwalan & Produksi', dept: 'Produksi' },
              ].map((step) => (
                <div key={step.num} className="border border-gray-200 rounded-lg p-3">
                  <Badge variant="outline" className="mb-2">{step.num}</Badge>
                  <h4 className="text-gray-900 mb-1">{step.title}</h4>
                  <p className="text-gray-500">{step.dept}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-red-200 bg-red-50">
        <CardHeader>
          <CardTitle className="text-red-900">Masalah Kritis Teridentifikasi</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex gap-2">
              <span className="text-red-600">•</span>
              <span className="text-gray-700">
                <strong>Bottleneck:</strong> Persetujuan pembelian manual memakan waktu 1-2 minggu (P3)
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-600">•</span>
              <span className="text-gray-700">
                <strong>Redundancy:</strong> Pencatatan ganda di gudang, QC, dan sistem inventori (P5)
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-600">•</span>
              <span className="text-gray-700">
                <strong>Handoff:</strong> Permintaan manual via Excel/email antara departemen (P2)
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-600">•</span>
              <span className="text-gray-700">
                <strong>Inefisiensi:</strong> Tidak ada sistem pelacakan sisa bahan untuk mengurangi waste (P6)
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
