import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Target, Zap, Users, Code, ArrowRight } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every line of code, every pixel, every interaction is crafted with meticulous attention to detail.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'We build fast, scalable solutions that grow with your business and exceed user expectations.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Your success is our success. We work closely with you to understand and achieve your goals.',
    },
    {
      icon: Code,
      title: 'Innovation',
      description: 'We stay ahead of the curve, using cutting-edge technologies to solve complex problems.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <h1 className="brand-heading mb-6">
            About Dev JL
          </h1>
          <p className="hero-text max-w-3xl mx-auto">
            We're a development studio focused on creating exceptional digital experiences. 
            Our mission is to simplify complexity and build solutions that scale with your ambitions.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Dev JL was born from a simple belief: great technology should be accessible, 
                  scalable, and beautifully crafted. We started as a small team of developers 
                  and designers who were passionate about creating digital solutions that make 
                  a real difference.
                </p>
                <p>
                  Today, we work with businesses of all sizes, from startups to established 
                  enterprises, helping them build their digital presence and achieve their goals. 
                  Our approach combines technical excellence with design thinking to deliver 
                  solutions that are both powerful and user-friendly.
                </p>
                <p>
                  Every project we take on is an opportunity to push boundaries, learn something 
                  new, and create something remarkable. We believe that the best solutions come 
                  from collaboration, innovation, and an unwavering commitment to quality.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="card-elegant">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-2">50+</h3>
                  <p className="text-muted-foreground">Projects Completed</p>
                </CardContent>
              </Card>
              <Card className="card-elegant">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-2">3+</h3>
                  <p className="text-muted-foreground">Years of Excellence</p>
                </CardContent>
              </Card>
              <Card className="card-elegant">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-2">100%</h3>
                  <p className="text-muted-foreground">Client Satisfaction</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape how we approach every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-elegant">
                <CardContent className="pt-8">
                  <value.icon className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
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
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to bring your vision to life? We'd love to hear about your project 
            and discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-primary" asChild>
              <Link to="/contact">
                Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="btn-secondary" asChild>
              <Link to="/projects">
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;