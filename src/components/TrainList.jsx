import TrainCard from './TrainCard';
import styles from './TrainList.module.css';

function TrainList({ trains }) {
  if (!trains || trains.length === 0) {
    return (
      <div className={styles.emptyMessage}>
        <span className={styles.emptyIcon}>🔍</span>
        <h3>Потягів не знайдено</h3>
        <p>Спробуйте змінити параметри пошуку</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {trains.map((train) => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  );
}

export default TrainList;
