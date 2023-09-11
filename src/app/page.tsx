"use client";

import Scramble from "react-scramble";
import dynamic from "next/dynamic";

import Card from "@/components/Card";

const Binary = dynamic(() => import("@/components/Binary"), { ssr: false });

const Events = [
  {
    name: "Websters",
    desc: "Webster's Web Development Competition beckons all aspiring web developers to showcase their skills and creativity, crafting innovative online experiences. 🕸",
    img: "https://news.sap.com/africa/files/2023/03/16/291419_GettyImages-1304050626_medium_jpg.jpg",
  },
  {
    name: "CodeChef",
    desc: "CodeChef invites all coding enthusiasts to a thrilling coding competition, where you can showcase your programming prowess and win exciting prizes. 👨‍💻",
    img: "https://i.pinimg.com/736x/a3/3a/16/a33a16ec072b3bb20442d7f709c406a5.jpg",
  },
  {
    name: "ComputerMania",
    desc: "ComputerMania offers a tech extravaganza filled with workshops, demos, and tech talks, perfect for anyone passionate about all things computer-related. 💻",
    img: "https://img.freepik.com/free-vector/binary-code-algorithm-digital-data-background_1017-30366.jpg",
  },
];

const Alumunis = [
  {
    name: "Piyush Pandey",
    img: "/piyush_pandey.jpeg",
    spec: "Fullstack Developer",
    batch: "2019-2023",
  },
  {
    name: "Suchak Barik",
    img: "/suchak_barik.jpeg",
    spec: "Fullstack Developer",
    batch: "2019-2023",
  },
  {
    name: "Avisekh Samal",
    img: "/avisekh_samal.jpeg",
    spec: "Fullstack Developer",
    batch: "2019-2023",
  },
];

export default function Home() {
  return (
    <main className="flex w-screen flex-col items-center justify-center overflow-x-hidden">
      {/* Section 1 */}
      <section className="w-full h-screen flex items-center justify-center relative">
        <Binary />
        <div className="text flex flex-col items-center justify-center">
          <div className="text-[10vw] md:text-[8vw] lg:text-[6vw] font-semibold z-50">
            &lt;
            <Scramble
              autoStart
              text="CodeBreakers"
              speed="medium"
              steps={[
                {
                  roll: 10,
                  action: "+",
                  type: "all",
                },
                {
                  action: "-",
                  type: "random",
                },
              ]}
            />
            /&gt;
          </div>
          <div className="text-[4vw] md:text-[3vw] lg:text-[1.5vw] desc  leading-[10px] font-FiraCode">
            We Are The Future 🚀
          </div>
        </div>
        <div className="bg-gradient-sec1 absolute w-full h-[20%] z-30 bottom-0"></div>
      </section>
      {/* Section 2 */}
      <section className="w-full flex items-center justify-center min-h-[70vh] flex-col">
        <div className="heading text-white text-[30px] mb-[30px]">
          Events We Organize
        </div>
        <div className="events w-[80%] md:px-8 py-10 rounded-xl md:gap-0 gap-10 flex justify-around items-center md:flex-row flex-col min-h-[270px] font-FiraCode">
          {Events.map((event, ind) => {
            return (
              <>
                <div
                  className="h-auto text-white flex flex-col gap-8 w-[90%] md:w-[30%] items-center justify-center text-center"
                  key={ind}
                >
                  <div className="text-3xl text-white font-semibold">
                    {event.name}
                  </div>
                  <div>{event.desc}</div>
                </div>
                {ind == Events.length - 1 ? (
                  <></>
                ) : (
                  <div className="w-[70%] h-1 md:w-1 md:h-[150px] rounded-[30px] bg-gray-500"></div>
                )}
              </>
            );
          })}
        </div>
      </section>
      {/* Section 3 */}
      <section className="w-full flex flex-col items-center justify-center py-20">
        <div className="heading text-white text-[30px] mb-[30px]">
          Contributers
        </div>
        <div className="flex gap-14 flex-col lg:flex-row flex-wrap max-w-[80vw] items-center justify-center">
          {Alumunis.map((item, ind) => {
            return (
              <Card
                key={ind}
                name={item.name}
                img={item.img}
                spec={item.spec}
                batch={item.batch}
              />
            );
          })}
        </div>
      </section>
      {/* section 4 */}
      <section className="w-full flex flex-col items-center justify-center py-20">
        <div
          className="contactcard font-FiraCode text-sm md:text-lg"
          style={{ tabSize: 4 }}
        >
          <pre>
            <span className="text-yellow-500">const</span> Contact ={" "}
            <span className="text-[#139ff7]">()</span> &rArr;{" "}
            <span className="text-[#139ff7]">&#123;</span> <br />
            &emsp;&emsp;&emsp;&emsp;
            <span className="text-gray-500">
              &frasl;* feel free to contact *&frasl;
            </span>{" "}
            <br />
            &emsp;&emsp;&emsp;&emsp;
            <span className="text-pink-600">return</span> &#123; <br />
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <span className="text-green-500">email</span> :
            &quot;codebreakersgcek01@gmail.com&quot; <br />
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <span className="text-green-500">insta</span> :
            &quot;instagram.com/codebreakersgcek&quot; <br />
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <span className="text-green-500">github</span> :
            &quot;github.com/codebreakersgcek&quot; <br />
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <span className="text-green-500">website</span> :
            &quot;codebreakersgcek.engineer&quot; <br />
            &emsp;&emsp;&emsp;&emsp;
            <span className="text-[#139ff7]">&#125;</span>
            <br />
            <span className="text-[#139ff7]">&#125;</span>
          </pre>
        </div>
      </section>
    </main>
  );
}
