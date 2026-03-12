import { Star, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BookCardProps {
  title: string
  author: string
  cover: string
  rating: number
  category: string
}

export function BookCard({ title, author, cover, rating, category }: BookCardProps) {
  return (
    <div className="group relative bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300">
      {/* Book Cover */}
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <img 
          src={cover} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick Actions */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            <BookOpen className="h-4 w-4 mr-2" />
            Oku
          </Button>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 text-xs font-medium bg-background/90 text-foreground rounded-md">
            {category}
          </span>
        </div>
      </div>

      {/* Book Info */}
      <div className="p-4">
        <h3 className="font-serif font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{author}</p>
        
        {/* Rating */}
        <div className="mt-3 flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < rating ? 'text-primary fill-primary' : 'text-border'}`} 
            />
          ))}
          <span className="ml-2 text-sm text-muted-foreground">{rating}.0</span>
        </div>
      </div>
    </div>
  )
}
