import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import head11 from "../../assets/images/head-11.jpg";
import HowWeWorkContent from "./how-we-work-content";
import { Helmet } from "react-helmet";
import "../../scss/main.scss";

function HowWeWork() {
  const title = "How we work";
  return (
    <>
      <Helmet title={title} titleTemplate={`%s | Headforwards`} />
      <div className="body">
        <Header isHomePage={false} title={title} subtitle={""} image={head11} />
        <main className="body">
          <HowWeWorkContent />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default HowWeWork;
