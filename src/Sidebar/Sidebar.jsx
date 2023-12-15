import "./Sidebar.css";
import banner from "../assets/banner.png";
import { FaBeer } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
function Sidebar() {
  return (
    <div className="parent">
      <div className="logo">
        <span>
          <img
            src={banner}
            alt="banner"
            style={{ width: "250px", height: "40px", borderRadius: "2px" }}
          />
        </span>
      </div>
      <div className="user">
        <h3>
          <FaBeer />
        </h3>
        <h3>Dahboard</h3>
      </div>
      <div className="userManage">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            User Manage
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              href="#/action-1"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <FaBeer />
              Manage User
              <span>
                <FaBeer />
              </span>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              href="#/action-2"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <FaBeer />
              Manage People
              <span>
                <FaBeer />
              </span>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              href="#/action-2"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <FaBeer />
              Manage student
              <span>
                <FaBeer />
              </span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="testsAssessment">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            ASSESSMENT
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              href="#/action-1"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <FaBeer />
              Odd
              <span>
                <FaBeer />
              </span>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              href="#/action-2"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <FaBeer />
              View
              <span>
                <FaBeer />
              </span>
            </Dropdown.Item>
            <Dropdown.Divider />
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="reports">
      <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            REPORTS
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              href="#/action-1"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <FaBeer />
              Test Master
              <span>
                <FaBeer />
              </span>
            </Dropdown.Item>
            <Dropdown.Divider />
            
            <Dropdown.Divider />
          </Dropdown.Menu>
        </Dropdown>
        
      </div>
      <div className="notesAssessment">
      <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
           Assignment
          </Dropdown.Toggle>

          
        </Dropdown>
      </div>
    </div>
  );
}
export default Sidebar;
