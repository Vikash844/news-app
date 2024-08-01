export const getNewsByApi = async (query = "all") => {
  let response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=757c0da7f5914c299949c0075dde158e`);
  let data = await response.json();

  if (data.status === "ok") {

    let filteredArticles = data.articles.filter(article => {
      return !article.title.includes("[Removed]") && !article.description.includes("[Removed]");
    });
    return filteredArticles;
  }

  return [];
}