import { DotShaderBackground } from "@/components/ui/dot-shader-background"
import { Mail, Phone, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <DotShaderBackground />

      <div className="relative z-10 px-4 py-12 max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#EA7317] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">Get in touch with our team</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200 max-w-2xl mx-auto">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Connect with us</h2>
              <p className="text-gray-600">Feel free to get in touch with us for any queries regarding the services.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-[#EA7317]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#EA7317]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a1a1a] mb-1">Email</h3>
                  <a
                    href="mailto:contact@tigerassets.co.in"
                    className="text-gray-600 hover:text-[#EA7317] transition-colors"
                  >
                    contact@tigerassets.co.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-[#EA7317]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#EA7317]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a1a1a] mb-1">Call us</h3>
                  <div className="space-y-1">
                    <a href="tel:+919082571009" className="block text-gray-600 hover:text-[#EA7317] transition-colors">
                      +91 90825 71009
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200 text-center">
     
              <p className="text-sm text-gray-500 mt-1">SEBI Registration Number: INP000005795</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
