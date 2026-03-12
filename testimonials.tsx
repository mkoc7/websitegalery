import { Search, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            10.000+ kitap koleksiyonu
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
            Okumak için
            <span className="block text-primary">mükemmel yer</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Binlerce kitap arasından favorilerinizi keşfedin. Klasiklerden modern eserlere, 
            her türden kitabı dijital kütüphanemizde bulabilirsiniz.
          </p>

          {/* Search Bar */}
          <div className="mt-10 max-w-xl mx-auto">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  type="search" 
                  placeholder="Kitap adı, yazar veya ISBN..." 
                  className="pl-12 h-14 text-base bg-card border-border shadow-sm"
                />
              </div>
              <Button className="h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90">
                <span className="hidden sm:inline">Ara</span>
                <ArrowRight className="h-5 w-5 sm:ml-2" />
              </Button>
            </div>
          </div>

          {/* Popular Searches */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Popüler:</span>
            {["Roman", "Bilim Kurgu", "Tarih", "Felsefe", "Şiir"].map((tag) => (
              <button 
                key={tag}
                className="px-3 py-1 rounded-full bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10K+", label: "Kitap" },
              { value: "500+", label: "Yazar" },
              { value: "50K+", label: "Okuyucu" },
              { value: "100+", label: "Kategori" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
