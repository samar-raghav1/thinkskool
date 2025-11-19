import { Card } from "../../components/Student/SharedComponentStudent";


const PerformanceReportPage = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-bold text-gray-800">Detailed Performance Reports</h2>
    <p className="text-gray-600">View in-depth analysis of scores, participation, and skill mastery.</p>

    <Card title="Skill Breakdown (Q3)">
      <ul className="space-y-3">
        {['Algorithms', 'Debugging', 'JavaScript', 'Database'].map((skill, index) => (
          <li key={skill} className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">{skill}</span>
            <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${95 - index * 10}%` }}
              ></div>
            </div>
            <span className="text-sm font-semibold text-blue-700">{95 - index * 10}%</span>
          </li>
        ))}
      </ul>
    </Card>

    <Card title="Historical Score Trends">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assessment</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Average</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comments</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Module 1 Quiz</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-bold">95%</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">88%</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Excellent attention to detail.</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Project Alpha</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-600 font-bold">82%</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">85%</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Needs improvement in documentation.</td>
          </tr>
        </tbody>
      </table>
    </Card>
  </div>
);
export default PerformanceReportPage;