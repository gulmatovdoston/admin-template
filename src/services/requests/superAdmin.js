import { request } from "../api/index";
import * as qs from "qs";

const superAdmin = {
  list: () => request.get(`/v1/admin/super-admins/`),
  add: (data) => request.post("/v1/add-super-admin/ ", data),
  verify: (data) => request.post("/v1/check-super-admin-email/", data),
  register: (data) => request.post("/v1/register-super-admin/", data),
};
export default superAdmin;
