import { Link } from "react-router-dom";
import { World } from "./Icons";

export function Job({ job }: any) {
  return (
    <Link to={`job/${job.slug}`} className="job-container">
      {job.image === undefined ? (
        <div className="company-image-container">not found</div>
      ) : (
        <div className="company-image-container">
          <img src={job.image} className="company-image" />
        </div>
      )}
      <div className="job-info">
        <p className="company-name">{job.company_name}</p>
        <p className="company-title">{job.title}</p>
        <div className="company-tags">
          <div className="more-company-tags">
            {job.full_time ? (
              <div className="company-tag">Full time</div>
            ) : (
              <div className="company-tag">Not full time</div>
            )}
            {job.remote ? (
              <div className="company-tag">Remote</div>
            ) : (
              <div className="company-tag">Not remote</div>
            )}
          </div>
          <div className="more-company-tags">
            <div className="more-company-tag">
              <World />
              <span>{job.location}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
