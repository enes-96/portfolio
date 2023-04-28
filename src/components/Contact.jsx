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
      <div className=" text-zinc-200 p-10 rounded-3xl grid place-items-center ">
        <div className="  flex justify-between items-center ">
          <h2 className="text-9xl w-1/2 font-semibold ">Contact</h2>
          <div className="w-1/2 flex flex-col">
            <p className=" text-2xl leading-loose mb-12">
              Let's chat! I'd love to hear from you. Whether you have a project
              in mind or just want to say hello, drop me a message using the
              form below or shoot me an email Looking forward to connecting with
              you!
            </p>
            <a
              href="mailto:enes.devinfo@gmail.com"
              id="email-wrapper"
              className=" py-11  px-11 text-5xl rounded-full text-right "
            >
              Click to email me
            </a>
          </div>
        </div>
        <div className="text-4xl flex text-slate-200  justify-between w-full my-24  ">
          <div className="gap-y-24 grid text-zinc-600  ">
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
          <div className=" grid-row-2 grid grid-cols-3 gap-y-24 gap-x-24">
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
