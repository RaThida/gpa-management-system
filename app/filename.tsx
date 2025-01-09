import { useState, useEffect } from 'react';

const FileName = () => {
  const [serverTime, setServerTime] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getServerTime'); // Replace with your actual API endpoint
        const data = await response.json();
        setServerTime(data.serverTime);
      } catch (error) {
        console.error('Error fetching server time:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Server Time: {serverTime || 'Loading...'}</h1>
    </div>
  );
};

export default FileName;