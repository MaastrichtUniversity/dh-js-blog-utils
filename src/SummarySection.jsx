import { useEffect, useState } from "react";
import Section from "./Section";
import Title from "./Title";
import Article from "./Article";
import Loading from "./Loading";
import Error from "./Error";
import ReadAllButton from "./ReadAllButton";
import styled from "styled-components";
import { device } from "./assets/breakpoints";

export default function SummarySection() {
  const [data, setData] = useState();
  const [loading, isLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getApiData = ({ helpCenterUrl, label }) => {
      fetch(
        `${helpCenterUrl}/help_backend/confluence_documents/blog/label/${label}/latest/3`
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

  return (
    <Section name="blog">
      <Title
        textAlign="center"
        subtitle="Latest articles"
        title="Stay tuned for Maastricht Data Repository’s news and useful features"
      />
      {error ? (
        <Error errorMessage={error} size="small" />
      ) : loading ? (
        <Loading count={1} />
      ) : (
        <ArticlesContainer>
          {data.map((article, i) => (
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
      )}
      <ReadAllButton align={"center"} />
    </Section>
  );
}

const ArticlesContainer = styled.div`
  margin-top: 3rem;
  @media ${device.mobileL} {
    display: flex;
    justify-content: space-between;
  }
`;
