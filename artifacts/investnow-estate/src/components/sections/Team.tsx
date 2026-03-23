import { Section } from "@/components/ui/section";
import { Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Team() {
  return (
    <Section id="team" className="bg-background">
      <div className="max-w-5xl mx-auto bg-card border border-border rounded-3xl overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-5 h-full">
          <div className="md:col-span-2 relative h-80 md:h-auto">
            <img 
              src={`${import.meta.env.BASE_URL}images/mihir-gaba.png`}
              alt="Mihir Gaba - Founder" 
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/80" />
            <div className="absolute bottom-6 left-6 md:hidden">
              <h3 className="text-3xl font-display font-bold text-white">Mihir Gaba</h3>
              <p className="text-primary font-medium">Founder & Director</p>
            </div>
          </div>
          
          <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
            <div className="hidden md:block mb-6">
              <h3 className="text-4xl font-display font-bold text-foreground">Mihir Gaba</h3>
              <p className="text-xl text-primary font-medium mt-1">Founder & Director</p>
            </div>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With extensive experience in the Gurugram real estate sector, Mihir leads InvestNow Estate with a vision to bring absolute transparency and analytical rigor to property investments.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              His approach moves beyond traditional brokering—focusing instead on comprehensive advisory that protects client capital while maximizing returns. Under his leadership, the firm has successfully guided numerous clients toward building robust property portfolios.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="rounded-full gap-2" asChild>
                <a href="tel:+918929800801">
                  <Phone className="h-4 w-4" /> Call Mihir
                </a>
              </Button>
              <Button variant="outline" className="rounded-full gap-2" asChild>
                <a href="mailto:mihirgaba19@gmail.com">
                  <Mail className="h-4 w-4" /> Email
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
