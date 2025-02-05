import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import jobvideo from "../../assets/jobvideo.mp4"; // Path to your video file

const jobList = [
  {
    title: "Full Stack Universe Engineer",
    location: "Remote",
    department: "Engineering",
    link: "https://forms.gle/TPtuYinBXjsoFZ277?authuser=0", // Replace with your actual form URL
  },
  {
    title: "Account Executive",
    location: "Remote",
    department: "Sales",
    link: "https://forms.gle/TPtuYinBXjsoFZ277?authuser=0",
  },
  {
    title: "Applied Machine Learning Research Engineer",
    location: "Remote",
    department: "Engineering",
    link: "https://forms.gle/TPtuYinBXjsoFZ277?authuser=0",
  },
  {
    title: "Field Engineer",
    location: "Remote",
    department: "Customer Success",
    link: "https://forms.gle/TPtuYinBXjsoFZ277?authuser=0",
  },
  {
    title: "Full Stack Engineer",
    location: "Remote",
    department: "Engineering",
    link: "https://forms.gle/TPtuYinBXjsoFZ277?authuser=0",
  },
  {
    title: "Sales Development Representative",
    location: "Remote",
    department: "Sales",
    link: "https://forms.gle/TPtuYinBXjsoFZ277?authuser=0",
  },
  {
    title: "Former Founders",
    location: "Remote",
    department: "General Inquiry",
    link: "https://forms.gle/TPtuYinBXjsoFZ277?authuser=0",
  },
  {
    title: "Full Stack Machine Learning Engineer",
    location: "Remote",
    department: "Engineering",
    link: "https://forms.gle/TPtuYinBXjsoFZ277?authuser=0",
  },
];

const Jobs = () => {
  const jobCardStyle = {
    backgroundColor: "black",
    border: "2px solid white",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const applyNowButtonStyle = {
    backgroundColor: "#00df9a",
    color: "white",
    padding: "8px 16px",
    borderRadius: "8px",
    transition: "background-color 0.3s",
    textDecoration: "none",
    cursor: "pointer",
  };

  const applyNowButtonHoverStyle = {
    backgroundColor: "#00a86b",
  };

  const jobDetailsStyle = {
    textAlign: "left",
  };

  const containerStyle = {
    position: "relative",
    overflow: "hidden",
    color: "white",
  };

  const videoStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  };

  const sectionStyle = {
    position: "relative",
    zIndex: 1,
  };

  return (
    <div style={containerStyle}>
      <video
        src={jobvideo} // Correct video file path
        autoPlay
        loop
        muted
        style={videoStyle}
      />
      <Navbar />
      <div className="max-w-[1000px] mx-auto p-4">
        <div className="text-center">
          <h2 className="text-5xl text-[rgb(0,223,154)] font-bold mb-4">
            Opportunities
          </h2>
        </div>
      </div>
      <div className="section--default--padded bg-gradient-to-r from-aquavision-500 via-purple-500 to-purboflow-500 text-white px-12 py-8">
        <div id="Open-Positions" className="text-center">
          <hr className="mt-4 mb-4 w-[calc(100%-200px)] border-t-2 border-white mx-auto pb-4 bg-black" />
          <div className="jobs-wrapper">
            {jobList.map((job, index) => (
              <div key={index} className="job-card" style={jobCardStyle}>
                <div style={jobDetailsStyle}>
                  <h3 className="job-title text-2xl font-bold">{job.title}</h3>
                  <p className="job-details text-lg">
                    {job.location} &nbsp;/&nbsp; {job.department}
                  </p>
                </div>
                <div>
                  <a
                    href={job.link}
                    className="apply-now-button"
                    style={applyNowButtonStyle}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor =
                        applyNowButtonHoverStyle.backgroundColor;
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor =
                        applyNowButtonStyle.backgroundColor;
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-black text-white px-12 py-8" style={sectionStyle}>
        <video
          src={jobvideo} // Correct video file path for benefits section
          autoPlay
          loop
          muted
          style={{ ...videoStyle, top: '50%', zIndex: -1, transform: 'translateY(-50%)' }}
        />
        <div id="benefits" className="text-center">
          <hr className="mt-4 mb-4 w-[calc(100%-200px)] border-t-2 border-white mx-auto pb-4 bg-black" />
          <h2 className="text-6xl mb-8 font-bold text-[rgb(0,223,154)]">Benefits</h2>
          <div className="w-layout-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="benefit-card text-center"
              style={{
                backgroundColor: "#000000",
                borderRadius: "16px",
                padding: "32px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#1a202c";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#000000";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="teal"
                width={"64px"}
                height={"64px"}
              >
                <path d="M9 4C10.1046 4 11 4.89543 11 6V12.8271C10.1058 12.1373 8.96602 11.7305 7.6644 11.5136L7.3356 13.4864C8.71622 13.7165 9.59743 14.1528 10.1402 14.7408C10.67 15.3147 11 16.167 11 17.5C11 18.8807 9.88071 20 8.5 20C7.11929 20 6 18.8807 6 17.5V17.1493C6.43007 17.2926 6.87634 17.4099 7.3356 17.4864L7.6644 15.5136C6.92149 15.3898 6.1752 15.1144 5.42909 14.7599C4.58157 14.3573 4 13.499 4 12.5C4 11.6653 4.20761 11.0085 4.55874 10.5257C4.90441 10.0504 5.4419 9.6703 6.24254 9.47014L7 9.28078V6C7 4.89543 7.89543 4 9 4ZM12 3.35418C11.2671 2.52376 10.1947 2 9 2C6.79086 2 5 3.79086 5 6V7.77422C4.14895 8.11644 3.45143 8.64785 2.94126 9.34933C2.29239 10.2415 2 11.3347 2 12.5C2 14.0652 2.79565 15.4367 4 16.2422V17.5C4 19.9853 6.01472 22 8.5 22C9.91363 22 11.175 21.3482 12 20.3287C12.825 21.3482 14.0864 22 15.5 22C17.9853 22 20 19.9853 20 17.5V16.2422C21.2043 15.4367 22 14.0652 22 12.5C22 11.3347 21.7076 10.2415 21.0587 9.34933C20.5486 8.64785 19.8511 8.11644 19 7.77422V6C19 3.79086 17.2091 2 15 2C13.8053 2 12.733 2.52376 12 3.35418Z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4">Comprehensive Benefits</h3>
              <p className="text-lg">
                From health and wellness to work-life balance, we offer a range of benefits to support your well-being.
              </p>
            </div>
            <div
              className="benefit-card text-center"
              style={{
                backgroundColor: "#000000",
                borderRadius: "16px",
                padding: "32px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#1a202c";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#000000";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="teal"
                width={"64px"}
                height={"64px"}
              >
                <path d="M18 3V15H6V3H18M18 0H6C4.89543 0 4 0.89543 4 2V16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V2C20 0.89543 19.1046 0 18 0ZM12 14H8V12H12V14ZM12 10H8V8H12V10ZM12 6H8V4H12V6ZM16 10H14V8H16V10ZM16 14H14V12H16V14ZM16 6H14V4H16V6ZM4 20H20V22H4V20Z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4">Flexibility & Growth</h3>
              <p className="text-lg">
                We support your career growth with opportunities for advancement and flexible working arrangements.
              </p>
            </div>
            <div
              className="benefit-card text-center"
              style={{
                backgroundColor: "#000000",
                borderRadius: "16px",
                padding: "32px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#1a202c";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#000000";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="teal"
                width={"64px"}
                height={"64px"}
              >
                <path d="M12 0L9.5137 6.95405L2.47346 8.11803L7.77409 13.2162L6.88302 20.1188L12 16.9068L17.1169 20.1188L16.2258 13.2162L21.5265 8.11803L14.4863 6.95405L12 0ZM12 4.15L13.0357 6.43419L15.5367 6.80153L14.1147 8.80269L14.9725 11.3657L12 9.60365L9.02753 11.3657L9.88529 8.80269L8.46329 6.80153L10.9643 6.43419L12 4.15Z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4">Innovative Environment</h3>
              <p className="text-lg">
                Be part of a team that fosters innovation and creativity in a collaborative work environment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
