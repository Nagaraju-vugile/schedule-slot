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
    if (action === "getAvailabilities") {
      return `https://bluerosetech01.pegalabs.io/prweb/api/v1/data/D_GetSchedules?EmailID=${
        id || ""
      }&ScheduleType=${type || ""}&StartDate=${formattedDate}&LimitRange=5&GuestTimeZone=IST`;
    } else if (action === "getSchedulerTypes") {
      return `https://bluerosetech01.pegalabs.io/prweb/api/v1/data/D_GetSchedulerTypeList`;
    } else if (action === 1) {
      return `https://bluerosetech01.pegalabs.io/prweb/api/Scheduler/v1/bookslots`;
    } else if (action === 2) {
      return `https://bluerosetech01.pegalabs.io/prweb/api/Scheduler/v1/rescheduleslots`;
    } else if (action === "cancelSlot") {
      return `https://bluerosetech01.pegalabs.io/prweb/api/Scheduler/v1/cancelslots`;
    } 
    else if (action === "getMyBookings") {
      return `https://bluerosetech01.pegalabs.io/prweb/api/v1/data/D_GetBookedSlotsForUser?ReferenceID=${id}`;
    }  
  }