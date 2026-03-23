import { Section } from "@/components/ui/section";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function Contact() {
  return (
    <Section id="contact" className="bg-secondary/5 dark:bg-card/50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          <span className="w-2 h-2 rounded-full bg-primary" />
          Get In Touch
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
          Ready to Invest in Gurugram?
        </h2>
        <p className="text-lg text-muted-foreground">
          Reach out to us today for a free consultation. Let's discuss your real estate requirements and find the perfect property for you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <Card className="border-border hover:border-primary/50 transition-colors">
          <CardContent className="p-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold font-display text-foreground mb-2">Call Us</h3>
            <p className="text-muted-foreground mb-4">Available Mon-Sat, 10am - 7pm</p>
            <a href="tel:+918929800801" className="text-lg font-semibold text-primary hover:underline">
              +91 89298 00801
            </a>
          </CardContent>
        </Card>

        <Card className="border-border hover:border-primary/50 transition-colors">
          <CardContent className="p-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <Mail className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold font-display text-foreground mb-2">Email Us</h3>
            <p className="text-muted-foreground mb-4">We reply within 24 hours</p>
            <a href="mailto:mihirgaba19@gmail.com" className="text-lg font-semibold text-primary hover:underline">
              mihirgaba19@gmail.com
            </a>
          </CardContent>
        </Card>

        <Card className="border-border hover:border-primary/50 transition-colors">
          <CardContent className="p-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <MapPin className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold font-display text-foreground mb-2">Visit Office</h3>
            <p className="text-muted-foreground mb-4">Nirvana Country, Gurugram</p>
            <span className="text-sm font-medium text-foreground">
              NS10, Espace, Sec 50
            </span>
          </CardContent>
        </Card>
      </div>

      {/* Map Embed */}
      <div className="w-full h-[450px] rounded-3xl overflow-hidden border border-border shadow-lg relative group">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14039.222956272554!2d77.0519349!3d28.4024843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d226f34cd458f%3A0xc3f12adba3dcb295!2sNirvana%20Country%2C%20Gurugram%2C%20Haryana%20122018!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="InvestNow Estate Location"
          className="grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
        />
        
        <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-md p-6 rounded-2xl border border-border shadow-xl max-w-sm hidden md:block">
          <h4 className="text-xl font-bold font-display text-foreground mb-2">InvestNow Estate</h4>
          <p className="text-muted-foreground text-sm mb-4">
            NS10, Espace, Nirvana Country,<br />
            Sector 50, Gurugram, Haryana 122018
          </p>
          <Button className="w-full" asChild>
            <a href="https://maps.google.com/?q=Nirvana+Country+Gurugram" target="_blank" rel="noreferrer">
              Get Directions <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}
