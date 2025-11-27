import { memo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/locales/LanguageContext";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = memo(() => {
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToRealServices = () => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation and then scroll
      setTimeout(() => {
        const element = document.getElementById('real-services');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById('real-services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToTop, 100);
    } else {
      scrollToTop();
    }
  };

  const handleServicesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToRealServices();
  };

  return (
    <footer className="relative border-t border-cyan-500/20 bg-gradient-to-b from-slate-950 via-purple-950/50 to-slate-950">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
      
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t.footer.companyName}
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-white">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/" 
                  onClick={handleHomeClick}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-xs sm:text-sm cursor-pointer"
                >
                  {t.footer.home}
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-xs sm:text-sm">
                  {t.footer.contact}
                </Link>
              </li>
              <li>
                <a 
                  href="#real-services" 
                  onClick={handleServicesClick}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-xs sm:text-sm cursor-pointer"
                >
                  {t.footer.services}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors text-xs sm:text-sm">
                  {t.footer.about}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-white">{t.footer.ourServices}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-xs sm:text-sm">
                  {t.footer.webDevelopment}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-xs sm:text-sm">
                  {t.footer.automation}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-xs sm:text-sm">
                  {t.footer.aiIntegration}
                </a>
              </li>
              <li>
                <a href="RealServices.tsx" className="text-gray-400 hover:text-cyan-400 transition-colors text-xs sm:text-sm">
                  {t.footer.botDevelopment}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-white">{t.footer.contactUs}</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:Weking128@icloud.com" className="text-gray-400 hover:text-cyan-400 transition-colors text-xs sm:text-sm break-all">
                  Weking128@icloud.com
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+77074605952" className="text-gray-400 hover:text-cyan-400 transition-colors text-xs sm:text-sm">
                  +7 (707) 460-59-52
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-500/20 pt-6 sm:pt-8 mt-6 sm:mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
              © {new Date().getFullYear()} {t.footer.companyName}. {t.footer.allRightsReserved}
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm flex-wrap justify-center sm:justify-start">
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors whitespace-nowrap">
                {t.footer.privacyPolicy}
              </a>
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors whitespace-nowrap">
                {t.footer.termsOfService}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse" />
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;

