$(document).ready(function () {
  //add the current date to the currentDay id in the HTML
  const currentDate = moment().format("dddd, MMMM Do YYYY, hh:mm:ss a ");
  $("#currentDay").html(currentDate);

  //create html timeblocks with for loop starting at 9 am until 5pm
});

//making connection left side time and the time on the clock and change the color

// should be linked with box on the right which enable to record data in the local store by time

//Check for local storage to set value to the object
// const timeBlocks = [
//   { hour: "09:00", localStorageKey: 9 },
//   { hour: "10:00", localStorageKey: 9 },
//   { hour: "11:00", localStorageKey: 9 },
//   { hour: "12:00", localStorageKey: 9 },
//   { hour: "13:00", localStorageKey: 9 },
//   { hour: "14:00", localStorageKey: 9 },
//   { hour: "15:00", localStorageKey: 9 },
//   { hour: "16:00", localStorageKey: 9 },
//   { hour: "17:00", localStorageKey: 9 },
// ];

// const construcktTimeBlock = function (timeBlock) {
//   //map through key/value pairs array to construct timeblocks

//   timeBlock.map(construcktTimeBlock);
// };
