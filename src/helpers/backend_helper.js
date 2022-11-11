import { get } from "./api_helper";
import { Buffer } from 'buffer';

const base64encodedData = Buffer.from(`Chandan_Palamakula:rules#123`).toString('base64');
//`Basic Chandan_Palamakula:rules#123`

export const getAvailabilities = (formattedDate, id) => get(`https://bluerosetech01.pegalabs.io/prweb/api/v1/data/D_GetSchedules?EmailID=${id}&StartDate=${formattedDate}&LimitRange=5`, {headers: {'Content-Type': 'application/json',Authorization : `Basic ${base64encodedData}`}});

export const getSchedulerTypeDetails = () => get(`https://bluerosetech01.pegalabs.io/prweb/api/v1/data/D_GetSchedulerTypeList`, {headers: {'Content-Type': 'application/json',Authorization : `Basic ${base64encodedData}`}});
  
