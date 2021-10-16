import axios from "axios";

const url = "http://localhost:3600/api/carousel";
export const getSlides = (numberOfSlides) => axios.get(`${url}/${numberOfSlides}`);
