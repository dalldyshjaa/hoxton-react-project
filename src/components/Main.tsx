import { useState, useEffect } from "react";
import { Job } from "./Job";
import { MainAside } from "./MainAside";
import { Pages } from "./Pages";
import "./styles/main.css";
import { JobType } from "../types";

export function Main({ search }: any) {
  const [allJobs, setAllJobs] = useState<JobType[]>([]);
  const [jobs, setJobs] = useState<JobType[]>([]);
  const [fullTime, setFullTime] = useState(false);
  const [remote, setRemote] = useState(false);
  const [citySearch, setCitySearch] = useState("");
  const [cityOption, setCityOption] = useState("");
  const [page, setPage] = useState(20);
  const [pagesNumber, setPagesNumber] = useState(0);

  let jobsCopy: any = [];

  function filterJobsToShow(job: JobType) {
    if (search) {
      if (
        !job.company_name.toLowerCase().includes(search.toLowerCase()) &&
        !job.title.toLowerCase().includes(search.toLowerCase())
      )
        return;
    }
    if (remote) {
      if (!job.remote) return;
    }
    if (citySearch) {
      if (
        !job.location.toLowerCase().includes(citySearch.toLowerCase()) &&
        !job.country.toLowerCase().includes(citySearch.toLowerCase())
      )
        return;
    }
    if (cityOption) {
      if (!job.location.toLowerCase().includes(cityOption.toLowerCase()))
        return;
    }
    if (fullTime) {
      if (!job.full_time) return;
    }
    jobsCopy.push(job);
  }
  if (allJobs.length !== 0) {
    for (let job of allJobs) {
      filterJobsToShow(job);
    }
    console.log(jobsCopy);
  }

  useEffect(
    function () {
      fetch(`http://localhost:3006/jobs`)
        .then((resp) => resp.json())
        .then((a) => setAllJobs(a));
    },
    //   function () {
    //     fetch(`http://localhost:3006/jobs?&_page=${page}&_limit=5`)
    //       .then((resp) => resp.json())
    //       .then((a) => setJobs(a));
    //   },
    []
  );

  return (
    <main>
      <MainAside
        setFullTime={setFullTime}
        setCityOption={setCityOption}
        setCitySearch={setCitySearch}
        setRemote={setRemote}
      />
      <div>
        <section className="section">
          {jobs.map((job: JobType) => (
            <Job job={job} key={job.slug} />
          ))}
        </section>
        <Pages page={page} pagesNumber={allJobs.length} setPage={setPage} />
      </div>
    </main>
  );
}
