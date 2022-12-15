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

  export const url_sub_paths = {
    secheduler:"scheduler",
    rescheduler: "re-schedule",
    questions: "questions",
    cancel: "cancel",
    bookings: "my-bookings",
    profile: "profile",
    schedulersList: "schedulers-list",
    login: "login",
    type: "Type"
  }

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

  export const messages = {
    buttons: {
      home: "Home",
      settings: "My account",
      profile: "Profile",
      signIn: "Sign in",
      signOut: "Sign out",
      findSlots: "Find slots",
      clearSelection: "Clear selection",
      selectId: "Select id",
      selectType: "Select type",
      book: "Book",
      back: "Back",
      rescheduler: "Reschedule",
      cancel: "Cancel",
      more: "MORE",
      less: "LESS",
      reschedule: "Reschedule",
      cancelSlot: "Cancel slot",
      yesCancel: "Yes, cancel",
      dontCancel: "Dont cancel",
      prev: "Prev",
      next: "Next",
    },
    nav: {
      scheduler: "Scheduler",
      myBookigs: "My bookings",
    },
    errorMessages: {
      noSchedulers: "No scheduler types found",
      noBookings: "No bookings found",
      noSlots: "No slots found",
      noSchedules: "No schedules found",
    },
    confirmationMessages: {
      confirmCancelHeader: "Are you sure you want to cancel the slot?",
      confirmCancelBody:
        "Please confirm that you wish to cancel this event. A cancellation email will be sent out to you and invitee.",
      cancelConfirmMessage: "Why would you like to cancel the slot?",
      confirmDetails: "Please confirm the details",
    },
    successMessages: {
      bookSlotConfirm:
        "A calender invite with scheduled details has been forwarded to your email address.",
      confirmed: "Confirmed!",
      cancelSlotConfirm:
        "A cancellation email has been sent to you and your invitee.",
    },
    labels: {
      schedulerInformation: "Scheduled information",
      email: "Email",
      fullName: "Full name",
      scheduledType: "Scheduled type",
      scheduledSlot: "Scheduled slot",
      scheduledDate: "Scheduled date",
      showAvailablesSlots: "Show available slots",
      showAvailableBookings: "Available bookings",
      loading: "Loading..",
      type: "Type",
      startTime: "Start time",
      endTime: "End time",
      action: "Action",
      selectedDate: "Selected date",
      selectedTime: "Selected time",
      selectedType: "Selected type",
      profileInfoHeader: " Personal information",
      address: "Location",
      medium: "Medium",
      id: "Id",
      previousDate: "Previous date",
      previousTime: "Previous time",
      previousType: "Previous type",
      yes: "Yes",
      no: "No",
    },
    cookiesContentMessage:
      "This website uses cookies to enhance the user experience.",
    placeholder: {
      findById: "Find by id",
      findByType: "Find by type",
    },
  };