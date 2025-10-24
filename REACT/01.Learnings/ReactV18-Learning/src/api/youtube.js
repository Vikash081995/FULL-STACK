const KEY = AIzaSyAQuaDBFSBtiZ9I_v3dUfz8l11gfr_Tqvc;

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
    },
});