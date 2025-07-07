import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="font-bold text-xl mb-4 block">
              Dev JL
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Built to simplify. Powered to scale. Professional web solutions 
              for modern businesses and developers.
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 Dev JL. All rights reserved.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-foreground transition-colors">Portfolio Websites</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition-colors">Frontend Design</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition-colors">Full-Stack Development</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition-colors">Graphic Design</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/projects" className="hover:text-foreground transition-colors">Projects</Link></li>
              <li><Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;