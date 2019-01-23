import axios from 'axios';

const host = process.env.HOST;
const headers = () => ({
  Authorization: `Bearer ${process.env.API_KEY}`,
});

const Request = {
  fetchTrailers() {
    return axios({
      method: 'get',
      url: `${host}/trailers?view=Grid%20view`,
      headers: headers(),
    });
  },
  fetchFeed() {
    return axios({
      method: 'get',
      url: `${host}/feeds?view=Grid%20view`,
      headers: headers(),
    });
  },
  fetchName(id) {
    return axios({
      method: 'get',
      url: `${host}/names/${id}`,
      headers: headers(),
    });
  },
  fetchTitle() {
    return axios({
      method: 'get',
      url: `${host}/titles`,
      headers: headers(),
    });
  }
};

export default Request;
