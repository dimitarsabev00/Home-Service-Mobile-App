import { request, gql } from "graphql-request";

const MASTER_URL =
  "https://eu-west-2.cdn.hygraph.com/content/cm4pif95z016e07uo2akrw0wc/master";

const getSlider = async () => {
  const query = gql`
    query GetSlider {
      sliders {
        id
        name
        image {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export default {
  getSlider,
};