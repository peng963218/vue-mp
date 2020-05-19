import i from "../../utils/request";

export const user = {
  login: params => i.post('', params),
  getInfo: params => i.get('', {params})
}
