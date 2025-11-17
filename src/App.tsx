import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Alert, AlertDescription } from './components/ui/alert';
import { AlertCircle, Package, TrendingDown, Clock } from 'lucide-react';
import CaseOverview from './components/CaseOverview';
import UseCaseDiagram from './components/UseCaseDiagram';
import BPMNDiagram from './components/BPMNDiagram';
import ProcessTable from './components/ProcessTable';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Package className="w-10 h-10 text-green-600" />
            <div>
              <h1 className="text-green-600">
                Rantai Pasok Manufaktur Tekstil
              </h1>
              <p className="text-gray-600">PT EcoGarmen Jaya - Analisis Proses Procure-to-Produce</p>
            </div>
          </div>
          
          <div className="flex gap-2 mt-4">
            <Badge variant="outline" className="bg-green-50 border-green-300">
              SDG 12: Konsumsi dan Produksi yang Bertanggung Jawab
            </Badge>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-red-100 rounded-lg">
                  <TrendingDown className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <p className="text-gray-600">Limbah Produksi</p>
                  <p className="text-red-600">18% dari bahan baku</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-gray-600">Siklus P2P Saat Ini</p>
                  <p className="text-orange-600">45 hari</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-600">Target Siklus P2P</p>
                  <p className="text-green-600">{'< 20 hari'}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="usecase">Use Case Diagram</TabsTrigger>
            <TabsTrigger value="bpmn">BPMN Diagram</TabsTrigger>
            <TabsTrigger value="process">Detail Proses</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <CaseOverview />
          </TabsContent>

          <TabsContent value="usecase">
            <Card>
              <CardHeader>
                <CardTitle>Use Case Diagram - Procure-to-Produce</CardTitle>
                <CardDescription>
                  Diagram ini menunjukkan aktor dan interaksi mereka dalam sistem P2P
                </CardDescription>
              </CardHeader>
              <CardContent>
                <UseCaseDiagram />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bpmn">
            <Card>
              <CardHeader>
                <CardTitle>BPMN Diagram - As-Is Process</CardTitle>
                <CardDescription>
                  Diagram alir proses dengan identifikasi bottleneck, handoff, dan redundancy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Alert className="mb-6 border-blue-200 bg-blue-50">
                  <AlertCircle className="h-4 w-4 text-blue-600" />
                  <AlertDescription>
                    <strong>Legenda:</strong>
                    <span className="ml-2 inline-flex items-center gap-4 flex-wrap mt-2">
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 bg-red-200 border-2 border-red-500 rounded"></span>
                        Bottleneck
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 bg-orange-200 border-2 border-orange-500 rounded"></span>
                        Handoff Tidak Perlu
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 bg-yellow-200 border-2 border-yellow-500 rounded"></span>
                        Redundancy
                      </span>
                    </span>
                  </AlertDescription>
                </Alert>
                <BPMNDiagram />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="process">
            <Card>
              <CardHeader>
                <CardTitle>Detail Proses As-Is</CardTitle>
                <CardDescription>
                  Tahapan proses dengan masalah dan kelemahan yang teridentifikasi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ProcessTable />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
