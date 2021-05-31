import { request } from "../api/index";
import * as qs from "qs";

const company = {
  list: (query) =>
    request.get(
      `/v1/admin/companies/${qs.stringify(query, {
        addQueryPrefix: true,
      })}`
    ),
  add: (data) => request.post("v1/admin/company/", data),
  delete: (id) => request.delete(`/v1/admin/company/${id}/`),
  activate: (id) => request.put(`/v1/admin/company/activate/${id}/`),
  deactivate: (id) => request.put(`/v1/admin/company/deactivate/${id}/`),
};
export default company;
