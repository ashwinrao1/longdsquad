// components/Calendar.js
import React from 'react';

function Calendar() {
  return (
    <section id="calendar">
      <h2>Our Calendar</h2>
      <div className="calendar-container">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=c_cb55216cf4870ff11e5ef899c0fea76e2ff4a1a0f798c52eaa2f4af3ec5298a3%40group.calendar.google.com&ctz=America%2FChicago"
          title="Google Calendar"
        ></iframe>
      </div>
    </section>
  );
}

export default Calendar;