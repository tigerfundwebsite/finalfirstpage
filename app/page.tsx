import { DotShaderBackground } from "@/components/ui/dot-shader-background"
import { TrendingUp, Mail } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <DotShaderBackground />

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-16 h-16 bg-[#EA7317] rounded-xl flex items-center justify-center">
            <TrendingUp className="w-10 h-10 text-white" />
          </div>
          <div className="text-left">
            <h1 className="text-3xl font-bold text-[#1a1a1a]">SRE Tiger Fund</h1>
            <p className="text-sm text-gray-600">Portfolio Management Services</p>
          </div>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-6 text-balance">Website Under Development</h2>

        <p className="text-xl text-gray-600 mb-12 text-pretty">
          We're working on something exciting. Our new website will be launching soon.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#EA7317] text-white rounded-lg hover:bg-[#d66514] transition-colors cursor-pointer">
              <Mail className="w-5 h-5" />
              <span>Contact Us</span>
            </div>
          </Link>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">SEBI Registered • INP000005795</p>
        </div>
      </div>
    </div>
  )
}
