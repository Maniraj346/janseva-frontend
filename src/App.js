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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/report" element={<ReportIssue />} />
        <Route path="/view-issues" element={<ViewIssues />} />
      </Routes>
    </Router>
  );
}

export default App;