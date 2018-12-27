import axios from 'axios';

const host = process.env.HOST;
const headers = () => ({
  Authorization: `Bearer ${process.env.API_KEY}`,
});

const Request = {
  fetchTrailers() {
    return axios({
      method: 'get',
      url: `${host}/trailers`,
      headers: headers(),
    });
  },
};

export default Request;
