import axios from 'axios';

export default axios.create({
    baseURL:"https://api.unsplash.com/",

  headers: {
    Authorization: "Client-ID GTuCa4q6fttge0WJeQgDbe1WQVA5W9zqpbATbQq00JA",
  },
});