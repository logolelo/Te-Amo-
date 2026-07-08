const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-3xl italic mb-4">Te Amo</h3>
            <p className="font-sans text-sm text-primary-foreground/80 leading-relaxed max-w-md mb-4">
              Natural Blends. Artisanal solid perfumes crafted with 100% natural oils. 
              Experience fragrance the way nature intended.
            </p>
            <p className="font-sans text-xs text-primary-foreground/60 tracking-wider uppercase">
              Net Wt. 10g / 0.35 oz per compact
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase mb-6 text-primary-foreground/60">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Collection", "Our Story", "Ingredients", "Shipping"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase mb-6 text-primary-foreground/60">
              Contact
            </h4>
            <ul className="space-y-3 font-sans text-sm text-primary-foreground/80">
              <li>hello@teamo.in</li>
              <li>+91 98765 43210</li>
              <li className="pt-2">
                <div className="flex gap-4">
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    Instagram
                  </a>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    WhatsApp
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="font-sans text-xs text-primary-foreground/60 tracking-wide">
            © 2024 Te Amo. All rights reserved. Made with love in India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
