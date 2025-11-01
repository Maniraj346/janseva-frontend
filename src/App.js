// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import LoginPage from './pages/LoginPage';

// // function App() {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<LoginPage />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginPage from './pages/LoginPage';
// import ReportIssue from './pages/ReportIssue';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/report" element={<ReportIssue />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ReportIssue from './pages/ReportIssue';
import ViewIssues from './pages/ViewIssues';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/report" element={<ReportIssue />} />
          <Route path="/view-issues" element={<ViewIssues />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;