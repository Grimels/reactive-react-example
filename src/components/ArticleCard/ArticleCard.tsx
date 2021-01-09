import * as React from 'react';

import { Article } from 'Types/Articles';

export interface ArticleCardProps {
  article?: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => (
  <div className="article-card">
    <p className="article-title">{article}</p>
  </div>
);
