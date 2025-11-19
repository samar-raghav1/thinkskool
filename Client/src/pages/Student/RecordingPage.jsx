import { Video } from "lucide-react";
import { MOCK_DATA } from "../../assets/mockData";

const RecordingsPage = () => (
    <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Class Recordings Archive</h2>
        <p className="text-gray-600">Catch up on missed lectures and tutorials at your own pace.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_DATA.recordings.map((rec) => (
                <div key={rec.id} className="bg-white p-4 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
                    <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center mb-3">
                        <Video className="w-8 h-8 text-gray-500" />
                    </div>
                    <p className="font-semibold text-gray-800">{rec.title}</p>
                    <p className="text-sm text-gray-500">Date: {rec.date}</p>
                    <p className="text-xs text-gray-400">Duration: {rec.duration}</p>
                    <button className="mt-3 w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                        Watch Now
                    </button>
                </div>
            ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-8">Recordings are available 24 hours after the live session.</p>
    </div>
);

export default RecordingsPage;