import TrainCard from './TrainCard';

function TrainList({ trains }) {
  if (!trains || trains.length === 0) {
    return (
      <div className="emptyMessage">
        <span className="emptyIcon">🔍</span>
        <h3>Потягів не знайдено</h3>
        <p>Спробуйте змінити параметри пошуку</p>
      </div>
    );
  }

  return (
    <div className="grid">
      {trains.map((train) => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  );
}

export default TrainList;
