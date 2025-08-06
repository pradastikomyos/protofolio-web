import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

export const PortfolioSection = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "NeatRepo",
      description: "A comprehensive GitHub portfolio organizer that helps developers clean up and organize their repositories to be job-ready",
      fullDescription: "NeatRepo is a modern web application designed specifically for developers who want to showcase their GitHub portfolio professionally. It features revolutionary bulk operations for repository management, visual drag-and-drop organization, AI-enhanced portfolio optimization, and enterprise-grade security with GitHub OAuth integration.",
      technologies: ["Next.js", "React", "TypeScript", "Supabase"],
      gradient: "from-gray-50 via-white to-gray-100",
      logos: ["/neatrepoblackstroke.png", "/react-logo.png", "/supabase-logo.png", "/TypeScript.png"],
      siteUrl: "https://neatrepo.vercel.app/",
      githubUrl: "https://github.com/almond-donut/NeatRepo"
    },
    {
      id: 2,
      title: "Thesis Genius Recommender",
      description: "AI-powered thesis topic recommendation system using K-Means clustering and LLM integration",
      fullDescription: "Thesis Genius is an intelligent recommendation system that helps students find personalized thesis topics based on their GPA, interests, and previous project summaries. The system uses K-Means clustering for data analysis and integrates with Gemini LLM to generate tailored thesis recommendations through a REST API.",
      technologies: ["TypeScript", "React", "K-Means", "Gemini AI"],
      gradient: "from-gray-50 via-white to-gray-100",
      logos: ["/thesisacademicrecomennder.jpg", "/react-logo.png", "/gemini-logo.png", "/TypeScript.png"],
      siteUrl: "https://lovable.dev/projects/2195d297-3bcf-426c-b825-47edeb4463eb",
      githubUrl: "https://github.com/almond-donut/thesis-genius-recommender-system"
    },
    {
      id: 3,
      title: "Grammar Fixer Webapp",
      description: "Real-time grammar and spelling correction tool powered by Google Generative AI",
      fullDescription: "Grammar Fixer is an intelligent web application that automatically corrects grammar and spelling mistakes in real-time. It features debounced text processing, highlighted corrections, copy-to-clipboard functionality, and a responsive design that works across all devices. The app uses Google Generative AI for accurate text correction.",
      technologies: ["Next.js", "React", "TypeScript", "Google AI"],
      gradient: "from-gray-50 via-white to-gray-100",
      logos: ["/grammarfixerwebapp.jpg", "/react-logo.png", "/gemini-logo.png", "/TypeScript.png"],
      siteUrl: "https://grammar-fixer-webapp.vercel.app/",
      githubUrl: "https://github.com/almond-donut/grammar-fixer-webapp"
    },
    {
      id: 4,
      title: "Loveable English Spark",
      description: "Gamified English learning platform for SMK students with comprehensive teacher and student portals",
      fullDescription: "A complete gamification-based English learning platform designed for SMK students. Features include quiz management, interactive learning experiences, achievement systems, leaderboards, and real-time progress tracking. The platform includes separate portals for teachers and students with role-based access control.",
      technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
      gradient: "from-gray-50 via-white to-gray-100",
      logos: ["/react-logo.png", "/supabase-logo.png", "/TypeScript.png"],
      siteUrl: "https://english-spark.vercel.app/",
      githubUrl: "https://github.com/pradastikomyos/gamification-english-app"
    },
    {
      id: 5,
      title: "Grammar Fixer Chrome Extension",
      description: "Fast Chrome extension for quick grammar and typo correction using Google Gemini 2.0 Flash API",
      fullDescription: "A lightweight Chrome extension that provides instant grammar and spelling correction for Indonesian and English text. Features modern glassmorphism design, keyboard shortcuts, character counting, and seamless integration with Google Gemini AI for accurate text correction directly from the browser toolbar.",
      technologies: ["JavaScript", "HTML", "Chrome API", "Google Gemini"],
      gradient: "from-gray-50 via-white to-gray-100",
      logos: ["/html-logo.png", "/gemini-logo.png"],
      githubUrl: "https://github.com/pradastikomyos/typo-grammar-extension"
    },
    {
      id: 6,
      title: "N8N Lightweight RAG Bot",
      description: "Telegram chatbot implementing RAG concept using N8N, Google Sheets, and Gemini API",
      fullDescription: "A lightweight implementation of Retrieval-Augmented Generation (RAG) using N8N as a low-code orchestrator. The bot retrieves data from Google Sheets, augments prompts with relevant context, and generates responses using Gemini API. Features short-term memory and seamless Telegram integration.",
      technologies: ["N8N", "Google Sheets", "Gemini API", "Telegram Bot"],
      gradient: "from-gray-50 via-white to-gray-100",
      logos: ["/n8n-color.png", "/telegram-logo.png", "/google-sheetslogo.png", "/gemini-logo.png"],
      githubUrl: "https://github.com/pradastikomyos/n8n-lightweight-rag-bot"
    },
    {
      id: 7,
      title: "Text Sentiment Analysis",
      description: "Advanced sentiment analysis system using Caikit framework and HuggingFace Transformers with gRPC",
      fullDescription: "A sophisticated sentiment analysis project that leverages the power of Caikit framework and HuggingFace Transformers to analyze text sentiment. The system uses gRPC for efficient client-server communication and provides accurate sentiment classification for text inputs. Built with Python and modern ML frameworks for robust performance.",
      technologies: ["Python", "Caikit", "HuggingFace", "gRPC"],
      gradient: "from-gray-50 via-white to-gray-100",
      logos: ["/python-logo.png", "/huggingface-logo.png", "/scikit-learn.png"],
      githubUrl: "https://github.com/pradastikomyos/-Text-Sentiment-Analysis-using-Caikit-and-Hugging-Face"
    },
    {
      id: 8,
      title: "Anime Character Generator",
      description: "Deep Convolutional GAN implementation for generating realistic anime character faces using Keras",
      fullDescription: "A Deep Convolutional Generative Adversarial Network (DCGAN) project that generates realistic anime character faces. The system trains both generator and discriminator models to create unique anime characters with variations in style while maintaining visual authenticity. Implemented using Keras and TensorFlow on Kaggle.",
      technologies: ["Python", "Keras", "TensorFlow", "DCGAN"],
      gradient: "from-gray-50 via-white to-gray-100",
      logos: ["/python-logo.png", "/TensorFlow.png", "/Keras.png"],
      githubUrl: "https://github.com/pradastikomyos/Anime-character"
    },
    {
      id: 9,
      title: "NLP with HuggingFace Transformers",
      description: "Comprehensive NLP pipeline implementation using HuggingFace Transformers for various language tasks",
      fullDescription: "A comprehensive Natural Language Processing project showcasing various NLP capabilities including sentiment analysis, text generation, summarization, and translation. Built using HuggingFace Transformers pipeline, the project demonstrates practical applications of modern NLP techniques for real-world language processing tasks.",
      technologies: ["Python", "HuggingFace", "Transformers", "NLP"],
      gradient: "from-gray-50 via-white to-gray-100",
      logos: ["/python-logo.png", "/huggingface-logo.png"],
      githubUrl: "https://github.com/pradastikomyos/NLP_With_HF_Transformers"
    },
    {
      id: 10,
      title: "IBM WatsonX LLM Plugin",
      description: "Command-line plugin integrating IBM WatsonX.ai with LLM for advanced AI capabilities",
      fullDescription: "A powerful CLI plugin that integrates IBM WatsonX.ai with the LLM command-line tool, providing access to cutting-edge machine learning models directly from the terminal. Features include model listing, embeddings, chat capabilities, and seamless integration with IBM Cloud IAM authentication.",
      technologies: ["Python", "IBM WatsonX", "CLI", "Machine Learning"],
      gradient: "from-gray-50 via-white to-gray-100",
      logos: ["/python-logo.png", "/IBM-logo.png", "/watsonx-logo.png"],
      githubUrl: "https://github.com/pradastikomyos/watsonx-llm"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 portfolio-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="portfolio-text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent projects and technical achievements
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`portfolio-card-gradient border border-border/50 overflow-hidden portfolio-hover-lift portfolio-slide-up group cursor-pointer portfolio-project-card ${
                expandedProject === project.id ? 'md:col-span-2 expanded portfolio-expand' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
            >
              {/* Expanded View */}
              {expandedProject === project.id ? (
                <div className="p-6">
                  {/* Header with Logo(s) */}
                  <div className="flex items-start gap-6 mb-6">
                    {(('logo' in project && project.logo) || ('logos' in project && project.logos)) && (
                      <div className="flex-shrink-0">
                        {'logos' in project && project.logos ? (
                          <div className="flex gap-2">
                            {project.logos.map((logo, logoIndex) => (
                              <div key={logoIndex} className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} p-2 transition-all duration-500 transform shadow-lg ${
                                expandedProject === project.id ? 'portfolio-logo-animate' : ''
                              }`}>
                                <img 
                                  src={logo} 
                                  alt={`${project.title} logo ${logoIndex + 1}`}
                                  className="w-full h-full object-contain drop-shadow-sm"
                                />
                              </div>
                            ))}
                          </div>
                        ) : 'logo' in project && project.logo ? (
                          <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${project.gradient} p-3 transition-all duration-500 transform shadow-lg ${
                            expandedProject === project.id ? 'portfolio-logo-animate' : ''
                          }`}>
                            <img 
                              src={project.logo as string} 
                              alt={`${project.title} logo`}
                              className="w-full h-full object-contain drop-shadow-sm"
                            />
                          </div>
                        ) : null}
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-foreground mb-2 portfolio-text-gradient">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {project.fullDescription || project.description}
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-4 py-2 text-sm bg-secondary/50 text-secondary-foreground rounded-full border border-border/30 portfolio-bounce hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      className="portfolio-bounce bg-primary text-primary-foreground hover:bg-primary-glow px-6 py-3"
                      onClick={(e) => {
                        e.stopPropagation();
                        // If no siteUrl, use githubUrl for "Go to the Site" button
                        const targetUrl = project.siteUrl || project.githubUrl;
                        if (targetUrl) {
                          window.open(targetUrl, '_blank');
                        }
                      }}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Go to the Site
                    </Button>
                    {project.githubUrl && project.siteUrl && (
                      <Button 
                        variant="outline" 
                        className="portfolio-bounce hover:bg-secondary px-6 py-3"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, '_blank');
                        }}
                      >
                        <Github size={16} className="mr-2" />
                        View Code
                      </Button>
                    )}
                    <Button 
                      variant="ghost" 
                      className="portfolio-bounce hover:bg-secondary/50"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedProject(null);
                      }}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              ) : (
                /* Normal Card View */
                <>
                  {/* Project Image */}
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    {(('logo' in project && project.logo) || ('logos' in project && project.logos)) ? (
                      <div className="relative h-full flex items-center justify-center">
                        {'logos' in project && project.logos ? (
                          /* Multiple logos layout */
                          <div className="flex gap-3 items-center justify-center">
                            {project.logos.map((logo, logoIndex) => (
                              <div key={logoIndex} className="w-20 h-20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-white/10 backdrop-blur-sm rounded-xl p-3">
                                <img 
                                  src={logo} 
                                  alt={`${project.title} logo ${logoIndex + 1}`}
                                  className="w-full h-full object-contain drop-shadow-xl"
                                />
                              </div>
                            ))}
                          </div>
                        ) : 'logo' in project && project.logo ? (
                          /* Single large centered logo */
                          <div className="w-28 h-28 flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                            <img 
                              src={project.logo as string} 
                              alt={`${project.title} logo`}
                              className="w-full h-full object-contain drop-shadow-xl"
                            />
                          </div>
                        ) : null}
                        {/* Subtle overlay for better contrast */}
                        <div className="absolute inset-0 bg-black/5"></div>
                      </div>
                    ) : (
                      /* Clean gradient background only for projects without logos */
                      <div className="relative h-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                      </div>
                    )}
                    
                    {/* Project Actions */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button 
                        size="sm" 
                        variant="secondary" 
                        className="portfolio-bounce hover:scale-110"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (project.githubUrl) {
                            window.open(project.githubUrl, '_blank');
                          }
                        }}
                      >
                        <Github size={16} />
                      </Button>
                      {(project.siteUrl || project.githubUrl) && (
                        <Button 
                          size="sm" 
                          variant="secondary" 
                          className="portfolio-bounce hover:scale-110"
                          onClick={(e) => {
                            e.stopPropagation();
                            const targetUrl = project.siteUrl || project.githubUrl;
                            if (targetUrl) {
                              window.open(targetUrl, '_blank');
                            }
                          }}
                        >
                          <ExternalLink size={16} />
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Date for Work Experience */}
                    {/* Date removed as requested */}
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 text-sm bg-secondary/50 text-secondary-foreground rounded-full border border-border/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Button */}
                    <Button 
                      variant="outline" 
                      className="w-full portfolio-bounce hover:bg-primary hover:text-primary-foreground hover:border-primary"
                    >
                      VIEW PROJECT
                    </Button>
                  </div>
                </>
              )}
            </Card>
          ))}
        </div>

        {/* View All Projects Button removed as requested */}
      </div>
    </section>
  );
};