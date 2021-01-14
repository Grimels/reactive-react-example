import * as React from 'react';

import { Article } from 'Types/Articles';

import './ArticleCard.scss';

export interface ArticleCardProps {
  article?: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) =>
  article ? (
    <section className="article-card">
      <div className="article-card-info">
        <p className="article-title">{article.title}</p>
        <p className="article-description">{article.description}</p>
      </div>
      <p className="article-publisherId">{article.publisherId}</p>
    </section>
  ) : null;
