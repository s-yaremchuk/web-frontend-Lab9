import styles from './TrainCard.module.css';

const formatDateTime = (dateString) => {
  const date = new Date(dateString);
  const dateFormatted = new Intl.DateTimeFormat('uk-UA', {
    day: 'numeric',
    month: 'long',
  }).format(date);
  const timeFormatted = new Intl.DateTimeFormat('uk-UA', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
  return { date: dateFormatted, time: timeFormatted };
};

function TrainCard({ train, index }) {
  const departure = formatDateTime(train.departure);
  const arrival = formatDateTime(train.arrival);

  const seatsClass =
    train.availableSeats <= 15
      ? styles.seatsLow
      : train.availableSeats <= 30
        ? styles.seatsMedium
        : styles.seatsHigh;

  return (
    <div 
      className={`${styles.card} animateFadeInUp`}
      style={{ animationDelay: `${index * 0.05}s`, opacity: 0 }}
    >
      <div className={styles.cardHeader}>
        <span className={styles.trainNumber}>🚆 {train.number}</span>
        <span className={styles.duration}>🕐 {train.duration}</span>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.route}>
          <div className={styles.routePoint}>
            <span className={styles.time}>{departure.time}</span>
            <span className={styles.city}>{train.from}</span>
            <span className={styles.date}>{departure.date}</span>
          </div>
          <div className={styles.routeArrow}>
            <span className={styles.arrowLine}></span>
            <span className={styles.arrowIcon}>→</span>
            <span className={styles.arrowLine}></span>
          </div>
          <div className={styles.routePoint}>
            <span className={styles.time}>{arrival.time}</span>
            <span className={styles.city}>{train.to}</span>
            <span className={styles.date}>{arrival.date}</span>
          </div>
        </div>

        <div className={styles.types}>
          {train.types.map((type) => (
            <span key={type} className={styles.badge}>
              {type}
            </span>
          ))}
        </div>

        <div className={styles.cardFooter}>
          <div className={styles.price}>
            <span className={styles.priceLabel}>від</span>
            <span className={styles.priceValue}>₴ {train.priceFrom}</span>
          </div>
          <div className={`${styles.seats} ${seatsClass}`}>
            <span className={styles.seatsCount}>{train.availableSeats}</span>
            <span className={styles.seatsLabel}>місць</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainCard;
