import React from "react";
import useFetch from "../Hooks/useFetch";

const JobsData = ({ keyword }) => {
  const url = "https://www.arbeitnow.com/api/job-board-api";
  const { data, isLoading, error } = useFetch(url);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data.data.map((job) => {
          return (
            <div class="container">
              <div class="row">
                <div class="col-8">
                  <div>Position: {job.title}</div>
                  <div>Company: {job.company_name}</div>
                  <div>City: {job.location}</div>
                  <div>Possible remote: {job.remote ? "Yes" : "No"}</div>
                  <div>{job.tags}</div>
                  <br />
                </div>
                <div class="col-4">
                  <div>
                    <a href={job.url} target="_blank">
                      View job description
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default JobsData;
