import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTY3Y2RkMmQyMDQ3NDEwMzRiNGZhNDg2M2E5NTc3YyIsInN1YiI6IjY0YjY1ZmFiNzg1NzBlMDEzYTkzMjEzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QdM1KwmXw-LnfmWkVgiXDxA-TnMmLgR3xJQR_MgPC18"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};