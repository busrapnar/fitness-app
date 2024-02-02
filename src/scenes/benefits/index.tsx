import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import HText from "../HText.tsx/HText";
import React from "react";
import Benefit from "./Benefit";
import BenefitPageGraphic from "@/assets/BenefitsPageGraphic.png"
import ActionButton from "@/shared/ActionButton";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "Molestias, inventore ut qui suscipit aliquid obcaecati quo ad cupiditate fuga. At, qui velit?"
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description: "Molestias, inventore ut qui suscipit aliquid obcaecati quo ad cupiditate fuga. At, qui velit?"
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description: "Molestias, inventore ut qui suscipit aliquid obcaecati quo ad cupiditate fuga. At, qui velit?"
  }
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-20"

    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/*HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <HText>MORE THAN JUST GYM.</HText>
          <p className="my-5 text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident, numquam qui illo maxime repellat amet! Molestias, inventore ut qui suscipit aliquid obcaecati quo ad cupiditate fuga. At, qui velit?
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage} />
          ))}
        </motion.div>
        {/*GRAPHICS AND DESCRIPTION*/}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/*GRAPHICS*/}
          <img 
          className="mx-auto"
          alt=""
          src={BenefitPageGraphic}
          />

          
          {/*DESCRIPTION*/}
          <div>
            {/*TITLE*/}
            <div className="relative ">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 }
                }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/*DESCRIPT */}
            <motion.div
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
            >
              <p className="my-5 ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
              <p className="mb-5">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
            </motion.div>

            {/*BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[1]">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits