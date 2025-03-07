"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Shield, X } from "lucide-react"
import { motion } from "framer-motion"


import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function VerifyCertificate() {
  const [blockchainId, setBlockchainId] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationResult, setVerificationResult] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsVerifying(true)

    // Simulate blockchain verification
    setTimeout(() => {
      // For demo purposes, any ID that starts with 0x is considered valid
      const isValid = blockchainId.startsWith("0x") && blockchainId.length === 42

      setVerificationResult({
        verified: isValid,
        certificate: isValid
          ? {
              title: "Completion of DSA Course",
              recipient: "Aishwaryaa Shree",
              organization: "VIT Chennai",
              issueDate: "2025-03-07",
            }
          : undefined,
      })

      setIsVerifying(false)
    }, 2000)
  }

  const resetVerification = () => {
    setVerificationResult(null)
    setBlockchainId("")
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
            <Link href="/create" className="text-sm font-medium text-white/70 transition-colors hover:text-white">
              Create
            </Link>
            <Link href="/verify" className="text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300">
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
            Verify Certificate
          </h1>

          {!verificationResult ? (
            <div className="grid md:grid-cols-[1fr_1.2fr] gap-8">
              <div>
                <p className="text-white/70 mb-6">
                  Enter the blockchain ID of the certificate you want to verify. The verification process checks the
                  blockchain to confirm the certificate's authenticity.
                </p>

                <div className="rounded-2xl border border-cyan-900/50 bg-gradient-to-b from-cyan-950/30 to-black/30 p-6 backdrop-blur-sm mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-cyan-400">How Verification Works</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Our system checks the blockchain for the certificate's unique identifier and retrieves the
                    associated data.
                  </p>
                  <div className="flex items-center gap-3 text-sm text-white/70">
                    <div className="h-8 w-8 rounded-full bg-cyan-950 flex items-center justify-center text-cyan-400 font-bold">
                      1
                    </div>
                    <div>Enter the blockchain ID</div>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/70 my-3">
                    <div className="h-8 w-8 rounded-full bg-cyan-950 flex items-center justify-center text-cyan-400 font-bold">
                      2
                    </div>
                    <div>System queries the blockchain</div>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/70">
                    <div className="h-8 w-8 rounded-full bg-cyan-950 flex items-center justify-center text-cyan-400 font-bold">
                      3
                    </div>
                    <div>Certificate details are verified</div>
                  </div>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-blue-900/50 bg-gradient-to-b from-blue-950/10 to-black/30 p-6 backdrop-blur-sm"
              >
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="blockchainId" className="text-white">
                      Blockchain Certificate ID
                    </Label>
                    <Input
                      id="blockchainId"
                      value={blockchainId}
                      onChange={(e) => setBlockchainId(e.target.value)}
                      required
                      className="mt-1 bg-black/50 border-cyan-900/50 focus:border-cyan-500 text-white font-mono"
                      placeholder="0x..."
                    />
                    <p className="text-xs text-white/50 mt-2">
                      Enter the full blockchain ID starting with "0x" to verify the certificate.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    disabled={isVerifying}
                    className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0"
                  >
                    {isVerifying ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                        Verifying...
                      </>
                    ) : (
                      "Verify Certificate"
                    )}
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card
                className={`rounded-2xl border ${verificationResult.verified ? "border-green-600/50" : "border-red-600/50"} bg-gradient-to-b ${verificationResult.verified ? "from-green-950/30" : "from-red-950/30"} to-black/30 backdrop-blur-sm overflow-hidden`}
              >
                <div
                  className={`bg-gradient-to-r ${verificationResult.verified ? "from-cyan-500/20 to-green-500/20" : "from-red-500/20 to-orange-500/20"} p-1`}
                ></div>
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div
                      className={`rounded-full ${verificationResult.verified ? "bg-green-900/30" : "bg-red-900/30"} p-3`}
                    >
                      {verificationResult.verified ? (
                        <CheckCircle className="h-12 w-12 text-green-400" />
                      ) : (
                        <X className="h-12 w-12 text-red-400" />
                      )}
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-center mb-6 text-white">
                    {verificationResult.verified ? "Certificate Verified!" : "Certificate Not Found"}
                  </h2>

                  {verificationResult.verified && verificationResult.certificate ? (
                    <div className="max-w-2xl mx-auto mb-8">
                      <div className="rounded-xl border border-cyan-900/50 bg-black/40 p-6 backdrop-blur-sm">
                        <div className="text-center mb-6">
                          <Shield className="h-12 w-12 text-cyan-400 mx-auto mb-2" />
                          <h3 className="text-xl font-bold text-white">{verificationResult.certificate.title}</h3>
                          <p className="text-white/70">This is to certify that</p>
                          <p className="text-2xl font-bold my-3 text-cyan-400">
                            {verificationResult.certificate.recipient}
                          </p>
                          <p className="text-white/70 mb-3">has successfully completed the requirements</p>
                          <p className="text-white/70">Issued by {verificationResult.certificate.organization}</p>
                          <p className="text-white/70">
                            on{" "}
                            {new Date(verificationResult.certificate.issueDate).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                        </div>

                        <div className="mt-6 pt-6 border-t border-cyan-900/30">
                          <p className="text-sm text-white/70 mb-2">Blockchain Verification ID:</p>
                          <div className="bg-cyan-950/50 rounded-lg p-3 font-mono text-sm text-cyan-400 break-all">
                            {blockchainId}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center mb-8 text-white/70">
                      <p>
                        The certificate with ID <span className="font-mono text-red-400">{blockchainId}</span> could not
                        be found on the blockchain.
                      </p>
                      <p className="mt-2">Please check the ID and try again, or contact the certificate issuer.</p>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={resetVerification}
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0"
                    >
                      Verify Another Certificate
                    </Button>
                    <Link href="/">
                      <Button variant="outline" className="border-cyan-700 text-cyan-400 hover:bg-cyan-950/50">
                        Return to Home
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

