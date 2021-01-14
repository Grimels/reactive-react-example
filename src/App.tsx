import * as React from 'react';

import { ArticlesContainer } from 'Components/ArticlesContainer';

import { Publisher } from 'Types/Articles';

import './App.scss';

export const App: React.FC = () => {
  const publisher: Publisher = 'P0';

  return (
    <main className="app">
      <section>
        <h1>Hello World!</h1>
        <ArticlesContainer publisher={publisher} />
      </section>
    </main>
  );
};
