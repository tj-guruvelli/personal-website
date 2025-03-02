import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ExperienceCardProps {
  title: string
  company: string
  description: string[]
}

export function ExperienceCard({ title, company, description }: ExperienceCardProps) {
  return (
    <Card className="bg-white transition-all duration-300 hover:shadow-lg hover:scale-105">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <p className="text-gray-600">{company}</p>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

