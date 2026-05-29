import Link from 'next/link';
import { IoFootballOutline } from 'react-icons/io5';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';

export default function Footer() {
  const socialMedias = [
                { icon: <FaFacebookF />, url: "#" },
                { icon: <FaTwitter />, url: "#" },
                { icon: <FaInstagram />, url: "#" },
                { icon: <FaLinkedinIn />, url: "#" }
              ]
  return (
    <footer className="bg-[#0f172a] border-t border-slate-800/60 text-slate-400 font-medium mt-15">
      
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
         
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-2xl font-black text-white tracking-tight group">
              <span className="text-emerald-500 transform transition-transform group-hover:rotate-45 duration-300">
                <IoFootballOutline size={28} />
              </span>
              <span>Match<span className="text-emerald-500">Day</span></span>
            </Link>
            <p className="text-sm text-slate-400/80 leading-relaxed max-w-xs">
              Book your prime-time slot at the city's finest, all-weather sports fields and turfs. Your next game is just a click away!
            </p>
            
            <div className="flex items-center gap-3 pt-2">
              {
              socialMedias.map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  className="w-9 h-9 bg-slate-800 hover:bg-emerald-600 hover:text-white rounded-xl flex items-center justify-center text-slate-300 transition-all duration-200 active:scale-95"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-100 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { text: "All Facilities", href: "/all-facilities" },
                { text: "My Bookings", href: "/my-bookings" },
                { text: "Add Facility", href: "/add-facility" },
                { text: "Manage Facilities", href: "/manage-facilities" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="hover:text-emerald-400 transition-colors duration-150 block">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ৩. সাপোর্ট বা ট্রাস্ট */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-100 uppercase tracking-wider">Support & Info</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { text: "About Us", href: "#" },
                { text: "Terms of Service", href: "#" },
                { text: "Privacy Policy", href: "#" },
                { text: "Refund Policy", href: "#" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="hover:text-emerald-400 transition-colors duration-150 block">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

         
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-100 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-sm text-slate-400/80">
              <li className="flex items-start gap-3">
                <HiOutlineLocationMarker className="text-emerald-500 text-lg flex-shrink-0 mt-0.5" />
                <span>Uttara Sector 11, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <HiOutlinePhone className="text-emerald-500 text-lg flex-shrink-0" />
                <span>+880 1234-567890</span>
              </li>
              <li className="flex items-center gap-3">
                <HiOutlineMail className="text-emerald-500 text-lg flex-shrink-0" />
                <span className="truncate">support@matchday.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      
      <div className="border-t border-slate-800/40 bg-[#0b1329]/50 py-6">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-semibold">
          <p>© {new Date().getFullYear()} MatchDay. All rights reserved.</p>
          <p>
            Crafted with ❤️ by <span className="text-slate-300">Rakibul Hasan</span>
          </p>
        </div>
      </div>
    </footer>
  );
}