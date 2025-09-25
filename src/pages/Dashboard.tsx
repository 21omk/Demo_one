import React from 'react';
import './Dashboard.css';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </header>

      <main className="dashboard-content">
        <div className="dashboard-card">
          <h2>User Profile</h2>
          <p>You have successfully logged in!</p>
          <div className="user-info">
            <p>
              <strong>Status:</strong> Authenticated
            </p>
            <p>
              <strong>Last Login:</strong> {new Date().toLocaleString()}
            </p>
          </div>
        </div>

        <div className="dashboard-card">
          <h2>Quick Actions</h2>
          <div className="actions-grid">
            <div className="action-item">
              <h3>Profile Settings</h3>
              <p>Update your personal information</p>
            </div>
            <div className="action-item">
              <h3>Security</h3>
              <p>Manage your account security</p>
            </div>
            <div className="action-item">
              <h3>Notifications</h3>
              <p>Configure your notification preferences</p>
            </div>
            <div className="action-item">
              <h3>Help & Support</h3>
              <p>Get help and contact support</p>
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <h2>Recent Activity</h2>
          <ul className="activity-list">
            <li>Welcome! You've successfully registered and logged in.</li>
            <li>Your account is now active and ready to use.</li>
            <li>Explore the features available in this dashboard.</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
