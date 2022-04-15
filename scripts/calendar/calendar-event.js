
$(document).ready(function () {
  $("#calendar").evoCalendar({
    calendarEvents: [
      {
        id: 'bHay68s', // Event's ID (required)
        name: "New Year", // Event name (required)
        date: "April/13/2022", // Event date (required)
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },
      {
        id: "yh3kw27",
        name: "Vacation Leave",
        badge: "02/13 - 02/15", // Event badge (optional)
        date: ["April/14/2022", "April/15/2022"], // Date range
        description: "Vacation leave for 3 days.", // Event description (optional)
        type: "event",
        color: "#63d867" // Event custom color (optional)
      }
    ]
  })
})

