//Variable declaration
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

//  //Save data to LS--------------------------------------------------- not functional
const saveSchedule = function () {
  console.log("working"); ///test

  // Creat space in LS
  const containerLS = function () {}; //--- not sure how to do

  //record at LS
  const recordedData = function () {
    const inputtedData = containerLS;
    const inputtedTime = timeBlock.key;
    localStorage.setItem(inputtedData, inputtedTime);
    $(".saveBtn").on("click", recordedData);
  };

  //LS checking at the beginning
  const initialCheckLS = function () {
    const initialState = localStorage.setItem(containerLS);
    if (!initialState) {
      localStorage.setItem(containerLS, JSON.stringify({}));
    }
  };
};

// declare time blocks by key and table creation
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
    <div class="col-1 hour">${timeBlock.label}</div>
    <textarea class="col-10 description past"></textarea>
    <button class="col-1 btn saveBtn" id=${timeBlock.key}>
    <i class="fas fa-save"></i>
    </button>
  </div>`;

    $(`#${timeBlock.key}`).on("click", saveSchedule());
    $("#mainContainer").append(schedule);
  };

  timeBlock.map(constructTimeBlock).join("");
};

renderTimeBlocks();

// loop to change present and future---....................................................... not working
const notCurrent = function () {
  for (timeBlock.key = 9; timeBlock.key < 18; timeBlock.key++)
    var blockColour = $("#" + timeBlock.key);
  if (currentHr == timeBlock.key) {
    $("textarea").append("present");
  } else if (currentHr < timeBlock.key) {
    $("textarea").append("future");
  }
};

// add load listener
$(document).ready(function () {
  getCurrentDate();
  notCurrent();
  // render current date
  const formattedDate = getCurrentDate();
});
