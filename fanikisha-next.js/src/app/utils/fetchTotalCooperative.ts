export const fetchTotalCooperative = async () => {
    try {
      const response = await fetch('/api/cooperative', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Fetch error:', error); 
      throw new Error('Failed to fetch data');
    }
  };
  