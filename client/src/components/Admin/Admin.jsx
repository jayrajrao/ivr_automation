import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Accept from "./utils/img/Accept.svg";
import Completed from "./utils/img/completed.svg";
import document from "./utils/img/document.svg";

const Admin = () => {
  return (
    <>
      {/* Hero section */}
      <div className="bg-black ">
        <div className="max-w-[800px] mt-[-95px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-purple-400 font-bold p-2 text-xl"
          >
            Admin panel overview
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="md:text-7xl sm:text-6xl text-2xl font-bold md:py-6 text-white"
          >
            Monitor The Data Here.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex justify-center items-center"
          >
            <p className="text-white md:text-5xl sm:text-4xl text-base font-bold">
              Structure data of
            </p>
            <ReactTyped
              strings={[" Students", " Mentors", " Admins"]}
              typeSpeed={120}
              backSpeed={140}
              loop
              className="text-purple-400 md:text-5xl sm:text-4xl text-base font-bold pl-4"
            />
          </motion.div>
          <a href="#Admin">
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="bg-black border-2 border-purple-400 w-52 rounded-md font-medium my-6 mx-auto px-6 py-3 text-white hover:bg-purple-400 hover:border-white hover:text-black  "
            >
              Scroll down
            </motion.button>
          </a>
        </div>
      </div>
      {/* Admin panel Route button section */}

      <div
        className="w-full flex flex-col items-center justify-center  bg-black py-16 px-4"
        id="Admin"
      >
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className=" mx-auto my-4 w-4/6 h-4/6" src={Accept} alt="/" />
          <div className="flex flex-col justify-center">
            <p className="text-purple-400 font-bold ">
              DATA ANALYTICS DASHBOARD
            </p>
            <h1 className="text-white md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Manage Data Accept & Reject
            </h1>
            <p className="text-white">
              This page allows administrators to review and manage student
              applications, with options to accept or reject each student based
              on their eligibility and qualifications.
            </p>

            <button className="bg-purple-400 text-black w-1/2 rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
              <Link to="/AcceptancePage">AcceptancePage</Link>
            </button>
          </div>
        </div>
        {/* 2nd */}

        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="mx-auto my-4 w-4/6 h-3/5" src={Completed} alt="/" />
          <div className="flex flex-col justify-center">
            <p className="text-purple-400 font-bold ">STUDENT DATA ANALYTICS</p>
            <h1 className="text-white md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Student Data Showcase
            </h1>
            <p className="text-white">
              This page displays the list of students whose applications have
              been either accepted or rejected, providing a clear overview of
              their status and any relevant details.
            </p>
            <button className="bg-purple-400 text-black w-1/2 rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
              Add pages
            </button>
          </div>
        </div>
        {/* 3rd
         */}
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="mx-auto my-4 w-4/6 h-4/6 " src={document} alt="/" />
          <div className="flex flex-col justify-center">
            <p className="text-purple-400 font-bold ">DOCUMENT DASHBOARD</p>
            <h1 className="text-white md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Document upload and review
            </h1>
            <p className="text-white">
              This page enables students to upload required documents for
              verification and review, ensuring that all necessary files are
              submitted for their application process.
            </p>
            <button className="bg-purple-400 text-black w-1/2 rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
              Add Pages
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
