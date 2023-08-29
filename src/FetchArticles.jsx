import { useEffect, useState } from "react";
import Article from "./Article";
import Loading from "./Loading";
import Filter from "./Filter";
// import ScrollToTop from "../common/ScrollToTop";
import Pagination from "./Pagination";
import styled from "styled-components";
import { device } from "./assets/breakpoints";
import { ArticleLink, Image } from "./Article";
import { helpCenterUrl } from "./assets/urls";
import Error from "./Error";

export default function FetchArticles({ label }) {
  const [data, setData] = useState();
  const [loading, isLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getApiData = () => {
      fetch(
        `${helpCenterUrl}/help_backend/confluence_documents/blog/label/${label}`
      )
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw new Error("Server Error");
          }
        })
        .then((result) => {
          isLoading(false);
          setData(result);
        })
        .catch((err) => {
          isLoading(false);
          setError("Oops! Something went wrong. Please try again later.");
        });
    };

    getApiData();
    return () => {
      setData();
      isLoading(true);
    };
  }, []);

  /* Logic for filter */
  const [filterCategory, setFilterCategory] = useState("All");
  const handleCategoryChange = (category) => {
    setFilterCategory(category);
    setCurrentPage(1);
  };

  const filteredArticles =
    filterCategory === "All"
      ? data
      : data.filter((article) => article.article_type === filterCategory);

  /* Logic for pagination */
  const ITEMS_PER_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentItems = filteredArticles
    ? filteredArticles.slice(startIndex, endIndex)
    : filteredArticles;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <ScrollToTop page={currentPage} />
      <Filter
        filterCategory={filterCategory}
        handleCategoryChange={handleCategoryChange}
      />
      {error ? (
        <Error errorMessage={error} />
      ) : loading ? (
        <Loading count={3} />
      ) : (
        <>
          <ArticlesContainer>
            {currentItems.map((article, i) => (
              <Article
                key={i}
                id={article.id}
                type={article.article_type}
                title={article.title}
                date={article.date}
                summary={article.summary}
              />
            ))}
          </ArticlesContainer>
          <Pagination
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            endIndex={endIndex}
            paginationIndex={filteredArticles.length}
            itemsPerPage={ITEMS_PER_PAGE}
          />
        </>
      )}
    </>
  );
}

const ArticlesContainer = styled.div`
  margin-top: 3rem;

  @media ${device.mobileL} {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    ${ArticleLink}:first-of-type {
      flex: 0 0 66.6666666667%;
      max-width: 66.6666666667%;
    }

    ${ArticleLink}:first-of-type ${Image} {
      height: 300px;
    }
    ${Image} {
      background-size: cover;
    }
  }
  @media ${device.laptopL} {
    ${ArticleLink} {
      margin-bottom: 3rem;
    }
  }
`;
