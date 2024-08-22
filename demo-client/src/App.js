import "./App.css";
import StudentView from "./components/student/StudentView";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import NavBar from "./components/common/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/student/Home";
import AddStudent from "./components/student/AddStudent";
import EditStudent from "./components/student/EditStudent";
import StudentProfile from "./components/student/ViewStudent";

function App() {
  return (
    <main className="container mt-5n">
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route
            exact
            path="/view-students"
            element={<StudentView></StudentView>}
          ></Route>
          <Route
            exact
            path="/add-students"
            element={<AddStudent></AddStudent>}
          ></Route>
          <Route
            exact
            path="/edit-student/:id"
            element={<EditStudent></EditStudent>}
          ></Route>

          <Route
            exact
            path="/student-profile/:id"
            element={<StudentProfile></StudentProfile>}
          ></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
