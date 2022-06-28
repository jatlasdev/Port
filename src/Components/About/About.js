import "./About.css";
import Bitmoji from "../../Assets/bitmoji.png";
import School from "../../Assets/schoolbg.jpg";
import Graduation from '@iconscout/react-unicons/icons/uil-graduation-cap'

const About = () => {
  return (
    <div className="a-wrapper">
      <div className="a-intro">
        <span>Title</span>
        <span className="a-intro-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci tenetur, corrupti ipsum incidunt laborum cum laboriosam maiores rerum quibusdam.</span>
      </div>
      <div className="a-cards">
        <div className="a-card">
          <span>Item 1</span>
          <Graduation />
        </div>
      </div>
    </div>
  );
};

export default About;
