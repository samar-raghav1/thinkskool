import React from 'react';
// Importing icons from react-icons (Font Awesome 5)
import { 
  FaGraduationCap, 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaPaperPlane 
} from 'react-icons/fa';

// Define the accent color based on the original CSS (#0066cc)
const ACCENT_COLOR = '#0066cc';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Programs',
      links: [
        { name: 'All Courses', href: '/courses' },
        { name: 'Specializations', href: '/programs' },
        { name: 'Learning Portal', href: '/portal' },
        { name: 'Real-World Exposure', href: '/exposure' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Advantage', href: '/advantage' },
        { name: 'Contact', href: '/contact' },
        { name: 'Careers', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Student Resources', href: '#' },
        { name: 'Technical Support', href: '#' },
        { name: 'Community', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12 border-b border-gray-700 pb-10">
          
          
          <div className="lg:col-span-2">
            <div className="flex items-center font-bold text-2xl mb-4 text-white">
             
              <span className='text-[#007FFF]'>think</span><span className='text-[#FF8C00]'>skool</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering students with real-world tech skills and career opportunities.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-lg hover:bg-blue-600 hover:text-white transition duration-300 transform hover:-translate-y-1"
                  aria-label={Icon.name.replace('Fa', '')}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          
          {/* 2, 3, 4. Link Columns */}
          {footerLinks.map((section, index) => (
            <div key={index} className="footer-section">
              <h3 className="text-lg font-semibold text-white mb-5">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-blue-300 transition duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* 5. Stay Connected/Newsletter Section (Last Column) */}
          <div className="footer-section">
            <h3 className="text-lg font-semibold text-white mb-5">Stay Connected</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Subscribe to our newsletter for the latest updates and exclusive content.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                required 
                className="grow p-3 border-2 border-white/10 rounded-lg bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-blue-600 transition duration-300 text-sm"
              />
              <button 
                type="submit" 
                className="p-3 bg-blue-600 text-white border-2 border-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-[1.02] flex items-center justify-center text-lg"
                style={{ backgroundColor: ACCENT_COLOR }}
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>

        </div>

        {/* --- Footer Bottom (Copyright and Policy Links) --- */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-gray-500 text-sm">
          <p className="mb-4 md:mb-0">&copy; 2025 Think Skool. All rights reserved.</p>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="#" className="hover:text-blue-300 transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-blue-300 transition duration-300">Terms of Service</a>
            <a href="#" className="hover:text-blue-300 transition duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;