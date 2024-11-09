const isProduction = window.location.hostname !== 'localhost'; // Check if it's not localhost

export const baseURL = isProduction 
  ? 'https://portfoliobackend.onrender.com'   // Deployed URL
  : 'http://localhost:4000';  