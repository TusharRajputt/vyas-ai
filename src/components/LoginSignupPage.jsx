import React, { useState, useEffect } from "react";

const LoginSignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const [bgImageIndex, setBgImageIndex] = useState(0); // State to track the index of the background image
  const images = [
    "src/assets/image1.png",
    "src/assets/image2.png",
    "src/assets/image3.png",
  ];
  const handleToggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login or signup logic here
    console.log("Form submitted");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBgImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Interval for changing the background image every 5 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [images.length]); // useEffect dependency

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 via-gray-900 to-gray-500 flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 bg-gray-500">
        <div
          className="hidden sm:block bg-[#00df9a] bg-cover bg-center bg-custom-image"
          style={{
            backgroundImage: `url(${images[bgImageIndex]})`,
            transition: "background-image 1s ease",
          }}
        ></div>

        <div className="flex items-center justify-center p-8">
          <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
            <div>
              <h2 className="text-center text-3xl font-extrabold text-gray-900">
                {isLogin ? (
                  <>
                    <span className="box-decoration-slice bg-gradient-to-r from-[#00df9a] to-gray-500 text-white px-4">
                      Sign in to your
                    </span>
                    <br />
                    <span className="box-decoration-slice bg-gradient-to-r from-[#00df9a] to-gray-500 text-white px-4">
                      Account
                    </span>
                  </>
                ) : (
                  <>
                    <span className="box-decoration-slice bg-gradient-to-r from-[#00df9a] to-gray-500 text-white px-4 my-2 overflow-clip">
                      Create
                    </span>
                    <br />
                    <span className="box-decoration-slice bg-gradient-to-r from-[#00df9a] to-gray-500 text-white px-4">
                      Account
                    </span>
                  </>
                )}
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <button
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                    onClick={handleToggleForm}
                  >
                    {isLogin ? "Create an account" : "Sign in"}
                  </button>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {isLogin ? "Sign in" : "Sign up"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupPage;
