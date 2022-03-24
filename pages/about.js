import React from "react";
import { Header, Footer, ProfileCard } from "components";
import { setTitle } from "utils/setTitle";

function about(props) {
  return (
    <div>
      <Header />
      {setTitle("About us")}
      <div className="text-center text-primary text-4xl pt-10  font-bold">
        Aspire Farther
      </div>
      <div className=" mx-28 text-center text-xl leading-10 mb-16 xs:mx-2 xs:mt-10">
        By our mission, we aspire farther in the pursuit of equal opportunities
        for all through education.
        <br />
        We fulfill this mission by developing innovative learning methods,
        cutting-edge experience with our groundbreaking platformm
        <br /> and building a creative and diverse team who positively impact
        their communitites.
      </div>
      <div className="flex w-full py-20 items-center justify-center bg-light ">
        <img
          className="w-1/4"
          src="/icons/about.svg"
          width="100%"
          height="auto"
        />
        <div className="mr-20">
          <h2 className="text-4xl text-primary font-bold">Our Vision</h2>
          <p className="text-xl">An inclusive world for every work force.</p>
        </div>
      </div>

      <div className="flex  py-20 items-center flex-row-reverse w-full justify-center bg-ter">
        <img
          className="w-1/4"
          src="/icons/learn.svg"
          width="100%"
          height="auto"
        />
        <div className="mr-20">
          <h2 className="text-4xl text-primary font-bold ">Our Mission</h2>
          <p className="text-xl">Enable equal opportunitities for everyone</p>
        </div>
      </div>

      <div>
        <div className="text-center text-4xl text-primary mt-40 xs:mt-10">
          Innovative learning methods
        </div>
        <div>
          <p className="  mx-28 text-center text-xl leading-10 my-10 xs:mx-2 ">
            We believe that by giving people wonderful tools, you allow them to
            do amazing things. When we created QUARTENION, we wanted to design
            something really unique, a platform that would bring the classroom
            experience online and also be so fun and easy to use. to make this
            possible, we brought together the most innovative creators from
            diverse backgrounds to push the boundaries of experience.
          </p>
        </div>
        <div className="text-center text-4xl text-primary  ">
          Cutting-edge learning experiences
        </div>
        <div className="  mx-28 text-center text-xl leading-10 my-10 xs:mx-2 ">
          Our goal in online learning is to provide you with the best experience
          from leading faculties and experts who help you develop cutting-edge
          skills based on real-world work experience. In addition, we offer you
          a whole new way to make learning not only enjoyable, but also
          effective with champions who guide you to success.
        </div>
        <div className="text-center text-4xl text-primary  ">
          Team of great minds united to win
        </div>
        <div>
          <p className="  mx-28 text-center text-lg leading-6 my-10 xs:mx-2 ">
            At QUARTENION, you will meet a team that works all over the world,
            each one actively contributing to the fulfillment of our objectives.
            Our vision has brought together people from different backgrounds,
            with diverse skills, mindsets and assets, so that we progress
            consistently as a team.
          </p>
        </div>
        <div className="">
          <ProfileCard />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default about;
