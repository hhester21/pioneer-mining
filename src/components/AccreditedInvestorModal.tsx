"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Mail } from "lucide-react"

export default function AccreditedInvestorModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(1) // 1: qualification check, 2: email collection, 3: confirmation
  const [isQualified, setIsQualified] = useState<boolean | null>(null)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleQualificationResponse = (qualified: boolean) => {
    setIsQualified(qualified)
    if (qualified) {
      setStep(2)
    } else {
      setStep(3) // Show non-qualified message
    }
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call - replace with actual form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setStep(3)
    setIsSubmitting(false)
  }

  const handleClose = () => {
    setIsOpen(false)
    setStep(1)
    setIsQualified(null)
    setPassword("")
    setError("")
    setEmail("")
    setName("")
    setPhone("")
    setIsSubmitting(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
          Learn More About Our Operations
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        {step === 1 && (
          <div className="space-y-6">
            <DialogHeader>
              <DialogTitle className="text-2xl">Investment Qualification</DialogTitle>
              <p className="text-slate-600">
                To comply with securities regulations, we need to verify your accredited investor status.
              </p>
            </DialogHeader>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Accredited Investor Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Do you meet <strong>any</strong> of the following financial criteria?
                </p>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Annual income over <strong>$300,000</strong></span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Net financial assets over <strong>$1,000,000</strong></span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Net personal assets over <strong>$2,000,000</strong> (excluding up to $1,000,000 in primary residence equity)</span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-xs text-slate-500 mb-4">
                    This information is required under SEC regulations for investment opportunities.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={() => handleQualificationResponse(true)}
                      className="bg-green-600 hover:bg-green-700 flex-1"
                    >
                      Yes, I meet the requirements
                    </Button>
                    <Button
                      onClick={() => handleQualificationResponse(false)}
                      variant="outline"
                      className="flex-1"
                    >
                      No, I don't meet these requirements
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {step === 2 && isQualified && (
          <div className="space-y-6">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                Qualified Investor
              </DialogTitle>
              <p className="text-slate-600">
                Thank you for confirming your accredited investor status. Please provide your email to receive detailed investment information.
              </p>
            </DialogHeader>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Get Investment Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 123-4567"
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">What you'll receive:</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Detailed investment prospectus</li>
                      <li>• Financial projections and models</li>
                      <li>• Technical facility specifications</li>
                      <li>• Due diligence materials</li>
                      <li>• Direct contact with our investment team</li>
                    </ul>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-600"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Information"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center">
                {isQualified ? (
                  <>
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                    Thank You!
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-6 h-6 text-orange-500 mr-2" />
                    Thank You for Your Interest
                  </>
                )}
              </DialogTitle>
            </DialogHeader>

            {isQualified ? (
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <Mail className="w-12 h-12 text-green-500 mx-auto" />
                    <h3 className="text-lg font-semibold">Thank You, {name}!</h3>
                    <p className="text-slate-600">
                      We've sent detailed investment information to <strong>{email}</strong>
                    </p>
                    <p className="text-sm text-slate-500">
                      Our investment team will reach out to you at <strong>{phone}</strong> within 24 hours to discuss this opportunity.
                    </p>
                    <div className="pt-4">
                      <p className="text-sm text-slate-600">
                        Questions? Contact our investor relations team at{" "}
                        <a href="mailto:Investors@pioneerminers.com" className="text-orange-600 hover:underline">
                          Investors@pioneerminers.com
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <AlertCircle className="w-12 h-12 text-orange-500 mx-auto" />
                    <h3 className="text-lg font-semibold">We Appreciate Your Interest</h3>
                    <p className="text-slate-600">
                      Our current investment opportunity is limited to accredited investors under SEC regulations.
                    </p>
                    <div className="bg-slate-50 p-4 rounded-lg text-left">
                      <h4 className="font-semibold mb-2">Alternative Options:</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Learn about Bitcoin and cryptocurrency investing</li>
                        <li>• Follow our company updates and news</li>
                        <li>• Contact us for general inquiries about our operations</li>
                      </ul>
                    </div>
                    <p className="text-sm text-slate-500">
                      Feel free to reach out if you have questions about our mining operations or Bitcoin in general.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="flex justify-center">
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
