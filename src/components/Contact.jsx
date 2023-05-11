import React, { useState, useEffect } from "react";

function Contact() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userTime, setUserTime] = useState(new Date());

  function handlePhoneCall() {
    window.open("tel:" + phoneNumber);
    setPhoneNumber("069181877895");
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setUserTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="contact"
      className="h-screen sm:w-3/4 custom:w-screen   m-auto mt-8 grid place-items-center"
    >
      <div className=" text-zinc-200 p-10 rounded-3xl grid place-items-center ">
        <div className="  sm:flex justify-between items-center ">
          <h2 className="2xl:text-9xl xl:text-8xl lg:text-7xl md:text-4xl sm:text-4xl custom:text-4xl  sm:w-1/2 font-semibold custom:text-center  ">
            Contact
          </h2>
          <div className="sm:w-1/2 flex flex-col custom:mt-4">
            <p className=" 2xl:text-2xl 2xl:leading-loose xl:text-xl xl:leading-relaxed md:text-md md:leading-relaxed mb-12">
              Let's chat! I'd love to hear from you. Whether you have a project
              in mind or just want to say hello, drop me a message using the
              form below or shoot me an email Looking forward to connecting with
              you!
            </p>
            <a
              href="mailto:enes.devinfo@gmail.com"
              id="email-wrapper"
              className=" 2xl:p-11 2xl:text-5xl xl:p-8 xl:text-2xl md:text-xl md:p-6 sm:text-lg sm:p-4 rounded-full text-right custom:p-4"
            >
              Click to email me.
            </a>
          </div>
        </div>
        <div className="2xl:text-4xl xl:text-3xl md:text-2xl sm:text-xl flex  xl:flex-row md:gap-16  sm:flex-col text-slate-200  xl:justify-between w-full my-24  custom:flex-col">
          <div className="xl:gap-y-14 xl:grid text-zinc-600 sm:flex sm:justify-between  sm:mb-14 custom:flex custom:justify-between custom:mb-16">
            <p onClick={handlePhoneCall}>+43 681 8187 7895</p>
            <p className="">
              Local Time:{" "}
              <span>
                {userTime.toLocaleTimeString("en-Us", {
                  timeZone: "Europe/Paris",
                  hour12: false,
                })}
              </span>
            </p>
          </div>
          <div className=" grid-row-2 grid grid-cols-3 gap-y-24 gap-x-24 ">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/enes-eren-780373274/"
            >
              LinkedIn
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/eneserendev"
            >
              Twitter
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/enes-96"
            >
              GitHub
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href=" https://dribbble.com/eneseren"
            >
              Dribble
            </a>
            <a target="_blank" rel="noopener noreferrer" href=" ">
              Blog
            </a>{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1ne2bqKaqVgVVXoKGQsPkxzxMw8URnYUT/view?usp=sharing"
            >
              CV
            </a>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
