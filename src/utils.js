import moment from "moment";

export const formatDate = (timestamp) => {
  if (!timestamp) return '-';
  return moment(timestamp).fromNow();
};


export const teaserText = (text) => {
  if (text.length < 200) return text;
  return `${text.substring(0, 200)}...`;
};
