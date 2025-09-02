import React, { useEffect, useState } from "react";
import SingleApplication from "./SingleApplication";
import { Button } from "./ui/Button/Button";
import styles from "./Applications.module.css";

const API_URL = "http://localhost:3001/api/applications";
const LIMIT = 5;

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchApplications(page);
    // eslint-disable-next-line
  }, [page]);

  const fetchApplications = async (pageNum) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}?_page=${pageNum}&_limit=${LIMIT}`);
      const data = await res.json();
      const linkHeader = res.headers.get("Link");
      setApplications((prev) => [...prev, ...data]);
      setHasNextPage(linkHeader && linkHeader.includes('rel="next"'));
    } catch (err) {
      console.error("Failed to fetch applications:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className={styles.Applications}>
      {applications.map((app, idx) => (
        <SingleApplication key={app.id || idx} application={app} />
      ))}
      {hasNextPage && (
        <div className={styles.loadMoreWrapper}>
          <Button
            onClick={handleLoadMore}
            disabled={loading}
            className={styles.loadMoreBtn}
          >
            {loading ? "Loading..." : "Load More"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Applications;
