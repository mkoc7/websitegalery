import { BookMarked, Sparkles, Clock, Heart, Lightbulb, Globe, Palette, GraduationCap } from "lucide-react"

const categories = [
  { name: "Roman", icon: BookMarked, count: 2340, color: "bg-primary/10 text-primary" },
  { name: "Bilim Kurgu", icon: Sparkles, count: 890, color: "bg-accent/10 text-accent" },
  { name: "Tarih", icon: Clock, count: 1230, color: "bg-primary/10 text-primary" },
  { name: "Aşk", icon: Heart, count: 1560, color: "bg-accent/10 text-accent" },
  { name: "Felsefe", icon: Lightbulb, count: 670, color: "bg-primary/10 text-primary" },
  { name: "Dünya Klasikleri", icon: Globe, count: 980, color: "bg-accent/10 text-accent" },
  { name: "Sanat", icon: Palette, count: 450, color: "bg-primary/10 text-primary" },
  { name: "Eğitim", icon: GraduationCap, count: 780, color: "bg-accent/10 text-accent" },
]

export function Categories() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Kategorileri Keşfet
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            İlgi alanınıza göre kategorilere göz atın ve size en uygun kitapları bulun.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <button
              key={category.name}
              className="group p-6 rounded-xl bg-background border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {category.count.toLocaleString('tr-TR')} kitap
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
