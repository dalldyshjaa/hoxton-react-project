import { useState, useEffect } from "react";
import { Job } from "./Job";
import { MainAside } from "./MainAside";
import { Pages } from "./Pages";
import "./styles/main.css";

export function Main({ search }: any) {
  const [jobs, setJobs] = useState([]);
  const [fullTime, setFullTime] = useState(false);
  const [citySearch, setCitySearch] = useState("");
  const [cityOption, setCityOption] = useState("");
  const [page, setPage] = useState(20);
  const [pagesNumber, setPagesNumber] = useState(0);
  useEffect(
    function () {
      fetch(`http://localhost:3006/jobs?_page=${page}&_limit=5`)
        .then((resp) => resp.json())
        .then((a) => setJobs(a));
    },
    [page]
  );
  fetch(`http://localhost:3006/jobs`)
    .then((resp) => resp.json())
    .then((a) => setPagesNumber(a.length));

  return (
    <main>
      <MainAside
        setFullTime={setFullTime}
        setCityOption={setCityOption}
        setCitySearch={setCitySearch}
      />
      <div>
        <section className="section">
          {jobs.map((job: any) => (
            <Job job={job} key={job.slug} />
          ))}
        </section>
        <Pages page={page} pagesNumber={pagesNumber} setPage={setPage} />
      </div>
    </main>
  );
}
