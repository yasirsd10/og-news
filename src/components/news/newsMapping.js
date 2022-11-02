import React, { useEffect, useState } from 'react';
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { db } from '../../firebase';
import NewsArea from './newsArea';

function NewsMapping() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    const newsCollection = collection(db, 'news');

    onSnapshot(newsCollection, (newsSnapshot) => {
      const allnews = newsSnapshot.docs.map((newsDocument) =>
      newsDocument.data()
      );
      console.log(':: All News Data ::', allnews);
    });

    onSnapshot(collection(db, 'news'), (allNewsSnapshot) => {
      const news = allNewsSnapshot.docs.map((news) => {
        return {
          articleHeadline: news.articleHeadline,
          ...news.data(),
          newslDocument: news,
        };
      });
      console.log(':: ALL Article ::', news);
      setNews(news);
    });
  }, []);

  return (
    <div className=" container text-center">
        {/* <pre>{JSON.stringify(reviewData, null,2)}</pre> */}
      <div className="row">
        {news.map((article) => (
          <NewsArea newsApiData={article} />
        ))}
      </div>
    </div>
  );
}

export default NewsMapping;
