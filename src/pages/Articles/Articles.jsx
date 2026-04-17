import React from "react";
import "./Articles.css";

const articlesData = [
  {
    title: "What is Cryptocurrency?",
    description:
      "Learn the basics of cryptocurrency and how digital currencies work.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040",
    link: "https://www.kaspersky.com/resource-center/definitions/what-is-cryptocurrency"
  },

  {
    title: "How Bitcoin Works",
    description:
      "Understand blockchain and how Bitcoin transactions work.",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d",
    link: "https://www.investopedia.com/terms/b/bitcoin.asp"
  },

  {
    title: "Ethereum Explained",
    description:
      "Learn about Ethereum, smart contracts and decentralized apps.",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247",
    link: "https://ethereum.org/en/what-is-ethereum/"
  }
];

const Articles = () => {
  return (
    <div className="articles">
      <h1>Crypto Articles</h1>

      <div className="articles-container">
        {articlesData.map((item, index) => (
          <div key={index} className="article-card">
            <img src={item.image} alt={item.title} />

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              <button>
                Read More
              </button>
            </a>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;