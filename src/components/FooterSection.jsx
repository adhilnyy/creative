import { Link } from "react-router-dom"

const FooterSection = () => {
  return (    
  <footer className="w-full z-10 fixed bottom-0 bg-white shadow p-4 flex justify-between items-center text-gray-700 text-sm">
      <Link to="/contact" className="text-indigo-600 hover:underline font-medium">
          Contact Us
      </Link>
      <p className="text-gray-600">© {new Date().getFullYear()} CREATIVE. All rights reserved.</p>
  </footer>
  )
}

export default FooterSection