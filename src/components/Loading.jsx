// import React from 'react';

// const Loading = () => {
//   return (
//     <div style={styles.container}>
//       <div style={styles.spinner}></div>
//       <p>Loading...</p>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100vh',
//   },
//   spinner: {
//     border: '4px solid rgba(0, 0, 0, 0.1)',
//     width: '36px',
//     height: '36px',
//     borderRadius: '50%',
//     borderLeftColor: '#09f',
//     animation: 'spin 1s linear infinite',
//   },
// };

// export default Loading;

import { useEffect, useState } from "react";

const Loading = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div style={{
      display: "flex", justifyContent: "center", alignItems: "center",
      height: "100vh", fontSize: "20px", fontWeight: "bold"
    }}>
      Loading...
    </div>
  ) : (
    children
  );
};

export default Loading;
