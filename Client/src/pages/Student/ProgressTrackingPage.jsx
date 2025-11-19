import { Card, ProgressRing } from "../../components/Student/SharedComponentStudent";

const ProgressTrackingPage = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-bold text-gray-800">Student Progress Tracking</h2>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card title="Module Completion" className="flex flex-col items-center">
        <ProgressRing percentage={75} color="text-teal-500" />
        <p className="mt-3 text-sm text-gray-600">3 out of 4 modules fully started.</p>
      </Card>
      <Card title="Average Assignment Score" className="flex flex-col items-center">
        <span className="text-5xl font-extrabold text-blue-600">88%</span>
        <p className="mt-2 text-sm text-gray-600">Based on 5 graded assignments.</p>
      </Card>
      <Card title="Time Spent (Last Week)" className="flex flex-col items-center">
        <span className="text-5xl font-extrabold text-green-600">12 hrs</span>
        <p className="mt-2 text-sm text-gray-600">4 hours in coding lab.</p>
      </Card>
    </div>

    <Card title="Detailed Progress Overview">
      <p className="text-sm text-gray-600 mb-4">A simple chart representation of progress.</p>
      <div className="h-64 bg-gray-50 border rounded-lg flex items-center justify-center">
        <p className="text-gray-400">Placeholder for Recharts Bar/Line Graph </p>
      </div>
    </Card>
  </div>
);
export default ProgressTrackingPage;