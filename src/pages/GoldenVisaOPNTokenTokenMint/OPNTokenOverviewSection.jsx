import { Text } from "../../components/Text/index";
import { Heading } from "../../components/HeadingMint/index";
import { Button } from "../../components/Button/index";
import ChainProfile from "../../components/ChainProfile";
import InvestmentProfile from "../../components/InvestmentProfile";
import PublicSaleRow from "../../components/PublicSaleRow";
import UserProfile from "../../components/UserProfile";
import React, { Suspense } from "react";

const featureList = [
  {
    investmentImage: "images/img_investment_sele.svg",
    investmentText: "Investment Potential",
  },
  {
    investmentImage: "images/img_user_profile_fo.svg",
    investmentText: (
      <>
        Exclusive
        <br />
        Access
      </>
    ),
  },
  {
    investmentImage: "images/img_ai_network_spar.svg",
    investmentText: (
      <>
        Global
        <br />
        Recognition
      </>
    ),
  },
];
const statList = [
  { userName: "Name", userIOPn: "IOPn" },
  { userName: "Symbol", userIOPn: "OPN" },
  { userName: "Decimal", userIOPn: "18" },
];
const chartLegendList = [
  { publicSaleText: "Public Sale", percentageText: "70%" },
  { publicSaleText: "Team", percentageText: "15%" },
  { publicSaleText: "Ecosystem", percentageText: "10%" },
  { publicSaleText: "Public Sale", percentageText: "70%" },
];

export default function OPNTokenOverviewSection() {
  return (
    <>
      {/* o p n token overview section */}
      <div className="mt-[180px] flex flex-col items-center">
        <div className="container-xs flex flex-col gap-20 lg:gap-20 lg:px-5 md:gap-[60px] md:px-5 sm:gap-10">
          <div className="mx-[126px] flex flex-col items-center gap-[30px] md:mx-0">
            <Button
              size="sm"
              className="min-w-[180px] rounded-[18px] font-medium uppercase"
            >
              About OPN Token
            </Button>
            <Text
              size="visa_desktop_headers_h2"
              as="p"
              className="self-stretch text-center leading-[105%] lg:text-[48px] sm:text-[38px]"
            >
              Learn about the OPN Token and its role in the IOPn ecosystem
            </Text>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 md:flex-col">
              <div className="flex w-full flex-col gap-[60px] rounded-[20px] bg-light_base p-10 sm:gap-[30px] sm:p-4">
                <div className="flex flex-col items-start gap-3.5">
                  <Text
                    size="visa_desktop_headers_h3"
                    as="p"
                    className="md:text-[28px] sm:text-[22px]"
                  >
                    What is the OPN Token?
                  </Text>
                  <Text
                    size="visa_desktop_body_text_20"
                    as="p"
                    className="w-full leading-[140%] !text-dark-1 sm:text-[14px]"
                  >
                    By purchasing IOPn tokens, you enter an exciting
                    lottery-style system with the extraordinary chance to win a
                    coveted UAE Golden Visa. This prestigious visa offers
                    unparalleled residency benefits, including tax advantages,
                    business ownership opportunities, and access to world-class
                    healthcare and education.
                  </Text>
                </div>
                <div>
                  <div className="flex gap-[100px] md:flex-row sm:flex-row sm:gap-[25px]">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {statList.map((d, index) => (
                        <UserProfile {...d} key={"statsList" + index} />
                      ))}
                    </Suspense>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col gap-12 rounded-[20px] border border-solid border-gray-300 bg-white-0 p-10 shadow-xs sm:p-4">
                <div className="flex flex-col items-start gap-3.5">
                  <Text
                    size="visa_desktop_headers_h3"
                    as="p"
                    className="md:text-[28px] sm:text-[22px]"
                  >
                    Benefits of OPN Token
                  </Text>
                  <Text
                    size="visa_desktop_body_text_20"
                    as="p"
                    className="w-full leading-[140%] !text-dark-1 sm:text-[14px]"
                  >
                    Are you ready to experience the opulence and excitement of
                    the UAE? The IOPn token is your golden ticket to this
                    extraordinary destination.
                  </Text>
                </div>
                <div className="mb-1.5 flex gap-4 md:flex-col">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {featureList.map((d, index) => (
                      <InvestmentProfile {...d} key={"featuresList" + index} />
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>
            <div className="flex gap-4 md:flex-col">
              <div className="flex w-[32%] flex-col gap-[140px] rounded-[20px] bg-gradient1 p-12 lg:gap-[105px] md:w-full md:gap-[105px] md:p-5 sm:gap-[70px] sm:p-4">
                <Text
                  size="visa_desktop_headers_h3"
                  as="p"
                  className="leading-[110%] !text-white-0 md:text-[28px] sm:text-[22px]"
                >
                  OPN Token Technical Specifications
                </Text>
                <div className="flex flex-col gap-4">
                  <ChainProfile />
                  <ChainProfile
                    chainImage="images/img_coin_share_streamline_core.svg"
                    chainLabel="Total Supply"
                    chainName="50 Billion"
                  />
                </div>
              </div>
              <div className="h-[616px] flex-1 bg-[url(/public/images/img_chart_legend.svg)] bg-cover bg-no-repeat lg:h-auto md:h-auto md:self-stretch">
                <div className="mt-12 flex items-start justify-between gap-5 md:flex-col">
                  <div className="ml-[62px] mt-3.5 flex h-[488px] w-[52%] flex-col items-center justify-center bg-[url(/public/images/img_chart_mint.png)] bg-cover bg-no-repeat px-14 py-52 lg:bg-[length:100%_100%] lg:py-8 md:ml-0 md:h-[800px] md:bg-[length:100%_100%] md:w-full md:p-5 sm:p-4 sm:h-[390px]">
                    <div className="flex flex-col items-center">
                      <Heading
                        size="visa_desktop_headers_h4"
                        as="h1"
                        className="md:text-[26px] sm:text-[24px]"
                      >
                        70%
                      </Heading>
                      <Text
                        size="visa_desktop_body_text_16"
                        as="p"
                        className="relative mt-[-2px] !text-dark-2"
                      >
                        Public Sale
                      </Text>
                    </div>
                  </div>
                  <div className="flex w-[38%] flex-col gap-[84px] self-center lg:gap-[84px] md:w-full md:gap-[63px] sm:gap-[42px]">
                    <div className="flex flex-col items-start gap-[18px] md:ml-4 sm:ml-4">
                      <Text
                        size="visa_desktop_headers_h3"
                        as="p"
                        className="w-[76%] leading-[110%] lg:w-full md:w-full md:text-[28px] sm:text-[22px]"
                      >
                        Token Allocation
                      </Text>
                      <Text
                        size="visa_desktop_body_text_20"
                        as="p"
                        className="w-[86%] leading-[140%] !text-dark-1 lg:w-full md:w-full"
                      >
                        Revolutionary token designed to offer a unique
                        opportunity to win a coveted UAE Golden Visa.
                      </Text>
                    </div>
                    <div className="flex flex-col gap-4">
                      <Suspense fallback={<div>Loading feed...</div>}>
                        {chartLegendList.map((d, index) => (
                          <PublicSaleRow {...d} key={"legendList" + index} />
                        ))}
                      </Suspense>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
