import { Link } from "react-router-dom";
import { navItems } from "../nav-items";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-bold mb-4">AMEGA</h3>
            <p className="mb-4">
              Premium investment advisory platform connecting global capital with strategic opportunities in the UAE.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic">
              <p className="mb-2">
                Office 201, Al Hawai Tower<br />
                Financial Centre, Sheikh Zayed Road<br />
                Dubai, United Arab Emirates
              </p>
              <p className="mb-2">Phone: +971 52 889 3216</p>
              <p>Email: info@amegagroup.co</p>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button
                type="submit"
                className="bg-amber-500 text-blue-900 px-4 py-2 rounded font-medium hover:bg-amber-400 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} AMEGA Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
