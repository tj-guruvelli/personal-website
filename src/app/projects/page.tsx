import { ProjectCard } from "@/components/project-card";
import Link from "next/link";

export default function ProjectsPage() {
	const projects = [
		{
			title: "Github",
			description: "Check out my work on Github",
			image: "/imgs/github.jpg",
			link: "https://github.com/tj-guruvelli",
			details: [],
		},
		{
			title: "AI Privacy & Security",
			company: "Clemson Creative Inquiry",
			image: "/imgs/vit.png",
			description:
				"Objective: Examine critical security flaws in AI systems and distinguished appropriate defenses by designing and implementing AI and machine learning systems.",
			details: [
				"Constructed novel neural network architectures given a project's parameters and be able to predict the effect of ML parameters on the outcome of training algorithms",
			],
			link: "/docs/Final.pdf",
		},
		{
			title: "Administrative Console and Scheduler Scripts",
			company: "Clemson Energy Visualization & Analytics Center (CEVAC)",
			image: "/imgs/Power.png",
			description:
				"Objective: CEVAC is leading Clemson to a carbon-neutral campus.",
			details: [
				"Managing 500+ million records across 65 buildings for 6 metrics: steam, chilled water, natural gas, electricity, humidity, temperature, and CO2 levels etc.",
			],
			link: "/docs/CEVAC.pdf",
		},
		{
			title: "IBM in Watson AI",
			company: "Clemson Creative Inquiry",
			image: "/imgs/ibm.png",
			description:
				"Objective: Engage in high-level discussions such as the varieties and capabilities of existing AI/ML technologies, the ethical implications of AI/ML in society, and common techniques in AI/ML",
			details: [
				"Conduct research career readiness/competency development using IBM Watson, Python, and other libraries such as PyTorch and Pandas with NLP to analyze open-ended survey responses from interns and their mentors",
			],
			link: "/docs/poster.pdf",
		},
		{
			title: "Remain Healthy",
			description:
				"A blog post on health around COVID-19 using ArcGIS StoryMaps",
			image: "/imgs/health.jpg",
			link: "https://arcg.is/1PHzHj0",
			details: [],
		},

		{
			title: "Evolution of Mclaren",
			description:
				"A website showcasing Mclaren using React.js, Javascript, and Tailwind CSS deployed on Vercel",
			image: "/imgs/mclarenP1.png",
			link: "https://mclarenauto.vercel.app/",
			details: [],
		},
		{
			title: "Web Dev Portfolio",
			description:
				"A portfolio website for a computer class for web development using HTML, CSS, javascript, and PHP",
			image: "/imgs/web.jpg",
			link: "http://demowebpage.life/",
			details: [],
		},
		{
			title: "Movie Catalog Showcase for TRACE 2021 Summer Camp",
			description:
				"A website using the Movie Database API using React.js, javascript, HTML, CSS and deployed using surge.sh",
			image: "/imgs/moviedb.jpg",
			link: "https://movie-canva.surge.sh/",
			details: [],
		},
	];

	return (
		<main className="pt-24 min-h-screen">
			<section className="py-12 bg-blue-300">
				<div className="container mx-auto px-4">
					<h1 className="text-4xl font-bold mb-4 text-center">Projects</h1>
					<p className="text-center text-gray-600 mb-12">
						I have worked on a number of solo and collaborative projects.
						Explore my portfolio, and feel free to get in touch with any
						questions.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{projects.map((project, index) => (
							<ProjectCard key={index} {...project} />
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
