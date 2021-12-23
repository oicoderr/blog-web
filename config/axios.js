
import axios from 'axios'

axios.interceptors.response.use((response) => {
	// return response.data ? response.data : {};
  if (response.status === 200) {
    return response.data
  } else {
    return Promise.reject(response)
  }
}, function (error) {
	return Promise.reject(error);
})

export default axios
