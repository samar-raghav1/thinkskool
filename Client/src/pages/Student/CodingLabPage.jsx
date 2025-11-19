import { Code } from "lucide-react";

const CodingLabPage = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-800">Cloud-Based Coding Lab</h2>
    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
      <p className="text-lg font-semibold text-green-800 flex items-center">
        <Code className="w-5 h-5 mr-2" /> Live Coding Environment
      </p>
      <p className="text-sm text-green-700 mt-2">
        This section represents a secure, cloud-based IDE for real-time coding and project work.
      </p>
    </div>
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 h-[60vh] flex items-center justify-center">
      <p className="text-gray-500 text-xl font-medium">
        [Simulated IDE Interface Here: Terminal, Editor, File Tree]
      </p>
    </div>
  </div>
);

export default CodingLabPage;