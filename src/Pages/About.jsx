import expressLogo from "../assets/expressjs.svg";
import tailwindLogo from "../assets/tailwind-css.svg";
import mySqlLogo from "../assets/mysql_logo.png";
const About = () => {
  return (
    <section
      className="m-16 xl:m-0 flex justify-center items-center"
      id="about"
    >
      <div>
        <h1 className="pb-16 text-4xl font-bold">About me</h1>
        <div className="aboutElement flex flex-col xl:flex-row">
          <div className="description flex flex-col max-w-max xl:max-w-xxs">
            <h2 className="text-2xl">
              I'm Christian GROS, FullStack Developer.
            </h2>
            <p className="pt-6 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              dolorum voluptatibus numquam omnis voluptates hic odio, tempora,
              autem deleniti ab saepe ducimus inventore debitis sapiente beatae
              vitae iste animi veritatis nesciunt reiciendis doloremque neque
              fugit et? Labore, numquam, sapiente voluptatem tempora error
              officia nisi deleniti possimus accusantium assumenda alias ea
              libero sunt a eius neque dolore. Distinctio accusamus,
              dignissimos, aliquam expedita nostrum quis totam eaque corrupti
              unde maxime provident obcaecati impedit doloremque officia qui
              alias repellendus, neque non nisi ad nihil consequuntur facilis
              eum quidem. Cumque ducimus nisi ab ipsum molestias aspernatur
              tempora recusandae vero, quaerat vitae magnam delectus quas unde
              beatae, explicabo consequuntur illum repellat, praesentium
              dolores! Repudiandae hic, delectus provident rem labore earum
              officia facere molestias quis magni omnis soluta .
            </p>

            <button className="mt-10 mb-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              <i className="fa-solid fa-file-arrow-down"></i> Download CV
            </button>
          </div>
          <div className="skills pl-0 xl:pl-32 flex flex-col justify-center items-center ">
            <h2 className="text-2xl ">My Skills</h2>
            <div className="m-6 grid grid-rows-3 grid-flow-col xl:gap-20 gap-10">
              <div className="flex flex-col  justify-center items-center ">
                <i className="fab fa-node fa-5x" aria-hidden="true"></i>
                <h2>Node.js</h2>
              </div>
              <div className="flex flex-col  justify-center items-center ">
                <i className="fab fa-git fa-5x" aria-hidden="true"></i>
                <h2>Git</h2>
              </div>

              <div
                className="flex flex-col justify-center items-center"
                data-sr-id="16"
              >
                <img
                  className=" w-16 h-16"
                  src="https://img.icons8.com/color/48/000000/mongodb.png"
                  alt="MongoDB icon"
                />
                <div className="skill__name">MongoDB</div>
              </div>
              <div
                className="flex flex-col justify-center items-center"
                data-sr-id="16"
              >
                <img
                  className=" w-16 h-16"
                  src={expressLogo}
                  alt="Express.js icon"
                />
                <div>Express.js</div>
              </div>
              <div className="flex flex-col  justify-center items-center ">
                <i className="fab fa-github fa-5x" aria-hidden="true"></i>
                <h2>GitHub</h2>
              </div>
              <div
                className="flex flex-col justify-center items-center"
                data-sr-id="16"
              >
                <img
                  className=" w-16 h-16"
                  src={tailwindLogo}
                  alt="Express.js icon"
                />
                <div>Tailwind</div>
              </div>
              <div className="flex flex-col  justify-center items-center ">
                <i className="fab fa-js fa-5x" aria-hidden="true"></i>
                <h2>JavaScript</h2>
              </div>
              <div className="flex flex-col  justify-center items-center ">
                <i className="fab fa-react fa-5x" aria-hidden="true"></i>
                <h2>React</h2>
              </div>
              <div
                className="flex flex-col justify-center items-center"
                data-sr-id="16"
              >
                <img
                  className=" w-16 h-16"
                  src={mySqlLogo}
                  alt="Express.js icon"
                />
                <div>MySql</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
