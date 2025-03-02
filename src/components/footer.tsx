import Link from "next/link"
import { Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1c8a43] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">©2025 Teja Guruvelli.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="http://www.linkedin.com/in/tjguruvelli" target="_blank" aria-label="LinkedIn">
              <Linkedin size={20} />
            </Link>
            <Link href="https://github.com/tj-guruvelli" target="_blank" aria-label="GitHub">
              <Github size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

