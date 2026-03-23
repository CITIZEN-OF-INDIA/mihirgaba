import { Section } from "@/components/ui/section";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  return (
    <Section id="about" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            About InvestNow Estate
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">
            Building Wealth Through <span className="text-primary">Strategic Real Estate</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            InvestNow Estate is a premier real estate consultancy based in Gurugram. Founded and led by Mihir Gaba, we are dedicated to transforming how people invest in property.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We don't just sell properties; we build portfolios. Our deep understanding of the Gurugram micro-markets allows us to identify high-potential residential and commercial opportunities before they become mainstream.
          </p>
          
          <div className="space-y-4 pt-4">
            {[
              "Unwavering Transparency in every transaction",
              "Building Trust for long-term relationships",
              "Data-driven investment strategies"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
            <img 
              src={`${import.meta.env.BASE_URL}images/about-img.png`} 
              alt="Modern Architecture" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-background/90 backdrop-blur-md border border-border p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-display font-bold text-primary mb-1">10+</div>
                <div className="text-foreground font-medium">Years of Combined Market Experience</div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl -z-10" />
        </motion.div>
      </div>
    </Section>
  );
}
