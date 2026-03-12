import Link from "next/link"
import { BookOpen, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

const footerLinks = {
  kesfet: {
    title: "Keşfet",
    links: [
      { label: "Tüm Kitaplar", href: "#" },
      { label: "Kategoriler", href: "#" },
      { label: "Yazarlar", href: "#" },
      { label: "Yayınevleri", href: "#" },
      { label: "Koleksiyonlar", href: "#" },
    ],
  },
  destek: {
    title: "Destek",
    links: [
      { label: "Yardım Merkezi", href: "#" },
      { label: "S.S.S.", href: "#" },
      { label: "İletişim", href: "#" },
      { label: "Geri Bildirim", href: "#" },
    ],
  },
  hakkimizda: {
    title: "Hakkımızda",
    links: [
      { label: "Biz Kimiz", href: "#" },
      { label: "Kariyer", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Basın", href: "#" },
    ],
  },
  yasal: {
    title: "Yasal",
    links: [
      { label: "Kullanım Şartları", href: "#" },
      { label: "Gizlilik Politikası", href: "#" },
      { label: "Çerez Politikası", href: "#" },
      { label: "KVKK", href: "#" },
    ],
  },
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "Youtube" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-background">
              <BookOpen className="h-8 w-8" />
              <span className="font-serif text-2xl font-bold">Kitaplık</span>
            </Link>
            <p className="mt-4 text-background/70 text-sm">
              Türkiye&apos;nin en büyük dijital kütüphanesi. Binlerce kitap, sınırsız okuma keyfi.
            </p>
            
            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-background mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Kitaplık. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-background transition-colors">
              Türkçe
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Erişilebilirlik
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
