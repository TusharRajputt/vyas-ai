import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Documentation = () => {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <div className='header text-center p-4 flex items-center justify-center'>
        <img src="https://static.vecteezy.com/system/resources/previews/005/940/559/non_2x/banners-icon-style-vector.jpg" alt="Icon" className="w-16 h-16 mr-4"/>
        <div>
          <div className='text'>Documentation</div>
        
          <div className='underline w-96'></div>
        </div>
      </div>
      <div className="main-body grid grid-cols-1 md:grid-cols-[minmax(300px,auto)_1fr] gap-5 p-5 text-white">
        <nav id="navbar" className="text-white">
          <header className="text-xl font-bold text-white">Documentation Menu</header>
          <a href="#intro" className="nav-link block border border-white p-2 my-2 no-underline hover:bg-gray-900 p-4 rounded-lg mt-4 hover:shadow-lg">
            Introduction
          </a>
          <a href="#applications" className="nav-link block border border-white p-2 my-2 no-underline hover:bg-gray-900 p-4 rounded-lg mt-4 hover:shadow-lg ">
            Applications
          </a>
          <a href="#workflow" className="nav-link block border border-white p-2 my-2 no-underline hover:bg-gray-900 p-4 rounded-lg mt-4 hover:shadow-lg">
            Workflow
          </a>
          <a href="#mission" className="nav-link block border border-white p-2 my-2 no-underline hover:bg-gray-900 p-4 rounded-lg mt-4 hover:shadow-lg">
            Mission
          </a>
        </nav>

        <main id="main-doc">
          <section className="main-section mb-5 p-4 md:pl-10 bg-black rounded-lg border-white border hover:bg-gray-900" id="intro hover:bg-gray-900">
            <header className="text-xl font-bold">Introduction to Vyas AI</header>
            <p>
              Vyas AI empowers developers to integrate computer vision capabilities into their applications
              effortlessly. Whether you're a seasoned developer or just starting out, Vyas AI simplifies the
              process from data labeling to model training and deployment.
            </p>
          </section>

          <section className="main-section mb-5 p-4 md:pl-10 bg-black rounded-lg border-white border hover:bg-gray-900" id="applications hover:bg-gray-900">
            <header className="text-xl font-bold">Applications of Vyas AI</header>
            <p>
              Developers can use Vyas AI to build a wide range of computer vision applications, including
              image recognition, object detection, facial recognition, and more. Our platform supports various
              use cases across industries, from healthcare to retail and beyond.
            </p>
            <div className="code-example bg-black p-4 rounded-lg mt-4 hover:bg-gray-900">
              <code className="text-white">
                // Example: Image Classification with Vyas AI
                <br />
                import vyasAI
                <br />
                <br />
                # Initialize the image classifier
                <br />
                classifier = vyasAI.ImageClassifier()
                <br />
                <br />
                # Load an image for classification
                <br />
                image_path = 'example_image.jpg'
                <br />
                image = vyasAI.load_image(image_path)
                <br />
                <br />
                # Perform image classification
                <br />
                predictions = classifier.classify(image)
                <br />
                <br />
                # Display the predicted labels
                <br />
                print(predictions)
              </code>
            </div>
          </section>

          <section className="main-section mb-5 p-4 md:pl-10 bg-black rounded-lg border-white border hover:bg-gray-900" id="workflow">
            <header className="text-xl font-bold">Workflow with Vyas AI</header>
            <p>
              Our platform streamlines the entire workflow of training and deploying computer vision models.
              You can upload labeled data directly, choose from pre-trained models, or train your own models
              with ease. Vyas AI eliminates the complexities of data formatting, collaboration challenges,
              and benchmarking, allowing developers to focus on innovation.
            </p>
            <div className="code-example bg-black p-4 rounded-lg mt-4 hover:bg-gray-900">
              <code className="text-white">
                // Example: Object Detection with Vyas AI
                <br />
                import vyasAI
                <br />
                <br />
                # Initialize the object detector
                <br />
                detector = vyasAI.ObjectDetector()
                <br />
                <br />
                # Load an image for object detection
                <br />
                image_path = 'example_image.jpg'
                <br />
                image = vyasAI.load_image(image_path)
                <br />
                <br />
                # Perform object detection
                <br />
                detected_objects = detector.detect(image)
                <br />
                <br />
                # Display the detected objects
                <br />
                print(detected_objects)
              </code>
            </div>
          </section>

          <section className="main-section mb-5 p-4 md:pl-10 bg-black rounded-lg border-white border hover:bg-gray-900" id="mission">
            <header className="text-xl font-bold">Our Mission</header>
            <p>
              Since our launch in January 2023, Vyas AI's mission has been to democratize computer vision
              technology. We believe every developer should have access to powerful tools that enable them to
              incorporate AI seamlessly into their projects. Our goal is to remove barriers and empower
              developers of all skill levels to succeed in the world of computer vision.
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Documentation;
