import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Send, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "prada.abdul.07@gmail.com",
      link: "mailto:prada.abdul.07@gmail.com"
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const templateParams = {
        from_name: `${formData.get('firstName')} ${formData.get('lastName')}`,
        from_email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        to_name: 'Abdul',
        to_email: 'prada.abdul.07@gmail.com'
      };

      await emailjs.send(
        'service_kz5scck', // Your service ID
        'template_contact', // You'll need to create this template in EmailJS
        templateParams,
        'your_public_key' // You'll need to add your public key here
      );

      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 portfolio-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="portfolio-text-gradient">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your next project or explore collaboration opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="portfolio-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold text-foreground mb-8">Let's Connect</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <Card 
                    key={index} 
                    className="portfolio-card-gradient border border-border/50 p-6 portfolio-hover-lift group"
                  >
                    <a 
                      href={contact.link}
                      className="flex items-center gap-4 text-foreground hover:text-primary transition-colors duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center portfolio-glow group-hover:scale-110 transition-transform duration-300">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{contact.label}</h4>
                        <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  </Card>
                );
              })}
            </div>

            {/* Social Links */}
            <Card className="portfolio-card-gradient border border-border/50 p-6">
              <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/pradastikomyos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="portfolio-bounce hover:bg-primary hover:text-primary-foreground hover:border-primary flex items-center gap-2"
                  >
                    <Github size={20} className="text-muted-foreground" />
                    GitHub
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/prada-a-mufid-a40189332/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="portfolio-bounce hover:bg-primary hover:text-primary-foreground hover:border-primary flex items-center gap-2"
                  >
                    <Linkedin size={20} className="text-muted-foreground" />
                    LinkedIn
                  </Button>
                </a>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="portfolio-slide-up" style={{ animationDelay: '0.4s' }}>
            <Card className="portfolio-card-gradient border border-border/50 p-8 portfolio-hover-lift">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Send a Message</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg">
                  <p className="text-green-800 dark:text-green-200">Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded-lg">
                  <p className="text-red-800 dark:text-red-200">Failed to send message. Please try again or contact me directly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name
                    </label>
                    <Input 
                      name="firstName"
                      placeholder="Your First Name" 
                      className="bg-input border-border focus:border-primary transition-colors duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name
                    </label>
                    <Input 
                      name="lastName"
                      placeholder="Your Last Name" 
                      className="bg-input border-border focus:border-primary transition-colors duration-200"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email Address
                  </label>
                  <Input 
                    name="email"
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="bg-input border-border focus:border-primary transition-colors duration-200"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Subject
                  </label>
                  <Input 
                    name="subject"
                    placeholder="AI Project Collaboration" 
                    className="bg-input border-border focus:border-primary transition-colors duration-200"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    name="message"
                    placeholder="Let's discuss your AI/ML project ideas and how we can collaborate..." 
                    rows={5}
                    className="bg-input border-border focus:border-primary transition-colors duration-200 resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full portfolio-hover-lift bg-primary text-primary-foreground hover:bg-primary-glow"
                  disabled={isSubmitting}
                >
                  <Send className="mr-2" size={20} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};