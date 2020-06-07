import moment from "moment";

export const formatDate = (timestamp) => {
  console.log("timestamp:", timestamp);
  if (!timestamp) return '-';
  return moment(timestamp).fromNow();
};
