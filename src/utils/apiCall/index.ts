import axios from 'axios';

const getAuth = (isToken: boolean, token: string) => {
  if (isToken) {
    return { Authorization: `Bearer ${token}` };
  }
  return {};
};

const apiCall = ({
  type,
  body,
  headers,
  url,
  isToken,
  params,
  token,
  responseType,
}: any) => {
  const auth = getAuth(isToken, token);

  return axios({
    url,
    headers: {
      'Content-Type': 'application/json',
      ...(headers || {}),
      ...(auth || {}),
    },
    data: body,
    method: type,
    params,
    responseType,
  });
};

export default apiCall;
