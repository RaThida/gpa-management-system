// app/admin/components/Dashboard.tsx
import Image from 'next/image';
const Dashboard = () => {
    return (
        <div className="dashboard">
             <Image
                    src="/logo.png"
                    width={70}
                    height={70}
                    alt="Picture of the author"
                />
            <h1 > Royal University of Phnom Penh</h1>
           
            <div className="stats">
                <div className="stat">
                    <h3>Courses</h3>
                    <p>5</p>
                </div>
                <div className="stat">
                    <h3>Students</h3>
                    <p>12</p>
                </div>
                <div className="stat">
                    <h3>Faculties</h3>
                    <p>13</p>
                </div>
                <div className="stat">
                    <h3>Subjects</h3>
                    <p>65</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
