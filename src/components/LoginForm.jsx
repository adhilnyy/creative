import useLogin from "../hooks/useLogin";
import Logo from "../assets/logo.png";
import { useEffect, useRef } from "react";

const LoginForm = () => {
  const { credentials, isLoading, error, handleChange, handleLoginSubmit } = useLogin();

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    usernameRef.current?.focus();
  }, [])

  const handleKeyDown = (e, nextRef) => {
    if (e.key === "Enter") {
      e.preventDefault()
      if (nextRef) {
        nextRef.current.focus()
      } else {
        handleLoginSubmit(e)
      }
    }
  };
  

  return (
    <div className="backdrop-blur-lg bg-white/10 shadow-lg border border-white/20 p-8 rounded-2xl max-w-sm w-full">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
        <img alt="Login web app" src={Logo} className="mx-auto max-h-28 w-auto" />
        <h2 className="mt-5 text-2xl font-bold text-gray-800">Login to your account</h2>
      </div>

      <form onSubmit={handleLoginSubmit} className="mt-6 space-y-5">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-800">
            Username
          </label>
          <input
            id="username"
            ref={usernameRef}
            value={credentials.username}
            name="username"
            type="text"
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, passwordRef)}
            autoComplete="username"
            placeholder="Enter your username"
            className="w-full mt-1 rounded-lg bg-white/20 backdrop-blur-md px-3 py-2 text-gray-800 placeholder-gray-600 outline-none focus:ring-2 focus:ring-white/50"
          />
          {error.username && <p className="text-sm text-red-400">{error.username}</p>}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-800">
            Password
          </label>
          <input
            id="password"
            ref={passwordRef}
            value={credentials.password}
            name="password"
            type="password"
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, null)}
            autoComplete="current-password"
            placeholder="Enter your password"
            className="w-full mt-1 rounded-lg bg-white/20 backdrop-blur-md px-3 py-2 text-gray-800 placeholder-gray-600 outline-none focus:ring-2 focus:ring-white/50"
          />
          {error.password && <p className="text-sm text-red-400">{error.password}</p>}
        </div>

        <button
          disabled={isLoading}
          type="submit"
          className={`w-full py-2 text-white bg-indigo-500 rounded-lg shadow-md hover:bg-indigo-400 transition-all ${
            isLoading ? "opacity-50" : ""
          }`}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
