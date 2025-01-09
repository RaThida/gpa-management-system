// app/admin/components/Sidebar.tsx
import Link from 'next/link';
const Sidebar = () => {
    return (
        <div className="sidebar">
          
            <h2>Administrator</h2>
            <ul>
                <li><Link href="/admin">Home</Link></li>
                <li><Link href="/admin/courses">Courses</Link></li>
                <li><Link href="/admin/students">Students</Link></li>
                <li><Link href="/admin/subjects">Subjects</Link></li>
                <li><Link href="/admin/faculties">Faculties</Link></li>
                <li><Link href="/admin/assign-subject">Assign Subject</Link></li>
                <li><Link href="/admin/enter-marks">Enter Marks</Link></li>
                <li><Link href="/admin/marksheet-report">Marksheet Report</Link></li>
                <li><Link href="/admin/attendance-report">Attendance Report</Link></li>
                <li><Link href="/admin/search">Search</Link></li>
                <li><Link href="/admin/users">Users</Link></li>
                <li><Link href="/admin/profile">Admin Profile</Link></li>
                <li><Link href="/admin/logout">Logout</Link></li>
                <li><Link href="/admin/exit">Exit</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
