import { BackArrow } from "./Icons";
import "../components/styles/jobDesc.css";

import { Logo } from "./Logo";
import { JobDesc } from "./JobDesc";

export function JobPage() {
  let job = {
    company_name: "Digital Spine",
    created_at: 1661207105,
    job_types: [],
    description:
      '<strong>Company Description</strong><br><p><a href="https://as-corporate-solutions.de/">Axel Springer Corporate Solutions</a>&#xa0;ist die Agentur-Unit von Europas führendem digitalen Medienhaus. Wir verbinden die Geschwindigkeit und Kreativität einer Agentur mit der Sicherheit und Innovationskraft eines großen Medienunternehmens.&#xa0;</p><p>Mit Ideen, die bewegen, bringen wir unsere Kunden voran – in externer und interner Kommunikation, Content Marketing und Consulting. Wir helfen namhaften Auftraggebern wie Bosch, BASF, Lufthansa, Deichmann, Claas und vielen mehr, ihre Zielgruppen mit dem passenden Content zu erreichen.</p><br><strong>Job Description</strong><br><p><strong>Werkstudent&#xa0;im Bereich Business Development!&#xa0;</strong></p><ul><li>du unterstützt uns im Business Development, indem du die richtigen Unternehmen und Kontakte ausfindig machst, Zusammenhänge recherchierst und die Daten in unserem CRM aufbereitest</li><li>du recherchierst alle nötigen Informationen, um die Bedürfnisse unserer potentiellen Neukunden optimal zu verstehen</li><li>du unterstützt uns bei der Erstellung von relevantem Content, und bei der Markt- und Zielgruppenanalyse und bereitest die Ergebnisse in PowerPoint und Excel auf</li></ul><br><strong>Qualifications</strong><br><p><strong>Student eines wirtschaftsnahen Studiengangs. Auch über fachfremde Bewerbungen freuen wir uns, wenn du dich für die Themen Wirtschaft, Marketing und Kommunikation begeisterst</strong></p><ul><li>zuallererst bist du sehr motiviert, hast eine positive Ausstrahlung und möchtest unser Business Development mit uns einen Schritt weiterbringen</li><li>du hast idealerweise schon erste Erfahrungen gesammelt und suchst nun nach einer längerfristigen Werkstudenten-Stelle</li><li>du hast ein Auge für Details und verstehst die Wichtigkeit analytischer&#xa0;Datenbankpflege&#xa0;</li><li>dich begeistern unternehmerische Themen und Prozesse&#xa0;</li><li>du hast den Ehrgeiz dich weiterzuentwickeln, dabei denkst du auch mal um die Ecke und suchst nach innovativen Lösungswegen, um zum Ziel zu kommen</li></ul><br><strong>Additional Information</strong><br><p><strong>verantwortungsvolle Aufgabe in einer schnell wachsenden Agentur, zugehörig zu einem der führenden Medienunternehmen in Europa. Dich erwarten:</strong><br><br><strong>Rolle mit Wachstum:</strong> Als Werkstudent&#xa0;im Business Development wächst du mit den anfallenden Aufgaben und legst die Grundsteine für deine zukünftige Weiterentwicklung. &#xa0;<br><strong>Tolles Büro: </strong>Mobiles Arbeiten sowie flexible Arbeitszeitregelung – und die Möglichkeit, in toller Umgebung direkt im Büro oder auf dem Axel Springer Campus zu arbeiten<br><strong>FreeLunch:&#xa0;</strong>Du erhältst täglich einen Zuschuss für ein Lunch in&#xa0;unseren großartigen Mitarbeiterrestaurants.&#xa0;<br><strong>Weiterentwicklung:&#xa0;</strong>Regelmäßige Feedbackgespräche und maßgeschneiderte Weiterentwicklungsangebote schulen und fördern dich.&#xa0;<br><strong>Hochkarätiges Team: </strong>Ein hochmotiviertes und aufgeschlossenes Team, mit dem wir die Welt der Unternehmenskommunikation ein ganzes Stück besser machen wollen - und uns auch gern mal beim Feierabenddrink auf der Axel-Springer Dachterrasse treffen<br><strong>Perks &amp; Benefits: </strong>Bei uns ergeben sich exzellente Netzwerk- und Weiterbildungsmöglichkeiten - on- und off-the-job</p><p>Wir freuen uns auf deine Bewerbung!</p><div sr-tagline=""></div><p>Die häufigsten Fragen und Antworten findest du in unseren FAQs: <a href="http://career.axelspringer.com/de/faq">career.axelspringer.com/de/faq</a><br><br>Um den Lesefluss zu erleichtern, beschränken wir uns im Textverlauf auf männliche Bezeichnungen. Dennoch ist Vielfalt (Diversity) ein wesentlicher Teil unserer Unternehmenskultur! Wir freuen uns unabhängig von Geschlecht, Nationalität, ethnischer und sozialer Herkunft, Religion, Weltanschauung, Behinderung, Alter sowie sexueller Orientierung und Identität auf alle Bewerbungen.<br><br>Informationen zur Schwerbehindertenvertretung bei Axel Springer findest du hier: <a href="http://career.axelspringer.com/de/ksbv">career.axelspringer.com/de/ksbv</a></p>',
    location: "Berlin",
    remote: false,
    slug: "remote-full-stack-technical-lead-web-platform-digital-spine-berlin-germany-282713",
    tags: ["Tech", "Hybrid Remote"],
    title: "Full Stack Technical Lead Web Platform (m/f/d)",
    url: "https://www.arbeitnow.com/view/remote-full-stack-technical-lead-web-platform-digital-spine-berlin-germany-282713",
  };
  return (
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
            <span className="apply-email-info-email">{` ${job.company_name
              .toLocaleLowerCase()
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
