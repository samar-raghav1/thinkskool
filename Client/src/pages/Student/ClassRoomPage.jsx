import { MOCK_DATA } from "../../assets/mockData";
import { Card } from "../../components/Student/SharedComponentStudent";

const ClassroomPage = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-bold text-gray-800">My Classroom Resources</h2>

    {/* Lessons */}
    <Card title="Current Lessons">
      <div className="space-y-4">
        {MOCK_DATA.lessons.map(lesson => (
          <div key={lesson.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
            <div className="flex items-center space-x-3">
              <span className={`w-3 h-3 rounded-full ${lesson.status === 'Completed' ? 'bg-green-500' : lesson.status === 'In Progress' ? 'bg-yellow-500' : 'bg-red-500'}`}></span>
              <span className="font-medium text-gray-700">{lesson.title}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xs text-gray-500">{lesson.progress}%</span>
              <button className="text-sm text-blue-600 hover:underline">View</button>
            </div>
          </div>
        ))}
      </div>
    </Card>

    {/* Assignments */}
    <Card title="Assignments">
      <div className="space-y-4">
        {MOCK_DATA.assignments.map(assignment => (
          <div key={assignment.id} className="flex justify-between items-center p-3 border-b">
            <span className="font-medium text-gray-700">{assignment.title}</span>
            <span className={`text-sm font-semibold ${assignment.status.includes('Graded') ? 'text-green-600' : 'text-orange-500'}`}>{assignment.status}</span>
          </div>
        ))}
      </div>
    </Card>

    {/* Recordings - Duplicated for simplicity, will be in the dedicated view */}
    <Card title="Class Recordings (See dedicated view for full list)">
      <div className="space-y-4">
        {MOCK_DATA.recordings.slice(0, 1).map(rec => (
          <div key={rec.id} className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
            <span className="font-medium text-indigo-800">{rec.title}</span>
            <span className="text-sm text-indigo-600">Play Recording</span>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

export default ClassroomPage;