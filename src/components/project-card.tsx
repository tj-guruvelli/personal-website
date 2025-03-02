import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
	title: string;
	company?: string;
	description: string;
	details: string[];
	image?: string;
	link?: string;
}

export function ProjectCard({
	title,
	company,
	description,
	details,
	image,
	link,
}: ProjectCardProps) {
	return (
		<div className="overflow-hidden rounded-lg bg-white shadow-md transform hover:scale-105 transition-all duration-300">
			{/* Image container with no padding or margin */}
			{image && (
				<div className="relative w-full h-100">
					<Image
						src={image}
						alt={title}
						fill
						className="object-cover object-center"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
			)}

			{/* Card content area */}
			<div className="p-6">
				<h3 className="text-2xl font-bold mb-1">{title}</h3>
				{company && <p className="text-gray-600 mb-4">{company}</p>}

				<p className="mb-4">{description}</p>

				{details.length > 0 && (
					<ul className="list-disc pl-5 space-y-2 mb-4">
						{details.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				)}

				{link && (
					<div className="mt-4">
						<Link
							href={link.replace(/^#/, "")}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block bg-[#727555] hover:bg-[#5a5c44] transform hover:scale-125 transition-all duration-300 text-white px-4 py-2 rounded"
						>
							Go to link
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}
