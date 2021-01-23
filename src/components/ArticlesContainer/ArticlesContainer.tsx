import * as React from 'react';

import { ArticleCard } from 'Components/ArticleCard';

import { useWebsocket } from 'Hooks/useWebsocket';

import { Article, Publisher } from 'Types/Articles';
import { STATUS } from 'Constants/state';

import './ArticlesContainer.scss';

export const ArticlesContainer: React.FC<{ publisher: Publisher }> = ({ publisher }) => {
  const [status, articles, error] = useWebsocket<Article>(`/api/hub/articles`, publisher);

  const renderArticle = (article: Article) => <ArticleCard key={`${article.publisherId}::${article.title}`} article={article} />;

  switch (status) {
    case STATUS.SUCCESS:
      return <div className="articles-container">{articles?.map(renderArticle)}</div>;
    case STATUS.ERROR:
      return <div className="error-screen">{error}</div>;
    default:
      return <div className="loading-screen">Loading...</div>;
  }
};
