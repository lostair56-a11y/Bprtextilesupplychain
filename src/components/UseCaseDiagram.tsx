export default function UseCaseDiagram() {
  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox="0 0 1200 800" className="w-full h-auto min-h-[600px]">
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#4B5563" />
          </marker>
        </defs>

        {/* System Boundary */}
        <rect
          x="250"
          y="50"
          width="700"
          height="700"
          fill="none"
          stroke="#9CA3AF"
          strokeWidth="2"
          strokeDasharray="5,5"
          rx="10"
        />
        <text x="600" y="85" textAnchor="middle" className="fill-gray-700">
          Sistem Procure-to-Produce (P2P)
        </text>

        {/* Actors on the left */}
        {/* Bagian Perencanaan Produksi */}
        <g id="actor-perencanaan">
          <ellipse cx="100" cy="140" rx="20" ry="10" fill="none" stroke="#3B82F6" strokeWidth="2" />
          <line x1="100" y1="150" x2="100" y2="190" stroke="#3B82F6" strokeWidth="2" />
          <line x1="100" y1="165" x2="75" y2="180" stroke="#3B82F6" strokeWidth="2" />
          <line x1="100" y1="165" x2="125" y2="180" stroke="#3B82F6" strokeWidth="2" />
          <line x1="100" y1="190" x2="75" y2="210" stroke="#3B82F6" strokeWidth="2" />
          <line x1="100" y1="190" x2="125" y2="210" stroke="#3B82F6" strokeWidth="2" />
          <text x="100" y="235" textAnchor="middle" className="fill-blue-700">
            Bagian
          </text>
          <text x="100" y="250" textAnchor="middle" className="fill-blue-700">
            Perencanaan
          </text>
        </g>

        {/* Bagian Produksi */}
        <g id="actor-produksi">
          <ellipse cx="100" cy="320" rx="20" ry="10" fill="none" stroke="#10B981" strokeWidth="2" />
          <line x1="100" y1="330" x2="100" y2="370" stroke="#10B981" strokeWidth="2" />
          <line x1="100" y1="345" x2="75" y2="360" stroke="#10B981" strokeWidth="2" />
          <line x1="100" y1="345" x2="125" y2="360" stroke="#10B981" strokeWidth="2" />
          <line x1="100" y1="370" x2="75" y2="390" stroke="#10B981" strokeWidth="2" />
          <line x1="100" y1="370" x2="125" y2="390" stroke="#10B981" strokeWidth="2" />
          <text x="100" y="415" textAnchor="middle" className="fill-green-700">
            Bagian
          </text>
          <text x="100" y="430" textAnchor="middle" className="fill-green-700">
            Produksi
          </text>
        </g>

        {/* Manajer Pembelian */}
        <g id="actor-pembelian">
          <ellipse cx="100" cy="500" rx="20" ry="10" fill="none" stroke="#F59E0B" strokeWidth="2" />
          <line x1="100" y1="510" x2="100" y2="550" stroke="#F59E0B" strokeWidth="2" />
          <line x1="100" y1="525" x2="75" y2="540" stroke="#F59E0B" strokeWidth="2" />
          <line x1="100" y1="525" x2="125" y2="540" stroke="#F59E0B" strokeWidth="2" />
          <line x1="100" y1="550" x2="75" y2="570" stroke="#F59E0B" strokeWidth="2" />
          <line x1="100" y1="550" x2="125" y2="570" stroke="#F59E0B" strokeWidth="2" />
          <text x="100" y="595" textAnchor="middle" className="fill-amber-700">
            Manajer
          </text>
          <text x="100" y="610" textAnchor="middle" className="fill-amber-700">
            Pembelian
          </text>
        </g>

        {/* Actors on the right */}
        {/* Direktur Keuangan */}
        <g id="actor-keuangan">
          <ellipse cx="1100" cy="280" rx="20" ry="10" fill="none" stroke="#8B5CF6" strokeWidth="2" />
          <line x1="1100" y1="290" x2="1100" y2="330" stroke="#8B5CF6" strokeWidth="2" />
          <line x1="1100" y1="305" x2="1075" y2="320" stroke="#8B5CF6" strokeWidth="2" />
          <line x1="1100" y1="305" x2="1125" y2="320" stroke="#8B5CF6" strokeWidth="2" />
          <line x1="1100" y1="330" x2="1075" y2="350" stroke="#8B5CF6" strokeWidth="2" />
          <line x1="1100" y1="330" x2="1125" y2="350" stroke="#8B5CF6" strokeWidth="2" />
          <text x="1100" y="375" textAnchor="middle" className="fill-purple-700">
            Direktur
          </text>
          <text x="1100" y="390" textAnchor="middle" className="fill-purple-700">
            Keuangan
          </text>
        </g>

        {/* Supplier */}
        <g id="actor-supplier">
          <ellipse cx="1100" cy="460" rx="20" ry="10" fill="none" stroke="#EF4444" strokeWidth="2" />
          <line x1="1100" y1="470" x2="1100" y2="510" stroke="#EF4444" strokeWidth="2" />
          <line x1="1100" y1="485" x2="1075" y2="500" stroke="#EF4444" strokeWidth="2" />
          <line x1="1100" y1="485" x2="1125" y2="500" stroke="#EF4444" strokeWidth="2" />
          <line x1="1100" y1="510" x2="1075" y2="530" stroke="#EF4444" strokeWidth="2" />
          <line x1="1100" y1="510" x2="1125" y2="530" stroke="#EF4444" strokeWidth="2" />
          <text x="1100" y="555" textAnchor="middle" className="fill-red-700">
            Supplier
          </text>
        </g>

        {/* Gudang & QC */}
        <g id="actor-gudang">
          <ellipse cx="1100" cy="640" rx="20" ry="10" fill="none" stroke="#06B6D4" strokeWidth="2" />
          <line x1="1100" y1="650" x2="1100" y2="690" stroke="#06B6D4" strokeWidth="2" />
          <line x1="1100" y1="665" x2="1075" y2="680" stroke="#06B6D4" strokeWidth="2" />
          <line x1="1100" y1="665" x2="1125" y2="680" stroke="#06B6D4" strokeWidth="2" />
          <line x1="1100" y1="690" x2="1075" y2="710" stroke="#06B6D4" strokeWidth="2" />
          <line x1="1100" y1="690" x2="1125" y2="710" stroke="#06B6D4" strokeWidth="2" />
          <text x="1100" y="735" textAnchor="middle" className="fill-cyan-700">
            Gudang & QC
          </text>
        </g>

        {/* Use Cases */}
        {/* P1 */}
        <ellipse cx="400" cy="150" rx="110" ry="40" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="2" />
        <text x="400" y="145" textAnchor="middle" className="fill-gray-900">
          P1: Perencanaan
        </text>
        <text x="400" y="160" textAnchor="middle" className="fill-gray-900">
          Kebutuhan Material
        </text>

        {/* P2 */}
        <ellipse cx="550" cy="280" rx="110" ry="40" fill="#F0FDF4" stroke="#10B981" strokeWidth="2" />
        <text x="550" y="275" textAnchor="middle" className="fill-gray-900">
          P2: Permintaan
        </text>
        <text x="550" y="290" textAnchor="middle" className="fill-gray-900">
          Pembelian
        </text>

        {/* P3 */}
        <ellipse cx="750" cy="280" rx="110" ry="40" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" />
        <text x="750" y="275" textAnchor="middle" className="fill-gray-900">
          P3: Persetujuan
        </text>
        <text x="750" y="290" textAnchor="middle" className="fill-gray-900">
          Pembelian
        </text>

        {/* P4 */}
        <ellipse cx="600" cy="430" rx="110" ry="40" fill="#FFF7ED" stroke="#F59E0B" strokeWidth="2" />
        <text x="600" y="425" textAnchor="middle" className="fill-gray-900">
          P4: Pemesanan ke
        </text>
        <text x="600" y="440" textAnchor="middle" className="fill-gray-900">
          Supplier (PO)
        </text>

        {/* P5 */}
        <ellipse cx="750" cy="580" rx="110" ry="40" fill="#ECFEFF" stroke="#06B6D4" strokeWidth="2" />
        <text x="750" y="575" textAnchor="middle" className="fill-gray-900">
          P5: Penerimaan &
        </text>
        <text x="750" y="590" textAnchor="middle" className="fill-gray-900">
          Pengecekan QC
        </text>

        {/* P6 */}
        <ellipse cx="450" cy="650" rx="110" ry="40" fill="#F0FDF4" stroke="#10B981" strokeWidth="2" />
        <text x="450" y="645" textAnchor="middle" className="fill-gray-900">
          P6: Penjadwalan &
        </text>
        <text x="450" y="660" textAnchor="middle" className="fill-gray-900">
          Produksi
        </text>

        {/* Relationships - Actors to Use Cases */}
        {/* Perencanaan to P1 */}
        <line x1="150" y1="170" x2="290" y2="150" stroke="#4B5563" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

        {/* Produksi to P2 */}
        <line x1="150" y1="350" x2="440" y2="285" stroke="#4B5563" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

        {/* Produksi to P6 */}
        <line x1="150" y1="380" x2="350" y2="630" stroke="#4B5563" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

        {/* Pembelian to P3 */}
        <line x1="150" y1="530" x2="645" y2="300" stroke="#4B5563" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

        {/* Pembelian to P4 */}
        <line x1="150" y1="540" x2="490" y2="435" stroke="#4B5563" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

        {/* Keuangan to P3 */}
        <line x1="1050" y1="310" x2="860" y2="285" stroke="#4B5563" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

        {/* Supplier to P4 */}
        <line x1="1050" y1="480" x2="710" y2="435" stroke="#4B5563" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

        {/* Gudang to P5 */}
        <line x1="1050" y1="660" x2="860" y2="590" stroke="#4B5563" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

        {/* Use Case Dependencies (include/extend) */}
        {/* P1 to P2 */}
        <line x1="500" y1="175" x2="540" y2="245" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
        <text x="520" y="200" className="fill-gray-500">«include»</text>

        {/* P2 to P3 */}
        <line x1="655" y1="280" x2="640" y2="280" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
        <text x="645" y="265" className="fill-gray-500">«include»</text>

        {/* P3 to P4 */}
        <line x1="710" y1="315" x2="650" y2="395" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
        <text x="670" y="350" className="fill-gray-500">«include»</text>

        {/* P4 to P5 */}
        <line x1="670" y1="460" x2="710" y2="545" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
        <text x="685" y="500" className="fill-gray-500">«include»</text>

        {/* P5 to P6 */}
        <line x1="650" y1="600" x2="555" y2="635" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
        <text x="600" y="610" className="fill-gray-500">«include»</text>
      </svg>
    </div>
  );
}
