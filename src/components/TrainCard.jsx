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

function TrainCard({ train }) {
  const departure = formatDateTime(train.departure);
  const arrival = formatDateTime(train.arrival);

  const seatsClass =
    train.availableSeats <= 15
      ? 'seatsLow'
      : train.availableSeats <= 30
        ? 'seatsMedium'
        : 'seatsHigh';

  return (
    <div className="card">
      <div className="cardHeader">
        <span className="trainNumber">🚆 {train.number}</span>
        <span className="duration">🕐 {train.duration}</span>
      </div>

      <div className="cardBody">
        <div className="route">
          <div className="routePoint">
            <span className="time">{departure.time}</span>
            <span className="city">{train.from}</span>
            <span className="date">{departure.date}</span>
          </div>
          <div className="routeArrow">
            <span className="arrowLine"></span>
            <span className="arrowIcon">→</span>
            <span className="arrowLine"></span>
          </div>
          <div className="routePoint">
            <span className="time">{arrival.time}</span>
            <span className="city">{train.to}</span>
            <span className="date">{arrival.date}</span>
          </div>
        </div>

        <div className="types">
          {train.types.map((type) => (
            <span key={type} className="badge">
              {type}
            </span>
          ))}
        </div>

        <div className="cardFooter">
          <div className="price">
            <span className="priceLabel">від</span>
            <span className="priceValue">₴ {train.priceFrom}</span>
          </div>
          <div className={`seats ${seatsClass}`}>
            <span className="seatsCount">{train.availableSeats}</span>
            <span className="seatsLabel">місць</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainCard;
