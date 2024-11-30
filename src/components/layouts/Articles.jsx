import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Button from "../Button";
import Image from "../Image";
import burger from "../../assets/Burger.png";
import blgaimA from "../../assets/Mask1.png";
import blgaimB from "../../assets/Mask2.png";
import blgaimC from "../../assets/Mask3.png";
import blgaimD from "../../assets/Mask4.png";

const Articles = () => {
  return (
    <>
      <div className="bg-cntntBgClr py-[121px]">
        <Container>
          <div className="flex justify-between">
            <Heading
              text={"Our Blog & Articles"}
              as={"h4"}
              className={"text-mClr font-medium text-[55px]"}
            />
            <Button
              btnText={"Read All Articles"}
              className={
                "w-[192px] h-[64px] bg-reviewp rounded-full text-white"
              }
            />
          </div>
          <div className="flex mt-[65px] gap-x-6">
            <div className="w-[80%]">
              <Image src={burger} alt={burger} />
              <Heading
                text={"January 3, 2023"}
                as={"p"}
                className={"p-4 text-base font-medium text-reviewpA "}
              />
              <Heading
                text={
                  "The secret tips & tricks to prepare a perfect burger & pizza for our customers"
                }
                as={"p"}
                className={"text-xl font-medium text-mClr p-4 "}
              />
              <Heading
                text={
                  "Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas."
                }
                as={"p"}
                className={"p-4 text-base font-medium text-pClr"}
              />
            </div>
            <div className="flex">
              <div className="flex flex-col">
                <div className="">
                  <div className="">
                  <Image src={blgaimA} alt={blgaimA} />
                  </div>
                  <div className="p-4 pr-[53px]">
                    <Heading
                      text={"January 3, 2023"}
                      as={"p"}
                      className={"text-sm font-medium text-reviewpA"}
                    />
                    <Heading
                      text={
                        "How to prepare the perfect french fries in an air fryer"
                      }
                      as={"p"}
                      className={"text-xl font-medium text-mClr"}
                    />
                  </div>
                </div>
                <div className="">
                  <div className="">
                  <Image src={blgaimB} alt={blgaimB} />
                  </div>
                  <div className="p-4 pr-[53px]">
                    <Heading
                      text={"January 3, 2023"}
                      as={"p"}
                      className={"text-sm font-medium text-reviewpA"}
                    />
                    <Heading
                      text={
                        "How to prepare the perfect french fries in an air fryer"
                      }
                      as={"p"}
                      className={"text-xl font-medium text-mClr"}
                    />
                  </div>
                </div>
               
              </div>
              <div className="flex flex-col">
                <div className="">
                  <Image src={blgaimC} alt={blgaimC} />
                  <div className="p-4">
                    <Heading
                      text={"January 3, 2023"}
                      as={"p"}
                      className={"text-sm font-medium text-reviewpA"}
                    />
                    <Heading
                      text={
                        "How to prepare the perfect french fries in an air fryer"
                      }
                      as={"p"}
                      className={"text-xl font-medium text-mClr"}
                    />
                  </div>
                </div>
                <div className="">
                  <Image src={blgaimD} alt={blgaimD} />
                  <div className="p-4">
                    <Heading
                      text={"January 3, 2023"}
                      as={"p"}
                      className={"text-sm font-medium text-reviewpA"}
                    />
                    <Heading
                      text={
                        "How to prepare the perfect french fries in an air fryer"
                      }
                      as={"p"}
                      className={"text-xl font-medium text-mClr"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Articles;
