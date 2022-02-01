import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import careersatheadforwards from "../../assets/images/careers-at-headforwards.jpg";
import CareersContent from "./careers-content";
import "../../scss/main.scss";

function HowWeWork() {
  return (
    <div className="body">
      <Header
        isHomePage={false}
        title={"Careers"}
        subtitle={""}
        image={careersatheadforwards}
      />
      <main className="body">
        <CareersContent />
      </main>
      <Footer />
    </div>
  );
}

export default HowWeWork;
