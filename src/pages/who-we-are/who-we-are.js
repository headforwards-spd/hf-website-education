import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import groupPhoto from "../../assets/images/group-photo.jpg";
import WhoWeAreContent from "./who-we-are-content";
import { Helmet } from "react-helmet";
import "../../scss/main.scss";

function WhoWeAre() {
  const title = "Who we are";
  return (
    <>
      <Helmet title={title} titleTemplate={`%s | Headforwards`} />
      <div className="body">
        <Header
          isHomePage={false}
          title={title}
          subtitle={""}
          image={groupPhoto}
        />
        <main className="body">
          <WhoWeAreContent />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default WhoWeAre;
