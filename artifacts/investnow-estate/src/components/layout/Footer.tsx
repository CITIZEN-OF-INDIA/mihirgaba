import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-foreground text-background dark:bg-card dark:text-foreground pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold tracking-tight text-background dark:text-foreground">
              Invest<span className="text-primary">Now</span> Estate
            </h3>
            <p className="text-background/70 dark:text-muted-foreground text-sm max-w-xs">
              Your trusted property advisor in Gurugram, specializing in premium residential and commercial real estate investments.
            </p>
            <div className="flex gap-4 pt-2">
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-background/10 hover:text-primary dark:hover:bg-accent/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-background/10 hover:text-primary dark:hover:bg-accent/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-background/10 hover:text-primary dark:hover:bg-accent/10">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-display">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Our Services', 'Areas We Serve', 'Meet The Team'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-background/70 dark:text-muted-foreground hover:text-primary dark:hover:text-primary transition-colors text-sm flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-display">Our Services</h4>
            <ul className="space-y-2">
              {['Residential Properties', 'Commercial Real Estate', 'Investment Advisory', 'Property Management', 'Leasing & Rentals'].map((link) => (
                <li key={link}>
                  <a href="#services" className="text-background/70 dark:text-muted-foreground hover:text-primary dark:hover:text-primary transition-colors text-sm flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-display">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-background/70 dark:text-muted-foreground text-sm">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>NS10, Espace, Nirvana Country,<br />Gurugram (Haryana) 122018</span>
              </li>
              <li className="flex items-center gap-3 text-background/70 dark:text-muted-foreground text-sm">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+918929800801" className="hover:text-primary transition-colors">+91 89298 00801</a>
              </li>
              <li className="flex items-center gap-3 text-background/70 dark:text-muted-foreground text-sm">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:mihirgaba19@gmail.com" className="hover:text-primary transition-colors">mihirgaba19@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 dark:border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 dark:text-muted-foreground text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} InvestNow Estate. All rights reserved.
          </p>
          <p className="text-background/50 dark:text-muted-foreground text-sm flex items-center gap-1">
            Led by <span className="font-semibold text-primary">Mihir Gaba</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
