import { Section } from "@/components/ui/section";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Strong Local Expertise in Gurugram",
    description: "Deep understanding of micro-markets, upcoming infrastructure, and pricing trends."
  },
  {
    title: "Verified Property Deals",
    description: "Every property goes through rigorous legal and physical due diligence before we recommend it."
  },
  {
    title: "End-to-End Assistance",
    description: "From property discovery and site visits to negotiation, paperwork, and final registration."
  },
  {
    title: "Personalized Investment Advice",
    description: "Strategies tailored to your budget, risk appetite, and wealth creation goals."
  },
  {
    title: "Transparent Transactions",
    description: "No hidden costs, no surprises. We believe in complete honesty at every step of the journey."
  }
];

export function WhyUs() {
  return (
    <Section id="why-us" className="bg-background overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-primary" />
            The InvestNow Advantage
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            In a crowded market, InvestNow Estate stands out through our commitment to integrity, localized knowledge, and client-first approach.
          </p>

          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="mt-1 w-8 h-8 rounded-full bg-primary/20 flex flex-shrink-0 items-center justify-center">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-1 font-display">{reason.title}</h4>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="bg-card border border-border p-8 rounded-3xl shadow-2xl relative z-10">
            <h3 className="text-2xl font-display font-bold mb-6 text-foreground">Client Success Metrics</h3>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span className="text-foreground">Client Satisfaction</span>
                  <span className="text-primary">100%</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }} 
                    whileInView={{ width: "100%" }} 
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-primary rounded-full" 
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span className="text-foreground">Properties Verified</span>
                  <span className="text-primary">100%</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }} 
                    whileInView={{ width: "100%" }} 
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="h-full bg-primary rounded-full" 
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span className="text-foreground">Market Knowledge</span>
                  <span className="text-primary">Gurugram specific</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }} 
                    whileInView={{ width: "95%" }} 
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="h-full bg-primary rounded-full" 
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-primary/10 rounded-2xl border border-primary/20 text-center">
              <p className="text-lg font-medium text-foreground italic">
                "Our reputation is built entirely on the returns we generate and the peace of mind we provide to our clients."
              </p>
              <p className="mt-4 text-sm font-bold text-primary">— Mihir Gaba</p>
            </div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent translate-x-4 translate-y-4 rounded-3xl -z-10 blur-xl" />
        </div>
      </div>
    </Section>
  );
}
