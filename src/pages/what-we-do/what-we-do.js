import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import postit2 from "../../assets/images/postit-2.jpg";
import WhatWeDoContent from "./what-we-do-content";
import { Helmet } from "react-helmet";
import "../../scss/main.scss";

function WhatWeDo() {
  const title = "What we do";
  return (
    <>
      <Helmet title={title} titleTemplate={`%s | Headforwards`} />
      <div className="body">
        <Header
          isHomePage={false}
          title={title}
          subtitle={""}
          image={postit2}
        />
        <main className="body">
          <WhatWeDoContent />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default WhatWeDo;
