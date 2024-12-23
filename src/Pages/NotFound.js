export default function NotFound() {
    const styles = {
        container: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
          backgroundColor: "#f8f9fa",
          color: "#333",
          fontFamily: "'Arial', sans-serif",
        },
        errorCode: {
          fontSize: "8rem",
          fontWeight: "bold",
          margin: "0",
          color: "#dc3545",
        },
        message: {
          fontSize: "2.5rem",
          margin: "20px 0",
        },
        description: {
          fontSize: "1.2rem",
          maxWidth: "500px",
          marginBottom: "20px",
          lineHeight: "1.5",
        },
        homeLink: {
          display: "inline-block",
          textDecoration: "none",
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "5px",
          fontSize: "1rem",
          transition: "background-color 0.3s ease",
        },
      };
    return(
<div style={styles.container}>
      <h1 style={styles.errorCode}>404</h1>
      <h2 style={styles.message}>Page Not Found</h2>
      <p style={styles.description}>
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <a href="/" style={styles.homeLink}>Return to Home</a>
    </div>
  );
};
    


 ;