"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="bg-black text-white fixed w-full z-50">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center h-24">
					<Link href="/" className="text-xl font-bold">
						Teja Guruvelli
					</Link>

					{/* Mobile menu button */}
					<button
						className="md:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>

					{/* Desktop navigation */}
					<nav className="hidden md:flex space-x-8">
						<Link
							href="/"
							className="transform hover:scale-125 hover:text-gray-500 transition-all duration-300"
						>
							Home
						</Link>
						<Link
							href="/about"
							className="transform hover:scale-125 hover:text-gray-500 transition-all duration-300"
						>
							About
						</Link>
						<Link
							href="/experiences"
							className="transform hover:scale-125 hover:text-gray-500 transition-all duration-300"
						>
							Experiences
						</Link>
						<Link
							href="/interests-hobbies"
							className="transform hover:scale-125 hover:text-gray-500 transition-all duration-300"
						>
							Interests/Hobbies
						</Link>
						<Link
							href="/projects"
							className="transform hover:scale-125 hover:text-gray-500 transition-all duration-300"
						>
							Projects
						</Link>
					</nav>
				</div>

				{/* Mobile navigation */}
				{isMenuOpen && (
					<nav className="md:hidden py-4 pb-6 flex flex-col space-y-4">
						<Link
							href="/"
							className="hover:text-gray-300"
							onClick={() => setIsMenuOpen(false)}
						>
							Home
						</Link>
						<Link
							href="/about"
							className="hover:text-gray-300"
							onClick={() => setIsMenuOpen(false)}
						>
							About
						</Link>
						<Link
							href="/experiences"
							className="hover:text-gray-300"
							onClick={() => setIsMenuOpen(false)}
						>
							Experiences
						</Link>
						<Link
							href="/interests-hobbies"
							className="hover:text-gray-300"
							onClick={() => setIsMenuOpen(false)}
						>
							Interests/Hobbies
						</Link>
						<Link
							href="/projects"
							className="hover:text-gray-300"
							onClick={() => setIsMenuOpen(false)}
						>
							Projects
						</Link>
					</nav>
				)}
			</div>
		</header>
	);
}
