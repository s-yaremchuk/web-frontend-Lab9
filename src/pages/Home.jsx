import { useState } from 'react';
import { trains } from '../data/trains';
import SearchBar from '../components/SearchBar';
import TrainList from '../components/TrainList';
import styles from './Home.module.css';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchDate, setSearchDate] = useState('');

  const filteredTrains = trains.filter((train) => {
    const query = searchQuery.toLowerCase();
    const matchesQuery = (
      train.from.toLowerCase().includes(query) ||
      train.to.toLowerCase().includes(query) ||
      train.number.toLowerCase().includes(query)
    );

    if (!searchDate) return matchesQuery;

    // Filter by departure date (YYYY-MM-DD)
    const trainDate = train.departure.split('T')[0];
    return matchesQuery && trainDate === searchDate;
  });

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>🚆</span>
            <h1 className={styles.logoText}>Укрзалізниця</h1>
          </div>
          <p className={styles.subtitle}>Пошук залізничних квитків по Україні</p>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.searchSection}>
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              dateValue={searchDate}
              onDateChange={setSearchDate}
              placeholder="Місто відправлення, прибуття або номер потяга..."
            />
          </div>

          <div className={styles.resultsInfo}>
            <span className={styles.resultsCount}>
              Знайдено потягів: <strong>{filteredTrains.length}</strong>
            </span>
          </div>

          <TrainList trains={filteredTrains} />
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2026 Укрзалізниця — Лабораторна робота 9</p>
      </footer>
    </div>
  );
}

export default Home;
