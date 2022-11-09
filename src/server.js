const express = require('express');
const app = express();
const cors =require("cors");
const port = 8080;

app.get('/availabilities', cors(), (req, res) => {
  const appointments = {
    "2022-10-20T08:13:30.864Z": {
      timings: ["5:56", "2:40"]
    },
    "2022-10-21T08:13:30.864Z": {
      timings: ["11:20", "03:40"]
    },
    "2022-10-22T08:13:30.864Z": {
      timings: []
    },
    "2022-10-23T08:13:30.864Z": {
      timings: ["1:20", "2:40", "4:40", "5:50", "6:30", "6:45", "7:30", "7:45", "8:00", "8:20"]
    },
    "2022-10-24T08:13:30.864Z": {
      timings: ["2:40", "4: 40", "5: 50"]
    },
    "2022-10-25T08:13:30.864Z": {
      timings: []
    },
    "2022-10-26T08:13:30.864Z": {
      timings: []
    },
    "2022-10-27T08:13:30.864Z": {
      timings: ["2:40", "4: 40", "5: 50"]
    },
    "2022-10-28T08:13:30.864Z": {
      timings: []
    },
    "2022-10-29T08:13:30.864Z": {
      timings: ["2:40", "4: 40", "5: 50", "6:50"]
    },
    "2022-10-30T08:13:30.864Z": {
      timings: ["3:44", "4: 50", "5: 58"]
    },
     "2022-10-31T08:12:30.864Z": {
      timings: ["3:44", "4: 50", "5: 58"]
    },
    "2022-11-01T08:13:30.864Z": {
      timings: ["2:40", "4: 40", "5: 50"]
    },
    "2022-11-02T08:13:30.864Z": {
      timings: []
    },
    "2022-11-03T08:13:30.864Z": {
      timings: ["2:40", "4: 40", "5: 50", "6:50"]
    },
    "2022-11-04T08:13:30.864Z": {
      timings: ["3:44", "4: 50", "5: 58"]
    },
    "2022-11-05T08:13:30.864Z": {
      timings: ["3:44", "4: 50", "5: 58"]
    },
    "2022-11-06T08:13:30.864Z": {
      timings: ["3:44", "4: 50", "5: 58"]
    },
    "2022-11-07T08:13:30.864Z": {
      timings: ["2:40", "4: 40", "5: 50", "6:50"]
    },
    "2022-11-08T08:13:30.864Z": {
      timings: ["3:44", "4: 50", "5: 58"]
    },
    "2022-11-09T08:13:30.864Z": {
      timings: ["3:44", "4: 50", "5: 58"]
    },
    "2022-11-10T08:13:30.864Z": {
      timings: ["3:44", "4: 50", "5: 58"]
    },
    "2022-11-11T08:13:30.864Z": {
      timings: ["3:44", "4: 50", "5: 58"]
    },
    "2022-11-12T08:13:30.864Z": {
      timings: ["2:40", "4: 40", "5: 50", "6:50"]
    },
    "2022-11-13T08:13:30.864Z": {
      timings: ["3:44", "4: 50", "5: 58"]
    },
    "2022-11-14T08:13:30.864Z": {
      timings: ["3:44", "4: 50", "5: 58"]
    },
    "2022-11-15T08:13:30.864Z": {
      timings: ["3:44", "4: 50", "5: 58"]
    }
  };
    // var newDate= nextDays(req.query.id, 3);
    res.send({data:appointments});
  });

  app.get('/availabilities-new', cors(), (req, res) => {
    const appointments = {
      
        "pxObjClass": "Work-Appointment-ScheduleAppointment",
        "pzLoadTime": "October 27, 2022 5:11:24 AM EDT",
        "pzPageNameHash": "_pa5211130219373482pz",
        "SchedulerList": [
          {
            "pxObjClass": "Work-Appointment-ScheduleAppointment",
            "SchedulerDetails": {
              "pxObjClass": "Scheduler-Data-Party-SchedulerDetails",
              "pyEmail": "chandanpalamakula@gmail.com",
              "pyFullName": "chandan palamakula",
              "pyGUID": "011b979d-6482-4143-b589-a9ba0a60d369",
              "Address": {
                "pxObjClass": "Scheduler-Data-Address",
                "Type": "Virtual",
                "VirtualMedium": "webex"
              },
              "Credentials": {
                "pxObjClass": "Scheduler-Data-Credential",
                "TagList": [
                  
                ]
              },
              "Questions": [
                {
                  "Answer": " ",
                  "pxObjClass": "Scheduler-Data-Question",
                  "Question": "How best we can leverage pega functionalities?",
                  "Type": "Text"
                },
                {
                  "Answer": " ",
                  "pxObjClass": "Scheduler-Data-Question",
                  "Question": "what is the future scope of SAP?",
                  "Type": "text"
                }
              ],
              "Schedules": [
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Friday",
                  "ScheduledDate": "2022-10-25",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Friday",
                  "ScheduledDate": "2022-10-28",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Monday",
                  "ScheduledDate": "2022-10-31",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                
               
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Friday",
                  "ScheduledDate": "2022-11-01",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Friday",
                  "ScheduledDate": "2022-11-02",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Friday",
                  "ScheduledDate": "2022-11-03",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Friday",
                  "ScheduledDate": "2022-11-04",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Friday",
                  "ScheduledDate": "2022-11-05",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Friday",
                  "ScheduledDate": "2022-11-06",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Monday",
                  "ScheduledDate": "2022-11-07",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Wednesday",
                  "ScheduledDate": "2022-11-08",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    },
                    {
                      "EndTime": "14:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "14:00:00.000Z"
                    },
                    {
                      "EndTime": "15:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "14:30:00.000Z"
                    },
                    {
                      "EndTime": "15:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "15:00:00.000Z"
                    },
                    {
                      "EndTime": "16:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "15:30:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Wednesday",
                  "ScheduledDate": "2022-11-09",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    },
                    {
                      "EndTime": "14:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "14:00:00.000Z"
                    },
                    {
                      "EndTime": "15:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "14:30:00.000Z"
                    },
                    {
                      "EndTime": "15:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "15:00:00.000Z"
                    },
                    {
                      "EndTime": "16:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "15:30:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Wednesday",
                  "ScheduledDate": "2022-11-10",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    },
                    {
                      "EndTime": "14:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "14:00:00.000Z"
                    },
                    {
                      "EndTime": "15:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "14:30:00.000Z"
                    },
                    {
                      "EndTime": "15:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "15:00:00.000Z"
                    },
                    {
                      "EndTime": "16:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "15:30:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Friday",
                  "ScheduledDate": "2022-11-11",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Wednesday",
                  "ScheduledDate": "2022-11-12",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    },
                    {
                      "EndTime": "14:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "14:00:00.000Z"
                    },
                    {
                      "EndTime": "15:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "14:30:00.000Z"
                    },
                    {
                      "EndTime": "15:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "15:00:00.000Z"
                    },
                    {
                      "EndTime": "16:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "15:30:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Wednesday",
                  "ScheduledDate": "2022-11-13",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    },
                    {
                      "EndTime": "14:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "14:00:00.000Z"
                    },
                    {
                      "EndTime": "15:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "14:30:00.000Z"
                    },
                    {
                      "EndTime": "15:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "15:00:00.000Z"
                    },
                    {
                      "EndTime": "16:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "15:30:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Monday",
                  "ScheduledDate": "2022-11-14",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Monday",
                  "ScheduledDate": "2022-11-15",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Wednesday",
                  "ScheduledDate": "2022-11-16",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    },
                    {
                      "EndTime": "14:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "14:00:00.000Z"
                    },
                    {
                      "EndTime": "15:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "14:30:00.000Z"
                    },
                    {
                      "EndTime": "15:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "15:00:00.000Z"
                    },
                    {
                      "EndTime": "16:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "15:30:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Monday",
                  "ScheduledDate": "2022-11-17",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Friday",
                  "ScheduledDate": "2022-11-18",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Monday",
                  "ScheduledDate": "2022-11-19",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Monday",
                  "ScheduledDate": "2022-11-20",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Monday",
                  "ScheduledDate": "2022-11-21",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Monday",
                  "ScheduledDate": "2022-11-22",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Wednesday",
                  "ScheduledDate": "2022-11-23",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    },
                    {
                      "EndTime": "14:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "14:00:00.000Z"
                    },
                    {
                      "EndTime": "15:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "14:30:00.000Z"
                    },
                    {
                      "EndTime": "15:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "15:00:00.000Z"
                    },
                    {
                      "EndTime": "16:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "15:30:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Wednesday",
                  "ScheduledDate": "2022-11-24",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    },
                    {
                      "EndTime": "14:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "14:00:00.000Z"
                    },
                    {
                      "EndTime": "15:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "14:30:00.000Z"
                    },
                    {
                      "EndTime": "15:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "15:00:00.000Z"
                    },
                    {
                      "EndTime": "16:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "15:30:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Friday",
                  "ScheduledDate": "2022-11-25",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Friday",
                  "ScheduledDate": "2022-11-26",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Friday",
                  "ScheduledDate": "2022-11-27",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Friday",
                  "ScheduledDate": "2022-11-28",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Friday",
                  "ScheduledDate": "2022-11-29",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-11-25",
                  "Location": "webex",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Friday",
                  "ScheduledDate": "2022-11-30",
                  "StartDate": "2022-10-27",
                  "TemplateRefId": "Pega",
                  "Type": "Pega Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-12-15",
                  "Location": "Zoom Meet",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Saturday",
                  "ScheduledDate": "2022-12-01",
                  "StartDate": "2022-12-01",
                  "TemplateRefId": "SAP",
                  "Type": "SAP Meet",
                  "Slots": [
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-12-15",
                  "Location": "Zoom Meet",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Saturday",
                  "ScheduledDate": "2022-12-02",
                  "StartDate": "2022-12-01",
                  "TemplateRefId": "SAP",
                  "Type": "SAP Meet",
                  "Slots": [
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-12-15",
                  "Location": "Zoom Meet",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Saturday",
                  "ScheduledDate": "2022-12-03",
                  "StartDate": "2022-12-01",
                  "TemplateRefId": "SAP",
                  "Type": "SAP Meet",
                  "Slots": [
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-12-15",
                  "Location": "Zoom Meet",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Sunday",
                  "ScheduledDate": "2022-12-04",
                  "StartDate": "2022-12-01",
                  "TemplateRefId": "SAP",
                  "Type": "SAP Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    },
                    {
                      "EndTime": "14:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "14:00:00.000Z"
                    },
                    {
                      "EndTime": "15:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "14:30:00.000Z"
                    },
                    {
                      "EndTime": "15:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "15:00:00.000Z"
                    },
                    {
                      "EndTime": "16:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "15:30:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-12-15",
                  "Location": "Zoom Meet",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Saturday",
                  "ScheduledDate": "2022-12-05",
                  "StartDate": "2022-12-01",
                  "TemplateRefId": "SAP",
                  "Type": "SAP Meet",
                  "Slots": [
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-12-15",
                  "Location": "Zoom Meet",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Saturday",
                  "ScheduledDate": "2022-12-06",
                  "StartDate": "2022-12-01",
                  "TemplateRefId": "SAP",
                  "Type": "SAP Meet",
                  "Slots": [
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-12-15",
                  "Location": "Zoom Meet",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Saturday",
                  "ScheduledDate": "2022-12-07",
                  "StartDate": "2022-12-01",
                  "TemplateRefId": "SAP",
                  "Type": "SAP Meet",
                  "Slots": [
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-12-15",
                  "Location": "Zoom Meet",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Saturday",
                  "ScheduledDate": "2022-12-08",
                  "StartDate": "2022-12-01",
                  "TemplateRefId": "SAP",
                  "Type": "SAP Meet",
                  "Slots": [
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-12-15",
                  "Location": "Zoom Meet",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Saturday",
                  "ScheduledDate": "2022-12-09",
                  "StartDate": "2022-12-01",
                  "TemplateRefId": "SAP",
                  "Type": "SAP Meet",
                  "Slots": [
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-12-15",
                  "Location": "Zoom Meet",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Saturday",
                  "ScheduledDate": "2022-12-10",
                  "StartDate": "2022-12-01",
                  "TemplateRefId": "SAP",
                  "Type": "SAP Meet",
                  "Slots": [
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-12-15",
                  "Location": "Zoom Meet",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Sunday",
                  "ScheduledDate": "2022-12-11",
                  "StartDate": "2022-12-01",
                  "TemplateRefId": "SAP",
                  "Type": "SAP Meet",
                  "Slots": [
                    {
                      "EndTime": "10:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "09:30:00.000Z"
                    },
                    {
                      "EndTime": "10:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:00:00.000Z"
                    },
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    },
                    {
                      "EndTime": "14:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "14:00:00.000Z"
                    },
                    {
                      "EndTime": "15:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "14:30:00.000Z"
                    },
                    {
                      "EndTime": "15:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "15:00:00.000Z"
                    },
                    {
                      "EndTime": "16:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "15:30:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-12-15",
                  "Location": "Zoom Meet",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Saturday",
                  "ScheduledDate": "2022-12-12",
                  "StartDate": "2022-12-01",
                  "TemplateRefId": "SAP",
                  "Type": "SAP Meet",
                  "Slots": [
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-12-15",
                  "Location": "Zoom Meet",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Saturday",
                  "ScheduledDate": "2022-12-13",
                  "StartDate": "2022-12-01",
                  "TemplateRefId": "SAP",
                  "Type": "SAP Meet",
                  "Slots": [
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30:00.000Z"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
                {
                  "Duration": "30",
                  "EndDate": "2022-12-15",
                  "Location": "Zoom Meet",
                  "pxObjClass": "Scheduler-Data-Schedule",
                  "pyLabel": "Saturday",
                  "ScheduledDate": "2022-12-14",
                  "StartDate": "2022-12-01",
                  "TemplateRefId": "SAP",
                  "Type": "SAP Meet",
                  "Slots": [
                    {
                      "EndTime": "11:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "10:30"
                    },
                    {
                      "EndTime": "11:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:00:00.000Z"
                    },
                    {
                      "EndTime": "12:00:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "11:30:00.000Z"
                    },
                    {
                      "EndTime": "12:30:00.000Z",
                      "pxObjClass": "Scheduler-Data-Slot",
                      "pySelected": "false",
                      "StartTime": "12:00:00.000Z"
                    }
                  ]
                },
              ]
            }
          }
        ]
    }
      res.send({data:appointments});
    });

app.use(cors({origin: "*",
methods: ["GET", "POST", "PATHC", "DELETE", "PUT", "UPDATE"]}));

app.listen(port, ()=>{
    console.log("server running at", port)
})