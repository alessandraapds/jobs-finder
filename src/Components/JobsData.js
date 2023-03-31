import React from "react";
import useFetch from "../Hooks/useFetch";
import "./Components.css";
import { BriefcaseFill, BuildingFill, GeoAltFill } from "react-bootstrap-icons";

const JobsData = ({ keyword }) => {
  const url = "https://www.arbeitnow.com/api/job-board-api";
  const { data, isLoading, error } = useFetch(url);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : !keyword ? (
        data.data.map((job) => {
          return (
            <div class="container job-list">
              <div class="row">
                <div class="col-8">
                  <div class="job-title">
                    <span class="briefcase-icon">
                      <BriefcaseFill />
                    </span>
                    {job.title}
                  </div>
                  <div>
                    <BuildingFill /> {job.company_name}
                  </div>
                  <div>
                    <GeoAltFill /> {job.location}
                  </div>
                  <div>Possible remote: {job.remote ? "Yes" : "No"}</div>
                  <div>
                    {job.tags.map((tag) => (
                      <div class="job-tag">{tag}</div>
                    ))}
                  </div>
                  <br />
                </div>
                <div class="col-4">
                  <div>
                    <a
                      href={job.url}
                      target="_blank"
                      class="job-description-button"
                    >
                      View job description
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        data.data.map((job) => {
          if (
            job.location === keyword ||
            job.title.toLowerCase().includes(keyword)
          ) {
            return (
              <div class="container job-list">
                <div class="row">
                  <div class="col-8">
                    <div class="job-title">
                      <span class="briefcase-icon">
                        <BriefcaseFill />
                      </span>
                      {job.title}
                    </div>
                    <div>
                      <BuildingFill /> {job.company_name}
                    </div>
                    <div>
                      <GeoAltFill /> {job.location}
                    </div>
                    <div>Possible remote: {job.remote ? "Yes" : "No"}</div>
                    <div class="job-tag">
                      {job.tags.map((tag) => (
                        <div>{tag}</div>
                      ))}
                    </div>
                    <br />
                  </div>
                  <div class="col-4">
                    <div>
                      <a
                        href={job.url}
                        target="_blank"
                        class="job-description-button"
                      >
                        View job description
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })
      )}
    </div>
  );
};

export default JobsData;
