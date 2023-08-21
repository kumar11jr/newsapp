export default function sortByImage(news: NewsResponse) {
  const haveImg = news.data.filter((item) => item.image !== null);
  const haveNoImg = news.data.filter((item) => item.image === null);

  const sortedNewsResponse: NewsResponse = {
    pagination: news.pagination,
    data: [...haveImg, ...haveNoImg],
  };

  return sortedNewsResponse;
}
