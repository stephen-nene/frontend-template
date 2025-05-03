import { useState } from 'react';
import { z } from 'zod';
import { toast, Toaster } from 'sonner';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/shadcn/card';
import { Button } from '@/components/shadcn/button';
import { Input } from '@/components/shadcn/input';
import { Textarea } from '@/components/shadcn/textarea';
import { Label } from '@/components/shadcn/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/shadcn/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/shadcn/select';
import { Switch } from '@/components/shadcn/switch';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

// Form validation schema using Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  department: z.string().min(1, { message: "Please select a department" }),
  subscribe: z.boolean().optional()
});

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    department: '',
    subscribe: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      contactFormSchema.parse(formData);

      // Simulate API call
      setTimeout(() => {
        toast.success('Message sent successfully! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          department: '',
          subscribe: false
        });
        setIsSubmitting(false);
      }, 1500);

    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMap = {};
        error.errors.forEach(err => {
          const path = err.path[0];
          errorMap[path] = err.message;
        });
        setErrors(errorMap);
        toast.error('Please fix the errors in the form');
      } else {
        toast.error('Something went wrong. Please try again.');
      }
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-wxl container mx-auto px-4 py-12 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Toaster position="top-right" />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Contact Us</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          We're here to help and answer any questions you might have. We look forward to hearing from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span>Call Us</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400">Our friendly team is here to help.</p>
            <p className="font-medium mt-2"> +254 700 123 456</p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span>Email Us</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400">We'll respond as soon as possible.</p>
            <p className="font-medium mt-2">support@example.com</p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span>Office Hours</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400">Monday - Friday</p>
            <p className="font-medium mt-2">9:00 AM - 5:00 PM EST</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 mb-8">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "border-red-500 dark:border-red-500" : ""}
                    />
                    {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "border-red-500 dark:border-red-500" : ""}
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help you?"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? "border-red-500 dark:border-red-500" : ""}
                  />
                  {errors.subject && <p className="text-sm text-red-500">{errors.subject}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select
                    name="department"
                    value={formData.department}
                    onValueChange={(value) => setFormData({ ...formData, department: value })}
                  >
                    <SelectTrigger className={errors.department ? "border-red-500 dark:border-red-500" : ""}>
                      <SelectValue placeholder="Select a department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="customer-support">Customer Support</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="billing">Billing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.department && <p className="text-sm text-red-500">{errors.department}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Please provide as much detail as possible..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "border-red-500 dark:border-red-500" : ""}
                  />
                  {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="subscribe"
                    name="subscribe"
                    checked={formData.subscribe}
                    onCheckedChange={(checked) => setFormData({ ...formData, subscribe: checked })}
                  />
                  <Label htmlFor="subscribe">Subscribe to our newsletter</Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full border-2 border-white border-r-transparent animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span>Visit Our Office</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-3">
              <p><strong>Address:</strong> 123 Business Rd, Suite 100, Nairobi, Kenya</p>
            </CardContent>
            <CardContent className="h-64 flex flex-col gap-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.817738961474!2d36.82194631475885!3d-1.286389899067897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d74a9a1d7b%3A0x5f5f5f5f5f5f5f5f!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1678886811555!5m2!1sen!2ske"
                width="100%"
                height="350" // Adjust height as needed
                style={{ border: 0 }}
                allowFullScreen={false} // Changed to false for better security practice, set to true if needed
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
                className="block" // Ensure iframe displays correctly
              ></iframe>
              {/* Google Maps Embed */}
              {/* <div className="w-full h-full rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25308751907!2d-74.11976379633513!3d40.70517833990124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1714776610200!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div> */}
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs varint='primary' defaultValue="general" className="w-full">
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger variant='primary' value="general">General</TabsTrigger>
                  <TabsTrigger variant='secondary' value="services">Services</TabsTrigger>
                  <TabsTrigger variant='tertiary' value="support">Support</TabsTrigger>
                </TabsList>
                <TabsContent varint='primary' value="general" className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">What are your business hours?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Our team is available Monday through Friday, 9:00 AM to 5:00 PM Eastern Standard Time.</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">How quickly do you respond to inquiries?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">We strive to respond to all inquiries within 24 business hours.</p>
                  </div>
                </TabsContent>
                <TabsContent value="services" className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">What services do you offer?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">We offer a comprehensive range of services including consulting, implementation, and ongoing support.</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Do you offer custom solutions?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Yes, we specialize in creating tailored solutions to meet your specific business needs.</p>
                  </div>
                </TabsContent>
                <TabsContent value="support" className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">How do I get technical support?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Technical support is available through our support portal, email, or by phone during business hours.</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">What's your response time for urgent issues?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">For critical issues, we aim to provide an initial response within 2 hours during business hours.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}