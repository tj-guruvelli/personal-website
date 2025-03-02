import InterestsCarousel from "@/components/interests-carousel"

export default function InterestsHobbies() {
  return (
    <main className="pt-24 min-h-screen">
      <section className="py-12 bg-cyan-900">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl text-white font-bold mb-12 text-center">Interests & Hobbies</h1>
          <InterestsCarousel />
        </div>
      </section>
    </main>
  )
}


