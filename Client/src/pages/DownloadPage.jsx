import React from 'react';
import {  FolderOpenIcon ,DownloadIcon, BeakerIcon, TextIcon, XIcon, MoveLeft} from "lucide-react"
import { useNavigate } from 'react-router-dom';

// 1. Define the List of Documents with a dedicated icon type
const documents = [
  { 
    id: 1, 
    title: "Brochure", 
    description: "See what is in the course", 
    fileName: "Brochure.pdf", 
    url: "/assets/pdf/Brochure.pdf",
    icon: TextIcon,
    color: 'bg-indigo-500'
  },
  { 
    id: 2, 
    title: "Installation Guide", 
    description: "Step-by-step instructions for quick and easy setup.", 
    fileName: "installation_guide.pdf", 
    url: "/assets/pdfs/installation_guide.pdf",
    icon: FolderOpenIcon,
    color: 'bg-green-500'
  },
  { 
    id: 3, 
    title: "Warranty and Terms", 
    description: "Detailed information on product warranties and service terms.", 
    fileName: "warranty_terms.pdf", 
    url: "/assets/pdfs/warranty_terms.pdf",
    icon: TextIcon,
    color: 'bg-red-500'
  },
  { 
    id: 4, 
    title: "Data Sheet: Model X-9000", 
    description: "Technical specifications and performance metrics.", 
    fileName: "data_sheet_x9000.pdf", 
    url: "/assets/pdfs/data_sheet_x9000.pdf",
    icon: BeakerIcon,
    color: 'bg-yellow-500'
  },
];

// Helper function to handle the download action (remains the same)
const handleDownload = (doc) => {
  const link = document.createElement('a');
  link.href = doc.url;
  link.download = doc.fileName;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


function DownloadPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
         <div className="flex justify-between items-center max-w-7xl mx-auto px-4 mb-10 sm:px-6 lg:px-8 py-4">
           <button 
             onClick={()=>navigate('/')}
             className=" p-2 text-gray-700 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-150 cursor-pointer"> 
             <MoveLeft className="w-5 h-5" />
          </button>

          
        </div>
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight sm:text-6xl">
            Essential Resources
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Access our technical data, guides, and documentation instantly.
          </p>
        </header>

        {/* 2. Documents Grid Container (Enhanced Responsiveness) */}
        <div className="
          grid gap-8 
          grid-cols-1       // Default: Single column on small screens
          sm:grid-cols-2    // Tablet/Small desktop: Two columns
          lg:grid-cols-4    // Large desktop: Four columns
        ">
          {documents.map((doc) => (
            <div 
              key={doc.id} 
              className="
                relative bg-white p-6 rounded-xl shadow-lg 
                hover:shadow-2xl transition duration-300 transform hover:scale-[1.02] 
                border border-gray-100 flex flex-col justify-between
              "
            >
              <div className="flex flex-col">
                {/* Icon Circle */}
                <div className={`
                  ${doc.color} p-3 rounded-full w-12 h-12 flex items-center justify-center 
                  text-white shadow-md mb-4
                `}>
                  <doc.icon className="w-6 h-6" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {doc.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 grow">
                  {doc.description}
                </p>
              </div>

              {/* Download Action Link/Button */}
              <a
                href="#" // Use href="#" for semantics, then handle click
                onClick={(e) => { e.preventDefault(); handleDownload(doc); }}
                className="
                  mt-4 w-full flex items-center justify-center 
                  px-4 py-2 border border-transparent text-sm font-medium rounded-full 
                  text-blue-600 bg-blue-50 hover:bg-blue-100 
                  transition duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                "
              >
                <DownloadIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Download ({doc.fileName.split('.').pop().toUpperCase()})
              </a>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default DownloadPage;