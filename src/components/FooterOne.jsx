import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";

const FooterOne = () =>{
  return(
    <>
    <footer className="mt-auto bg-gray-900 text-gray-300 py-10">
      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 px-10">
        {/* Contact */}
        <div className="space-y-2 mb-4">
        <h3 className="text-xl font-semibold mb-4 text-white">Contact Me</h3>

          <div className="flex gap-3 text-gray-300 hover:text-green-400">
            <Phone className="text-green-500" />
            <a href="tel:+91 8411838725">8411838725,</a>
            <a href="tel:+91 9322276364">9322276364</a>
          </div>

          <div className="flex gap-3 text-gray-300">
            <MapPin className="text-red-500" />
            <p>Sharda Colony, Gondia - 441 614</p>
          </div>
        
          <div className="flex gap-3 text-gray-300">
            <Mail className="text-blue-500" />
            <a href="mailto:yugaanterd@gmail.com" className="hover:text-blue-600 cursor-pointer">
              yugaanterd@gmail.com
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div>
        <h3 className="text-xl font-semibold mb-4 text-white">Follow Me</h3>

          <div className="flex gap-5 text-2xl">
            <a href="https://www.linkedin.com/in/yugaanter-ramdas-342549224" className="hover:text-blue-500"><FaLinkedin/></a>
            <a href="https://wa.me/918411838725" className="hover:text-green-400"><FaWhatsapp/></a>
            <a href="https://www.instagram.com/growpeakmedia?igsh=MXJ6M3kzOGx0MzBkOA%3D%3D&utm_source=qr" className="hover:text-pink-500"><FaInstagram/></a>
          </div>
        </div>
      </section>

      {/* Bottom */}
      <div className="my-10 border-t border-gray-700"></div>

      <div className="text-center text-md">© {new Date().getFullYear()} Yugaanter Ramdas. All Rights Reserved</div>
    </footer>
    </>
  )
}

export default FooterOne