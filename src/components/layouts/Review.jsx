import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import Image from "../Image";
import reviewer1 from "../../assets/Ellipse 19.png";
import reviewer2 from "../../assets/Image110.png";
import reviewer3 from "../../assets/Image111.png";

const Review = () => {
  return (
    <>
      <div className="bg-white pt-[98px] pb-[135px]">
        <Container>
          <div className="text-center">
            <Heading
              text={"What Our Customers Say"}
              as={"h4"}
              className={"text-[55px] font-medium text-mClr pb-[64px]"}
            />
          </div>
          <div className="flex gap-x-6">
            <div className="w-[410px] bg-[#F9F9F7] rounded-sm py-[45px] px-[35px]">
              <Heading
                text={"“The best restaurant”"}
                as={"h5"}
                className={"text-reviewp font-bold text-2xl"}
              />
              <Heading
                text={
                  "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles."
                }
                as={"p"}
                className={"text-pClr text-lg pt-6 pb-8"}
              />
              <hr />
              <div className="flex gap-x-5 pt-8">
                <Image src={reviewer1} alt={reviewer1} className={""} />
                <div className="pt-2">
                  <Heading
                    text={"Sophire Robson"}
                    as={"h5"}
                    className={"text-4 font-bold text-mClr"}
                  />
                  <Heading
                    text={"Los Angeles, CA"}
                    as={"p"}
                    className={"text-4  text-mClr"}
                  />
                </div>
              </div>
            </div>
            <div className="w-[410px] bg-[#F9F9F7] rounded-sm py-[45px] px-[35px]">
              <Heading
                text={"“Simply delicious”"}
                as={"h5"}
                className={"text-reviewp font-bold text-2xl"}
              />
              <Heading
                text={
                  "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented."
                }
                as={"p"}
                className={"text-pClr text-lg pt-6 pb-8"}
              />
              <hr />
              <div className="flex gap-x-5 pt-8">
                <Image src={reviewer2} alt={reviewer2} className={""} />
                <div className="pt-2">
                  <Heading
                    text={"Matt Cannon"}
                    as={"h5"}
                    className={"text-4 font-bold text-mClr"}
                  />
                  <Heading
                    text={"San Diego, CA"}
                    as={"p"}
                    className={"text-4  text-mClr"}
                  />
                </div>
              </div>
            </div>
            <div className="w-[410px] bg-[#F9F9F7] rounded-sm py-[45px] px-[35px]">
              <Heading
                text={"“The best restaurant”"}
                as={"h5"}
                className={"text-reviewp font-bold text-2xl"}
              />
              <Heading
                text={
                  "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles."
                }
                as={"p"}
                className={"text-pClr text-lg pt-6 pb-8"}
              />
              <hr />
              <div className="flex gap-x-5 pt-8">
                <Image src={reviewer3} alt={reviewer3} className={""} />
                <div className="pt-2">
                  <Heading
                    text={"Andy Smith"}
                    as={"h5"}
                    className={"text-4 font-bold text-mClr"}
                  />
                  <Heading
                    text={"San Francisco, CA"}
                    as={"p"}
                    className={"text-4  text-mClr"}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Review;
