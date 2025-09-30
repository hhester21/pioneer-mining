import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Zap, Shield, TrendingUp } from "lucide-react"
import Image from "next/image"
import InvestorModal from "@/components/InvestorModal"
import AccreditedInvestorModal from "@/components/AccreditedInvestorModal"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center">
                <span className="text-white text-sm font-bold">₿</span>
              </div>
              <span className="text-xl font-bold text-slate-900">Pioneer Mining</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-orange-500 transition-colors">About</a>
              <a href="#facility" className="text-slate-600 hover:text-orange-500 transition-colors">Facility</a>
              <a href="#contact" className="text-slate-600 hover:text-orange-500 transition-colors">Contact</a>
            </div>
            <InvestorModal />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center shadow-2xl bitcoin-glow animate-fade-in-up">
              <span className="text-white text-5xl font-bold">₿</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
            PIONEER MINERS
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-orange-500 mb-8 tracking-wide">
            PIONEERING THE FUTURE OF BITCOIN AND ENERGY
          </p>
          <p className="text-xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Leading the future of bitcoin mining through focused partnerships and efficient operations.
            Our 50 MW facility delivers institutional-grade digital asset infrastructure with Fortune 100 power partnerships.
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="text-2xl font-bold text-orange-500">50 MW</div>
              <div className="text-sm text-slate-600">Power Capacity</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="text-2xl font-bold text-orange-500">2.5 EH/s</div>
              <div className="text-sm text-slate-600">Mining Capacity</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="text-2xl font-bold text-orange-500">40+ BTC</div>
              <div className="text-sm text-slate-600">Monthly Output</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="text-2xl font-bold text-orange-500">Q2 2026</div>
              <div className="text-sm text-slate-600">Launch Date</div>
            </div>
          </div>

          <div className="flex justify-center">
            <AccreditedInvestorModal />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">About Pioneer Mining</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Leading the charge in responsible Bitcoin mining with innovative technology and sustainable practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Our Mission</h3>
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                Pioneer Mining is dedicated to securing the Bitcoin network through efficient,
                sustainable mining operations. We believe in the transformative power of Bitcoin
                while being responsible stewards of our environment.
              </p>
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                As a private mining operation, we focus on long-term sustainability,
                cutting-edge technology, and strategic partnerships that drive innovation
                in the cryptocurrency mining industry.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-orange-500 mb-2">99.9%</div>
                  <div className="text-slate-600">Uptime</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
                  <div className="text-slate-600">Operations</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://ugc.same-assets.com/y1Um9voHseYhYy_GTsR5zDjCHm2-LVeH.jpeg"
                alt="Bitcoin mining facility"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facility Highlights Section */}
      <section id="facility" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">50 MW Mining Facility</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Institutional-grade infrastructure designed for maximum efficiency and long-term scalability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Fortune 100 Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Secure, reliable, low-cost power provider with substantial excess capacity and 7-year PPA agreements.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Immersion Cooling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Advanced dielectric fluid cooling with 80%+ maintenance reduction and extended equipment life.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Scalable Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  18 UL-listed containers on 4 acres with immediate 50MW expansion capabilities available.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Technical Highlights */}
          <div className="bg-slate-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6 text-center">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <Badge variant="outline" className="mb-2">Power Cost</Badge>
                <p className="font-semibold text-lg">$0.048-$0.052/kWh</p>
                <p className="text-sm text-slate-600">Fixed turbine, hedged natural gas</p>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="mb-2">Mining Hardware</Badge>
                <p className="font-semibold text-lg">6,000 Miners</p>
                <p className="text-sm text-slate-600">Immersion-cooled ASICs</p>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="mb-2">Grid Connection</Badge>
                <p className="font-semibold text-lg">Island Mode</p>
                <p className="text-sm text-slate-600">Independent power management</p>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="mb-2">Security</Badge>
                <p className="font-semibold text-lg">UL-Listed</p>
                <p className="text-sm text-slate-600">Secured 4-acre facility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to partner with us or learn more about our operations? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-orange-500 mr-4" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-slate-300">info@pioneerminers.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-orange-500 mr-4" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-slate-300">Houston, Texas<br />Mining Operations Center</div>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-slate-800 rounded-lg">
                <p className="text-sm text-slate-300">
                  <strong>Due diligence materials available</strong> including technical specifications,
                  financial models, and operational projections.
                </p>
              </div>
            </div>

            <div>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Send us a message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">₿</span>
                </div>
                <span className="text-xl font-bold">Pioneer Mining</span>
              </div>
              <p className="text-slate-400">
                Pioneering the future of Bitcoin and energy through sustainable mining operations.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Mining</h4>
              <ul className="space-y-2 text-slate-400">
                <li>50 MW Operations</li>
                <li>Infrastructure</li>
                <li>Performance</li>
                <li>Security</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li>About Us</li>
                <li>Facility</li>
                <li>Contact</li>
                <li>Investors</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="https://www.linkedin.com/company/pioneer-miners/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>Twitter</li>
                <li>Newsletter</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Pioneer Mining. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
