
export const getPayloadBookSlot = (answer, question, type, selectedSlotDetails, schedulerDetails)=>{
    const questionsFormed = {};
    questionsFormed.Answer = answer;
    questionsFormed.Question = question;
    questionsFormed.Type = type;
    const formedSlots = {};
    formedSlots.StartTimeText = selectedSlotDetails.timing.test[0].StartTimeText;
    formedSlots.EndTimeText = selectedSlotDetails.timing.test[0].EndTimeText;
    formedSlots.pySelected = selectedSlotDetails.timing.test[0].pySelected;
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