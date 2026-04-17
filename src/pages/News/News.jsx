import React from "react";
import "./News.css";

const newsData = [
  {
    title: "Bitcoin crosses $80,000 mark",
    description: "Bitcoin hits a new high as market demand increases rapidly.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040",
    url: "https://cointelegraph.com/"
  },
  {
    title: "Ethereum upgrade boosts performance",
    description: "Ethereum network becomes faster and cheaper after latest update.",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247",
    url: "https://ethereum.org/"
  },
  {
    title: "Crypto adoption rising globally",
    description: "More countries are accepting cryptocurrency as legal payment.",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d",
    url: "https://coindesk.com/"
  },
  {
    title: "Altcoins showing strong growth",
    description: "Many altcoins are outperforming Bitcoin in recent trends.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
    url: "https://coinmarketcap.com/"
  }
];

const News = () => {
  return (
    <div className="news">
      <h1>Crypto News</h1>

      <div className="news-container">
        {newsData.map((item, index) => (
          <div key={index} className="news-card">
            <img src={item.image} alt="" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.url} target="_blank" rel="noreferrer">
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;