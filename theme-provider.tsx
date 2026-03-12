import { Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-6">
            <Mail className="h-8 w-8 text-primary-foreground" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground">
            Yeni Kitaplardan Haberdar Olun
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
            Bültenimize abone olun ve yeni eklenen kitaplar, özel kampanyalar ve okuma önerilerinden ilk siz haberdar olun.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="E-posta adresiniz" 
              className="h-12 bg-primary-foreground border-0 text-foreground placeholder:text-muted-foreground"
            />
            <Button className="h-12 px-6 bg-foreground text-background hover:bg-foreground/90">
              <Send className="h-4 w-4 mr-2" />
              Abone Ol
            </Button>
          </div>

          <p className="mt-4 text-sm text-primary-foreground/60">
            Spam yapmayacağımıza söz veriyoruz. İstediğiniz zaman aboneliğinizi iptal edebilirsiniz.
          </p>
        </div>
      </div>
    </section>
  )
}
