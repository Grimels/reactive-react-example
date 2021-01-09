import { Article } from 'Types/Articles';
import { AbstractDataFetch } from 'DataServices/AbstractDataFetch';

export interface IArticlesDataService {
  getArticles: (publisherId: string) => Promise<Array<Article>>;
}

class ArticlesDataService extends AbstractDataFetch implements IArticlesDataService {
  getArticles = async (publisherId: string) => {
    const path = `/hub/articles/${publisherId}`;
    const articles: Array<Article> = await this.get(path);

    console.log('Articles:', articles);
    return articles;
  };
}

export const articlesDataService = new ArticlesDataService();
