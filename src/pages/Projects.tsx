import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern online store with advanced filtering, payment integration, and inventory management.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Full-Stack',
      featured: true,
    },
    {
      title: 'Creative Portfolio',
      description: 'Stunning portfolio website for a design agency with smooth animations and CMS integration.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'GSAP', 'Contentful', 'Vercel'],
      category: 'Portfolio',
      featured: true,
    },
    {
      title: 'SaaS Dashboard',
      description: 'Analytics dashboard with real-time data visualization and user management system.',
      image: '/api/placeholder/600/400',
      technologies: ['Vue.js', 'D3.js', 'Firebase', 'Tailwind'],
      category: 'Web App',
      featured: false,
    },
    {
      title: 'Restaurant Website',
      description: 'Mobile-first website with online ordering, reservation system, and menu management.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Next.js', 'Sanity', 'Stripe'],
      category: 'Website',
      featured: false,
    },
    {
      title: 'Brand Identity System',
      description: 'Complete visual identity including logo, color palette, typography, and brand guidelines.',
      image: '/api/placeholder/600/400',
      technologies: ['Figma', 'Illustrator', 'InDesign', 'Photoshop'],
      category: 'Design',
      featured: false,
    },
    {
      title: 'Mobile App Landing',
      description: 'Conversion-optimized landing page for mobile app with feature showcase and download CTAs.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Framer Motion', 'Tailwind', 'Netlify'],
      category: 'Landing Page',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const allProjects = projects.filter(project => !project.featured);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <h1 className="brand-heading mb-6">
            Our Projects
          </h1>
          <p className="hero-text max-w-3xl mx-auto">
            A showcase of our recent work and successful collaborations. 
            Each project represents our commitment to quality, innovation, and client satisfaction.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="section-heading text-center mb-16">
            Featured Work
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="card-elegant overflow-hidden">
                <div className="aspect-video bg-muted/50 flex items-center justify-center">
                  <div className="text-muted-foreground">Project Image</div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{project.category}</Badge>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <h2 className="section-heading text-center mb-16">
            More Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <Card key={index} className="card-elegant overflow-hidden">
                <div className="aspect-video bg-muted/50 flex items-center justify-center">
                  <div className="text-muted-foreground text-sm">Project Image</div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{project.category}</Badge>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">{tech}</Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">+{project.technologies.length - 3}</Badge>
                    )}
                  </div>
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
            Let's create something amazing together. Get in touch to discuss your vision 
            and see how we can bring it to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-primary" asChild>
              <Link to="/contact">
                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="btn-secondary" asChild>
              <Link to="/services">
                View Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;