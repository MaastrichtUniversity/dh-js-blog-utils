import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import Title from "./Title";
import ReadAllButton from "./ReadAllButton";
import { helpCenterUrl } from "./assets/urls";
import Error from "./Error";

export default function FetchArticles() {
  let { pageId } = useParams();
  const [data, setData] = useState();
  const [loading, isLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getApiData = () => {
      fetch(
        `${helpCenterUrl}/help_backend/confluence_documents/blog/id/${pageId}`
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
  }, [pageId]);

  return (
    <>
      {error ? (
        <Error errorMessage={error} />
      ) : loading ? (
        <Loading count={3} />
      ) : (
        <>
          <Title
            textAlign="left"
            subtitle={data.article_type}
            title={data.title}
          />
          <div
            id="blog-page"
            dangerouslySetInnerHTML={{ __html: data.html_output }}
          />
          <ReadAllButton />
        </>
      )}
    </>
  );
}
