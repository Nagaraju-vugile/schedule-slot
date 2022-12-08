import { get, postCancelSlot } from "./api_helper";
import { post } from "./api_helper";
// import * as url from "./url_helper";
import { Buffer } from 'buffer';
import { urls } from "../constants";
import config from "../config";

// const headersAuth = 'Basic, username:Chandan_Palamakula password: rules#123';
const base64encodedData = Buffer.from(config.AUTH_CREDENTIALS).toString('base64');
//`Basic Chandan_Palamakula:rules#123`

export const getAvailabilities = (formattedDate, id, type) =>
  get(urls(id, type, formattedDate, "getAvailabilities"), {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${base64encodedData}`,
    },
  });

export const getSchedulerTypeDetails = () => get(urls(null, null, null, "getSchedulerTypes"), {headers: {'Content-Type': 'application/json',Authorization : `Basic ${base64encodedData}`}});

export const bookSlot = (data, typeCheck) => post(urls(null, null, null, typeCheck), {headers: {'Content-Type': 'application/json',Authorization : `Basic ${base64encodedData}`}}, data);

export const getMyBookings = (data) => get(urls(data, null, null, "getMyBookings"), {headers: {'Content-Type': 'application/json',Authorization : `Basic ${base64encodedData}`}});
export const cancelSlot = (data) => postCancelSlot(urls(null, null, null, "cancelSlot"), {headers: {'Content-Type': 'application/json',Authorization : `Basic ${base64encodedData}`}}, data);


  
