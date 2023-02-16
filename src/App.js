import './App.css';
import {Routes,Route, BrowserRouter} from "react-router-dom"
import ListAllStudents from './Pages/ListAllStudents';
import Navigation from './Pages/Navigation';
import AssignMentor from './Pages/AssignMentor';
import CreateStudent from './Pages/CreateStudent';
import CreateMentor from './Pages/CreateMentor';
import DisplayStudents from './Pages/DisplayStudents';
import DisplayMentor from './Pages/DisplayMentor';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/createstudent" element={<CreateStudent />} />
        <Route path="/creatementor" element={<CreateMentor />} />
          <Route path='/listallstudents' element={<ListAllStudents />} />
          <Route path='/displaystudents' element={<DisplayStudents />} />
          <Route path='/displaymentors' element={<DisplayMentor />} />
          <Route path='/assignmentor/:id' element={<AssignMentor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
