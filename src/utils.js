import moment from "moment";

export const formatDate = (timestamp) => {
  if (!timestamp) return '-';
  return moment(timestamp).fromNow();
};
