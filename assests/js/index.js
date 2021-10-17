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
  setInterval(timer, 1000);
};

//Save data to LS
const saveSchedule = function (event) {
  const eventTarget = $(event.target);
  const attr = eventTarget.attr("data-key");
  const textarea = $(`#${attr}`);

  if (eventTarget.is("#saveBtn")) {
    const textValue = textarea.val();
    let data = retrieveData("schedules");

    const schedule = { key: attr, appointment: textValue };
    const text = getItem(data, attr);

    if (text) {
      data.map(function (item, index) {
        if (item.key == attr.toString()) {
          data[index] = schedule;
        }
        return data;
      });
    } else {
      data.push(schedule);
    }

    savesData("schedules", data);
  }
};

const getItem = function (data, key) {
  const itemValue = data.find(function (item) {
    if (item.key == key.toString()) {
      return item;
    }
  });

  return itemValue;
};
const savesData = function (dataKey, data) {
  localStorage.setItem(dataKey, JSON.stringify(data));
};

const retrieveData = function (dataKey) {
  const data = JSON.parse(localStorage.getItem(dataKey)) || [];

  if (data.length > 0) {
    return data;
  } else {
    return [];
  }
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
  const appointmentText = function (text) {
    if (text) {
      return text.appointment;
    } else {
      return "";
    }
  };
  const constructTimeBlock = function (timeBlock) {
    const appointment = getItem(appointments, timeBlock.key);
    let schedule = `<div class="row time-block" id = "timeBlock">
    <div class="col-1 hour">${timeBlock.label}</div>
    <textarea class="col-10 description past" id = ${
      timeBlock.key
    }>${appointmentText(appointment)}</textarea>
    <button class="col-1 btn saveBtn" id="saveBtn" data-key = ${
      timeBlock.key
    } > Save Event</button>
  </div>`;

    $("#mainContainer").append(schedule);
  };
  const appointments = retrieveData("schedules");
  timeBlock.map(constructTimeBlock).join("");
};

renderTimeBlocks();

// loop to change present and future
const notCurrent = function () {
  for (timeBlock.key = 9; timeBlock.key < 18; timeBlock.key++)
    var blockColour = $("#" + timeBlock.key);

  if (currentHr == timeBlock.key) {
    blockColour.append("present");
  } else if (currentHr < timeBlock.key) {
    blockColour.append("future");
  }
};

const initialCheckLS = function () {
  const initialState = retrieveData("schedules") || [];
  if (initialState.length < 1) {
    savesData("schedules", []);
  }
};

// clear local storage
const clearLS = function (event) {
  localStorage.clear();
  window.location.reload();
};

$("#clear-ls").click(clearLS);

// add load listener
$(document).ready(function () {
  getCurrentDate();
  notCurrent();

  initialCheckLS();
  // render current date
  const formattedDate = getCurrentDate();
  timeBlock.on("click", saveSchedule);
});
