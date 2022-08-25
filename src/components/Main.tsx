import { useState, useEffect } from "react";
import { Job } from "./Job";
import { MainAside } from "./MainAside";
import { Pages } from "./Pages";
import "./styles/main.css";
import { JobType } from "../types";
import { CurrentPage } from "./CurrentPage";

export function Main({ search }: any) {
  const [allJobs, setAllJobs] = useState<JobType[]>([]);
  const [jobsToShow, setJobsToShow] = useState<JobType[]>([]);
  const [fullTime, setFullTime] = useState(false);
  const [remote, setRemote] = useState(false);
  const [citySearch, setCitySearch] = useState("");
  const [cityOption, setCityOption] = useState("");
  const [page, setPage] = useState(1);

  function filterJobsToShow(job: JobType) {
    if (search) {
      if (
        !job.company_name.toLowerCase().includes(search.toLowerCase()) &&
        !job.title.toLowerCase().includes(search.toLowerCase())
      )
        return false;
    }
    if (remote) {
      if (!job.remote) return false;
    }
    if (citySearch) {
      if (
        !job.location.toLowerCase().includes(citySearch.toLowerCase()) &&
        !job.country.toLowerCase().includes(citySearch.toLowerCase())
      )
        return false;
    }
    if (cityOption) {
      if (!job.location.toLowerCase().includes(cityOption.toLowerCase()))
        return false;
    }
    if (fullTime) {
      if (!job.full_time) return false;
    }
    return true;
  }
  useEffect(
    function () {
      let jobsCopy: any = [];
      for (let job of allJobs) {
        if (filterJobsToShow(job)) jobsCopy.push(job);
      }
      setJobsToShow(jobsCopy);
      setPage(1);
    },
    [allJobs, fullTime, search, remote, cityOption, citySearch]
  );
  useEffect(function () {
    fetch(`http://localhost:3006/jobs`)
      .then((resp) => resp.json())
      .then((a) => setAllJobs(a));
  }, []);

  return (
    <main>
      <MainAside
        setFullTime={setFullTime}
        setCityOption={setCityOption}
        setCitySearch={setCitySearch}
        setRemote={setRemote}
      />
      <div>
        <CurrentPage page={page} jobsToShow={jobsToShow} />
        <Pages page={page} pagesNumber={jobsToShow.length} setPage={setPage} />
      </div>
    </main>
  );
}
