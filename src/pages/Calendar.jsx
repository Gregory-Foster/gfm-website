import React from "react";

const Calendar = () => {
  const events = [
    {
      dayShort: "SUN",
      title: "Sunday Worship Service",
      time: "10:00 AM",
      description:
        "Join us for our weekly worship service with inspiring music, practical teaching, and a welcoming atmosphere.",
    },
    {
      dayShort: "TUE",
      title: "Bible Study",
      time: "6:00 PM",
      description:
        "Come be refreshed at our Tuesday Night Bible Study as we explore scripture together, ask questions, and apply God's Word to daily life.",
    },
    {
      dayShort: "FRI",
      title: "Youth Group",
      time: "6:00 PM",
      description:
        "A positive, faith-centered environment where youth come together for encouragement, friendship, and spiritual growth through engaging lessons and activities.",
    },
    {
      dayShort: "FRI",
      title: "Teen Group",
      time: "6:00 PM",
      description:
        "A fun, faith-filled gathering designed to help teens build strong relationships, grow spiritually, and discover their God-given purpose through interactive discussions and activities.",
    },
  ];

  return (
    <div className="calendar-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title heading-font">Calendar</h1>
          <p className="page-subtitle body-font">
            Stay connected with our upcoming events and gatherings.
          </p>
        </div>

        <div className="events-grid">
          {events.map((event, index) => (
            <div key={index} className="event-card card">
              <div className="event-date">
                <span className="date-day">{event.dayShort}</span>
                <span className="date-month">WEEKLY</span>
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
        }

        .container {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 16px;
        }

        .page-header {
          text-align: left;
          margin-bottom: 32px;
        }

        .events-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .event-card {
          display: flex;
          align-items: center;
          padding: 20px 24px;
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
        }

        .event-date {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 72px;
          height: 72px;
          border-radius: 16px;
          background: #00a6d6;
          color: #ffffff;
          font-weight: 700;
          margin-right: 24px;
          text-transform: uppercase;
        }

        .date-day {
          font-size: 18px;
          letter-spacing: 0.08em;
        }

        .date-month {
          font-size: 11px;
          opacity: 0.9;
        }

        .event-title {
          margin: 0;
          font-size: 18px;
        }

        .event-time {
          margin: 4px 0 8px;
          font-weight: 600;
          color: #0077aa;
        }

        .event-description {
          margin: 0;
        }

        @media (max-width: 600px) {
          .event-card {
            flex-direction: column;
            align-items: flex-start;
          }

          .event-date {
            margin-bottom: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default Calendar;
