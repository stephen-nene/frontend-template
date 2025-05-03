import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/shadcn/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/shadcn/tabs';
import { Badge } from '@/components/shadcn/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/shadcn/avatar';
import { Separator } from '@/components/shadcn/separator';
import { Users, Code, Fingerprint, UserPlus, ShieldCheck, Goal, ArrowUpRight, Star, BookOpen } from 'lucide-react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/shadcn/accordion';
import { Button } from '@/components/shadcn/button';
import {
  LockKeyhole,

  Shield,
  Code2,
  Database,
  GitMerge,
  RefreshCw,


  Container,
  Facebook,
  Twitter,
  Github,

  CheckCircle,
  Award
} from 'lucide-react';

export function AboutUs2() {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <div className="w-full max-w-l container mx-auto px-4 py-12 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800">
          Authentication Platform
        </Badge>
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Secure Authentication <span className="text-blue-600 dark:text-blue-400">Simplified</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
          A comprehensive authentication template with all the essential features you need to build secure applications.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
            Get Started
          </Button>
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950">
            View Documentation
          </Button>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Built With Modern Technology</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <Code2 className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="font-medium text-lg">React</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Frontend UI Library</p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <Database className="h-12 w-12 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="font-medium text-lg">Django</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Backend Framework</p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <LockKeyhole className="h-12 w-12 text-yellow-600 dark:text-yellow-400 mb-4" />
              <h3 className="font-medium text-lg">JWT</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Auth Tokens</p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <Container className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="font-medium text-lg">Docker</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Containerization</p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <Shield className="h-12 w-12 text-red-600 dark:text-red-400 mb-4" />
              <h3 className="font-medium text-lg">Tailwind CSS</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Styling</p>
            </CardContent>
          </Card>
        </div>
      </div>


      {/* Mission & Values Section */}
      <div className="mb-16">
        <Tabs defaultValue="mission" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-6">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="mission">Mission</TabsTrigger>
              <TabsTrigger value="values">Values</TabsTrigger>
              <TabsTrigger value="story">Our Story</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="mission" className="max-w-3xl mx-auto">
            <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl flex items-center justify-center gap-2">
                  <Goal className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  Our Mission
                </CardTitle>
                <CardDescription>What drives us forward</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-lg">
                <p>
                  Our mission is to simplify authentication for developers and businesses. We believe that robust security shouldn't come at the expense of user experience or development complexity.
                </p>
                <p>
                  We're committed to providing a platform that makes it easy to implement authentication flows that are both secure and user-friendly, allowing developers to focus on building great products.
                </p>
                <p>
                  As we grow, we're expanding our services to include OAuth and social login integrations, making it even easier for users to securely access your applications.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="values" className="max-w-3xl mx-auto">
            <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl flex items-center justify-center gap-2">
                  <Star className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  Our Values
                </CardTitle>
                <CardDescription>Principles that guide our work</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <h3 className="font-semibold text-lg">Security First</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      We never compromise on security. Our authentication solutions follow industry best practices and standards.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <h3 className="font-semibold text-lg">User-Centric</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      We design our systems with users in mind, ensuring a smooth and intuitive authentication experience.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Code className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <h3 className="font-semibold text-lg">Developer Friendly</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Our APIs and documentation are designed to make integration as simple and straightforward as possible.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <ArrowUpRight className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <h3 className="font-semibold text-lg">Continuous Improvement</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      We're always learning and improving our services based on feedback and emerging security standards.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="story" className="max-w-3xl mx-auto">
            <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl flex items-center justify-center gap-2">
                  <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  Our Story
                </CardTitle>
                <CardDescription>How we came to be</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Our journey began when a team of developers found themselves repeatedly implementing authentication systems from scratch for different projects. They realized there had to be a better way.
                </p>
                <p>
                  Founded in 2023, we set out to create a solution that would make secure authentication accessible to all developers, regardless of their experience level or project size.
                </p>
                <p>
                  What started as a simple login and registration system has grown into a comprehensive authentication platform. We're constantly expanding our features based on the needs of our growing community of users.
                </p>
                <p>
                  Today, we're proud to support thousands of developers with reliable authentication services, and we're excited about the road ahead as we continue to evolve and improve our offerings.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Features Section with Accordion */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Authentication Features</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="basic-auth">
                <AccordionTrigger className="text-xl font-medium">
                  <div className="flex items-center gap-3">
                    <UserPlus className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span>Basic Authentication</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400 pl-8">
                  <ul className="space-y-2 list-disc pl-5">
                    <li>User registration with email verification</li>
                    <li>Secure login with rate limiting</li>
                    <li>Password reset and account recovery</li>
                    <li>Email confirmation workflows</li>
                    <li>Session management with JWT</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="social-auth">
                <AccordionTrigger className="text-xl font-medium">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span>Social Authentication</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400 pl-8">
                  <p className="mb-4">Support for popular OAuth providers:</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      {/* <Google className="h-4 w-4" /> */}
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                      </svg>
                      <span>Google</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Facebook className="h-4 w-4" />
                      <span>Facebook</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Twitter className="h-4 w-4" />
                      <span>Twitter</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      <span>GitHub</span>
                    </div>
                  </div>
                  <p>Easily expandable to additional OAuth providers</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="security">
                <AccordionTrigger className="text-xl font-medium">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span>Advanced Security</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400 pl-8">
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Two-factor authentication (2FA)</li>
                    <li>CSRF protection mechanisms</li>
                    <li>Brute force prevention</li>
                    <li>Session timeout management</li>
                    <li>Secure password hashing</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="user-management">
                <AccordionTrigger className="text-xl font-medium">
                  <div className="flex items-center gap-3">
                    <Fingerprint className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span>User Management</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400 pl-8">
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Role-based access control</li>
                    <li>User profile management</li>
                    <li>Permission-based authorization</li>
                    <li>Account deactivation and deletion</li>
                    <li>User data export (GDPR compliance)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="dev-experience">
                <AccordionTrigger className="text-xl font-medium">
                  <div className="flex items-center gap-3">
                    <GitMerge className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span>Developer Experience</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400 pl-8">
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Comprehensive API documentation</li>
                    <li>Easy integration with CI/CD pipelines</li>
                    <li>Docker-ready for development and production</li>
                    <li>Testing suite included</li>
                    <li>Extensible architecture</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-2xl p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Why Choose Our Auth Template?</h3>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-500" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Production Ready</h4>
                  <p className="text-gray-600 dark:text-gray-400">Fully tested and security-audited components ready for immediate deployment</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-500" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Best Practices</h4>
                  <p className="text-gray-600 dark:text-gray-400">Built following modern security and development standards</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-500" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Fully Customizable</h4>
                  <p className="text-gray-600 dark:text-gray-400">Extend and modify to fit your specific application needs</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-500" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Responsive Design</h4>
                  <p className="text-gray-600 dark:text-gray-400">Beautiful UI that works on all devices and screen sizes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials/Companies Using */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted By Developers</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="mb-1">John Developer</CardTitle>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Senior Frontend Engineer</p>
                </div>
                <Award className="h-6 w-6 text-yellow-500" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                "This authentication template saved me weeks of development time. The code is clean, well-documented, and follows best practices."
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="mb-1">Sarah Tech</CardTitle>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CTO at StartupX</p>
                </div>
                <Award className="h-6 w-6 text-yellow-500" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                "Security is our top priority, and this template provides all the features we needed with proper implementation. Highly recommended!"
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="mb-1">Alex Backend</CardTitle>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                </div>
                <Award className="h-6 w-6 text-yellow-500" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                "The Django integration is seamless, and the Docker setup made deployment a breeze. This is now our go-to for all new projects."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Implementation Tabs */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-8">Simple Implementation</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
          Our authentication system is designed to be easy to implement while maintaining the highest security standards.
        </p>

        <Tabs defaultValue="frontend" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger variant="primary" value="frontend">
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4" />
                <span>Frontend</span>
              </div>
            </TabsTrigger>
            <TabsTrigger variant="secondary" value="backend">
              <div className="flex items-center gap-2">
                <Database className="h-4 w-4" />
                <span>Backend</span>
              </div>
            </TabsTrigger>
            <TabsTrigger variant="tertiary" value="deployment">
              <div className="flex items-center gap-2">
                <Container className="h-4 w-4" />
                <span>Deployment</span>
              </div>
            </TabsTrigger>
          </TabsList>

          <TabsContent variant="primary" value="frontend" className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-4">React Frontend Integration</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Our React components provide a seamless authentication experience.
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto">
              <pre>{`// Authentication Hook Example
import { useAuth } from '@auth/react';

function LoginPage() {
  const { login, isLoading, error } = useAuth();
  
  const handleSubmit = async (values) => {
    await login(values.email, values.password);
  };
  
  return (
    // Login form JSX
  );
}`}</pre>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Includes ready-made components for login, registration, password reset, and more.
            </p>
          </TabsContent>

          <TabsContent value="backend" className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-4">Django Backend Setup</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Our Django package provides all the necessary views and models.
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto">
              <pre>{`# settings.py
INSTALLED_APPS = [
    # ...
    'auth_template',
    'rest_framework',
    'rest_framework_simplejwt',
]

# JWT configuration
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    )
}

# URLs
urlpatterns = [
    path('api/auth/', include('auth_template.urls')),
]`}</pre>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Includes customizable user models, authentication views, and permission classes.
            </p>
          </TabsContent>

          <TabsContent value="deployment" className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-4">Docker Deployment</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Deploy your application with Docker for consistent environments.
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto">
              <pre>{`# docker-compose.yml
version: '3'

services:
  frontend:
    build:
      context: ./frontend
    ports:
      - "3000:3000"
    volumes:
      - ./frontend:/app
      
  backend:
    build:
      context: ./backend
    ports:
      - "8000:8000"
    volumes:
      - ./backend:/app
    depends_on:
      - db
      
  db:
    image: postgres:13
    volumes:
      - postgres_data:/var/lib/postgresql/data/
    environment:
      - POSTGRES_PASSWORD=password
      - POSTGRES_USER=postgres
      - POSTGRES_DB=auth_db

volumes:
  postgres_data:`}</pre>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Includes optimized Dockerfiles and docker-compose configurations.
            </p>
          </TabsContent>
        </Tabs>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The experts behind our authentication solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <Avatar className="w-32 h-32 mx-auto mb-4">
              <AvatarImage src="/api/placeholder/150/150" alt="Jane Doe" />
              <AvatarFallback className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xl">JD</AvatarFallback>
            </Avatar>
            <h3 className="font-bold text-lg">Jane Doe</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Founder & CEO</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Security expert with 10+ years experience in authentication systems
            </p>
          </div>

          <div className="text-center">
            <Avatar className="w-32 h-32 mx-auto mb-4">
              <AvatarImage src="/api/placeholder/150/150" alt="John Smith" />
              <AvatarFallback className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xl">JS</AvatarFallback>
            </Avatar>
            <h3 className="font-bold text-lg">John Smith</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">CTO</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Full-stack developer specializing in secure API development
            </p>
          </div>

          <div className="text-center">
            <Avatar className="w-32 h-32 mx-auto mb-4">
              <AvatarImage src="/api/placeholder/150/150" alt="Emma Wilson" />
              <AvatarFallback className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xl">EW</AvatarFallback>
            </Avatar>
            <h3 className="font-bold text-lg">Emma Wilson</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Lead Developer</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Authentication specialist with expertise in OAuth implementations
            </p>
          </div>

          <div className="text-center">
            <Avatar className="w-32 h-32 mx-auto mb-4">
              <AvatarImage src="/api/placeholder/150/150" alt="Michael Chen" />
              <AvatarFallback className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xl">MC</AvatarFallback>
            </Avatar>
            <h3 className="font-bold text-lg">Michael Chen</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Security Architect</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Cybersecurity expert focused on threat prevention and detection
            </p>
          </div>
        </div>
      </div>



      {/* CTA Section */}
      <div className="text-center bg-blue-50 dark:bg-blue-950 rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Application?</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Start implementing robust authentication in minutes instead of weeks.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
            <RefreshCw className="mr-2 h-4 w-4" /> Get Started Now
          </Button>
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950">
            View Documentation
          </Button>
        </div>
      </div>
    </div>
  );
}

export function AboutUs3() {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900">Secure Authentication Solutions</Badge>
        <h1 className="text-5xl font-bold tracking-tight mb-4">Simplifying Authentication for Everyone</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
          We provide robust and user-friendly authentication services, helping developers integrate secure login systems without the hassle.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="outline" className="text-sm py-1 px-3 border-gray-300 dark:border-gray-700">User Authentication</Badge>
          <Badge variant="outline" className="text-sm py-1 px-3 border-gray-300 dark:border-gray-700">CRUD Operations</Badge>
          <Badge variant="outline" className="text-sm py-1 px-3 border-gray-300 dark:border-gray-700">OAuth (Coming Soon)</Badge>
          <Badge variant="outline" className="text-sm py-1 px-3 border-gray-300 dark:border-gray-700">Social Login (Coming Soon)</Badge>
        </div>
      </div>


      {/* Features Section */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Our Authentication Features</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive authentication services designed for modern web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <LockKeyhole className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle>Secure Login & Registration</CardTitle>
              <CardDescription>
                Robust authentication flows with industry-standard security practices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Password hashing and encryption
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Account lockout protection
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Email verification
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Password reset functionality
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <UserPlus className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle>User Management</CardTitle>
              <CardDescription>
                Complete CRUD operations for managing user accounts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  User profile management
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Role-based access control
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  User search and filtering
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Account deactivation options
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <Fingerprint className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle>Coming Soon Features</CardTitle>
              <CardDescription>
                Enhanced authentication options currently in development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">➤</span>
                  OAuth 2.0 integration
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">➤</span>
                  Social login (Google, Facebook, Twitter)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">➤</span>
                  Two-factor authentication
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">➤</span>
                  Single Sign-On (SSO)
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>



      {/* Testimonials */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hear from developers who have integrated our authentication solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="italic text-gray-600 dark:text-gray-400 mb-6">
                "Implementing authentication used to be a headache for our team. This service has made it incredibly simple, saving us weeks of development time."
              </p>
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarFallback className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">AT</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Alex Thompson</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Tech Lead at StartupX</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="italic text-gray-600 dark:text-gray-400 mb-6">
                "The user management features are robust and the API is well-documented. It's exactly what we needed for our SaaS platform."
              </p>
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarFallback className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">SJ</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Frontend Developer at TechCorp</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                  <Star className="h-4 w-4" />
                </div>
              </div>
              <p className="italic text-gray-600 dark:text-gray-400 mb-6">
                "We've seen a significant reduction in support tickets related to login issues since switching to this authentication service. Looking forward to the OAuth features!"
              </p>
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarFallback className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">DP</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">David Park</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Product Manager at AppWorks</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Our Technology Stack</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Built with modern, reliable technologies for performance and security
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center">
              <div className="h-14 w-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">N</span>
              </div>
              <p className="font-medium">Node.js</p>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center">
              <div className="h-14 w-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">R</span>
              </div>
              <p className="font-medium">React</p>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center">
              <div className="h-14 w-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">P</span>
              </div>
              <p className="font-medium">PostgreSQL</p>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center">
              <div className="h-14 w-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">TS</span>
              </div>
              <p className="font-medium">TypeScript</p>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center">
              <div className="h-14 w-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">RD</span>
              </div>
              <p className="font-medium">Redis</p>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center">
              <div className="h-14 w-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">TW</span>
              </div>
              <p className="font-medium">Tailwind CSS</p>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center">
              <div className="h-14 w-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">JWT</span>
              </div>
              <p className="font-medium">JSON Web Tokens</p>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center">
              <div className="h-14 w-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">AWS</span>
              </div>
              <p className="font-medium">AWS Cloud</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto text-center">
        <Card className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
          <CardContent className="pt-10 pb-10">
            <h2 className="text-3xl font-bold mb-4">Ready to Implement Secure Authentication?</h2>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
              Join thousands of developers who trust our platform for their authentication needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-6">
                Get Started for Free
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/50 px-6 py-6">
                View Documentation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <>
      <div className="flex">

        <AboutUs2 />
        {/* <AboutUs3 /> */}
      </div>
    </>
  )
}