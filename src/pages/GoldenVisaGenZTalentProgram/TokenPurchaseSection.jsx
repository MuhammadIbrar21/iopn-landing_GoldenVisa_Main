import { Button } from "../../components/ButtonGenz/index";
import { Img } from "../../components/ImgGenz/index";
import { Heading } from "../../components/HeadingGenz/index";
import { Input } from "../../components/InputGenz/index";
import { Text } from "../../components/TextGenz/index";
import React from "react";

export default function TokenPurchaseSection() {
  return (
    <>
      {/* token purchase section */}
      <div className="relative mt-[118px] h-[604px] self-stretch">
        <Img
          src="images/img_background_copy.png"
          alt="Background Image"
          className="absolute bottom-0 right-px top-0 my-auto h-[604px] w-[34%] object-contain opacity-60"
        />
        <div className="container-xs absolute bottom-0 left-0 right-0 top-0 my-auto flex h-max items-start justify-center max-[1440px]:px-5 max-[1050px]:relative max-[1050px]:flex-col max-[1050px]:px-5">
          <div className="flex w-[46%] flex-col gap-5 max-[1050px]:w-full">
            <div className="flex flex-col items-start gap-[30px]">
              <Button
                size="sm"
                color="undefined_undefined"
                className="min-w-[170px] rounded-[18px] font-medium uppercase"
              >
                Token purchase
              </Button>
              <Text
                size="visa_desktop_headers_h3"
                as="p"
                className="w-[90%] leading-[105%] !text-dark-0 max-[1440px]:w-full max-[1440px]:text-[48px] max-[1050px]:w-full"
              >
                <>
                  Purchase
                  <br />
                  OPN Tokens
                </>
              </Text>
            </div>
            <Text
              size="visa_desktop_body_text_20"
              as="p"
              className="w-[90%] leading-[140%] !text-dark-2 max-[1440px]:w-full max-[1050px]:w-full max-[1050px]:mb-2 max-[550px]:text-sm max-[550px]:mb-2"
            >
              Our token&#39;s minting journey spans 500 days, ensuring a steady
              and controlled release into the market. This gradual approach
              helps maintain price stability and prevents market manipulation.
            </Text>
          </div>
          <div className="flex flex-1 flex-col gap-[60px] self-center max-[1050px]:self-stretch max-[550px]:gap-[30px]">
            <div className="flex flex-col items-end gap-6">
              <div className="flex w-[90%] flex-col items-start gap-2 max-[1440px]:w-full max-[1050px]:w-full">
                <Heading as="h2">You will pay</Heading>
                <Input
                  shape="round"
                  name="Price Input"
                  placeholder={`\\$ 100`}
                  suffix={
                    <Img
                      src="images/img_ellipse_362_28x32.png"
                      alt="Ellipse 362"
                      className="h-[28px] w-[32px]"
                    />
                  }
                  className="gap-4 self-stretch max-[1050px]:text-[20px]"
                />
              </div>
              <div className="flex w-[90%] flex-col items-start gap-2 max-[1440px]:w-full max-[1050px]:w-full">
                <Heading as="h3">You will get</Heading>
                <Input
                  shape="round"
                  name="OPN Input"
                  placeholder={`OPN 1250`}
                  suffix={
                    <Img
                      src="images/img_ellipse_362.png"
                      alt="Ellipse 362"
                      className="h-[28px] w-[32px]"
                    />
                  }
                  className="gap-4 self-stretch max-[1050px]:text-[20px]"
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-6">
              <Button
                variant="gradient"
                shape="round"
                color="blue_700_blue_800_02"
                rightIcon={
                  <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-white-0">
                    <Img
                      src="images/img_arrowleft_blue_800_01.svg"
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
                  as="h4"
                  className="!text-accent-black"
                >
                  Connect wallet
                </Heading>
                <Button
                  size="xs"
                  variant="fill"
                  shape="circle"
                  className="w-[36px] !rounded-[18px]"
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
