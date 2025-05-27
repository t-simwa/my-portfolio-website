import ArticleCard from '@/components/ArticleCard';

import { Article } from '@/types';

import styles from '@/styles/ArticlesPage.module.css';

interface ArticlesPageProps {
  articles: Article[];
}

const ArticlesPage = ({ articles = [] }: ArticlesPageProps) => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>My Articles</h1>
      <p className={styles.pageSubtitle}>
        Recent posts from{' '}
        <a
          href="https://dev.to/itsnitinr"
          target="_blank"
          rel="noopener"
          className={styles.underline}
        >
          dev.to
        </a>{' '}
        where I share insights and tutorials about web development.
      </p>
      <div className={styles.container}>
        {Array.isArray(articles) && articles.length > 0 ? (
          articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))
        ) : (
          <p>No articles found. Check back later!</p>
        )}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const res = await fetch(
      'https://dev.to/api/articles/me/published?per_page=6',
      {
        headers: {
          'api-key': process.env.DEV_TO_API_KEY!,
        },
      }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch articles');
    }

    const data = await res.json();
    
    return {
      props: { 
        title: 'Articles', 
        articles: Array.isArray(data) ? data : [] 
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching articles:', error);
    return {
      props: { 
        title: 'Articles', 
        articles: [] 
      },
      revalidate: 60,
    };
  }
}

export default ArticlesPage;
