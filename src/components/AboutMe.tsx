import Clip from './Experience/Clip';
import FadeInSection from './FadeInSection';
import pageStyles from './page.module.css';
const technologies = [
  'React',
  'Node.js',
  'TypeScript',
  'MongoDB',
  'Expressjs',
  'RESTful APIs',
  'NextJS',
  'Git',
  'Tailwindcss',
  'JavaScript'
];


function AboutMe() {

  return (
    <FadeInSection>
      <div id="aboutMe" className={`${pageStyles.section_spacing}`}>
        <div className={pageStyles.section_heading}>
          <span className={pageStyles.numbering}>01.</span> About Me</div>
        <div className="flex flex-col-reverse items-center md:justify-between md:flex-row md:space-x-10 md:pl-5">
          <div className={`${pageStyles.description} md:w-1/2 space-y-4`}>

            <button
              onClick={() => { window.open('/pdf/resume.pdf', '_blank', 'noopener, noreferrer') }}
              className={`${pageStyles.button} flex items-center`}>
              <span>
                Resume
              </span>
              <div className='w-5 h-5'>
                <Clip></Clip>
              </div>

            </button>
            <p>
              I'm a versatile software engineer with a strong grasp of both frontend and backend development, specializing in crafting seamless full stack applications. I excel in building efficient, user-centric solutions and have experience deploying web services. My passion lies in developing robust, end-to-end applications.
            </p>
            <p>
              Here are some of the technologies I am working with.
            </p>
            <div className={pageStyles.tag_container}>
              {technologies.map((tech, index) => (
                <div key={index} className={pageStyles.tag}>
                  {tech}
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/3 hover:scale-105 transition duration-300 ease-in-out">
            <img
              className="object-contain border-2 border-blue-500 rounded-lg shadow-lg mb-5"
              src="images/professional-picture.jpeg"
              alt="Professional"
              title="Yash Tibrewal"
            />
          </div>
        </div>
      </div>
    </FadeInSection>

  )
}

export default AboutMe;