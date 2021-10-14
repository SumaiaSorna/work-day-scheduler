//START1
const dateText = $("#currentDay");
const timeText = $("#currentTime");
const timeBlockContainer = $(".container"); // change
const currentHour = moment().hour(); // change

// use moment to get current date & time in format & real time update
const getCurrentDate = function () {
  const timer = function () {
    const date_Time = moment();
    const dateTime_Formatted = date_Time.format(
      "dddd, MMMM Do YYYY, hh:mm:ss a "
    );

    dateText.text(dateTime_Formatted);
  };
  timer();
  setInterval(timer, 1000); // real time update
};

// target element and set text with date
const renderCurrentDate = function () {};

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
    {
      key: 10,
      label: "10:00",
    },
    {
      key: 11,
      label: "11:00",
    },
    {
      key: 12,
      label: "12:00",
    },
    {
      key: 13,
      label: "13:00",
    },
    {
      key: 14,
      label: "14:00",
    },
    {
      key: 15,
      label: "15:00",
    },
    {
      key: 16,
      label: "16:00",
    },
    {
      key: 17,
      label: "17:00",
    },
  ];
  console.log(timeBlockLabels);

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
  getCurrentDate();
  // render current date
  const formattedDate = getCurrentDate();
  renderCurrentDate(formattedDate);

  // render time blocks
  renderTimeBlocks();
};

// add load listener
$(document).ready(onLoad);
