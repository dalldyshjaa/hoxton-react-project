import { Job } from "./Job";
import { MainAside } from "./MainAside";
import "./styles/main.css";

export function Main() {
  let job = {
    company_name: "Digital Spine",
    created_at: 1661207105,
    job_types: [],
    location: "Berlin",
    remote: false,
    slug: "remote-full-stack-technical-lead-web-platform-digital-spine-berlin-germany-282713",
    tags: ["Tech", "Hybrid Remote"],
    title: "Full Stack Technical Lead Web Platform (m/f/d)",
    url: "https://www.arbeitnow.com/view/remote-full-stack-technical-lead-web-platform-digital-spine-berlin-germany-282713",
  };
  return (
    <main>
      <MainAside />
      <section className="section">
        <Job job={job} />
      </section>
    </main>
  );
}
