import { Section } from "@/components/ui/section";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const areas = [
  "Nirvana Country",
  "Golf Course Road",
  "Golf Course Extension",
  "Sohna Road",
  "New Gurgaon",
  "Dwarka Expressway"
];

export function Areas() {
  return (
    <Section id="areas" className="bg-secondary/5 dark:bg-card/50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          <span className="w-2 h-2 rounded-full bg-primary" />
          Prime Locations
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
          Areas We Serve
        </h2>
        <p className="text-lg text-muted-foreground">
          Specializing in Gurugram's most sought-after and rapidly developing real estate corridors.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {areas.map((area, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-card border border-border p-6 rounded-2xl hover:border-primary transition-all duration-300 hover:shadow-lg flex items-center gap-4 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="h-12 w-12 rounded-full bg-secondary/10 dark:bg-background flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 z-10 shrink-0">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold font-display text-foreground z-10">{area}</h3>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
