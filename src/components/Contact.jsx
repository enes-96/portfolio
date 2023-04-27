import React from "react";
function Contact() {
  return (
    <section
      id="contact"
      className="h-screen w-3/4  m-auto mt-8 grid place-items-center"
    >
      <div className=" text-zinc-200 p-10 rounded-3xl grid place-items-center ">
        <div className="  flex justify-between items-center ">
          <h2 className="text-9xl w-1/2 font-semibold ">Contact</h2>
          <div className="w-1/2 ">
            <p className=" text-2xl leading-loose mb-12">
              Let's chat! I'd love to hear from you. Whether you have a project
              in mind or just want to say hello, drop me a message using the
              form below or shoot me an email Looking forward to connecting with
              you!
            </p>
            <p
              id="email-wrapper"
              className="bg-black py-8 px-8 text-3xl rounded-full"
            >
              seyitoffice@gmail.com
            </p>
          </div>
        </div>
        <div className="text-4xl flex text-slate-200 gap-48 my-24">
          <div className="gap-y-24 grid text-gray-500">
            <p>+43 681 8187 7895</p>
            <p>
              Local Time: <span> 23:34</span>
            </p>
          </div>
          <div className=" grid-row-2 grid grid-cols-3 gap-y-24 gap-x-24">
            <a href="linkedin.com">LinkedIn</a>
            <a href="twitter.com">Twitter</a>
            <a href="github.com">GItHub</a>
            <a href="dribble.com">Dribble</a>
            <a href="youtubecom">Youtube</a>
            <a href="cv">CV</a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
