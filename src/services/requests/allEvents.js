import { request } from "../api/index";
import * as qs from "qs";

const allEvents = {
  list: (query) =>
    request.get(
      `/v1/admin/all-events/${qs.stringify(query, {
        addQueryPrefix: true,
      })}`
    ),
  pastEvents: (query) =>
    request.get(
      `/v1/admin/all-past-events/${qs.stringify(query, {
        addQueryPrefix: true,
      })}`
    ),
  upcomingEvents: (query) =>
    request.get(
      `/v1/admin/all-upcoming-events/${qs.stringify(query, {
        addQueryPrefix: true,
      })}`
    ),
};
export default allEvents;
