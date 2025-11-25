import React from 'react'
import Tooltip from './Tooltip';
import { useNavigate } from 'react-router-dom';
import { DownloadCloudIcon } from 'lucide-react';

const DownloadButton = () => {
      const customOrange = '#FF8C00';
    const navigate = useNavigate();
  return (
     <div className="fixed bottom-6 right-6 z-50 mr-20">
                <Tooltip text="Download catalog">
                    <button
                        // NOTE: Ensure navigate and setIsMenuOpen functions are available in this scope
                        onClick={() => {  navigate('/downloads'); }}
                        className="p-4 flex rounded-full text-white transition duration-150 shadow-xl hover:shadow-2xl hover:scale-105 transform cursor-pointer"
                        style={{ backgroundColor: customOrange }}
                        aria-label="Download catalog"
                    >
                        <DownloadCloudIcon className="w-6 h-6" />
                    </button>
                </Tooltip>
            </div>
  )
}

export default DownloadButton
