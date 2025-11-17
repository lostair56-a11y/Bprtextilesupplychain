import { useState } from 'react';

interface IssueMarker {
  x: number;
  y: number;
  type: 'bottleneck' | 'handoff' | 'redundancy';
  description: string;
}

export default function BPMNDiagram() {
  const [hoveredIssue, setHoveredIssue] = useState<string | null>(null);

  const issueMarkers: IssueMarker[] = [
    { x: 750, y: 395, type: 'bottleneck', description: 'Persetujuan manual 1-2 minggu - BOTTLENECK utama' },
    { x: 450, y: 295, type: 'handoff', description: 'Permintaan manual via Excel/email - Handoff tidak efisien' },
    { x: 1100, y: 705, type: 'redundancy', description: 'Pencatatan ganda: Gudang → QC → Sistem - REDUNDANCY' },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[1400px]">
        <svg viewBox="0 0 1600 950" className="w-full h-auto" style={{ minHeight: '700px' }}>
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#374151" />
            </marker>
            <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#DC2626" />
            </marker>
          </defs>

          {/* Main Pool Header */}
          <rect x="20" y="50" width="150" height="50" fill="#1E3A8A" rx="5" />
          <text x="95" y="80" textAnchor="middle" className="fill-white">
            PT EcoGarmen Jaya
          </text>

          {/* Swimlane 1: Perencanaan Produksi */}
          <rect x="20" y="100" width="150" height="120" fill="#3B82F6" rx="5" />
          <text x="95" y="155" textAnchor="middle" className="fill-white" transform="rotate(-90 95 155)">
            Perencanaan Produksi
          </text>
          <rect x="170" y="100" width="1410" height="120" fill="none" stroke="#3B82F6" strokeWidth="2" />

          {/* Swimlane 2: Bagian Produksi */}
          <rect x="20" y="220" width="150" height="120" fill="#10B981" rx="5" />
          <text x="95" y="275" textAnchor="middle" className="fill-white" transform="rotate(-90 95 275)">
            Bagian Produksi
          </text>
          <rect x="170" y="220" width="1410" height="120" fill="none" stroke="#10B981" strokeWidth="2" />

          {/* Swimlane 3: Manajer Pembelian & Keuangan */}
          <rect x="20" y="340" width="150" height="140" fill="#F59E0B" rx="5" />
          <text x="95" y="405" textAnchor="middle" className="fill-white" transform="rotate(-90 95 405)">
            Pembelian & Keuangan
          </text>
          <rect x="170" y="340" width="1410" height="140" fill="none" stroke="#F59E0B" strokeWidth="2" />

          {/* Swimlane 4: Bagian Pembelian */}
          <rect x="20" y="480" width="150" height="120" fill="#EF4444" rx="5" />
          <text x="95" y="535" textAnchor="middle" className="fill-white" transform="rotate(-90 95 535)">
            Bagian Pembelian
          </text>
          <rect x="170" y="480" width="1410" height="120" fill="none" stroke="#EF4444" strokeWidth="2" />

          {/* Swimlane 5: Supplier */}
          <rect x="20" y="600" width="150" height="120" fill="#8B5CF6" rx="5" />
          <text x="95" y="655" textAnchor="middle" className="fill-white" transform="rotate(-90 95 655)">
            Supplier
          </text>
          <rect x="170" y="600" width="1410" height="120" fill="none" stroke="#8B5CF6" strokeWidth="2" />

          {/* Swimlane 6: Gudang & QC */}
          <rect x="20" y="720" width="150" height="120" fill="#06B6D4" rx="5" />
          <text x="95" y="775" textAnchor="middle" className="fill-white" transform="rotate(-90 95 775)">
            Gudang & QC
          </text>
          <rect x="170" y="720" width="1410" height="120" fill="none" stroke="#06B6D4" strokeWidth="2" />

          {/* BPMN Process Flow */}
          
          {/* Start Event */}
          <circle cx="230" cy="160" r="22" fill="white" stroke="#1E3A8A" strokeWidth="3" />
          <text x="230" y="200" textAnchor="middle" className="fill-gray-700">Start</text>

          {/* P1: Perencanaan Kebutuhan Material */}
          <rect x="310" y="125" width="160" height="70" rx="10" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="2" />
          <text x="390" y="150" textAnchor="middle" className="fill-gray-900">
            P1: Perencanaan
          </text>
          <text x="390" y="167" textAnchor="middle" className="fill-gray-900">
            Kebutuhan Material
          </text>
          <text x="390" y="183" textAnchor="middle" className="fill-gray-600">
            (Manual, Forecast)
          </text>

          {/* Arrow Start to P1 */}
          <line x1="252" y1="160" x2="310" y2="160" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Arrow P1 to P2 (crosses to production lane) */}
          <line x1="470" y1="160" x2="520" y2="160" stroke="#374151" strokeWidth="2" />
          <line x1="520" y1="160" x2="520" y2="265" stroke="#374151" strokeWidth="2" />
          <line x1="520" y1="265" x2="560" y2="265" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* P2: Permintaan Pembelian - HANDOFF ISSUE */}
          <rect x="360" y="245" width="160" height="70" rx="10" fill="#FFEDD5" stroke="#F97316" strokeWidth="3" />
          <text x="440" y="268" textAnchor="middle" className="fill-gray-900">
            P2: Permintaan
          </text>
          <text x="440" y="285" textAnchor="middle" className="fill-gray-900">
            Pembelian
          </text>
          <text x="440" y="302" textAnchor="middle" className="fill-orange-700">
            (Excel/Email Manual)
          </text>

          {/* Arrow P2 to P3 (crosses to approval lane) */}
          <line x1="520" y1="280" x2="520" y2="330" stroke="#374151" strokeWidth="2" />
          <line x1="520" y1="330" x2="520" y2="395" stroke="#374151" strokeWidth="2" />
          <line x1="520" y1="395" x2="570" y2="395" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* P3: Persetujuan Pembelian - BOTTLENECK */}
          <rect x="570" y="360" width="180" height="70" rx="10" fill="#FEE2E2" stroke="#DC2626" strokeWidth="4" />
          <text x="660" y="383" textAnchor="middle" className="fill-gray-900">
            P3: Persetujuan
          </text>
          <text x="660" y="400" textAnchor="middle" className="fill-gray-900">
            Pembelian
          </text>
          <text x="660" y="417" textAnchor="middle" className="fill-red-700">
            ⚠ 1-2 minggu!
          </text>

          {/* Gateway (Decision Diamond) */}
          <path d="M 820 395 L 855 430 L 820 465 L 785 430 Z" fill="#FFF7ED" stroke="#F59E0B" strokeWidth="2" />
          <text x="820" y="435" textAnchor="middle" className="fill-gray-900">?</text>
          <text x="820" y="490" textAnchor="middle" className="fill-gray-700">Disetujui?</text>

          {/* Arrow P3 to Gateway */}
          <line x1="750" y1="395" x2="785" y2="395" stroke="#374151" strokeWidth="2" />
          <line x1="785" y1="395" x2="785" y2="430" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Arrow - Rejected (back to P2) */}
          <line x1="820" y1="465" x2="820" y2="490" stroke="#DC2626" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="820" y1="490" x2="440" y2="490" stroke="#DC2626" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="440" y1="490" x2="440" y2="315" stroke="#DC2626" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowRed)" />
          <text x="620" y="505" textAnchor="middle" className="fill-red-700">Tidak (Revisi)</text>

          {/* Arrow - Approved (to P4) */}
          <line x1="855" y1="430" x2="900" y2="430" stroke="#10B981" strokeWidth="2" />
          <line x1="900" y1="430" x2="900" y2="525" stroke="#10B981" strokeWidth="2" />
          <line x1="900" y1="525" x2="930" y2="525" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrow)" />
          <text x="865" y="425" className="fill-green-700">Ya</text>

          {/* P4: Pemesanan ke Supplier (PO) */}
          <rect x="930" y="490" width="160" height="70" rx="10" fill="#FFF7ED" stroke="#F59E0B" strokeWidth="2" />
          <text x="1010" y="513" textAnchor="middle" className="fill-gray-900">
            P4: Pemesanan
          </text>
          <text x="1010" y="530" textAnchor="middle" className="fill-gray-900">
            ke Supplier (PO)
          </text>
          <text x="1010" y="547" textAnchor="middle" className="fill-gray-600">
            (Manual ERP)
          </text>

          {/* Arrow P4 to Supplier */}
          <line x1="1010" y1="560" x2="1010" y2="590" stroke="#374151" strokeWidth="2" />
          <line x1="1010" y1="590" x2="1010" y2="645" stroke="#374151" strokeWidth="2" />
          <line x1="1010" y1="645" x2="1050" y2="645" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Supplier: Produksi & Pengiriman */}
          <rect x="1050" y="625" width="160" height="70" rx="10" fill="#F3E8FF" stroke="#8B5CF6" strokeWidth="2" />
          <text x="1130" y="648" textAnchor="middle" className="fill-gray-900">
            Produksi &
          </text>
          <text x="1130" y="665" textAnchor="middle" className="fill-gray-900">
            Pengiriman Bahan
          </text>
          <text x="1130" y="682" textAnchor="middle" className="fill-gray-600">
            (Supplier)
          </text>

          {/* Arrow Supplier to P5 */}
          <line x1="1130" y1="695" x2="1130" y2="730" stroke="#374151" strokeWidth="2" />
          <line x1="1130" y1="730" x2="1130" y2="765" stroke="#374151" strokeWidth="2" />
          <line x1="1130" y1="765" x2="1160" y2="765" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* P5: Penerimaan & Pengecekan QC - REDUNDANCY */}
          <rect x="1160" y="730" width="200" height="70" rx="10" fill="#FEF9C3" stroke="#EAB308" strokeWidth="4" />
          <text x="1260" y="753" textAnchor="middle" className="fill-gray-900">
            P5: Penerimaan &
          </text>
          <text x="1260" y="770" textAnchor="middle" className="fill-gray-900">
            Pengecekan Kualitas
          </text>
          <text x="1260" y="787" textAnchor="middle" className="fill-amber-700">
            ⚠ Pencatatan 3x!
          </text>

          {/* Arrow P5 back to Production for P6 */}
          <line x1="1160" y1="765" x2="700" y2="765" stroke="#374151" strokeWidth="2" />
          <line x1="700" y1="765" x2="700" y2="265" stroke="#374151" strokeWidth="2" />
          <line x1="700" y1="265" x2="730" y2="265" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* P6: Penjadwalan & Produksi */}
          <rect x="730" y="230" width="180" height="70" rx="10" fill="#F0FDF4" stroke="#10B981" strokeWidth="2" />
          <text x="820" y="253" textAnchor="middle" className="fill-gray-900">
            P6: Penjadwalan &
          </text>
          <text x="820" y="270" textAnchor="middle" className="fill-gray-900">
            Produksi
          </text>
          <text x="820" y="287" textAnchor="middle" className="fill-red-700">
            ⚠ 18% waste!
          </text>

          {/* Arrow P6 to End */}
          <line x1="910" y1="265" x2="970" y2="265" stroke="#374151" strokeWidth="2" />
          <line x1="970" y1="265" x2="970" y2="160" stroke="#374151" strokeWidth="2" />
          <line x1="970" y1="160" x2="1000" y2="160" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* End Event */}
          <circle cx="1030" cy="160" r="22" fill="white" stroke="#1E3A8A" strokeWidth="3" />
          <circle cx="1030" cy="160" r="18" fill="none" stroke="#1E3A8A" strokeWidth="3" />
          <text x="1030" y="200" textAnchor="middle" className="fill-gray-700">End</text>

          {/* Issue Markers with tooltip triggers */}
          {issueMarkers.map((marker, idx) => {
            const colors = {
              bottleneck: { bg: '#FEE2E2', border: '#DC2626', text: '#991B1B' },
              handoff: { bg: '#FFEDD5', border: '#F97316', text: '#9A3412' },
              redundancy: { bg: '#FEF9C3', border: '#EAB308', text: '#854D0E' }
            };

            return (
              <g key={idx}>
                <circle
                  cx={marker.x}
                  cy={marker.y}
                  r="18"
                  fill={colors[marker.type].bg}
                  stroke={colors[marker.type].border}
                  strokeWidth="3"
                  className="cursor-pointer transition-all hover:r-20"
                  onMouseEnter={() => setHoveredIssue(marker.description)}
                  onMouseLeave={() => setHoveredIssue(null)}
                />
                <text
                  x={marker.x}
                  y={marker.y + 6}
                  textAnchor="middle"
                  className="pointer-events-none"
                  fill={colors[marker.type].text}
                >
                  !
                </text>
              </g>
            );
          })}

          {/* Time Indicators */}
          <g transform="translate(1250, 120)">
            <rect x="0" y="0" width="280" height="160" fill="#F9FAFB" stroke="#D1D5DB" strokeWidth="2" rx="8" />
            <text x="140" y="25" textAnchor="middle" className="fill-gray-900">
              ⏱ Waktu Siklus P2P
            </text>
            
            <text x="10" y="50" className="fill-gray-700">As-Is (Saat Ini):</text>
            <text x="270" y="50" textAnchor="end" className="fill-red-700">45 hari</text>
            
            <rect x="10" y="60" width="260" height="8" fill="#FEE2E2" rx="4" />
            <rect x="10" y="60" width="260" height="8" fill="#DC2626" rx="4" />
            
            <text x="10" y="90" className="fill-gray-700">Target (To-Be):</text>
            <text x="270" y="90" textAnchor="end" className="fill-green-700">{'< 20 hari'}</text>
            
            <rect x="10" y="100" width="260" height="8" fill="#D1FAE5" rx="4" />
            <rect x="10" y="100" width="110" height="8" fill="#10B981" rx="4" />
            
            <text x="10" y="130" className="fill-gray-600">Potensi Penghematan:</text>
            <text x="270" y="130" textAnchor="end" className="fill-blue-700">25+ hari (56%)</text>
            
            <text x="10" y="150" className="fill-gray-600">Pengurangan Limbah:</text>
            <text x="270" y="150" textAnchor="end" className="fill-green-700">18% → {'< 5%'}</text>
          </g>

          {/* Legend */}
          <g transform="translate(1250, 320)">
            <rect x="0" y="0" width="280" height="150" fill="#F9FAFB" stroke="#D1D5DB" strokeWidth="2" rx="8" />
            <text x="10" y="25" className="fill-gray-900">Legenda Isu:</text>
            
            <circle cx="25" cy="50" r="12" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2" />
            <text x="25" y="55" textAnchor="middle" className="fill-red-900">!</text>
            <text x="50" y="55" className="fill-gray-700">Bottleneck - Hambatan waktu kritis</text>
            
            <circle cx="25" cy="85" r="12" fill="#FFEDD5" stroke="#F97316" strokeWidth="2" />
            <text x="25" y="90" textAnchor="middle" className="fill-orange-900">!</text>
            <text x="50" y="90" className="fill-gray-700">Handoff - Transfer manual tidak efisien</text>
            
            <circle cx="25" cy="120" r="12" fill="#FEF9C3" stroke="#EAB308" strokeWidth="2" />
            <text x="25" y="125" textAnchor="middle" className="fill-yellow-900">!</text>
            <text x="50" y="125" className="fill-gray-700">Redundancy - Duplikasi proses/data</text>
          </g>
        </svg>

        {/* Hover Information Display */}
        {hoveredIssue && (
          <div className="mt-6 p-4 bg-blue-50 border-2 border-blue-300 rounded-lg shadow-md">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-100 rounded-full">
                <svg className="w-5 h-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-blue-900">{hoveredIssue}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
