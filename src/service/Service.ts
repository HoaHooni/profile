import axios from "axios";


const getProfile = async <V>(id: string, headers: Object) => {

  let url: string = `http://127.0.0.1:8090/profile/${id}`;
  let result = {} as V
  await axios.get(url, headers).then(res => {
    result = (res.data) as V;
  }).catch(error => {
    console.log("error", error)
  })
  return result;
}

export { getProfile }