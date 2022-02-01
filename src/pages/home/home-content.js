import Introduction from "../../components/introduction/introduction";
import Quote from "../../components/quote/quote";
import Postit from "../../components/postit/postit";
import tobyandcraig from "../../assets/images/toby-and-craig.jpg";
import svg4 from "../../assets/images/004.svg";
import team2 from "../../assets/images/team-2.jpg";
import "./home.scss";

function HomeContent() {
  const introduction = {
    title: "",
    content: [
      "Headforwards is an outsource software development company.",
      "Using Agile principles and dedicated teams recruited specifically for their clients, Headforwards delivers software that creates real business value.",
    ],
  };

  return (
    <div>
      <div className="intro">
        <Introduction introduction={introduction} />
      </div>
      <section className=" section hasImage">
        <img className="image" src={tobyandcraig} alt={"People Over Process"} />

        <section className="components">
          <section className="hero hasTitle">
            <h2>People over Process</h2>
            <section className="markdown">
              <div className="markdown">
                <p>
                  Developers are recruited specifically for a client’s needs and
                  teams are self-organising with the responsibility of producing
                  software that delivers business value.
                </p>
              </div>
              <Quote
                quote="It's about picking the right people for each client, rather than running a bench."
                name="Toby Parkins"
                title="DIRECTOR & CO-FOUNDER"
              />
              <Quote
                quote="If something changes in our client's world, they've got to adapt, they've got to look for a new competitive advantage in their software."
                name="Craig Girvan"
                title="DIRECTOR & CO-FOUNDER"
              />
            </section>
          </section>
        </section>
      </section>
      <section className=" section isRightImage hasImage">
        <Postit
          isRightImage={true}
          className="isRightImage postit"
          image={svg4}
          alt={"People Over Process"}
        />
        <section className="components">
          <section className="hero hasTitle">
            <h2>Building partnerships with clients</h2>
            <section className="markdown">
              <div className="markdown">
                <p>
                  Headforwards looks to develop trust between themselves and
                  their client's by continuously delivering business value.
                </p>
              </div>
              <Quote
                quote="We want to be a partner to our clients, to develop long-term relationships with trust on both sides."
                name=""
                title=""
              />
            </section>
          </section>
        </section>
      </section>
      <section className=" section hasImage">
        <img className="image" src={team2} alt={"People Over Process"} />
        <section className="components">
          <section className="hero hasTitle">
            <h2>Careers without compromise</h2>
            <section className="markdown">
              <div className="markdown">
                <p>
                  Headforwards is based in one of the most beautiful and
                  inspiring parts of the UK - at the same time working at the
                  forefront of professional technical excellence.
                </p>
              </div>
              <Quote
                quote="There are no egos here. Team fit is the most important thing, so the people we hire need to be really positive and prepared to have each other’s backs."
                name=""
                title=""
              />
            </section>
          </section>
        </section>
      </section>
    </div>
  );
}
export default HomeContent;
