import { Link } from "react-router-dom";

const ContactPage = () => {
  
  return (

      <div className="flex flex-col items-center justify-center bg-gray-50 text-gray-800 p-6 mt-20">
        <h1 className="text-2xl font-semibold text-indigo-600">Contact Us</h1>
        <p className="mt-2 text-gray-600 text-center">For any inquiries, please reach out via email.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/list"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Go back
                </Link>
              </div>

    </div>

  );
};

export default ContactPage;
