import { Quote } from "lucide-react"

const testimonials = [
  {
    content: "Kitaplık sayesinde okuma alışkanlığım tamamen değişti. Her gün yeni bir kitap keşfediyorum.",
    author: "Ayşe Yılmaz",
    role: "Öğretmen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    content: "Aradığım her kitabı burada bulabiliyorum. Harika bir koleksiyon ve kullanımı çok kolay.",
    author: "Mehmet Kaya",
    role: "Yazılım Mühendisi",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    content: "Dijital kütüphane deneyiminin en iyisi. Kategoriler çok iyi düzenlenmiş, öneriler isabetli.",
    author: "Zeynep Demir",
    role: "Yazar",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Okuyucularımız Ne Diyor?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Binlerce mutlu okuyucu arasına katılın ve okuma keyfinizi keşfedin.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="p-6 rounded-xl bg-background border border-border"
            >
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <p className="text-foreground leading-relaxed">
                {`"${testimonial.content}"`}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
