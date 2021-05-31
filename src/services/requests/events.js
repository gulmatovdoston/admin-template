import { request } from "../api/index";
import * as qs from "qs";

const events = {
  list: (id, query) =>
    request.get(
      `/v1/admin/events/${id}/${qs.stringify(query, {
        addQueryPrefix: true,
      })}`
    ),
  pastEvents: (id, query) =>
    request.get(
      `/v1/admin/past-events/${id}/${qs.stringify(query, {
        addQueryPrefix: true,
      })}`
    ),
  upcomingEvents: (id, query) =>
    request.get(
      `/v1/admin/upcoming-events/${id}/${qs.stringify(query, {
        addQueryPrefix: true,
      })}`
    ),
  delete: (id) => request.delete(`/v1/admin/event/${id}/`),
};
export default events;
