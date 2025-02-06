import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Claim = () => {
  return (
    <div className="container">
      <Navbar />
      <section id="terms" className="content_wrapper bg-gray-100 sm:pl-4 sm:pr-4 md:pl-8 md:pr-8 lg:pl-12 lg:pr-12 xl:pl-16 xl:pr-16">
        <div className="w-container mx-auto px-4 sm:px-0">
          <div className="w-richtext text-gray-800">
            <h1 className="text-3xl font-bold mb-6 text-center pt-10">Claim</h1>
            <h3 className="text-xl font-bold mb-3">1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit quod cupiditate asperiores vitae explicabo aut atque porro velit sequi eum, blanditiis culpa doloribus sapiente totam? Sint, corrupti! Neque, consequuntur.</h3>
            <p className="mb-6">
              1.1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima quo, quam, porro nobis excepturi sequi quibusdam recusandae, voluptatibus accusantium harum dignissimos nam facilis sunt corporis repudiandae nostrum iste nisi quia. </p>
            <h3 className="text-xl font-bold mb-3">2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum possimus iste explicabo illum voluptas minima asperiores quo iusto rem pariatur in nemo numquam quas officiis perspiciatis, autem dolorum provident alias!</h3>
            <p className="mb-6">
              2.1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius asperiores sapiente consequuntur iure autem modi quas, repudiandae id fugit quisquam ratione eaque dolorem aut temporibus dolor excepturi, nulla rem odio.</p>
            <p className="mb-6">
              2.2. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt explicabo earum aspernatur reiciendis. Tempore enim nostrum recusandae praesentium similique ut incidunt blanditiis, asperiores iure maiores facere rem numquam. Quia, quasi?</p>
            <p className="mb-6">
              2.3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate commodi, ad iusto alias minima dolores nam laboriosam voluptates tenetur corrupti id voluptatibus veniam! Repellendus maxime obcaecati consequatur recusandae, nostrum eligendi. </p>
            <p className="mb-6">
              2.4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum impedit eveniet atque consectetur ipsam incidunt dolores repellendus est alias eligendi! Tempore magni modi, ea nam quidem dolore enim esse iste.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Claim;
