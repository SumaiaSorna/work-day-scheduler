// $(document).ready(function () {
//   //add the current date to the currentDay id in the HTML
//   const currentDate = moment().format("dddd, MMMM Do YYYY, hh:mm:ss a ");
//   $("#currentDay").html(currentDate);

//create html timeblocks with for loop starting at 9 am until 5pm
// });

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

const getCurrentDate = function () {
  // use moment to get current date in format
  // return formatted date
};

const renderCurrentDate = function (date) {
  // target element and set text with date
};

const getClassName = function () {
  return "past";
};

const getDataFromLS = function () {
  // get from LS by key
  // if it does not exist return {}
  // else return data
};

const renderTimeBlocks = function () {
  // declare time blocks
  const timeBlockLabels = [
    {
      key: 9,
      label: "09:00",
    },
  ];

  const constructTimeBlock = function (timeBlock) {
    // get the label for the time block 09:00
    const label = timeBlock.label;

    // get className for the specific time block
    const className = getClassName();

    // get text from LS for the specific time block
    const planner = getDataFromLS();

    // check if planner has text for the specific time block
    // if yes then use the as the text else empty string

    // construct your time block element in HTML

    // return constructed time block element
  };

  timeBlockLabels.map(constructTimeBlock).join("");

  // append HTML to parent
};

// function to call when document loads
const onLoad = function () {
  // render current date
  const formattedDate = getCurrentDate();
  renderCurrentDate(formattedDate);

  // render time blocks
  renderTimeBlocks();
};

// add load listener
$(document).ready(onLoad);
