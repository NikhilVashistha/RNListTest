const BASE_API_URL = 'https://api.smallcase.com/news/getNews';

const getArticlesAPI = offsetVal => {
  return `${BASE_API_URL}?count=${Constants.API_LIST_LIMIT}&offset=${offsetVal}`;
};

export const Constants = {
  API_GET_ARTICLES: getArticlesAPI,
  API_LIST_LIMIT: 20,
};
