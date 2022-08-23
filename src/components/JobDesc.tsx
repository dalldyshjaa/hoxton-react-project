import "../components/styles/jobDesc.css";
import "../components/styles/main.css";
import { JobTextDescription } from "./JobTextDescription";

import { BackArrow, World } from "./Icons";

export function JobDesc({ job }: any) {
  function createMarkup() {
    return { __html: job.description };
  }
  return (
    <div>
      <div className="job-title-container">
        <span className="job-title-text">{job.title}</span>
        <div className="more-company-tags">
          <div className="company-tag">Full time</div>
          {job.remote ? <div className="company-tag">Remote</div> : null}
        </div>
      </div>
      <div className="company-profile-location">
        <div className="company-profile">
          {job.image === undefined ? (
            "not found"
          ) : (
            <div className="company-image-container">
              <img src={job.image} className="company-image" />
            </div>
          )}
        </div>
        <div className="company-name-location-small">
          <span className="company-name-small">{job.company_name}</span>
          <div className="company-location-icon">
            <World />
            {` ${job.location}`}
          </div>
        </div>
        <div></div>
      </div>
      <JobTextDescription createMarkup={createMarkup} />
    </div>
  );
}
