import "./About.css";
import Bitmoji from "../../Assets/bitmoji.png";
import School from "../../Assets/schoolbg.jpg";
import Graduation from '@iconscout/react-unicons/icons/uil-graduation-cap'
import Brackets from '@iconscout/react-unicons/icons/uil-brackets-curly'
import User from '@iconscout/react-unicons/icons/uil-user'
import ACard from "../ACard/ACard";

const About = () => {
  const abouts = [
    {
      id: 1,
      img: <Graduation/>,
      title: 'Title 1',
      text:`Words \n\nWords`
    },
    {
      id: 2,
      img: <Brackets/>,
      title: "Title 2",
      text: `Words \n\nWords`
    },
    {
      id: 3,
      img: <User/>,
      title: "Title 3",
      text: `Words \n\nWords`
    }
  ]

  return (
    <div className="a-wrapper">
      <div className="a-intro">
        <span>Hi there!</span>
        <span>I'm Jeremy</span>
        <span className="a-intro-desc">I'm learning how to design and develop things. </span>
      </div>
      <div className="a-cards">
        {abouts.map((about) => {
          return(
            <ACard item={about}/>
          )
        })}
      </div>
    </div>
  );
};

export default About;
