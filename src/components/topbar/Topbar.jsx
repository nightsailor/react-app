import "./topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Travel With</span>
        </Link>
      </div>
      <div className="topbarCenter">
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to="/travel" className="topbarLink">Travel</Link>
          <Link to="/chat" className="topbarLink">Chat</Link>
          <Link to="/tourista" className="topbarLink">Outdoors</Link>
        </div>
        <div className="topbarLinks">
            <Link to="/" className="topbarLink topbarItem" onClick={handleLogout}>Sign Out</Link>
        </div>
      </div>
    </div>
  );
}
