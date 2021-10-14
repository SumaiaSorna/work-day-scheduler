//START1
const dateText = $("#currentDay");
const timeText = $("#currentTime");
const timeBlock = $(".container");
const currentHr = moment().hour();

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

// Define functions for later use
const renderCurrentDate = function () {};
const saveSchedule = function () {};
const getClassName = function () {};

// get from LS by key                            // not done
const getDataFromLS = function () {
  // if it does not exist return {}
  // else return data
};

// declare time blocks by key
const renderTimeBlocks = function () {
  const timeBlock = [
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

  // Table creation
  const constructTimeBlock = function (timeBlock) {
    const schedule = `<div class="row time-block">
    <div class="col-1 hour">${timeBlock.key}</div>
    <textarea class="col-10 description past"></textarea>
    <button class="col-1 btn saveBtn" id=${timeBlock.key}>
    <i class="fas fa-save"></i>
    </button>
  </div>`;

    $(`#${timeBlock.key}`).on("click", saveSchedule());

    $("#maincontainer").append(schedule);
    //console.log(timeBlock); // not required

    // get className for the specific time block
    //const className = getClassName(); // not used yet

    // get text from LS for the specific time block
    //const planner = getDataFromLS();; // not used yet

    // check if planner has text for the specific time block
    // if yes then use the as the text else empty string
  };

  timeBlock.map(constructTimeBlock).join("");
};

// function to call when document loads
const onLoad = function () {
  getCurrentDate(); // not used yet
  // render current date
  const formattedDate = getCurrentDate(); // not used yet
  //renderCurrentDate(formattedDate); // not used yet
  // render time blocks
  renderTimeBlocks(); // not used yet
};

// add load listener
$(document).ready(function () {
  //getCurrentDate(); // not used yet
  // render current date
  const formattedDate = getCurrentDate();
  //renderCurrentDate(formattedDate); // not used yet
  // render time blocks
  renderTimeBlocks();
});
