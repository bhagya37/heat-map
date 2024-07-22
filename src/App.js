import React from 'react';
import GithubHeatmap from './GithubHeatmap';
import { subDays, format } from 'date-fns';

function App() {
  const today = new Date();
  const data = Array.from({ length: 365 }).map((_, index) => {
    const date = subDays(today, index);
    return {
      date: format(date, 'yyyy-MM-dd'),
      count: Math.floor(Math.random() * 5), // Random data for demonstration
      hours: Math.floor(Math.random() * 24) // Random hours for demonstration
    };
  });

  return (
    <div className="App">
      <GithubHeatmap data={data} />
    </div>
  );
}

export default App;


