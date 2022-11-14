import { get } from "./api_helper";
// import * as url from "./url_helper";
import { Buffer } from 'buffer';

const headersAuth = 'Basic, username:Chandan_Palamakula password: rules#123';
const base64encodedData = Buffer.from(`Chandan_Palamakula:rules#123`).toString('base64');
//`Basic Chandan_Palamakula:rules#123`

export const getAvailabilities = (formattedDate, formattedNextDate, id, type) => get(`https://bluerosetech01.pegalabs.io/prweb/api/v1/data/D_GetSchedules?EmailID=${id}&ScheduleType=${type}&StartDate=${formattedDate}&LimitRange=5`, {headers: {'Content-Type': 'application/json',Authorization : `Basic ${base64encodedData}`}});

export const getSchedulerTypeDetails = () => get(`https://bluerosetech01.pegalabs.io/prweb/api/v1/data/D_GetSchedulerTypeList`, {headers: {'Content-Type': 'application/json',Authorization : `Basic ${base64encodedData}`}});

export const getPostDetails = (id) =>
  get("http://localhost:8080/availabilities", {
    params: {
      id: id,
    },
  });
  
