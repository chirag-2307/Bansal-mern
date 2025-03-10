import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-gray-900">

          {/* Information Section */}
          <div>
            <h2 className="font-bold text-lg border-b-2 border-purple-700 pb-1">INFORMATION</h2>
            <ul className="mt-3 space-y-2 text-purple-700">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Shipping Information</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Details Section */}
          <div>
            <h2 className="font-bold text-lg border-b-2 border-purple-700 pb-1">CONTACT DETAILS</h2>
            <p className="mt-3">Bansal Computers, Jaipur</p>
            <p>1st Floor, Raiser plaza</p>
            <p>Jaipur - 302015</p>
            <p>Email: <a href="mailto:sales@megajaipur.com" className="text-blue-600">sales@bansaljaipur.com</a></p>
          </div>

          {/* Bank Details Section */}
          <div>
            <h2 className="font-bold text-lg border-b-2 border-purple-700 pb-1">BANK DETAILS</h2>
            <p className="mt-3"><strong>Name:</strong> Bansal Computer</p>
            <p><strong>A/c Number:</strong> 1234232000433</p>
            <p><strong>IFSC:</strong> HDFC0001430</p>
            <p><strong>Branch:</strong> Subhash Nagar, Jaipur</p>
            <p><strong>UPI:</strong> <a href="#" className="text-blue-600">View QR Code</a></p>
          </div>

          {/* Contact Numbers with WhatsApp */}
          <div>
            <h2 className="font-bold text-lg border-b-2 border-purple-700 pb-1">CONTACT DETAILS</h2>
            <ul className="mt-3 space-y-2">
              {[
                { label: "Sales Jaipur", number: "7073888300" },
                { label: "Sales Rest of Rajasthan", number: "9460193000" },
                { label: "Sales Rest of India", number: "7849909082" },
                { label: "Sales Laptop Accessories", number: "8302885196" },
                { label: "Sales CCTV Surveillance", number: "8302885193" },
                { label: "Sales Networking", number: "7849831942" },
                { label: "Sales Printer Accessories", number: "7849831945" },
                { label: "Dispatch", number: "8302885194" },
                { label: "RMA / Replacements", number: "9358861191" },
                { label: "Accounts", number: "9358861193" },
              ].map((contact, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{contact.label}</span>
                  <a href={`https://wa.me/${contact.number}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600">
                    {contact.number} <FaWhatsapp className="ml-2" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-white bg-purple-700 py-3 text-sm">
          Copyright © 2025, Bansal Computers, Jaipur. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
