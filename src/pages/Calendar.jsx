import React from "react";

const Calendar = () => {
  const events = [
    {
      dayShort: "SUN",
      dayLabel: "Every Sunday",
      title: "Sunday Worship Service",
      time: "10:00 AM",
      description:
        "Join us for our weekly worship service with inspiring music, practical teaching, and a welcoming atmosphere.",
    },
    {
      dayShort: "TUE",
      dayLabel: "Every Tuesday",
      title: "Bible Study",
      time: "6:00 PM",
      description:
        "Come be refreshed at our Tuesday Night Bible Study as we explore scripture together and apply God’s Word to daily life.",
    },
    {
      dayShort: "FRI",
      dayLabel: "Every Friday",
      title: "Youth Group",
      time: "6:00 PM",
      description:
        "A positive, faith-centered environment where youth come together for encouragement, friendship, and spiritual growth.",
    },
    {
      dayShort: "FRI",
      dayLabel: "Every Friday",
      title: "Teen Group",
      time: "6:00 PM",
      description:
        "A fun, faith-filled gathering designed to help teens build strong relationships, grow spiritually, and discover their God-given purpose.",
    },
  ];

  return (
    <div className="calendar-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title heading-font">Calendar</h1>
          <p className="page-subtitle body-font">
            Stay connected with our upcoming events and gatherings
          </p>
        </div>

        <div className="events-grid">
          {events.map((event, index) => (
            <div key={index} className="event-card card">
              <div className="event-date">
                <span className="date-day">
                  {new Date(event.date).getDate()}
                </span>
                <span className="date-month">
                  {new Date(event.date).toLocaleDateString("en-US", {
                    month: "short",
                  })}
                </span>
              </div>
              <div className="event-details">
                <h3 className="event-title heading-font">{event.title}</h3>
                <p className="event-time">{event.time}</p>
                <p className="event-description body-font">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .calendar-page {
          padding: 60px 0;
          min-height: 80vh;
        }

        .page-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .page-title {
          font-size: 2.5rem;
          color: var(--gfm-dark-blue);
          margin-bottom: 15px;
        }

        .page-subtitle {
          font-size: 1.2rem;
          color: var(--gfm-navy);
        }

        .events-grid {
          display: grid;
          gap: 25px;
        }

        .event-card {
          display: flex;
          gap: 25px;
          align-items: center;
        }

        .event-date {
          background-color: var(--gfm-light-blue);
          color: var(--gfm-white);
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          min-width: 80px;
        }

        .date-day {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          line-height: 1;
        }

        .date-month {
          display: block;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .event-details {
          flex: 1;
        }

        .event-title {
          font-size: 1.5rem;
          color: var(--gfm-dark-blue);
          margin-bottom: 8px;
        }

        .event-time {
          color: var(--gfm-light-blue);
          font-weight: 600;
          margin-bottom: 10px;
        }

        .event-description {
          color: var(--gfm-navy);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .event-card {
            flex-direction: column;
            text-align: center;
          }

          .page-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Calendar;
