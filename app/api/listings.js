import client from "./client";

const endpoint = "/listings";

const getListing = () => client.get(endpoint);

export default {
  getListing,
};
