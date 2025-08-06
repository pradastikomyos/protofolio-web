import { ProgrammingCube } from './ProgrammingCube';
import { Progress } from '@/components/ui/progress';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const AboutSection = () => {
  const languages = [
    { name: 'Python', years: 1, value: 85, color: 'bg-yellow-400' },
    { name: 'JavaScript', years: 1, value: 80, color: 'bg-green-500' },
    { name: 'TypeScript', years: 1, value: 75, color: 'bg-blue-500' },
    { name: 'HTML/CSS', years: 1, value: 70, color: 'bg-orange-500' },
    { name: 'SQL', years: 1, value: 60, color: 'bg-purple-500' },
    { name: 'Java', years: 1, value: 50, color: 'bg-red-500' },
  ];

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Left Column */}
          <div className="portfolio-slide-up text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About me
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              An accomplished AI Engineer, recognized by IBM for excellence in Advanced AI, achieving a perfect Grade 'A' score. Expertise in the full MLOps lifecycle and hands-on proficiency with enterprise platforms like IBM Watsonx. Passionate about building impactful solutions, with a portfolio of end-to-end LLM applications and a proven ability to deliver results.
            </p>
            
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">Languages</h3>
            <div className="space-y-5">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <p className="text-sm text-muted-foreground mb-2">{`${lang.name}: ${lang.years} years`}</p>
                  <Progress value={lang.value} className={`h-2 [&>*]:${lang.color}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="portfolio-slide-up w-full h-96" style={{ animationDelay: '0.2s' }}>
            <ProgrammingCube />
          </div>
        </div>

        {/* IBM Credly Badges */}
        <Card className="portfolio-card-gradient border border-border/50 p-8 portfolio-hover-lift mb-16">
          <div className="portfolio-slide-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
              Professional Certifications
            </h3>
            <p className="text-muted-foreground mb-6">
              IBM SkillsBuild certified professional with expertise in AI, Machine Learning, and Data Science
            </p>
            
            {/* Internship Certificate */}
            <div className="mb-8">
              <h4 className="font-semibold text-foreground mb-4">IBM Advanced AI Scholar Internship</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-muted-foreground mb-4">
                    Successfully completed the IBM Advanced AI Scholar program through Infinite Learning & MSIB Kampus Merdeka, 
                    achieving a perfect Grade 'A' (95/100) for exceptional performance in enterprise-level AI projects.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="https://drive.google.com/drive/folders/1RQykchOXXP2XOME6nDZzEtCPMdsEXI5O?usp=drive_link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
                    >
                      View Certificate Details
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <img 
                    src="/internshipIBMapproved.png" 
                    alt="IBM Advanced AI Scholar Internship Certificate" 
                    className="relative w-full h-auto rounded-lg border border-border/50 shadow-lg group-hover:shadow-2xl transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>
            
            {/* Credly Badges */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="font-semibold text-foreground mb-4">Earned Certifications (12 Total)</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Artificial Intelligence Fundamentals
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Deep Learning Essentials
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Python for Data Science
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Machine Learning for Data Science Projects
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Enterprise Data Science in Practice
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Building AI Solutions & Advanced Algorithms
                  </li>
                  <li className="text-xs text-muted-foreground/70 mt-2">
                    ...and 6 more certifications
                  </li>
                </ul>
                <div className="mt-6">
                  <a 
                    href="https://bit.ly/prada-badges" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
                  >
                    View All Badges on Credly
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <img 
                  src="/credly-badges.png" 
                  alt="IBM Credly Badges Collection" 
                  className="relative w-full h-auto rounded-lg border border-border/50 shadow-lg group-hover:shadow-2xl transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Education & Experience */}
        <Card className="portfolio-card-gradient border border-border/50 p-8 portfolio-hover-lift">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Education */}
            <div className="portfolio-slide-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-1 h-8 bg-yellow-400 rounded-full"></div>
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">System Information</h4>
                  <p className="text-muted-foreground">STIKOM Yos Sudarso • 2022 - 2026</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Final Year Information System (Computer Science Equivalent) Student  • Purwokerto, Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="portfolio-slide-up" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Briefcase size={20} className="text-primary" />
                </div>
                Work Experience
              </h3>
              <div className="space-y-8">
                <div className="border-l-2 border-primary/30 pl-6 relative">
                  <div className="absolute -left-[0.55rem] top-1 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar size={16} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Aug 2024 – Dec 2024</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">Machine Learning Operations Engineer</h4>
                  <p className="text-sm font-medium text-blue-400 mb-1">IBM Advanced AI Scholar</p>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={14} className="text-muted-foreground" />
                    <p className="text-muted-foreground text-sm">Infinite Learning & IBM | MSIB Kampus Merdeka | Batam, Indonesia</p>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Achieved perfect Grade 'A' (95/100) in IBM Advanced AI program for exceptional collaboration on enterprise-level AI projects</li>
                    <li>Spearheaded deployment of MobileNetV2 computer vision model for plant disease classification in Plantwise mobile application</li>
                    <li>Architected automated CI/CD pipeline using GitLab CI/CD and Docker, reducing manual deployment time by 90%</li>
                    <li>Engineered monitoring framework that improved classification accuracy by 15% through data-driven feedback loops</li>
                  </ul>
                </div>
                
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};