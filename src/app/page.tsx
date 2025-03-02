import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col">
			{/* Hero Section */}
			<section className="relative w-full h-[888px] bg-black text-white">
				<div className="absolute inset-0 z-0">
					<video
						autoPlay
						muted
						loop
						className="w-full h-full object-cover"
						src="/imgs/corvette.mp4"
						poster="/placeholder.svg?height=888&width=1920"
					></video>
				</div>
				<div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center">
					<div className="container mx-auto px-4 text-center mt-[500px]">
						<h1 className="text-6xl font-bold mb-4">Teja Guruvelli</h1>
						<p className="text-xl">
							Car Enthusiast, Engineer, Lifetime Learner, and Athlete
						</p>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row items-center justify-center relative">
						{/* Image container */}
						<div className="md:w-1/2 relative z-10 flex justify-center">
							<div className="relative w-[750px] h-[500px]">
								<Image
									src="/imgs/IMG_1420.jpg"
									alt="Teja Guruvelli"
									fill
									className="object-cover"
								/>
							</div>
						</div>

						{/* Text box overlay */}
						<div className="md:w-1/2 md:absolute md:left-[60%] z-20 mt-[-60px] md:mt-0">
							<div className="bg-black text-white p-12 max-w-md">
								<h2 className="text-2xl font-bold mb-6">CLEMSON UNIVERSITY</h2>
								<p className="mb-2">Columbia, SC</p>
								<p className="font-bold mb-6">
									Class of 2024 | Computer Science | Cybersecurity
								</p>
								<p className="text-sm">
									I've had the opportunity to work on a number of projects that
									have allowed me to grow within computer science. I hope you'll
									enjoy viewing my projects as much as I enjoyed working on
									them. Go ahead and explore, and don't hesitate to reach out if
									you'd like to learn more.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
