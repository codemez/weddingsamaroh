'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          
          {/* About */}
          <div>
            <h4 className="font-semibold mb-2">About Us</h4>
            <p>
              We connect customers with trusted vendors across multiple service categories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/gallery" className="hover:underline">Gallery</Link></li>
              <li><Link href="/contact-us" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p>Email: support@example.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>

        <div className="mt-8 border-t pt-4 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
