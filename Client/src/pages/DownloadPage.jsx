import React, { useState } from 'react';
import { FileText, Eye } from 'lucide-react'; 

// --- Data for demonstration ---
const initialDocuments = [
  { 
    id: 1, 
    title: "Course Brochure", 
    description: "See what is in the course", 
    // The user has requested this specific relative path. 
    // NOTE: For this to work in a real deployed environment, 'Brochure.pdf' MUST be
    // accessible at the root of your server, often by placing it in the /public folder 
    // inside the 'assets/pdf' subdirectory.
    url: "/assets/pdf/Brochure.pdf", 
    fileName: "Brochure.pdf", 
    Icon: FileText,
    color: 'bg-indigo-500'
  }
];

/**
 * Handles the view action: fetches the document content as a Blob 
 * and opens the Blob URL in a new tab for viewing only.
 * @param {object} doc - The document object containing url and fileName.
 */
const handleViewAndDownload = async (doc) => {
  try {
    // 1. Fetch the file content as raw binary data (Blob)
    const response = await fetch(doc.url);
    
    // Check if the response is valid
    if (!response.ok) {
        // Log a specific error if the fetch fails (e.g., 404 Not Found)
        console.error(`Failed to fetch document from ${doc.url}. Status: ${response.status} ${response.statusText}`);
        // Fallback to the original URL if fetch fails
        window.open(doc.url, '_blank', 'noopener,noreferrer');
        return; 
    }
    
    const blob = await response.blob();
    
    // Check content type to be sure it's a PDF
    if (blob.type !== 'application/pdf') {
        console.warn(`File fetched is not a PDF (MIME type: ${blob.type}). Attempting to open original URL.`);
        // Fallback to the original URL if type check fails
        window.open(doc.url, '_blank', 'noopener,noreferrer');
        return;
    }

    // 2. Create a temporary client-side URL for the Blob
    const blobUrl = URL.createObjectURL(blob);

    // 3. Open the Blob URL in a new tab/window for viewing
    window.open(blobUrl, '_blank', 'noopener,noreferrer');
    
    // The object URL is not revoked here as the new window needs it.

    console.log(`View successfully triggered for: ${doc.fileName}`);

  } catch (error) {
    console.error("Critical error during fetch or view process:", error);
    // Final fallback: try to open the original URL
    window.open(doc.url, '_blank', 'noopener,noreferrer');
  }
};

// --- Demonstration Component ---

const DocumentDownloadHandler = () => {
    const [documents] = useState(initialDocuments);

    return (
        <div className="p-8 max-w-lg mx-auto bg-white shadow-xl rounded-xl mt-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Course Documents</h2>
            
            {documents.map(doc => (
                <div 
                    key={doc.id} 
                    className="flex items-center justify-between p-4 mb-4 border border-gray-200 rounded-lg transition duration-300 hover:shadow-lg"
                >
                    <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-full ${doc.color} text-white`}>
                            <doc.Icon className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-gray-800">{doc.title}</p>
                            <p className="text-sm text-gray-500">{doc.description}</p>
                        </div>
                    </div>

                    <button
                        onClick={() => handleViewAndDownload(doc)}
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white font-medium rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 text-sm"
                        title="View Document"
                    >
                        <Eye className="w-4 h-4" />
                        <span className="hidden sm:inline">View File</span>
                    </button>
                </div>
            ))}
            
           
        </div>
    );
};

export default DocumentDownloadHandler;