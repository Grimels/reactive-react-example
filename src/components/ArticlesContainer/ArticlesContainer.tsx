import * as React from 'react';

import { ArticleCard } from 'Components/ArticleCard';

import { articlesDataService } from 'DataServices/ArticlesDataService';
import { useDataServiceCall } from 'Hooks/useDataServiceCall';

import { Article, Publisher } from 'Types/Articles';
import { STATUS } from 'Constants/state';

export const ArticlesContainer: React.FC<{ publisher: Publisher }> = ({ publisher }) => {
  const [status, articles, error] = useDataServiceCall<Array<Article>>(() => articlesDataService.getArticles(publisher));

  const renderArticle = (article: Article) => <ArticleCard key={article.title} article={article} />;

  switch (status) {
    case STATUS.SUCCESS:
      return <div className="articles-container">{articles?.map(renderArticle)}</div>;
    case STATUS.ERROR:
      return <div className="error-screen">{error}</div>;
    default:
      return <div className="loading-screen">Loading...</div>;
  }
};
