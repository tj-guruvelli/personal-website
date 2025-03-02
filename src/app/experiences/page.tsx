import { ExperienceCard } from "@/components/experience-card";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const experiences = [
	{
		title: "Capstone Product Developer",
		company: "NVIDIA",
		description: [
			"Leveraging NVIDIA's architecture for benchmarking LLM/SLMs with GPUs to perform computational tasks and for accuracy on fundamental tasks using NVIDIA's NeMo microservices",
			"Collecting and generating synthetic datasets (NeMo Curator) for training LLMs to follow safety rules (NeMo Guardrails) in responses, improving the reliability of AI models without degrading their original capabilities",
		],
	},
	{
		title: "Research Intern",
		company: "Argonne National Laboratory",
		description: [
			"Conducted experiments and resource analysis in environments with weak connectivity using Python, TensorFlow, and Scikit-learn, addressing potential challenges in vehicle performance for anomaly escalation under diverse operational stresses",
			"Engineered and integrated machine learning models using VEINS simulation framework to optimize the detection of anomalies in vehicular sensor data for robust and scalable security solutions",
			"Configured a network socket communication system to stream and process real-time vehicular data using hardware-in-the-loop (HIL) from VEINS to an embedded computer (Raspberry Pi), allowing simultaneous reading and anomaly detection to ensure smooth data transmission between connected automated vehicles and infrastructure",
		],
	},
	{
		title: "Information Security Engineer Intern",
		company: "Principal Financial Group",
		description: [
			"Performed 50+ analytical anomaly reviews focused on insider risk management and established OKRs and SOPs for designing alerts, including designing better filters to reduce noise and improve relevance",
			"Developed a full-stack Python application using ElasticSearch, while enhancing log analysis and SIEM/SOAR exposure indicators for SOC design in establishing rules and policy use on data in information technology and SaaS application deployment",
			"Reduced noise in email data and identified anomalous email traffic patterns, utilizing AWS services (S3, Lambda, CloudWatch, SNS Alerts) and Microsoft Teams for escalation with insights to be investigated for business appropriateness",
		],
	},
	{
		title: "Manufacturing Test Engineer",
		company: "Itron",
		description: [
			"Migrated 6 web-based lookup and control tools to a Windows C# desktop application with CRUD operations improving user satisfaction with a more streamlined user interface and architecture",
			"Refined user experience by writing test procedures and work instructions of manufacturing software, resulting in increased OEE by reducing defects and user errors, leading to higher user engagement and productivity",
			"Streamlined database design and functionalities in MySQL to MS SQL reducing data retrieval time, decreasing database errors, and increasing software performance",
		],
	},
	{
		title: "Software Engineer Intern",
		company: "Clemson Energy, Visualization, & Analytics Center (CEVAC)",
		description: [
			"Automated ingestion of files with 100M+ records into company systems, leveraging Python scripts for monitoring building conditions and tracking metrics like CO2, temperature, humidity, and facilities usage",
			"Deployed full web stack application using ASP .NET, C#, HTML, CSS, JavaScript, and an MS SQL relational database for data manipulation and ETL procedures",
			"Exercised Agile methods to create and optimize product features for visualizing data for sensors around buildings",
		],
	},
	{
		title: "Academic Tutor",
		company: "Kumon Math & Reading Center of Lexington",
		description: [
			"Trained new employees in the tutoring process, student check-in, etc.",
			"Specialized tutor in advanced algebra and calculus fundamentals, with up to 16 students per day",
			"Assessed student work and administered achievement tests",
			"Mentored younger students in literacy and counting all the way up to advanced mathematics and complex literature",
		],
	},
];

const projects = [
	{
		title: "Apply Away Job Tracking Application",
		description:
			"Streamlined the job application season process through a web extension, enabling one-click logging/tracking of applied jobs while providing a centralized platform interface in one place for easy viewing and organization",
		details: [
			"Integrated compatibilities of 10+ websites such as LinkedIn, indeed, zip recruiter, handshake for the user interface to web scrape relevant job information and consolidate within our application",
			"Established partnership with Clemson Career Center and recruited 20+ job hunting beta testers at the career fair in managing their job applications gathering valuable feedback and suggestions for improvement",
		],
	},
	{
		title: "AI Privacy & Security",
		company: "Clemson Creative Inquiry",
		description:
			"Examined critical security flaws in AI systems and distinguished appropriate defenses by designing and implementing AI and machine learning systems.",
		details: [
			"Constructed novel neural network architectures given a project's parameters and be able to predict the effect of ML parameters on the outcome of training algorithms",
		],
	},
	{
		title: "IBM in Watson AI",
		company: "Clemson Creative Inquiry",
		description:
			"Engage in high-level discussions such as the varieties and capabilities of existing AI/ML technologies, the ethical implications of AI/ML in society, and common techniques in AI/ML",
		details: [
			"Conduct research career readiness/competency development using IBM Watson, Python, and other libraries such as PyTorch and Pandas with NLP to analyze open-ended survey responses from interns and their mentors",
		],
	},
	{
		title: "TRACE Web Development Boot Camp",
		company: "Clemson TRACE Research Group",
		description:
			"Obtained skills and technologies to work on cutting-edge web applications such as APIs, Tailwind CSS, Node.js, Github, etc.",
		details: [
			"Tinkered with the basics of HTML, CSS, and JavaScript to the modern features of React.js with hooks",
			"Launched and deployed final project on Vercel and Github",
		],
	},
];

export default function Experiences() {
	return (
		<main className="pt-24 min-h-screen bg-gray-100">
			<section className="py-12">
				<div className="container mx-auto px-4">
					<h1 className="text-4xl font-bold mb-8 text-center">Experiences</h1>

					<div className="space-y-12">
						{experiences.map((experience, index) => (
							<ExperienceCard key={index} {...experience} />
						))}
					</div>

					<h2 className="text-3xl font-bold mt-16 mb-8 text-center">
						Projects
					</h2>

					<div className="space-y-12">
						{projects.map((project, index) => (
							<ProjectCard key={index} {...project} />
						))}
					</div>

					<div className="mt-16 flex flex-col md:flex-row items-center justify-between">
						<div className=" w-full md:w-1/3">
							<h2 className="text-3xl font-bold mb-4">My Work Showcase</h2>
							<p className="mb-8 text-lg">
								Since beginning my journey in this field, my dedication to the
								work and motivation to grow has led me to exceptional projects
								and experiences. I'm looking to explore different opportunities
								to obtain experience through research and internship
								experiences. Take a moment to check out my resume, and get in
								touch with any questions.
							</p>
							<Link href="/resume.pdf" target="_blank">
								<Button className="bg-[#727555] hover:bg-[#5a5c44] text-white transition-transform duration-300 hover:scale-110 transform origin-center">
									View Resume
								</Button>
							</Link>
						</div>

						<div className="relative w-100 md:right-50 h-100 flex justify-center items-center mt-8 md:mt-0 md:ml-5">
							<Image
								src="/imgs/doc.png"
								alt="Resume document"
								fill
								className="object-contain"
							/>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
