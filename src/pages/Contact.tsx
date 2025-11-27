import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { useLanguage } from "@/locales/LanguageContext";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/config/emailjs";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: t.contact.error,
        description: t.contact.fillRequiredFields,
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: t.contact.error,
        description: t.contact.invalidEmail,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Send form data using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || t.contact.notProvided,
          company: formData.company || t.contact.notProvided,
          message: formData.message,
          to_email: EMAILJS_CONFIG.RECIPIENT_EMAIL,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      toast({
        title: t.contact.success,
        description: t.contact.successMessage,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: t.contact.error,
        description: t.contact.submitError,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Header with back button */}
      <div className="sticky top-0 z-50 border-b border-purple-500/20 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-bold text-white truncate pr-2">
            {t.contact.title}
          </h1>
          <Link
            to="/"
            className="text-purple-400 hover:text-purple-300 transition-colors text-sm sm:text-base whitespace-nowrap"
          >
            {t.contact.backToHome}
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left side - Info */}
          <div className="flex flex-col justify-center order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              {t.contact.heading}
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-3 sm:mb-4">
              {t.contact.description}
            </p>
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
              {t.contact.subDescription}
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-purple-400"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">
                    {t.contact.quickResponse}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {t.contact.quickResponseDesc}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-purple-400"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">
                    {t.contact.consultation}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {t.contact.consultationDesc}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-purple-400"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">
                    {t.contact.noObligations}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {t.contact.noObligationsDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-slate-900/50 backdrop-blur-md border border-purple-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 order-1 md:order-2">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-white font-medium mb-1.5 sm:mb-2 text-sm sm:text-base"
                >
                  {t.contact.name} *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t.contact.namePlaceholder}
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-slate-800/50 border-purple-500/20 text-white placeholder-gray-500 focus:border-purple-500/50 text-sm sm:text-base h-10 sm:h-11"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-medium mb-1.5 sm:mb-2 text-sm sm:text-base"
                >
                  {t.contact.email} *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t.contact.emailPlaceholder}
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-slate-800/50 border-purple-500/20 text-white placeholder-gray-500 focus:border-purple-500/50 text-sm sm:text-base h-10 sm:h-11"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-white font-medium mb-1.5 sm:mb-2 text-sm sm:text-base"
                >
                  {t.contact.phone}
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={t.contact.phonePlaceholder}
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-slate-800/50 border-purple-500/20 text-white placeholder-gray-500 focus:border-purple-500/50 text-sm sm:text-base h-10 sm:h-11"
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-white font-medium mb-1.5 sm:mb-2 text-sm sm:text-base"
                >
                  {t.contact.company}
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder={t.contact.companyPlaceholder}
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-slate-800/50 border-purple-500/20 text-white placeholder-gray-500 focus:border-purple-500/50 text-sm sm:text-base h-10 sm:h-11"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-white font-medium mb-1.5 sm:mb-2 text-sm sm:text-base"
                >
                  {t.contact.message} *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t.contact.messagePlaceholder}
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-slate-800/50 border-purple-500/20 text-white placeholder-gray-500 focus:border-purple-500/50 resize-none text-sm sm:text-base min-h-[100px] sm:min-h-[120px]"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold py-2.5 sm:py-3 px-4 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {isLoading ? t.contact.submitting : t.contact.submit}
              </Button>

              <p className="text-gray-400 text-xs text-center">
                {t.contact.requiredFields}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

