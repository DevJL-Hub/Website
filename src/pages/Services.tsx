import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Globe, Code, Zap, Palette, Check, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Portfolio Websites',
      description: 'Professional portfolio sites that showcase your work and attract clients.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Custom CMS', 'Mobile-First'],
      price: 'Starting at $1,500',
    },
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Modern, interactive user interfaces built with cutting-edge technologies.',
      features: ['React/Vue/Angular', 'Responsive Design', 'Performance Optimized', 'Accessibility', 'Cross-browser Support'],
      price: 'Starting at $2,500',
    },
    {
      icon: Zap,
      title: 'Full-Stack Applications',
      description: 'Complete web applications from database to deployment.',
      features: ['Custom Backend', 'Database Design', 'API Development', 'Cloud Deployment', 'Maintenance & Support'],
      price: 'Starting at $5,000',
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Visual identity and branding that makes your business stand out.',
      features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials', 'UI/UX Design', 'Print & Digital'],
      price: 'Starting at $800',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your goals, target audience, and project requirements through detailed consultation.',
    },
    {
      step: '02',
      title: 'Planning',
      description: 'We create a comprehensive project plan, including timeline, milestones, and technical specifications.',
    },
    {
      step: '03',
      title: 'Design',
      description: 'Our team crafts beautiful, user-centered designs that align with your brand and objectives.',
    },
    {
      step: '04',
      title: 'Development',
      description: 'We build your solution using best practices, clean code, and cutting-edge technologies.',
    },
    {
      step: '05',
      title: 'Testing',
      description: 'Rigorous testing ensures your project works flawlessly across all devices and browsers.',
    },
    {
      step: '06',
      title: 'Launch',
      description: 'We deploy your project and provide ongoing support to ensure continued success.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <h1 className="brand-heading mb-6">
            Our Services
          </h1>
          <p className="hero-text max-w-3xl mx-auto">
            Comprehensive web solutions designed to help your business grow and succeed online. 
            From simple portfolios to complex applications, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-elegant">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-primary">{service.price}</span>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading mb-4">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery from start to finish.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="card-elegant text-center">
                <CardContent className="pt-8">
                  <div className="text-4xl font-bold text-primary mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="section-heading mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your needs and create something amazing together. 
            Get a free consultation and project quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-primary" asChild>
              <Link to="/contact">
                Get Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="btn-secondary" asChild>
              <Link to="/projects">
                View Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;