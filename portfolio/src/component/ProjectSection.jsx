import React from 'react';

function ProjectSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">My Projects</h2>

        {/* Using Flexbox or Grid for 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
  <h4 className="text-xl font-semibold text-gray-800 mb-4">Online Church Booking System</h4>
  <p className="text-gray-600 mb-4">
    A modern and user-friendly booking system designed for churches to manage bookings for events, services, and other activities. Built with the following technologies:
  </p>
  <ul className="list-disc list-inside text-gray-600 mb-4">
    <li>
      <span className="font-semibold">Next.js</span>: For server-side rendering and seamless user experience.
    </li>
    <li>
      <span className="font-semibold">Tailwind CSS</span>: For beautiful, responsive, and modern styling.
    </li>
    <li>
      <span className="font-semibold">ChadCN Components</span>: Used for pre-built, customizable UI elements.
    </li>
    <li>
      <span className="font-semibold">Skeleton</span>: Added skeleton loaders to improve user experience during data loading.
    </li>
    <li>
      <span className="font-semibold">Email API Integration</span>: Automatically sends confirmation emails with final booking details to clients.
    </li>
  </ul>
  <a
    href="https://github.com/siphoPrince/ChurchBookingSystem.git"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 hover:underline"
  >
    View Project Details
  </a>
</div>


<div className="bg-white p-6 rounded-lg shadow-lg">
  <h4 className="text-xl font-semibold text-gray-800 mb-4">Price Comparison App (In Progress)</h4>
  <p className="text-gray-600 mb-4">
    A powerful tool designed to help users compare prices from various shops, such as Pick n Pay, Checkers, and Spar, to find the best deals on everyday products. The app aims to make shopping smarter and more budget-friendly.
  </p>
  <ul className="list-disc list-inside text-gray-600 mb-4">
    <li>
      <span className="font-semibold">Next.js</span>: For server-side rendering and a seamless shopping comparison experience.
    </li>
    <li>
      <span className="font-semibold">Tailwind CSS</span>: For sleek, responsive, and modern UI design.
    </li>
    <li>
      <span className="font-semibold">ChadCN Components</span>: Used to build interactive and customizable UI elements.
    </li>
    <li>
      <span className="font-semibold">API Integration</span>: To fetch and compare product prices from multiple shops in real-time.
    </li>
    <li>
      <span className="font-semibold">Progress</span>: Still under development, with plans to include features like search filters, user reviews, and price history tracking.
    </li>
  </ul>
  <p className="text-gray-500 italic">
    Stay tuned for updates as we continue building this innovative project!
  </p>
</div>


         {/* Project 3 */}
<div className="bg-white p-6 rounded-lg shadow-lg">
  <h4 className="text-xl font-semibold text-gray-800 mb-4">Service Locator App</h4>
  <p className="text-gray-600 mb-4">
    A tool designed to help users locate and track services and tools, such as finding local repair shops, rental equipment, or specialized service providers. Built to streamline the process of managing and locating services efficiently.
  </p>
  <ul className="list-disc list-inside text-gray-600 mb-4">
    <li>
      <span className="font-semibold">Python & Django</span>: Used for building the backend and ensuring a scalable and robust application.
    </li>
    <li>
      <span className="font-semibold">Tailwind CSS</span>: Provides a clean and professional front-end design.
    </li>
    <li>
      <span className="font-semibold">Geolocation Integration</span>: Allows users to find nearby services based on their location.
    </li>
    <li>
      <span className="font-semibold">Search & Filter Features</span>: Users can search for specific services or tools and filter results by category, location, or availability.
    </li>
    <li>
      <span className="font-semibold">Future Enhancements</span>: Plans to include user reviews, ratings, and booking functionality for tools and services.
    </li>
  </ul>
  <p className="text-gray-500 italic">
    Development is ongoing, with a focus on providing a user-friendly experience and reliable service tracking.
  </p>
</div>

        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
