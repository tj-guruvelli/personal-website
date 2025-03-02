"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const interests = [
	{
		title: "Tennis/Ping Pong",
		image: "/imgs/File_000.jpeg",
		description:
			"I'm always down to play a game of tennis or ping pong. I've been playing tennis since middle school along with ping pong. I've been captain of my tennis team during my freshman year.",
	},
	{
		title: "Weightlifting",
		image: "/imgs/weight.jpg",
		description:
			"I'm always striving to build a better version of myself and it provides an outlet for stress.",
	},
	{
		title: "Travel",
		image: "/imgs/travel.jpeg",
		description:
			"I've lived in more than 10 states. Originally, I was born in India. I hope to travel more in my free time. Some places on my bucket list include Dubai, Kauai, Chicago, IL, and Hawaii",
	},
	{
		title: "Music",
		image: "/imgs/music.jpg",
		description:
			"I've lived in more than 10 states. Originally, I was born in India. I hope to travel more in my free time. Some places on my bucket list include Dubai, Kauai, Chicago, IL, and Hawaii",
	},
	{
		title: "Cars",
		video: "/imgs/supercar.mp4",
		description:
			"I have always been obssessed with cars and racing since I was a kid and hope to find work with the automotive industry. With computer science I could work in R&D, autonomy, AI or development of new systems. My passion for cars has been around since I was a kid and it still grows with dreams driving exotic cars.",
	},
];

export default function InterestsCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [transitioning, setTransitioning] = useState(false);
	const [slideDirection, setSlideDirection] = useState(0); // -1 for left, 1 for right
	const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null);
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const carouselRef = useRef<HTMLDivElement>(null);

	// Force initial slide to use the same transition as others
	useEffect(() => {
		// Apply initial transition after component mounts
		const timer = setTimeout(() => {
			setSlideDirection(0);
		}, 300); // Longer delay to ensure animation completes properly

		return () => clearTimeout(timer);
	}, []);

	// Function to handle slide transitions
	const changeSlide = (newIndex: number) => {
		if (transitioning) return;

		setTransitioning(true);
		setSlideDirection(newIndex > currentIndex ? 1 : -1);
		setCurrentIndex(newIndex);

		// Reset transition state after animation completes
		setTimeout(() => {
			setTransitioning(false);
			setSlideDirection(0); // Reset to neutral state
		}, 500);
	};

	const nextSlide = () => {
		changeSlide((currentIndex + 1) % interests.length);
	};

	const prevSlide = () => {
		changeSlide((currentIndex - 1 + interests.length) % interests.length);
	};

	// Auto-scroll functionality
	useEffect(() => {
		const startAutoScroll = () => {
			autoScrollTimerRef.current = setInterval(() => {
				nextSlide();
			}, 3000); // Changed to 3 seconds
		};

		const stopAutoScroll = () => {
			if (autoScrollTimerRef.current) {
				clearInterval(autoScrollTimerRef.current);
				autoScrollTimerRef.current = null;
			}
		};

		// Start auto-scrolling
		startAutoScroll();

		// Stop auto-scrolling when lightbox is open
		if (lightboxOpen) {
			stopAutoScroll();
		}

		// Clean up on unmount
		return () => stopAutoScroll();
	}, [currentIndex, lightboxOpen]);

	// Handle video playback
	useEffect(() => {
		const currentItem = interests[currentIndex];

		// If it's a video slide and not in lightbox mode, play the video
		if (currentItem.video && videoRef.current && !lightboxOpen) {
			videoRef.current.load();
			videoRef.current.play().catch((err) => {
				console.error("Error playing video:", err);
			});
		}
	}, [currentIndex, lightboxOpen]);

	// Preload images for smoother transitions
	useEffect(() => {
		interests.forEach((interest) => {
			if (interest.image) {
				const img = new Image();
				img.src = interest.image;
			}
		});
	}, []);

	const currentInterest = interests[currentIndex];

	return (
		<>
			<div className="relative w-full mx-auto">
				<div
					ref={carouselRef}
					className="overflow-hidden rounded-lg shadow-xl"
					style={{ height: "600px" }}
				>
					{/* Main slide container */}
					<div
						className="relative w-full h-full cursor-pointer transition-all duration-500 ease-in-out"
						onClick={() => setLightboxOpen(true)}
						style={{
							opacity: transitioning ? 0.9 : 1,
							transform: transitioning
								? `scale(${slideDirection > 0 ? 0.95 : 1.05})`
								: "scale(1)",
						}}
					>
						{/* Background gradient */}
						<div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-black to-orange-600 opacity-30 z-10"></div>

						{/* Media content - either video or image */}
						<div className="absolute inset-0 w-full h-full">
							{currentInterest.video ? (
								<video
									ref={videoRef}
									className="absolute inset-0 w-full h-full object-cover"
									src={currentInterest.video}
									poster={currentInterest.image}
									muted
									loop
									playsInline
								/>
							) : (
								<img
									src={currentInterest.image}
									alt={currentInterest.title}
									className="absolute inset-0 w-full h-full object-cover"
								/>
							)}
						</div>

						{/* Text overlay at bottom */}
						<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent pt-20 pb-8 px-8 z-20">
							<div
								className="text-white text-center transition-all duration-500 ease-in-out"
								style={{
									opacity: transitioning ? 0 : 1,
									transform: transitioning
										? `translateY(20px)`
										: "translateY(0)",
								}}
							>
								<h2 className="text-3xl font-bold mb-4">
									{currentInterest.title}
								</h2>
								<p className="text-lg">{currentInterest.description}</p>
							</div>
						</div>
					</div>
				</div>

				{/* Navigation arrows */}
				<button
					className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 z-30"
					onClick={(e) => {
						e.stopPropagation();
						prevSlide();
					}}
					disabled={transitioning}
				>
					<ChevronLeft className="h-8 w-8 text-black" />
				</button>

				<button
					className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 z-30"
					onClick={(e) => {
						e.stopPropagation();
						nextSlide();
					}}
					disabled={transitioning}
				>
					<ChevronRight className="h-8 w-8 text-black" />
				</button>

				{/* Indicator dots */}
				<div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-30">
					{interests.map((_, index) => (
						<button
							key={index}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${
								index === currentIndex
									? "bg-white scale-125"
									: "bg-gray-400 bg-opacity-50 hover:bg-opacity-75"
							}`}
							onClick={() => changeSlide(index)}
						/>
					))}
				</div>
			</div>

			{/* Lightbox Modal */}
			{lightboxOpen && (
				<div
					className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4 transition-opacity duration-300"
					onClick={() => setLightboxOpen(false)}
				>
					<div
						className="relative w-full max-w-6xl"
						onClick={(e) => e.stopPropagation()}
					>
						<button
							className="absolute top-4 right-4 z-10 bg-white p-2 rounded-full transition-transform duration-300 hover:scale-110"
							onClick={() => setLightboxOpen(false)}
						>
							<X className="h-6 w-6 text-black" />
						</button>

						<div className="bg-black rounded-lg overflow-hidden shadow-2xl">
							{currentInterest.video ? (
								<video
									src={currentInterest.video}
									poster={currentInterest.image}
									className="w-full max-h-[70vh] object-contain"
									controls
									autoPlay
									playsInline
								/>
							) : (
								<img
									src={currentInterest.image}
									alt={currentInterest.title}
									className="w-full max-h-[70vh] object-contain"
								/>
							)}

							<div className="p-8 bg-black text-white">
								<h2 className="text-4xl font-bold mb-4">
									{currentInterest.title}
								</h2>
								<p className="text-xl">{currentInterest.description}</p>
							</div>
						</div>

						<div className="absolute inset-x-0 top-1/2 flex justify-between items-center transform -translate-y-1/2">
							<button
								className="ml-4 bg-white p-2 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
								onClick={(e) => {
									e.stopPropagation();
									prevSlide();
								}}
							>
								<ChevronLeft className="h-8 w-8 text-black" />
							</button>

							<button
								className="mr-4 bg-white p-2 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
								onClick={(e) => {
									e.stopPropagation();
									nextSlide();
								}}
							>
								<ChevronRight className="h-8 w-8 text-black" />
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
