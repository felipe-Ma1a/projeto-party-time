import axios from "axios";

const partyFetch = axios.create({
  baseURL: "https://party-time-back.onrender.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default partyFetch;
