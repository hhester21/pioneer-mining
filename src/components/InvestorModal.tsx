"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lock, Zap, Shield, TrendingUp, DollarSign, Calculator, Mail } from "lucide-react"

const INVESTOR_PASSWORD = "BitcoinMining2026"

export default function InvestorModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState("")

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === INVESTOR_PASSWORD) {
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Incorrect password")
      setPassword("")
    }
  }

  const handleClose = () => {
    setIsOpen(false)
    setIsAuthenticated(false)
    setPassword("")
    setError("")
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-slate-900 hover:bg-slate-800 text-white border border-orange-500">
          <Lock className="w-4 h-4 mr-2" />
          For Investors
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        {!isAuthenticated ? (
          <div className="p-8 text-center">
            <DialogHeader>
              <DialogTitle className="text-2xl mb-4">Investor Access</DialogTitle>
            </DialogHeader>
            <div className="max-w-md mx-auto">
              <p className="text-slate-600 mb-6">
                This section contains confidential investment information. Please enter the access code to continue.
              </p>
              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <Input
                  type="password"
                  placeholder="Enter access code"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-center"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                  Access Investor Information
                </Button>
              </form>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <DialogHeader>
              <DialogTitle className="text-3xl text-center">50 MW Bitcoin Mining Facility</DialogTitle>
              <p className="text-xl text-center text-slate-600">Institutional-Grade Digital Asset Infrastructure Investment</p>
            </DialogHeader>

            {/* Executive Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-orange-600">Executive Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-4">
                  Pioneer Miners is leading the future of bitcoin mining through focused partnerships and efficient operations.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <p className="text-sm">Working with a Fortune 100 Company with substantial excess capacity power as a secure, reliable, low-cost power provider.</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <p className="text-sm">Leasing four acres using power infrastructure installed in 2025.</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <p className="text-sm">Deploying high-efficiency, low-maintenance equipment designed for longevity.</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <p className="text-sm">2.5-2.8 eH/s of mining capacity, mining over 40 BTC per month starting Q2 2026.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bitcoin Investment Thesis */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-orange-600">Bitcoin Investment Thesis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <h4 className="font-semibold mb-2">Scarcity Driven Value</h4>
                    <p className="text-sm text-slate-600">Fixed supply of 21 million coins creates inherent deflationary pressure and long-term value appreciation potential.</p>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <Shield className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <h4 className="font-semibold mb-2">Institutional Momentum</h4>
                    <p className="text-sm text-slate-600">Corporations and financial institutions integrating Bitcoin into treasury strategies and investment portfolios.</p>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <DollarSign className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <h4 className="font-semibold mb-2">Inflation Hedge</h4>
                    <p className="text-sm text-slate-600">Digital gold alternative providing protection against currency devaluation and monetary policy risks.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technical Specifications */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-orange-600">Technical Specifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Badge variant="outline" className="mb-2">Power</Badge>
                      <p className="text-sm"><strong>50 MW</strong> with 7-year PPA + (2) 7-year extensions</p>
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2">Cost</Badge>
                      <p className="text-sm"><strong>$0.048–$0.052/kWh</strong> (fixed turbine, hedged natural gas)</p>
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2">Deployment</Badge>
                      <p className="text-sm"><strong>18 UL-listed containers</strong> on secured 4-acre facility</p>
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2">Mining Capacity</Badge>
                      <p className="text-sm"><strong>6,000 immersion-cooled miners</strong> (~2.5 EH/s)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-orange-600">Investment Structure</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Badge variant="outline" className="mb-2">Capital Budget</Badge>
                      <p className="text-sm font-semibold text-lg">$50M Total</p>
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2">Preferred Equity</Badge>
                      <p className="text-sm font-semibold text-lg">$20M</p>
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2">Mixed Equity/Debt</Badge>
                      <p className="text-sm font-semibold text-lg">$20-30M</p>
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2">Preferred Return</Badge>
                      <p className="text-sm font-semibold text-lg">8%</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p>• Returns available in $USD or BTC</p>
                    <p>• 3YR min. hold, &lt;6 yr Capital Return</p>
                    <p>• 100% depreciation at start up for LP investors</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Financial Projections */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-orange-600">Investment Highlights - Net Operating Margin</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-4">24 Month Projections</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                        <span className="text-sm">Low ($50K BTC)</span>
                        <span className="font-semibold">$18M</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
                        <span className="text-sm">Base ($100K BTC)</span>
                        <span className="font-semibold">$90M</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                        <span className="text-sm">High ($150K BTC)</span>
                        <span className="font-semibold">$142M</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">72 Month Projections</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                        <span className="text-sm">Low ($50K BTC)</span>
                        <span className="font-semibold">$18M</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
                        <span className="text-sm">Base ($100K BTC)</span>
                        <span className="font-semibold">$199M</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                        <span className="text-sm">High ($150K BTC)</span>
                        <span className="font-semibold">$330M</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Immersion Cooling Advantages */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-orange-600">Immersion Cooling Technology</CardTitle>
                <p className="text-slate-600">Efficient. Resilient. Future-Proof.</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Calculator className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold mb-2">80%+ Maintenance Reduction</h4>
                    <p className="text-sm text-slate-600">Fewer moving parts, minimal manual intervention</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold mb-2">40%+ Lower CAPEX</h4>
                    <p className="text-sm text-slate-600">Higher density deployment, reduced infrastructure</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Zap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-semibold mb-2">80% Energy Efficiency</h4>
                    <p className="text-sm text-slate-600">Dramatic reduction in parasitic power consumption</p>
                  </div>
                </div>
                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h5 className="font-semibold">Advanced Features:</h5>
                    <ul className="text-sm space-y-1 text-slate-600">
                      <li>• Dielectric fluids with superior thermal conductivity</li>
                      <li>• Island Mode operation enables independent power management</li>
                      <li>• More consistent temperature produces ~2X avg. operational life</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-semibold">Benefits:</h5>
                    <ul className="text-sm space-y-1 text-slate-600">
                      <li>• Stable temperature control maximizes throughput</li>
                      <li>• ~30 years Industrial MICRO Grid Design and Operations</li>
                      <li>• Weather Independent operations</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-orange-600">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-4">Investor Relations</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-orange-500 mr-3" />
                        <span>Investors@pioneerminers.com</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Due Diligence</h4>
                    <p className="text-sm text-slate-600 mb-4">
                      Due diligence materials available including technical specifications, financial models, and operational projections.
                    </p>
                    <Badge className="bg-orange-100 text-orange-800">50MW Expansion Available</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center pt-4">
              <Button onClick={handleClose} variant="outline">
                Close
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
