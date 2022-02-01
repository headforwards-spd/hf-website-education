import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import headforwards1 from "../../assets/images/headforwards-1.jpg";
import HomeContent from "./home-content";
import { Helmet } from "react-helmet";
import "../../scss/main.scss";

function Home() {
  const title = "Forward thinking software";
  return (
    <>
      <Helmet title={title} titleTemplate={`%s | Headforwards`} />
      <div className="body">
        <Header
          isHomePage={true}
          title={"Forward thinking software"}
          subtitle={""}
          image={headforwards1}
        />
        <main className="body">
          <HomeContent />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Home;
