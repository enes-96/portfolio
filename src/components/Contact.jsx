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
      className="h-screen w-3/4  m-auto mt-8 grid place-items-center"
    >
      <div className=" text-zinc-200 p-10 rounded-3xl grid place-items-center md:bg-black sm:bg-amber-500">
        <div className="  flex justify-between items-center ">
          <h2 className="2xl:text-9xl xl:text-7xl lg:text-6xl md:text-4xl sm:text-4xl  w-1/2 font-semibold ">
            Contact
          </h2>
          <div className="w-1/2 flex flex-col">
            <p className=" 2xl:text-2xl 2xl:leading-loose xl:text-xl xl:leading-relaxed md:text-md md:leading-relaxed mb-12">
              Let's chat! I'd love to hear from you. Whether you have a project
              in mind or just want to say hello, drop me a message using the
              form below or shoot me an email Looking forward to connecting with
              you!
            </p>
            <a
              href="mailto:enes.devinfo@gmail.com"
              id="email-wrapper"
              className=" 2xl:p-11 2xl:text-5xl xl:p-8 xl:text-2xl md:text-xl md:p-6 rounded-full text-right "
            >
              Click to email me
            </a>
          </div>
        </div>
        <div className="2xl:text-4xl xl:text-3xl md:text-2xl flex  xl:flex-row md:gap-16   sm:flex-col text-slate-200  xl:justify-between w-full my-24 ">
          <div className="xl:gap-y-24 xl:grid text-zinc-600 md:flex md:justify-between ">
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
            <a
              target="_blank"
              rel="noopener noreferrer"
              href=" https://dribbble.com/eneseren"
            >
              Blog
            </a>{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href=" https://dribbble.com/eneseren"
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
