import axios from "axios";
import baseURL from "./baseUrl";

const {globalUrl: url} = baseURL()
const apiClient = axios.create({
    baseURL: url,
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
  })

  const apiClientForm = axios.create({
    baseURL: url,
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data'
    },
  })


export default {
  // login post request takes email and password
  userLogin(inputsData: object) {
    return apiClient.post('/login/', inputsData);
  },
  // Forget password post request takes only email
  userForgetPass(email: string) {
    return apiClient.post('/password/reset/', {
      email: email,
    });
  },
  // Reset Password Post request takes urlPath "{uid}/{token}" and 
  // {uid, token, new_password1, new_password2: as password confirmation}.
  userResetPass(urlPath: string,resetPassObj: object) {
    return apiClient.post(`resetpassword/${urlPath}`, resetPassObj);
  },

  // Change Password Post request takes 
  // {old_password, new_password1, new_password2: as password confirmation}.
  userChangePass(changePassObj: object, token: string) {
    return apiClient.post('/password/change/', changePassObj, {
      // `auth token` must be set in headers to be sent
      headers: {'Authorization': `Bearer ${token}`},
    });
  },
  // user check credintials Post request takes 
  // {email, password, token: as Authorization header}.
  userCheckForMfa(inputsObj: object,token: string) {
    return apiClient.post('/check_user/', inputsObj, {
      // `auth token` must be set in headers to be sent
      headers: {'Authorization': `Bearer ${token}`},
    });
  },
  // user enable Mfa Post request takes 
  // {token: as Authorization header}.
  userEnableMfa(token: string) {
    return apiClient.get('/totp/create/', {
      // `auth token` must be set in headers to be sent
      headers: {'Authorization': `Bearer ${token}`},
    });
  },
  // Mfa code Post request takes 
  // {MfaCode, token: as Authorization header}.
  userMfaCodeSend(mfaCode: string, token: string) {
    return apiClient.post(`/totp/login/${mfaCode}/`, '' ,{
      // `auth token` must be set in headers to be sent
      headers: {'Authorization': `Bearer ${token}`},
    });
  },
  // fetching user data using token.  Post request takes 
  // {token: as Authorization header}.
  userDataTokenFetch(token: object) {
    return apiClient.post('/token/get/user/', token);
  },
  // disable Mfa Post request takes 
  // {token: as Authorization header}.
  userDisableMfa(token: string) {
    return apiClient.post('/totp/disable/', '', {
      // `auth token` must be set in headers to be sent
      headers: {'Authorization': `Bearer ${token}`},
    });
  },
  // Refresh token Post request takes 
  // {token in body}.
  userRefreshToken(refreshToken: object) {
    return apiClient.post('/token/refresh/', refreshToken);
  },
  // Verfiy validation of token Post request takes 
  // {token in body}.
  userTokenVerfiy(token: object) {
    return apiClient.post('/token/verify/', token)
  },
  // Logout user and delete his token feom server side.
  userLogout(tokenObj: object,token: string) {
    return apiClient.post('/logout/',tokenObj, {
      // `auth token` must be set in headers to be sent
      headers: {'Authorization': `Bearer ${token}`},
    });
  },
  // Updates ITR-Admin information.
  itrAdminUpdate(inputsObj: object, itrAdminId: number, token: string) {
    return apiClient.patch(`/itranks-admin/update/${itrAdminId.toString()}/`, inputsObj, {
      // `auth token` must be set in headers to be sent
      headers: {'Authorization': `Bearer ${token}`},
    });
  }
};
  