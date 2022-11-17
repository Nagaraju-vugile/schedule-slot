export const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  export const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
  ];

  export const urls = (id, type, formattedDate, action)=>{
    if(action === "getAvailabilities"){
        return `https://bluerosetech01.pegalabs.io/prweb/api/v1/data/D_GetSchedules?EmailID=${id||""}&ScheduleType=${type || ""}&StartDate=${formattedDate}&LimitRange=5`;
    } else if(action === "getSchedulerTypes"){
        return `https://bluerosetech01.pegalabs.io/prweb/api/v1/data/D_GetSchedulerTypeList`;
    } else if(action === "postBookSlot"){
        return `https://bluerosetech01.pegalabs.io/prweb/api/Scheduler/v1/bookslots`
    }
  }