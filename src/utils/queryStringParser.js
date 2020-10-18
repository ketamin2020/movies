import queryString from "query-string";

function parsedString(qs) {
  return queryString.parse(qs);
}
export default parsedString;
