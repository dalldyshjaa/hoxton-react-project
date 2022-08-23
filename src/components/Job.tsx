import { Link } from "react-router-dom";
import { World } from "./Icons";

export function Job({ job }: any) {
  console.log(job);

  console.log(job.image === undefined);
  return (
    <Link to={`job/${job.created_at}`} className="job-container">
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
            <div className="company-tag">Full time</div>
            {job.remote ? <div className="company-tag">Remote</div> : null}
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
