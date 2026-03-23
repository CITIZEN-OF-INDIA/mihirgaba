import { Section } from "@/components/ui/section";
import { Home, Building2, TrendingUp, Handshake } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Residential Properties",
    description: "Premium plots, luxury apartments, and independent builder floors in prime locations.",
    features: ["Plots", "Flats & Apartments", "Builder Floors"]
  },
  {
    icon: Building2,
    title: "Commercial & Institutional",
    description: "Strategic spaces for businesses, institutions, and high-yield operational setups.",
    features: ["Schools", "Hospitals", "Guest Houses", "PG Accommodations"]
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Expert portfolio management focused on capital appreciation and robust ROI.",
    features: ["High-return investments", "Land banking", "Rental yield properties"]
  },
  {
    icon: Handshake,
    title: "Buy | Sell | Lease",
    description: "End-to-end assistance whether you are acquiring, liquidating, or renting assets.",
    features: ["Property Buying", "Selling", "Leasing & Rentals"]
  }
];

export function Services() {
  return (
    <Section id="services" className="bg-secondary/5 dark:bg-card/50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          <span className="w-2 h-2 rounded-full bg-primary" />
          Our Expertise
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
          Comprehensive Real Estate Services
        </h2>
        <p className="text-lg text-muted-foreground">
          We provide tailored solutions across the entire real estate spectrum, ensuring every client's unique requirements are met with precision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <Card 
            key={index} 
            className="group relative overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0 transition-transform duration-500 group-hover:scale-150" />
            <CardHeader className="relative z-10 pb-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="h-7 w-7" />
              </div>
              <CardTitle className="text-2xl font-display">{service.title}</CardTitle>
              <CardDescription className="text-base mt-2">{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <ul className="space-y-2 mt-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-foreground font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
