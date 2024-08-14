import { Button } from "../../components/Button/index";
import { Img } from "../../components/ImgMint/index";
import { Heading } from "../../components/HeadingMint/index";
import { Input } from "../../components/Input/index";
import { Text } from "../../components/Text/index";
import React from "react";

export default function TokenMintSection() {
  return (
    <>
      {/* token mint section */}
      <div className="relative mt-[118px] h-[604px]">
        <Img
          src="images/img_background_copy.png"
          alt="Background Copy"
          className="absolute bottom-0 right-px top-0 my-auto h-[604px] w-[34%] object-contain opacity-60"
        />
        <div className="container-xs absolute bottom-0 left-0 right-0 top-0 my-auto flex h-max items-start justify-center max-[1440px]:px-5 max-[1050px]:relative max-[1050px]:flex-col max-[1050px]:px-5">
          <div className="flex w-[46%] flex-col max-[1050px]:w-full">
            <div className="flex flex-col items-start gap-[18px]">
              <div className="flex rounded-[18px] border border-solid border-dark-0 p-1.5">
                <Heading as="h2">Token Mint</Heading>
              </div>
              <Text
                size="visa_headers_h2"
                as="p"
                className="max-[1440px]:text-[48px]"
              >
                Mint OPN Tokens{" "}
              </Text>
            </div>
            <Text
              size="visa_desktop_body_text_20"
              as="p"
              className="mt-1 w-[90%] leading-[140%] !text-dark-1 max-[1440px]:w-full max-[1050px]:w-full max-[550px]:text-[15px]"
            >
              Our token&#39;s minting journey spans 500 days, ensuring a steady
              and controlled release into the market. This gradual approach
              helps maintain price stability and prevents market manipulation.
            </Text>
            <Text
              size="visa_desktop_body_text_20"
              as="p"
              className="mt-5 w-[90%] leading-[140%] max-[1440px]:w-full max-[1050px]:w-full max-[550px]:text-[15px] max-[550px]:mb-6"
            >
              <span>Act fast! Only&nbsp;</span>
              <span className="font-medium">
                120.75K OPN tokens remain for today&#39;s mint. Don&#39;t miss
                out on this opportunity. Daily cap enforced for fairness.
              </span>
            </Text>
          </div>
          <div className="flex flex-1 flex-col gap-[60px] self-center max-[1050px]:self-stretch max-[550px]:gap-[30px]">
            <div className="flex flex-col items-end gap-6">
              <div className="flex w-[90%] flex-col items-start gap-2 max-[1440px]:w-full max-[1050px]:w-full">
                <Heading
                  size="visa_desktop_body_label_16"
                  as="h3"
                  className="!text-grey max-[550px]:text-[14px]"
                >
                  You will pay
                </Heading>
                <Input
                  shape="round"
                  name="Payment Input"
                  placeholder={`\\$ 100`}
                  suffix={
                    <Img
                      src="images/img_ellipse_362.png"
                      alt="Ellipse 362"
                      className="h-[26px] w-[32px]"
                    />
                  }
                  className="self-stretch max-[550px]:text-[18px]"
                />
              </div>
              <div className="flex w-[90%] flex-col items-start gap-2 max-[1440px]:w-full max-[1050px]:w-full">
                <Heading
                  size="visa_desktop_body_label_16"
                  as="h4"
                  className="!text-grey"
                >
                  You will get
                </Heading>
                <Input
                  shape="round"
                  name="Token Input"
                  placeholder={`OPN 1250`}
                  suffix={
                    <Img
                      src="images/img_ellipse_362_26x32.png"
                      alt="Ellipse 362"
                      className="h-[26px] w-[32px]"
                    />
                  }
                  className="self-stretch max-[550px]:text-[18px]"
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-6">
              <Button
                variant="gradient"
                shape="round"
                color="blue_700_01_blue_800_01"
                rightIcon={
                  <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-white-0">
                    <Img
                      src="images/img_arrowleft_blue_800.svg"
                      alt="Arrow Left"
                      className="h-[18px] w-[18px]"
                    />
                  </div>
                }
                className="self-stretch gap-[34px] font-medium capitalize"
              >
                Mint
              </Button>
              <div className="flex items-center gap-2.5">
                <Heading
                  size="iopn_desktop_navigation_button"
                  as="h1"
                  className="!text-accent-black"
                >
                  Connect wallet
                </Heading>
                <Button
                  color="accent_black"
                  size="xs"
                  variant="fill"
                  shape="circle"
                  className="w-[36px] !rounded-full !bg-black-0"
                >
                  <Img src="images/img_arrowleft_white_0.svg" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
