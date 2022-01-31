import IndexCard from "../../components/index-card/index-card";
import "../../components/index-card/index-page.scss";
import hfi from "../../assets/images/hf-i.jpg";
import hff from "../../assets/images/hf-f.jpg";
import hfg from "../../assets/images/hf-g.jpg";
import hfe from "../../assets/images/hf-e.jpg";
import headforwards20 from "../../assets/images/headforwards-20.jpg";
import blackarrow from "../../assets/images/hf-arrow.black.svg";

function WhoWeAreContent() {
  return (
    <section className="pages">
      <IndexCard
        title="Working model"
        image={hfi}
        description="Headforwards offers two engagement models to ensure you get the right mix of quality and value for money"
      />
      <IndexCard
        title="Collaboration"
        image={hff}
        description="Headforwards works closely with you to deliver software that creates value for your organisation"
      />
      <IndexCard
        title="Do the right thing"
        image={headforwards20}
        description="It’s all about creating a culture of openness, transparency, and trust"
      />
      <IndexCard
        title="Continuous delivery"
        image={hfg}
        description="By delivering new functionality into production every day Headforwards continuously creates business value for clients across…"
      />
      <IndexCard
        title="Mobbing"
        image={hfe}
        description="Mob programming is a chance to apply a whole team’s ideas and knowledge to one project"
      />
      <img className="arrow" src={blackarrow} alt="arrow" />
    </section>
  );
}
export default WhoWeAreContent;
