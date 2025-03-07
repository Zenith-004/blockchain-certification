import Link from "next/link"
import { ArrowRight, Award, CheckCircle, FileCheck, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-cyan-900/40 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-cyan-400" />
            <span className="text-xl font-bold tracking-wider text-cyan-400">
              CRED<span className="text-purple-400">ENCE</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300">
              Home
            </Link>
            <Link href="/create" className="text-sm font-medium text-white/70 transition-colors hover:text-white">
              Create
            </Link>
            <Link href="/verify" className="text-sm font-medium text-white/70 transition-colors hover:text-white">
              Verify
            </Link>
            <Link href="#about" className="text-sm font-medium text-white/70 transition-colors hover:text-white">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/create">
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black"></div>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Secure Certificate Verification on the Blockchain
              </h1>
              <p className="mb-10 text-xl text-white/70">
                Create tamper-proof digital certificates and verify their authenticity instantly using blockchain
                technology.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/create">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 h-12 px-8 text-lg">
                    Create Certificate
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/verify">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-cyan-700 text-cyan-400 hover:bg-cyan-950/50 h-12 px-8 text-lg"
                  >
                    Verify Certificate
                    <CheckCircle className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-48 left-0 right-0 h-96 bg-gradient-to-t from-black to-transparent"></div>
        </section>

        <section className="py-20" id="about">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Why Choose Credence?
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="group rounded-2xl border border-cyan-900/50 bg-gradient-to-b from-cyan-950/30 to-black/30 p-6 backdrop-blur-sm transition-all hover:border-cyan-700/70 hover:shadow-[0_0_30px_rgba(8,145,178,0.2)]">
                <div className="mb-4 rounded-full bg-cyan-950/80 p-3 w-14 h-14 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Immutable Security</h3>
                <p className="text-white/70">
                  Certificates are stored on the blockchain, making them tamper-proof and permanently verifiable.
                </p>
              </div>
              <div className="group rounded-2xl border border-purple-900/50 bg-gradient-to-b from-purple-950/30 to-black/30 p-6 backdrop-blur-sm transition-all hover:border-purple-700/70 hover:shadow-[0_0_30px_rgba(147,51,234,0.2)]">
                <div className="mb-4 rounded-full bg-purple-950/80 p-3 w-14 h-14 flex items-center justify-center">
                  <FileCheck className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Instant Verification</h3>
                <p className="text-white/70">Verify any certificate in seconds by simply entering its blockchain ID.</p>
              </div>
              <div className="group rounded-2xl border border-blue-900/50 bg-gradient-to-b from-blue-950/30 to-black/30 p-6 backdrop-blur-sm transition-all hover:border-blue-700/70 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                <div className="mb-4 rounded-full bg-blue-950/80 p-3 w-14 h-14 flex items-center justify-center">
                  <Award className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Trusted Credentials</h3>
                <p className="text-white/70">
                  Build trust with certificates that can be verified anywhere, anytime, by anyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black"></div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                How It Works
              </h2>
              <p className="mb-12 text-lg text-white/70">
                Our blockchain-powered platform makes certificate creation and verification simple and secure.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="relative">
                <div className="absolute -left-4 top-0 h-12 w-12 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div className="ml-8 rounded-2xl border border-cyan-900/50 bg-gradient-to-b from-black/40 to-black/60 p-6 backdrop-blur-sm">
                  <h3 className="mb-2 text-xl font-bold text-white">Create Certificate</h3>
                  <p className="text-white/70">
                    Enter organization details and recipient information to generate a unique certificate.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-4 top-0 h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div className="ml-8 rounded-2xl border border-purple-900/50 bg-gradient-to-b from-black/40 to-black/60 p-6 backdrop-blur-sm">
                  <h3 className="mb-2 text-xl font-bold text-white">Store on Blockchain</h3>
                  <p className="text-white/70">
                    The certificate is securely stored on the blockchain with a unique identifier.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-4 top-0 h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div className="ml-8 rounded-2xl border border-blue-900/50 bg-gradient-to-b from-black/40 to-black/60 p-6 backdrop-blur-sm">
                  <h3 className="mb-2 text-xl font-bold text-white">Verify Anytime</h3>
                  <p className="text-white/70">
                    Use the blockchain ID to verify the certificate's authenticity instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-cyan-900/40 bg-black py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-6 w-6 text-cyan-400" />
            <span className="text-lg font-bold tracking-wider text-cyan-400">
              CRED<span className="text-purple-400">ENCE</span>
            </span>
          </div>
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Credence. Secure certificate verification on the blockchain.
          </p>
        </div>
      </footer>
    </div>
  )
}

