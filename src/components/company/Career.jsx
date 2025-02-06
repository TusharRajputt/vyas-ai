import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import internsImage from "../../assets/IMG_9568.jpeg"; // Adjust the path based on your project structure

const Career = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    "https://woz-u.com/wp-content/uploads/2020/02/What-Do-Software-Engineers-Do-WOZ-1-min.png",
    "https://i.pinimg.com/originals/1e/89/4b/1e894b25fb0b891732638d6e55cebb90.jpg",
    "https://www.4cornerresources.com/wp-content/uploads/2020/11/IT-professionals-coding-scaled.jpeg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = function (e) {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-black">
        <div className="max-w-[1000px] mx-auto p-4 mt-8 text-center">
          <h2 className="text-5xl text-[rgb(0,223,154)] font-bold mb-4">Empower Your Potential</h2>
          <hr className="mt-2 w-40 mx-auto border-t-2 border-[#00df9a]" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 mx-auto bg-black mt-8">
          <div className="flex flex-col justify-left text-white text-left lg:col-span-1 lg:pr-8">
            <h1 className="text-4xl font-bold mt-4 text-center">Join Our Team</h1>
            <p className="text-lg mt-4 text-white text-opacity-60 text-center">
              Machine learning is undeniably the most transformative technology of our time. Your contributions will play a pivotal role in its widespread adoption, influencing industries and enriching lives globally. Join us at the forefront of this technological revolution to shape the future of AI-driven innovations. Together, we will lead the way in creating groundbreaking applications that transform business operations and empower individuals with cutting-edge technology. Our mission is to build a world where AI enhances human potential and fosters sustainable progress.
            </p>
            <div className="flex justify-center">
              <a
                href="/company/jobs"
                className="mt-6 inline-block bg-[rgb(0,223,154)] text-gray-900 font-bold py-2 px-3 rounded-lg shadow-sm hover:bg-gray-100"
                style={{ width: "fit-content" }}
              >
                Explore all jobs
              </a>
            </div>
          </div>
          <div className="relative h-[500px] lg:h-[450px] w-[600px] mx-auto">
            {selectedImage ? (
              <img
                className="rounded-2xl absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-100"
                src={selectedImage}
                alt="Uploaded Image"
              />
            ) : (
              images.map((imageUrl, index) => (
                <img
                  key={index}
                  className={`rounded-2xl absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
                  src={imageUrl}
                  alt={`Career Hero Image ${index + 1}`}
                />
              ))
            )}
          </div>
        </div>

        <div className="career-card-section bg-black py-12 mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <p className="text-3xl font-bold text-[rgb(0,223,154)]">Who are We</p>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Driving Digital Evolution
              </h2>
              <p className="text-lg mt-4 text-white text-opacity-60">
                At Vyas AI, we are passionate about transforming ideas into powerful software solutions. Our tools are trusted by a growing community of developers worldwide. Join thousands of organizations who are using Vyas AI to build incredible things.
              </p>
            </div>
          </div>
        </div>

        {/* Interns Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 mx-auto bg-black mt-8">
          <div className="relative h-[400px] lg:h-[300px] w-[580px] mx-auto">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Interns at Vyas AI"
                className="career-card-img rounded-2xl"
              />
            ) : (
              <img
                src={internsImage} // Replace with the imported image variable
                alt="Interns Placeholder"
                className="career-card-img rounded-2xl"
              />
            )}
          </div>
          <div className="flex flex-col justify-center text-white">
            <p className="text-3xl font-bold text-[rgb(0,223,154)] lg:text-center"> What we're looking for</p>
            <h1 className="text-4xl font-bold mt-4 lg:text-center">Holistic Problem Solvers</h1>
            <p className="text-lg mt-4 text-white text-opacity-60 lg:text-center">
              Empower outcomes, not just inputs. Engineers lead in adoption and drive growth. Go-To-Market strategies accelerate revenue and guide product direction. Embrace and master diverse skills, expanding beyond your core expertise. Our mission is to foster an environment that attracts and nurtures exceptional talent.
            </p>
            <div className="flex justify-center">
              <a
                href="/company/jobs"
                className="mt-6 inline-block bg-[rgb(0,223,154)] text-gray-900 font-bold py-2 px-3 rounded-lg shadow-sm hover:bg-gray-100"
                style={{ width: "fit-content" }}
              >
                View
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 mx-auto bg-black mt-8">
          <div className="flex flex-col justify-center text-white">
            <p className="text-3xl font-bold text-[rgb(0,223,154)] lg:text-center">Our Global Team</p>
            <h1 className="text-4xl font-bold mt-4 lg:text-center">Virtual Collaboration</h1>
            <p className="text-lg mt-4 text-white text-opacity-60 lg:text-center">
              At Vyas AI, we leverage the power of virtual collaboration to bring together talents from around the world. Our flexible work culture empowers you to work from anywhere, ensuring productivity and creativity thrive without borders. Join a team that values remote work and fosters a global community of innovators.
            </p>
            <div className="flex justify-center">
              <a
                href="/company/jobs"
                className="mt-6 inline-block bg-[rgb(0,223,154)] text-gray-900 font-bold py-2 px-3 rounded-lg shadow-sm hover:bg-gray-100"
                style={{ width: "fit-content" }}
              >
                Browse
              </a>
            </div>
          </div>
          <div className="relative h-[500px] lg:h-[200] w-[600px] mx-auto">
            <img
              src="https://www.speexx.com/wp-content/uploads/virtual-team-collaboration_blog.jpg"
              alt="People virtually connected for a meeting"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Career;
