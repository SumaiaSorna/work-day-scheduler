$(document).ready(function () {
  //add the current date to the currentDay id in the HTML

  const currentDate = moment().format("dddd, MMMM Do YYYY, hh:mm a ");
  $("#currentDay").html(currentDate);
});
