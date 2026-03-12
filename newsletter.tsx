"use client"

import { useState } from "react"
import Link from "next/link"
import { BookOpen, Menu, Search, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="font-serif text-2xl font-bold text-foreground">Kitaplık</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Ana Sayfa
            </Link>
            <Link href="#" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Kategoriler
            </Link>
            <Link href="#" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Yeni Çıkanlar
            </Link>
            <Link href="#" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Popüler
            </Link>
            <Link href="#" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Hakkımızda
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Kitap ara..." 
                className="pl-10 w-64 bg-secondary border-0"
              />
            </div>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Üye Ol
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Kitap ara..." 
                className="pl-10 w-full bg-secondary border-0"
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="#" className="block py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Ana Sayfa
            </Link>
            <Link href="#" className="block py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Kategoriler
            </Link>
            <Link href="#" className="block py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Yeni Çıkanlar
            </Link>
            <Link href="#" className="block py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Popüler
            </Link>
            <Link href="#" className="block py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Hakkımızda
            </Link>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" className="flex-1">Giriş Yap</Button>
              <Button className="flex-1 bg-primary text-primary-foreground">Üye Ol</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
