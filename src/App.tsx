import * as React from 'react';

import { ArticlesContainer } from 'Components/ArticlesContainer';

import { Publisher } from 'Types/Articles';

import './App.scss';

const publishers: Publisher[] = ['P0', 'P1', 'P2', 'P3'];

export const App: React.FC = () => {
  const [publisher, setPublisher] = React.useState<Publisher>();

  React.useEffect(() => {
    let currentPublisherIndex = 0;
    setPublisher(publishers[currentPublisherIndex]);

    const interval = setInterval(() => {
      currentPublisherIndex += 1;
      if (publishers.length === currentPublisherIndex) clearInterval(interval);
      else setPublisher(publishers[currentPublisherIndex]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="app">
      <section>
        <h1>All Publisher Articles:</h1>
        {publisher && <ArticlesContainer publisher={publisher} />}
      </section>
    </main>
  );
};
