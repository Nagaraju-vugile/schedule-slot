import { get } from "./api_helper";
import { post } from "./api_helper";
// import * as url from "./url_helper";
import { Buffer } from 'buffer';
import { urls } from "../constants";

// const headersAuth = 'Basic, username:Chandan_Palamakula password: rules#123';
const base64encodedData = Buffer.from(`Chandan_Palamakula:rules#123`).toString('base64');
//`Basic Chandan_Palamakula:rules#123`

export const getAvailabilities = (formattedDate, id, type) =>
  get(urls(id, type, formattedDate, "getAvailabilities"), {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${base64encodedData}`,
    },
  });

export const getSchedulerTypeDetails = () => get(urls(null, null, null, "getSchedulerTypes"), {headers: {'Content-Type': 'application/json',Authorization : `Basic ${base64encodedData}`}});

export const bookSlot = (data) => post(urls(null, null, null, "postBookSlot"), {headers: {'Content-Type': 'application/json',Authorization : `Basic ${base64encodedData}`}}, data);
  
