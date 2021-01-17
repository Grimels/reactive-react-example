import * as React from 'react';

import { Article } from 'Types/Articles';

import ArticleIcon from 'Styles/assets/newspaper.svg';

import './ArticleCard.scss';

export interface ArticleCardProps {
  article?: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return article ? (
    <section className="article-card">
      <div className="article-card-info">
        <ArticleIcon className="article-icon" />
        <section className="text-info">
          <p className="article-title">{article.title}</p>
          <p className="article-description">{article.description}</p>
        </section>
      </div>
      <div className="circle">
        <p className="article-publisherId">{article.publisherId}</p>
      </div>
    </section>
  ) : null;
};
