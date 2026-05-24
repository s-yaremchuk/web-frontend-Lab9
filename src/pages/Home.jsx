import { useState } from 'react';
import { trains } from '../data/trains';
import SearchBar from '../components/SearchBar';
import TrainList from '../components/TrainList';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTrains = trains.filter((train) => {
    const query = searchQuery.toLowerCase();
    return (
      train.from.toLowerCase().includes(query) ||
      train.to.toLowerCase().includes(query) ||
      train.number.toLowerCase().includes(query)
    );
  });

  return (
    <div>
      <h1>Укрзалізниця</h1>
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Місто відправлення, прибуття або номер потяга..."
      />
      <TrainList trains={filteredTrains} />
    </div>
  );
}

export default Home;
