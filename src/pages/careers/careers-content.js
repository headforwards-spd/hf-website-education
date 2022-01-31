import IndexCard from "../../components/index-card/index-card";
import "../../components/index-card/index-page.scss";
import careersatheadforwards from "../../assets/images/careers-at-headforwards.jpg";
import hfg from "../../assets/images/hf-g.jpg";
import hfbeach from "../../assets/images/hf-beach-1.jpg";
import headforwardsjobs from "../../assets/images/headforwards-jobs.jpg";

function WhoWeAreContent() {
  return (
    <section className="pages">
      <IndexCard
        title="Working at headforwards"
        image={careersatheadforwards}
        description="At Headforwards, we believe we are unique. What does that feel like?"
      />
      <IndexCard
        title="Teams and tech"
        image={hfg}
        description="We are language agnostic. We love new tech and any opportunity to use it"
      />
      <IndexCard
        title="Living in cornwall"
        image={hfbeach}
        description="With its own culture, own climate and own pace of life, we’re lucky to live and work in one of the most unique places on…"
      />
      <IndexCard
        title="Jobs"
        image={headforwardsjobs}
        description="Apply for a specific job at Headforwards or just register your interest"
      />
    </section>
  );
}
export default WhoWeAreContent;
