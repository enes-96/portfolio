import React from "react";
function Contact() {
  return (
    <section id="contact" className="h-screen w-3/4  m-auto my-8">
      <div className="bg-blue-800 text-zinc-200 p-10 rounded-3xl">
        <div className="  flex justify-between items-center">
          <h2 className="text-9xl w-1/2 font-semibold ">Contact</h2>
          <div className="w-1/2 ">
            <p className=" text-2xl leading-relaxed mb-4">
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
        <div></div>
      </div>
    </section>
  );
}
export default Contact;
