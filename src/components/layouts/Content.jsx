import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import contentA from "../../assets/content.png";
import Heading from "../Heading";
import { BsTelephone } from "react-icons/bs";
import { RiMailLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import Button from "../Button";

const Content = () => {
  return (
    <>
      <div className="bg-cntntBgClr pt-[120px] pb-[120px]">
        <Container>
          <Flex className={"gap-x-[80px]"}>
            <div className="relative flex w-[50%] group transform duration-300 hover:scale-110">
              <Image src={contentA} alt={contentA} className={"w-[599px] "} />
              <div className="h-[321px] w-[400px] bg-navbg rounded-lg p-[30px] absolute translate-x-1/2 translate-y-1/2 bottom-[110px] left-9 invisible group-hover:visible  transform duration-300 hover:scale-110 ">
                <Heading
                  text={"Come and visit us"}
                  as={"h5"}
                  className={"text-6 font-bold text-white pb-[45px]"}
                />
                <div className="flex items-center gap-6 pb-[25px]">
                  <BsTelephone className={"text-cntntBgClr"} />
                  <Heading
                    text={"(414) 857 - 0107"}
                    as={"p"}
                    className={"text-base text-cntntBgClr"}
                  />
                </div>
                <div className="flex items-center gap-6 pb-[25px]">
                  <RiMailLine className={"text-cntntBgClr"} />
                  <Heading
                    text={"happytummy@restaurant.com"}
                    as={"p"}
                    className={"text-base text-cntntBgClr"}
                  />
                </div>
                <div className="flex items-center gap-6">
                  <CiLocationOn className={"text-cntntBgClr w-8 h-8"} />
                  <Heading
                    text={
                      "837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles"
                    }
                    as={"p"}
                    className={"text-base text-cntntBgClr pr-7"}
                  />
                </div>
              </div>
            </div>
            <div className="w-[40%] pt-[80px]">
              <Heading
                text={"We provide healthy food for your family."}
                as={"h3"}
                className={"font-medium text-[55px]  text-mClr"}
              />
              <Heading
                text={
                  "Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate."
                }
                as={"p"}
                className={"font-medium text-lg text-mClr py-[24px]"}
              />

              <Heading
                text={
                  "At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event."
                }
                as={"p"}
                className={" text-lg text-pClr "}
              />

              <Button
                btnText={"More About Us"}
                className={
                  "w-[180px] h-[64px] border-2 rounded-[36px] hover:bg-hbrbg border-btntxt text-sm font-bold mt-[40px]"
                }
              />
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Content;



