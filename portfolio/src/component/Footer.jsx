function Footer() {
    return (
      <footer className="bg-gradient-to-r from-blue-500 to-teal-500 text-white text-center py-8">
        <div className="container mx-auto">
          
          <p className="text-sm">All rights reserved</p>
          <div className="mt-4">
            <a 
              href="https://www.example.com" 
              className="text-blue-200 hover:text-white transition duration-300"
            >
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a 
              href="https://www.example.com" 
              className="text-blue-200 hover:text-white transition duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  