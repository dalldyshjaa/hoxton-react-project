import { BackArrow } from "./Icons";
import "../components/styles/jobDesc.css";

import { Logo } from "./Logo";
import { JobDesc } from "./JobDesc";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function JobPage() {
  const [job, setJob] = useState();
  const params = useParams();

  useEffect(function () {
    fetch(`http://localhost:3006/jobs?slug=${params.slug}`)
      .then((resp) => resp.json())
      .then((a) => {
        setJob(a[0]);
      });
  }, []);
  return job === undefined ? null : (
    <div className="job-page-container">
      <Logo />
      <div className="job-desc-container">
        <div>
          <div
            className="back"
            onClick={() => {
              window.history.back();
            }}
          >
            <BackArrow />
            <span>Back to search</span>
          </div>
          <p className="how-to-apply">HOW TO APPLY</p>
          <div className="apply-email-info">
            Please email a copy of your resume and online portfolio to
            {/* @ts-ignore */}
            <span className="apply-email-info-email">{` ${job.company_name
              .toLowerCase()
              .replace(/\s+/g, "")}@${`email.com`} `}</span>
            & CC
            <span className="apply-email-info-email">{` ${`eric`}@${`email.com`} `}</span>
          </div>
        </div>
        <JobDesc job={job} />
      </div>
    </div>
  );
}
