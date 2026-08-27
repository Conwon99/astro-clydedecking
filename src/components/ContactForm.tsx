import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { trackQuoteRequest, trackFormInteraction } from "@/utils/analytics";
import { business } from "@/data/business";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch(business.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: 'Free Quote Request from Website'
        }),
      });

      if (response.ok) {
        // Track successful form submission
        trackQuoteRequest('contact_form', []);
        trackFormInteraction('quote_form', 'submit_success');
        
        toast({
          title: "Quote request sent!",
          description: "Thank you for your request. We'll respond within 24 hours.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      trackFormInteraction('quote_form', 'submit_error');
      toast({
        title: "Error sending request",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="card-service bg-black text-white border-white/20" id="contact-form">
      <div className="text-center mb-6">
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-2">
          GET A FREE QUOTE.
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" className="text-white font-semibold">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
              className="mt-2 rounded-xl border-2"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-white font-semibold">Phone</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              required
              className="mt-2 rounded-xl border-2"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email" className="text-white font-semibold">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            required
            className="mt-2 rounded-xl border-2"
          />
        </div>

        <div>
          <Label htmlFor="message" className="text-white font-semibold">Message</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            placeholder="Tell us about your decking and fencing needs..."
            className="mt-2 rounded-xl border-2 min-h-[100px]"
          />
        </div>

        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200">
          SEND
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;


