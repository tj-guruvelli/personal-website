import { ProjectCard } from "@/components/project-card";

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
			title: "Evolution of Mclaren",
			description:
				"A website showcasing Mclaren using React.js, Javascript, and Tailwind CSS deployed on Vercel",
			image: "/imgs/mclarenP1.png",
			link: "https://trace-camp-final-project.vercel.app/",
			details: [],
		},
		{
			title: "Website Portfolio",
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
