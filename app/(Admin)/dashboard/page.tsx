import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import PageTemplate from '@/components/Home/page-template';
import { AlertCircle, Briefcase, FileText, Users } from 'lucide-react';

const Dashboard = async () => {
        // @ts-ignore
    const session = await getServerSession(NEXT_AUTH_CONFIG);

  if (!session) {
    redirect("/login");
  }

    // Sample data for the dashboard
    const upcomingDeadlines = [
        { id: 1, title: 'Johnson Contract Review', date: 'March 10, 2025', priority: 'High' },
        { id: 2, title: 'Henderson Case Motion', date: 'March 15, 2025', priority: 'Medium' },
        { id: 3, title: 'Expert Witness Preparation', date: 'March 20, 2025', priority: 'High' },
    ];

    const recentActivities = [
        { id: 1, action: 'Document uploaded', case: 'Westfield v. Thompson', time: '2 hours ago' },
        { id: 2, action: 'Meeting scheduled', case: 'Smith Deposition', time: '5 hours ago' },
        { id: 3, action: 'Comment added', case: 'Henderson Case', time: '1 day ago' },
    ];

    const caseStats = [
        { title: 'Active Cases', count: 24, icon: <Briefcase size={20} /> },
        { title: 'Pending Review', count: 8, icon: <FileText size={20} /> },
        { title: 'Upcoming Deadlines', count: 12, icon: <AlertCircle size={20} /> },
        { title: 'Client Meetings', count: 5, icon: <Users size={20} /> },
    ];

    return (
        <PageTemplate title='Dashboard'>
            <div className="p-6">
                {/* Welcome section */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Welcome back, {session.user?.name}</h1>
                    <p className="text-gray-600">Here&apos;s what&apos;s happening with your cases today</p>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {caseStats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm">{stat.title}</p>
                                <p className="text-2xl font-bold">{stat.count}</p>
                            </div>
                            <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                                {stat.icon}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main content area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Upcoming deadlines */}
                    <div className="bg-white rounded-lg shadow lg:col-span-2">
                        <div className="border-b p-4 flex justify-between items-center">
                            <h2 className="font-semibold text-lg">Upcoming Deadlines</h2>
                            <button className="text-blue-600 text-sm">View All</button>
                        </div>
                        <div className="p-4">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-left text-gray-500 text-sm">
                                        <th className="pb-3">Task</th>
                                        <th className="pb-3">Due Date</th>
                                        <th className="pb-3">Priority</th>
                                        <th className="pb-3">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {upcomingDeadlines.map((deadline) => (
                                        <tr key={deadline.id} className="border-t">
                                            <td className="py-3">{deadline.title}</td>
                                            <td className="py-3 text-sm">{deadline.date}</td>
                                            <td className="py-3">
                                                <span className={`px-2 py-1 rounded-full text-xs ${deadline.priority === 'High' ? 'bg-red-100 text-red-600' :
                                                    deadline.priority === 'Medium' ? 'bg-yellow-100 text-yellow-600' :
                                                        'bg-green-100 text-green-600'
                                                    }`}>
                                                    {deadline.priority}
                                                </span>
                                            </td>
                                            <td className="py-3">
                                                <button className="text-blue-600 text-sm">Update</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>
            </div>
        </PageTemplate>
    );
};

export default Dashboard;
