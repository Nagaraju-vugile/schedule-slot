
export const getPayloadBookSlot = (answer, question, type, selectedSlotDetails, schedulerDetails)=>{
    const questionsFormed = {};
    questionsFormed.Answer = answer;
    questionsFormed.Question = question;
    questionsFormed.Type = type;
    const formedSlots = {};
    formedSlots.StartTimeText = selectedSlotDetails.timing.updatePySelected[0].StartTimeText;
    formedSlots.EndTimeText = selectedSlotDetails.timing.updatePySelected[0].EndTimeText;
    formedSlots.pySelected = selectedSlotDetails.timing.updatePySelected[0].pySelected;
    formedSlots.pyUserIdentifier = "";
    const SchedulesFormed = {};
    SchedulesFormed.pyLabel = selectedSlotDetails.timing.pyLabel;
    SchedulesFormed.ScheduledDate = selectedSlotDetails.timing.ScheduledDate;
    SchedulesFormed.TemplateRefId = selectedSlotDetails.timing.TemplateRefId;
    SchedulesFormed.Type = selectedSlotDetails.timing.Type;
    SchedulesFormed.Slots = [formedSlots];
    const formedSchedulerDetails = {};
    formedSchedulerDetails.pyEmail = schedulerDetails.pyEmail;
    formedSchedulerDetails.pyFullName = schedulerDetails.pyFullName;
    formedSchedulerDetails.pyGUID = schedulerDetails.pyGUID;
    formedSchedulerDetails.Address = schedulerDetails.Address;
    formedSchedulerDetails.Credentials = schedulerDetails.Credentials;
    formedSchedulerDetails.Questions = [questionsFormed];
    formedSchedulerDetails.Schedules = [SchedulesFormed];
    const payload = {SchedulerList: [{SchedulerDetails:formedSchedulerDetails}]};
    return payload;
}

export const getPayloadBookRescheduler = (answer, question, type, selectedSlotDetails, schedulerDetails, guid, user)=>{
  const questionsFormed = {};
  questionsFormed.Answer = answer;
  questionsFormed.Question = question;
  questionsFormed.Type = type;
  const formedSlots = {};
  formedSlots.StartTimeText = selectedSlotDetails.timing.updatePySelected[0].StartTimeText;
  formedSlots.EndTimeText = selectedSlotDetails.timing.updatePySelected[0].EndTimeText;
  formedSlots.pySelected = selectedSlotDetails.timing.updatePySelected[0].pySelected;
  formedSlots.pyUserIdentifier = "";
  formedSlots.CancelKey = guid;
  const SchedulesFormed = {};
  SchedulesFormed.pyLabel = selectedSlotDetails.timing.pyLabel;
  SchedulesFormed.ScheduledDate = selectedSlotDetails.timing.ScheduledDate;
  SchedulesFormed.TemplateRefId = selectedSlotDetails.timing.TemplateRefId;
  SchedulesFormed.Type = selectedSlotDetails.timing.Type;
  SchedulesFormed.Slots = [formedSlots];
  const formedSchedulerDetails = {};
  formedSchedulerDetails.pyEmail = schedulerDetails.pyEmail;
  formedSchedulerDetails.pyFullName = schedulerDetails.pyFullName;
  formedSchedulerDetails.pyGUID = schedulerDetails.pyGUID;
  formedSchedulerDetails.Address = schedulerDetails.Address;
  formedSchedulerDetails.Credentials = schedulerDetails.Credentials;
  formedSchedulerDetails.Questions = [questionsFormed];
  formedSchedulerDetails.Schedules = [SchedulesFormed];
  const payload = {SchedulerList: [{SchedulerDetails:formedSchedulerDetails}]};
  return payload;
}

export const getMaxLength = (appointments) => {
  return appointments?.reduce((acc, value) => {
    return (acc = acc > value?.Slots?.length ? acc : value.Slots.length);
  }, 0);
};

export const nextDays = (date, days)=>{
    return new Date(new Date(date).getTime()+days * 24*60*60*1000);
  };

 export const prevDays = (date, days)=>{
    return new Date(new Date(date).getTime()-days * 24*60*60*1000);
  };  

  export const getUnique = (arr, comp) => {
    // store the comparison  values in array
    const unique = arr
      .map((e) => e[comp])

      // store the indexes of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the false indexes & return unique objects
      .filter((e) => arr[e])
      .map((e) => arr[e]);

    return unique;
  };