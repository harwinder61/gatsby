import moment from "moment";

export default birthday => {
  return moment().diff(birthday, "months");
};
