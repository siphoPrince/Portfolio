function Certs(){
    return(
        <>
            <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
  <h1 className="text-4xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
    Certifications & Qualifications
  </h1>
  <div className="space-y-4">
    {/* Matric Certificate */}
    <div>
      <h2 className="text-2xl font-semibold text-blue-600">Matric Certificate</h2>
      <p className="text-gray-700">Completed in 2017</p>
      <p className="text-gray-500">Institution: Dr. W. K. du Plessis</p>
    </div>


    {/* AWS Certification */}
    <div>
      <h2 className="text-2xl font-semibold text-blue-600">
        AWS Cloud Practitioner Certification (In Progress)
      </h2>
      <p className="text-gray-700">Currently studying AWS with ALX</p>
    </div>

    {/* Software Engineering Certificate */}
    <div>
      <h2 className="text-2xl font-semibold text-blue-600">
        Software Engineering - Back-End Specialization
      </h2>
      <p className="text-gray-700">Issued by ALX, June 2024</p>
      <p className="text-gray-700">Tech Stack: Python(Flask & Django), Javascript(Node.js), C-programming language and more...</p>
      <a
        href="src/images/img2.png" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 hover:underline"
      >
        View Certificate
      </a>
    </div>

    <div>
      <h2 className="text-2xl font-semibold text-blue-600">
        Google Hackerthon 
      </h2>
      <p className="text-gray-700">Attended The google hackerthon hardware</p>
      <p className="text-gray-700">assambled a server from scratch</p>
      <p className="text-gray-700">Installed Op system and network integration</p>
    </div>
  </div>
</section>

        </>
    );

    
}

export default Certs