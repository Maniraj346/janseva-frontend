// import React, { useState } from 'react';
// import './ReportIssue.css';

// function ReportIssue() {
//   const [category, setCategory] = useState('roads');
//   const [description, setDescription] = useState('');
//   const [location, setLocation] = useState('');
//   const [file, setFile] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Issue reported: ${category}, ${location}`);
//     // Later: send to backend
//   };

//   return (
//     <div className="report-container">
//       <h2>Report a Civic Issue</h2>
//       <form onSubmit={handleSubmit}>
//         <select value={category} onChange={(e) => setCategory(e.target.value)}>
//           <option value="roads">Roads</option>
//           <option value="sanitation">Sanitation</option>
//           <option value="streetlights">Streetlights</option>
//           <option value="water">Water Supply</option>
//         </select>

//         <input
//           type="text"
//           placeholder="Location (or use GPS)"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           required
//         />

//         <textarea
//           placeholder="Describe the issue"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />

//         <input
//           type="file"
//           accept="image/*,video/*"
//           onChange={(e) => setFile(e.target.files[0])}
//         />

//         <button type="submit">Submit Issue</button>
//       </form>
//     </div>
//   );
// }

// export default ReportIssue;
import React, { useState } from 'react';
import './ReportIssue.css';
import Navbar from '../components/Navbar';

function ReportIssue() {
  const [category, setCategory] = useState('roads');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('category', category);
    formData.append('description', description);
    formData.append('location', location);
    if (file) formData.append('file', file);

    try {
      const res = await fetch('http://localhost:5000/api/issues/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        alert('✅ Issue submitted successfully!');
        setCategory('roads');
        setDescription('');
        setLocation('');
        setFile(null);
      } else {
        alert(`❌ Submission failed: ${data.message}`);
      }
    } catch (err) {
      alert('❌ Error connecting to server');
    }
  };

  return (
    <>
      <Navbar />
      <div className="report-container">
        <h2>Report a Civic Issue</h2>
        <form onSubmit={handleSubmit}>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="roads">Roads</option>
            <option value="sanitation">Sanitation</option>
            <option value="streetlights">Streetlights</option>
            <option value="water">Water Supply</option>
          </select>

          <input
            type="text"
            placeholder="Location (or use GPS)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          <textarea
            placeholder="Describe the issue"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <input
            type="file"
            accept="image/*,video/*"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <button type="submit">Submit Issue</button>
        </form>
      </div>
    </>
  );
}

export default ReportIssue;