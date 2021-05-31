import { request } from "../api/index";
import * as qs from "qs";

const user = {
  list: (company_id, query) =>
    request.get(
      `/v1/admin/users/${company_id}/${qs.stringify(query, {
        addQueryPrefix: true,
      })}`
    ),
  deactivate: ({ user_id }) =>
    request.put(`/v1/admin/user/deactivate/${user_id}/`),
  activate: ({ user_id }) => request.put(`/v1/admin/user/activate/${user_id}/`),
  delete: ({ user_id }) => request.delete(`/v1/admin/user/${user_id}/`),
  getAllUsers: (query) =>
    request.get(
      `v1/admin/all-users/${qs.stringify(query, {
        addQueryPrefix: true,
      })}`
    ),
};

export default user;
