import IndexCard from "../../components/index-card/index-card";
import "../../components/index-card/index-page.scss";
import headforwards2 from "../../assets/images/headforwards-2.jpg";
import headforwards7 from "../../assets/images/headforwards-7.jpg";
import recruitheader from "../../assets/images/recruit-header-v.2.jpg";
import headforwards13 from "../../assets/images/headforwards-13.jpg";
import headforwards17 from "../../assets/images/headforwards-17.jpg";
import blackarrow from "../../assets/images/hf-arrow.black.svg";

function WhoWeAreContent() {
  return (
    <section className="pages">
      <IndexCard
        title="what we believe"
        image={headforwards2}
        description="We believe clients get the greatest business value from software
            outsourcing when development teams are empowered to make…"
      />
      <IndexCard
        title="How we began"
        image={headforwards7}
        description="The brainchild of Craig Girvan and Toby Parkins, Headforwards was incorporated in 2011 and has grown into a company of well…"
      />
      <IndexCard
        title="How we recruit"
        image={recruitheader}
        description="Headforwards was founded on the principle of recruiting the right team for each client"
      />
      <IndexCard
        title="Whats it like here?"
        image={headforwards13}
        description="With regular catchups and strategy meetings, strong relationships between clients and teams grow fast"
      />
      <IndexCard
        title="Where are we going?"
        image={headforwards17}
        description="Headforwards has several strategic objectives for growth, powered by its core principles and its approach to client service"
      />
      <img className="arrow" src={blackarrow} alt="arrow" />
    </section>
  );
}
export default WhoWeAreContent;
