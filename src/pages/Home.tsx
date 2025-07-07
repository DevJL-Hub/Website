import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, Globe, Zap, Users, Award } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Home = () => {
  const services = [
    {
      icon: Globe,
      title: 'Portfolio Websites',
      description: 'Stunning portfolio sites that showcase your work and attract clients.',
    },
    {
      icon: Code,
      title: 'Frontend Design',
      description: 'Modern, responsive interfaces built with the latest technologies.',
    },
    {
      icon: Zap,
      title: 'Full-Stack Development',
      description: 'Complete web applications from concept to deployment.',
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Visual identity and branding that makes your business stand out.',
    },
  ];

  const features = [
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Every project is tailored to your specific needs and goals.',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality.',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Professional-grade solutions built to last and scale.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative text-center max-w-4xl mx-auto">
          <h1 className="brand-heading mb-6">
            Built to simplify.<br />
            Powered to scale.
          </h1>
          <p className="hero-text mb-8 max-w-2xl mx-auto">
            Professional web solutions for modern businesses and developers. 
            From portfolio websites to full-stack applications, we deliver 
            exceptional digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-primary">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="btn-secondary">
              View Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading mb-4">
              What We Build
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web solutions designed to help your business grow and succeed online.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-elegant text-center">
                <CardContent className="pt-8">
                  <service.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading mb-4">
              Why Choose Dev JL
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with design excellence to deliver 
              solutions that drive results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <h2 className="section-heading mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and bring your vision to life. 
            Get in touch for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-primary" asChild>
              <Link to="/contact">
                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="btn-secondary" asChild>
              <Link to="/services">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;