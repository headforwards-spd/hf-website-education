import IndexCard from "../../components/index-card/index-card";
import "../../components/index-card/index-page.scss";
import team5 from "../../assets/images/team-5.jpg";
import hfsteal1 from "../../assets/images/hf-steal-1.jpg";
import hfc from "../../assets/images/hf-c.jpg";
import hfa from "../../assets/images/hf-a.jpg";
import hfb from "../../assets/images/hf-b.jpg";
import blackarrow from "../../assets/images/hf-arrow.black.svg";

function WhoWeAreContent() {
  return (
    <section className="pages">
      <IndexCard
        title="Software services"
        image={team5}
        description="We ensure clients get the right mix of quality and value for money, offering a co-created dedicated team or teams, standalone…"
      />
      <IndexCard
        title="People over process"
        image={hfsteal1}
        description="Headforwards builds its teams based on each job’s specific needs"
      />
      <IndexCard
        title="Create value through software"
        image={hfc}
        description="Every step of each Headforwards project, development is centred around the clients’ objectives"
      />
      <IndexCard
        title="Build strong relationships"
        image={hfa}
        description="Strong relationships are key to Headforwards’ ability to create value through software"
      />
      <IndexCard
        title="Create effective teams"
        image={hfb}
        description="At Headforwards each client has a dedicated team hand-picked to meet their specific needs"
      />
      <img className="arrow" src={blackarrow} alt="arrow" />
    </section>
  );
}
export default WhoWeAreContent;
