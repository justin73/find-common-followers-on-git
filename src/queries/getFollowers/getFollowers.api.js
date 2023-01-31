import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const GET_USER_INFO_URL = `${BASE_URL}/users`;

const getFollowers = async ({ username, page, pageSize }) => {
  const { data } = await axios.get(
    `${GET_USER_INFO_URL}/${username}/followers?per_page=${pageSize}&page=${page}`,
    {
      headers: {
        // here to paste your own github token
        Authorization: `token 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`
      }
    }
  );

  return data || [];
};

export default {
  getFollowers
};
