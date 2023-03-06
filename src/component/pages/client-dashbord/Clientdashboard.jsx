import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Clientdashboard.css";


const ClientDashboard = () => {
  const [activeTab, setActiveTab] = useState("start");
  const navigate = useNavigate();


  const handleTabClick = (tabName, path) => {
    setActiveTab(tabName);
    if (tabName === "start") {
      window.location.href = 'https://boisterous-macaron-9fe1f3.netlify.app/';
    } else {
      navigate(path);
    }
  };
  

  return (
    <div className="dashboard-client">
      <h11>Welcome, !</h11>
      <div className="dashboard-clientbox">
        <ul>
          <Link
            to="#"
            className={activeTab === "start" ? "active" : ""}
            onClick={() => handleTabClick("start")}
          >
            Start Application
          </Link>

          <Link
            to="/dashboard/review"
            className={activeTab === "review" ? "active" : ""}
            onClick={() => handleTabClick("review", "/dashboard/review")}
          >
            <re>Review Application</re>
          </Link>

          <Link
            to="/dashboard/account"
            className={activeTab === "account" ? "active" : ""}
            onClick={() => handleTabClick("account", "/dashboard/account")}
          >
            <my>My Account</my>
          </Link>

          <Link
            to="/dashboard/checklist"
            className={activeTab === "checklist" ? "active" : ""}
            onClick={() =>
              handleTabClick("checklist", "/dashboard/checklist")
            }
          >
            <chec>Checklist of Compliance</chec>
          </Link>

          <Link
            to="/dashboard/add-users"
            className={activeTab === "add-users" ? "active" : ""}
            onClick={() =>
              handleTabClick("add-users", "/dashboard/add-users")
            }
          >
            <addus>Add Users</addus>
            
          </Link>

          <Link
            to="/dashboard/download"
            className={activeTab === "download" ? "active" : ""}
            onClick={() =>
              handleTabClick("download", "/dashboard/download")
            }
          >
            <do>Download Forms</do>
          </Link>

          <Link
            to="/dashboard/reports"
            className={activeTab === "reports" ? "active" : ""}
            onClick={() =>
              handleTabClick("reports", "/dashboard/reports")
            }
          >
            <vi>View Reports</vi>
          </Link>
        </ul>
      </div>
      <div>{/* Render the content of the active tab here */}</div>
    </div>
  );
};

export default ClientDashboard;
