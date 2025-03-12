import './App.css';
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import description from './components/description.js';
import Card from './components/card.jsx';
import experiences from './components/Experience.js';

function App() {
  return (
    <>
      <div className="bg-slate-800 text-white font-mono min-h-screen flex">
        {/* Left Side - Fixed */}
        <div className="fixed w-1/2 h-screen py-20 pl-70 flex flex-col justify-between">
          <div>
            <h2 className='text-4xl font-bold mb-3'>Christopher Edmund Haryanto</h2>
            <p className='text-2xl font-semibold mb-5'>Developer</p>
            <p className='text-wrap w-[20vw] text-gray-300'>
              I am eager to apply academic knowledge in a real-world setting.
            </p>
          </div>
          <div className="flex flex-row">
            <a href='https://www.linkedin.com/in/christopher-edmund/'>
              <FaLinkedin className='text-3xl text-white'/>
            </a>
            <a href='https://www.instagram.com/christ_edmund23/'>
              <FaInstagram className='text-3xl ml-8 text-white'/>
            </a>
            <a href='https://github.com/Christ-edmund23'>
              <FaGithub className='text-3xl ml-8 text-white'/>
            </a>
          </div>
        </div>

        {/* Right Side - Scrollable */}
        <div className="w-1/2 ml-[50%] p-20">
          <div className='mb-20'>
            <p className='mb-6 text-balance'>{description.desc}</p>
            <p className='mb-6 text-balance'>{description.desc2}</p>
            <p className='mb-6 text-balance'>{description.desc3}</p>
            <p className='mb-6 text-balance'>{description.desc4}</p>
          </div>
          {experiences.map((experience, index) => (
            <Card
              key={index}
              duration={experience.duration}
              title={experience.title}
              company={experience.company}
              description={experience.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;