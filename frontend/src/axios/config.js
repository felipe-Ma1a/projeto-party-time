import axios from "axios";

const partyFetch = axios.create({
  baseURL: "https://party-time-back.vercel.app:3000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default partyFetch;
