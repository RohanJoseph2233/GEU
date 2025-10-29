import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 text-gray-200 py-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo and About */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img
              src="https://www.timeshighereducation.com/cms-academic/sites/default/files/migrated_institution_logos/geu_logo_-_india.png"
              alt="Graphic Era University Logo"
              className="h-24 w-auto"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3 border-b border-blue-600 pb-1 inline-block">
            Quick Links
          </h4>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Admissions</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Programs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Placements</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Scholarships</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3 border-b border-blue-600 pb-1 inline-block">
            Contact Us
          </h4>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>📍 Bell Road, Clement Town, Dehradun, Uttarakhand, India</li>
            <li>📞 +91-135-2643421</li>
            <li>✉️ admissions@geu.ac.in</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3 border-b border-blue-600 pb-1 inline-block">
            Connect With Us
          </h4>
          <div className="flex space-x-3">
            <a href="#" className="p-2.5 bg-blue-700 hover:bg-blue-600 rounded-full transition-all">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2.5 bg-blue-700 hover:bg-blue-600 rounded-full transition-all">
              <FaTwitter />
            </a>
            <a href="#" className="p-2.5 bg-blue-700 hover:bg-blue-600 rounded-full transition-all">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-2.5 bg-blue-700 hover:bg-blue-600 rounded-full transition-all">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800 mt-8 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Graphic Era (Deemed to be University). All Rights Reserved.
      </div>
    </footer>
  );
}


