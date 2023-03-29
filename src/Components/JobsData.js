import React from "react";
import useFetch from "../Hooks/useFetch";

const JobsData = () => {
  const url = "https://www.arbeitnow.com/api/job-board-api";
  const { data, isLoading, error } = useFetch(url);

  console.log(data, "testing api");

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data.data.map((job) => {
          return (
            <div>
              <div>Position: {job.title}</div>
              <div>Company: {job.company_name}</div>
              <div>City: {job.location}</div>
              <div>Possible remote: {job.remote ? "Yes" : "No"}</div>
              <div>{job.tags}</div>
              <div>
                <a href={job.url} target="_blank">
                  View job description
                </a>
              </div>
              <br />
            </div>
          );
        })
      )}
    </div>
  );
};

export default JobsData;
