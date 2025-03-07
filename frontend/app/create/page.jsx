"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Award, CheckCircle, Download, Shield } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CreateCertificate() {
  const [formData, setFormData] = useState({
    organizationName: "",
    recipientName: "",
    WalletAddress:"",
    certificateTitle: "",
    issueDate: new Date().toISOString().split("T")[0],
  })
  const [certificateId, setCertificateId] = useState("")
  const [isCreating, setIsCreating] = useState(false)
  const [isCreated, setIsCreated] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsCreating(true)

    // Simulate blockchain transaction
    setTimeout(() => {
      // Generate a random blockchain ID
      const id = "0x" + Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join("")

      setCertificateId(id)
      setIsCreating(false)
      setIsCreated(true)
    }, 2000)
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-cyan-900/40 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="flex items-center gap-2">
                <Shield className="h-8 w-8 text-cyan-400" />
                <span className="text-xl font-bold tracking-wider text-cyan-400">
                  CRED<span className="text-purple-400">ENCE</span>
                </span>
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-white/70 transition-colors hover:text-white">
              Home
            </Link>
            <Link href="/create" className="text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300">
              Create
            </Link>
            <Link href="/verify" className="text-sm font-medium text-white/70 transition-colors hover:text-white">
              Verify
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Create Certificate
          </h1>

          {!isCreated ? (
            <div className="grid md:grid-cols-[1fr_1.2fr] gap-8">
              <div>
                <p className="text-white/70 mb-6">
                  Fill out the form to create a new blockchain-verified certificate. Once created, you'll receive a
                  unique blockchain ID that can be used to verify the certificate's authenticity.
                </p>

                <div className="rounded-2xl border border-cyan-900/50 bg-gradient-to-b from-cyan-950/30 to-black/30 p-6 backdrop-blur-sm mb-6">
                  <h3 className="flex items-center text-lg font-semibold mb-3 text-cyan-400">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Tamper-Proof
                  </h3>
                  <p className="text-white/70 text-sm">
                    Once stored on the blockchain, your certificate cannot be altered or forged.
                  </p>
                </div>

                <div className="rounded-2xl border border-purple-900/50 bg-gradient-to-b from-purple-950/30 to-black/30 p-6 backdrop-blur-sm">
                  <h3 className="flex items-center text-lg font-semibold mb-3 text-purple-400">
                    <Award className="mr-2 h-5 w-5" />
                    Globally Verifiable
                  </h3>
                  <p className="text-white/70 text-sm">
                    Anyone with the blockchain ID can verify the certificate's authenticity instantly.
                  </p>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-blue-900/50 bg-gradient-to-b from-blue-950/10 to-black/30 p-6 backdrop-blur-sm"
              >
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="organizationName" className="text-white">
                      Organization Name
                    </Label>
                    <Input
                      id="organizationName"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleChange}
                      required
                      className="mt-1 bg-black/50 border-cyan-900/50 focus:border-cyan-500 text-white"
                      placeholder="Enter organization name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="recipientName" className="text-white">
                      Recipient Name
                    </Label>
                    <Input
                      id="recipientName"
                      name="recipientName"
                      value={formData.recipientName}
                      onChange={handleChange}
                      required
                      className="mt-1 bg-black/50 border-cyan-900/50 focus:border-cyan-500 text-white"
                      placeholder="Enter recipient name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="WalletAddress" className="text-white">
                      Wallet Address
                    </Label>
                    <Input
                      id="WalletAddress"
                      name="WalletAddress"
                      value={formData.WalletAddress}
                      onChange={handleChange}
                      required
                      className="mt-1 bg-black/50 border-cyan-900/50 focus:border-cyan-500 text-white"
                      placeholder="0x..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="certificateTitle" className="text-white">
                      Certificate Title
                    </Label>
                    <Input
                      id="certificateTitle"
                      name="certificateTitle"
                      value={formData.certificateTitle}
                      onChange={handleChange}
                      required
                      className="mt-1 bg-black/50 border-cyan-900/50 focus:border-cyan-500 text-white"
                      placeholder="e.g. Completion of Web Development Course"
                    />
                  </div>

                  <div>
                    <Label htmlFor="issueDate" className="text-white">
                      Issue Date
                    </Label>
                    <Input
                      id="issueDate"
                      name="issueDate"
                      type="date"
                      value={formData.issueDate}
                      onChange={handleChange}
                      required
                      className="mt-1 bg-black/50 border-cyan-900/50 focus:border-cyan-500 text-white"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isCreating}
                    className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0"
                  >
                    {isCreating ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                        Creating Certificate...
                      </>
                    ) : (
                      "Create Certificate"
                    )}
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card className="rounded-2xl border border-green-600/50 bg-gradient-to-b from-green-950/30 to-black/30 backdrop-blur-sm overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-1"></div>
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="rounded-full bg-green-900/30 p-3">
                      <CheckCircle className="h-12 w-12 text-green-400" />
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-center mb-6 text-white">Certificate Created Successfully!</h2>

                  <div className="max-w-2xl mx-auto mb-8">
                    <div className="rounded-xl border border-cyan-900/50 bg-black/40 p-6 backdrop-blur-sm">
                      <div className="text-center mb-6">
                        <Shield className="h-12 w-12 text-cyan-400 mx-auto mb-2" />
                        <h3 className="text-xl font-bold text-white">{formData.certificateTitle}</h3>
                        <p className="text-white/70">This is to certify that</p>
                        <p className="text-2xl font-bold my-3 text-cyan-400">{formData.recipientName}</p>
                        <p className="text-white/70 mb-3">has successfully completed the requirements</p>
                        <p className="text-white/70">Issued by {formData.organizationName}</p>
                        <p className="text-white/70">
                          on{" "}
                          {new Date(formData.issueDate).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>

                      <div className="mt-6 pt-6 border-t border-cyan-900/30">
                        <p className="text-sm text-white/70 mb-2">Blockchain Verification ID:</p>
                        <div className="bg-cyan-950/50 rounded-lg p-3 font-mono text-sm text-cyan-400 break-all">
                          {certificateId}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
                      <Download className="mr-2 h-4 w-4" />
                      Download Certificate
                    </Button>
                    <Link href="/verify">
                      <Button variant="outline" className="border-cyan-700 text-cyan-400 hover:bg-cyan-950/50">
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Verify Certificate
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </main>
      <footer className="border-t border-cyan-900/40 bg-black py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Credence. Secure certificate verification on the blockchain.
          </p>
        </div>
      </footer>
    </div>
  )
}

