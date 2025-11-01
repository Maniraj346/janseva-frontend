// import React, { useEffect, useState } from 'react';
// import './ViewIssues.css';

// function ViewIssues() {
//   const [issues, setIssues] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/issues/all')
//       .then((res) => res.json())
//       .then((data) => setIssues(data))
//       .catch(() => alert('Failed to load issues'));
//   }, []);

//   return (
//     <div className="view-container">
//       <h2>Submitted Civic Issues</h2>
//       {issues.length === 0 ? (
//         <p>No issues found.</p>
//       ) : (
//         <ul className="issue-list">
//           {issues.map((issue) => (
//             <li key={issue._id} className="issue-card">
//               <strong>Category:</strong> {issue.category}<br />
//               <strong>Location:</strong> {issue.location}<br />
//               <strong>Description:</strong> {issue.description}<br />
//               {issue.fileUrl && (
//                 <img src={`http://localhost:5000${issue.fileUrl}`} alt="Issue" width="200" />
//               )}
//               <br /><small>{new Date(issue.createdAt).toLocaleString()}</small>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default ViewIssues;
import React, { useEffect, useState } from 'react';
import './ViewIssues.css';
import Navbar from '../components/Navbar';

function ViewIssues() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/issues/all')
      .then((res) => res.json())
      .then((data) => setIssues(data))
      .catch(() => alert('Failed to load issues'));
  }, []);

  return (
    <>
      <Navbar />
      <div className="view-container">
        <h2>Submitted Civic Issues</h2>
        {issues.length === 0 ? (
          <p>No issues found.</p>
        ) : (
          <ul className="issue-list">
            {issues.map((issue) => (
              <li key={issue._id} className="issue-card">
                <strong>Category:</strong> {issue.category}<br />
                <strong>Location:</strong> {issue.location}<br />
                <strong>Description:</strong> {issue.description}<br />
                {issue.fileUrl && (
                  <img src={`http://localhost:5000${issue.fileUrl}`} alt="Issue" width="200" />
                )}
                <br /><small>{new Date(issue.createdAt).toLocaleString()}</small>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default ViewIssues;