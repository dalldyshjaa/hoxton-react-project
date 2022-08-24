import { useEffect, useState } from "react";
import { Job } from "./Job";

export function CurrentPage({ page, jobsToShow }: any) {
  const [showJobs, setShowJobs] = useState<any[]>([]);

  useEffect(
    function () {
      let jobs = [];
      for (let i = (page - 1) * 5; i < jobsToShow.length && i < page * 5; i++) {
        jobs.push(jobsToShow[i]);
      }
      setShowJobs(structuredClone(jobs));
    },
    [page, jobsToShow]
  );
  return (
    <section className="section">
      {showJobs.map((job: any) => (
        <Job job={job} key={job.slug} />
      ))}
    </section>
  );
}
