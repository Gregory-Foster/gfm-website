// src/pages/Schedule.jsx
import React from "react";

const Schedule = () => {
  return (
    <main className="page schedule-page">
      <section className="section">
        <h1>Schedule a Call</h1>
        <p>
          Choose a time that works for you to connect with Gregory Foster for
          prayer, counseling, or leadership coaching.
        </p>

        {/* TidyCal embed goes here */}
        <div style={{ height: "800px", border: "none" }}>
          <iframe
            src="https://tidycal.com/gregory-foster"
            title="Schedule with Gregory Foster"
            style={{ width: "100%", height: "100%", border: "none" }}
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
};

export default Schedule;
