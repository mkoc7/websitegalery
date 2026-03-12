"use client"

import { useState } from "react"
import { BookCard } from "@/components/book-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const tabs = ["Yeni Çıkanlar", "En Çok Okunanlar", "Editör Seçimi", "Klasikler"]

const books = [
  {
    title: "Suç ve Ceza",
    author: "Fyodor Dostoyevski",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    rating: 5,
    category: "Klasik",
  },
  {
    title: "Sefiller",
    author: "Victor Hugo",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
    rating: 5,
    category: "Roman",
  },
  {
    title: "1984",
    author: "George Orwell",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
    rating: 4,
    category: "Distopya",
  },
  {
    title: "Küçük Prens",
    author: "Antoine de Saint-Exupéry",
    cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop",
    rating: 5,
    category: "Klasik",
  },
  {
    title: "Yüzüklerin Efendisi",
    author: "J.R.R. Tolkien",
    cover: "https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?w=400&h=600&fit=crop",
    rating: 5,
    category: "Fantastik",
  },
  {
    title: "Simyacı",
    author: "Paulo Coelho",
    cover: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400&h=600&fit=crop",
    rating: 4,
    category: "Roman",
  },
  {
    title: "Beyaz Zambaklar Ülkesinde",
    author: "Grigory Petrov",
    cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop",
    rating: 4,
    category: "Biyografi",
  },
  {
    title: "Tutunamayanlar",
    author: "Oğuz Atay",
    cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=600&fit=crop",
    rating: 5,
    category: "Roman",
  },
]

export function FeaturedBooks() {
  const [activeTab, setActiveTab] = useState(tabs[0])

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Öne Çıkan Kitaplar
            </h2>
            <p className="mt-3 text-muted-foreground">
              En popüler ve beğenilen kitapları keşfedin.
            </p>
          </div>
          
          <Button variant="outline" className="self-start md:self-auto group">
            Tümünü Gör
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {books.map((book) => (
            <BookCard key={book.title} {...book} />
          ))}
        </div>
      </div>
    </section>
  )
}
