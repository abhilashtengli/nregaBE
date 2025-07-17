import React from "react";

// first PDF to add in this Quotation call form letter and later on this current PDF
// PENDING // data comes frmo link 2
//Supply order date will be last submission date given by user
const ComparativeStatementPDF = ({
  gramPanchayat = "ಹಸೂಡಿ", //1
  taluka = "ಶಿವಮೊಗ್ಗ", //2
  district = "ಶಿವಮೊಗ್ಗ", //3
  address = "Kote Road, Shivamogga",
  year = "2020-2021", // 1
  date = "10/10/2020", // from date user input
  workName = "ಭದ್ರಾಪುರ ಗ್ರಾಮದ ಕೆಂಚಮ್ಮ ಕೋಂ ಹನುಮಂತಪ್ಪರವರ ಮನೆಯಲ್ಲಿ ಸೋಕ್ ಪೀಟ್ ನಿರ್ಮಾಣ ಕಾಮಗಾರಿ", //1
  workCode = "1524005018/IF/93393042892575291", //1
  tenderPublishDate = "14/10/2020", //from date user input
  tenderSubmissionDate = "", // from date user input + 2
  contractor1 = {
    //comes from the user input
    name: "Shantamma",
    gst: "18AABCU9603R1ZM",
    QuotationSubmissiondate: "" // from date user input + 2
  },
  contractor2 = {
    name: "Manikyam",
    gst: "18AABCU9603R1ZP",
    QuotationSubmissiondate: "" // from date user input + 1
  },
  contractor3 = {
    name: "Valli",
    gst: "18AABCU9603R1ZS",
    QuotationSubmissiondate: "" // from date user input + 3
  },
  materialData = [
    {
      slNo: 1,
      materialName: "0295-Stone Aggregate(single size):20 mm nominal size",
      quantity: "0.484",
      rate: "1504",
      contractor1Rate: "1100",
      contractor2Rate: "1200",
      contractor3Rate: "1300"
    },
    {
      slNo: 2,
      materialName: "0367-Portland Cement",
      quantity: "0.066",
      rate: "15000",
      contractor1Rate: "4500",
      contractor2Rate: "4800",
      contractor3Rate: "4700"
    },
    {
      slNo: 3,
      materialName: "0982-Coarse sand (zone III)",
      quantity: "0.579",
      rate: "11838",
      contractor1Rate: "1800",
      contractor2Rate: "1700",
      contractor3Rate: "1600"
    },
    {
      slNo: 4,
      materialName: "10-Miscellaneous /Contingencies charges",
      quantity: "1",
      rate: "160.32",
      contractor1Rate: "150",
      contractor2Rate: "160",
      contractor3Rate: "170"
    },
    {
      slNo: 5,
      materialName: "3-Display Board",
      quantity: "1",
      rate: "800",
      contractor1Rate: "700",
      contractor2Rate: "750",
      contractor3Rate: "780"
    }
  ]
}) => {
  const itemsPerPage = 12; // Items per page for comparative statement (landscape)
  const quotationItemsPerPage = 18; // Items per page for contractor quotations (portrait)
  const supplyOrderItemsPerPage = 15; // Reduced from 20 to 15 for better spacing
  const comparativePages = Math.ceil(materialData.length / itemsPerPage);
  const quotationPages = Math.ceil(materialData.length / quotationItemsPerPage);
  const supplyOrderPages = Math.ceil(
    materialData.length / supplyOrderItemsPerPage
  );

  const renderComparativePage = (pageNumber: number) => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = materialData.slice(startIndex, endIndex);
    const isFirstPage = pageNumber === 1;
    const isLastPage = pageNumber === comparativePages;

    return (
      <div
        key={`comparative-${pageNumber}`}
        className="w-full max-w-full mx-auto bg-white border-2 border-black mb-8"
        style={{
          height: "210mm", // Landscape: height is smaller
          width: "297mm", // Landscape: width is larger
          fontFamily: "Arial, sans-serif",
          fontSize: "10px",
          lineHeight: "1.2",
          padding: "8mm",
          boxSizing: "border-box"
        }}
      >
        {/* Header - Only on first page */}
        {isFirstPage && (
          <>
            {/* Header with logos */}
            <div className="flex items-center border-b-2 border-black justify-between pb-2 mb-1">
              <div className="w-16 h-16 flex-shrink-0">
                <img
                  src="/placeholder.svg?height=64&width=64"
                  alt="Karnataka Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="text-center flex-1 mx-4">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-lg font-bold">ಕರ್ನಾಟಕ</span>
                  <div className="w-8 h-8">
                    <img
                      src="/placeholder.svg?height=32&width=32"
                      alt="Center Emblem"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-lg font-bold">ಸರ್ಕಾರ</span>
                </div>
                <div className="text-sm font-semibold mb-1">
                  ಗ್ರಾಮ ಪಂಚಾಯತಿ, {gramPanchayat}, ತಾ|| {taluka}. ಜಿ|| {district}
                </div>
                <div className="text-xs mb-1">
                  ಮಹಾತ್ಮ ಗಾಂಧಿ ನರೇಗಾ ಯೋಜನೆ, ಕರ್ನಾಟಕ
                </div>
              </div>

              <div className="w-16 h-16 flex-shrink-0">
                <img
                  src="/placeholder.svg?height=64&width=64"
                  alt="MGNREGA Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="text-center  text-xs mb-1">
                ಕ್ರ.ಸಂ/ಗ್ರಾ.ಪಂ./ಮ.ರಾ.ಗ್ರಾ.ಉ.ಖಾ.ಯೋ/ದ.ಪ.ಅ.ತು.ಪ/{year}
              </div>
              <div className="text-right text-xs mb-2">ದಿನಾಂಕ: {date}</div>
            </div>
            <div className="text-center text-base font-bold mb-2 underline">
              ದರಪಟ್ಟಿಗಳ ತುಲನಾತ್ಮಕ ಪಟ್ಟಿ
            </div>

            <div className="text-[12px] mb-3 text-justify leading-relaxed">
              ಗ್ರಾಮ ಪಂಚಾಯತಿ ವ್ಯಾಪ್ತಿಯಲ್ಲಿ ಸನ್ {year} ನೇ ಸಾಲಿನ ಮಹಾತ್ಮ ಗಾಂಧಿ
              ರಾಷ್ಟ್ರೀಯ ಗ್ರಾಮೀಣ ಉದ್ಯೋಗ ಖಾತ್ರಿ ಯೋಜನೆಡಿ ಅನುಷ್ಠಾನಗೊಳಿಸುತ್ತಿರುವ
              <span className="font-semibold">
                {workName}({workCode})
              </span>{" "}
              ಕಾಮಗಾರಿ ಅನುಷ್ಠಾನ ಮಾಡಲು ಆಹ್ವಾನಿಸಿರುವ ದರಪಟ್ಟಿಗೆ ಅನುಗುಣವಾಗಿ ಸಾಮಗ್ರಿ
              ಸರಬರಾಜು ಮಾಡಲು ಬಂದಿರುವ ಸರಬರಾಜುದಾರರ ದರಪಟ್ಟಿಗಳ ತುಲನಾತ್ಮಕ ಪಟ್ಟಿ.
            </div>
          </>
        )}

        {/* Comparative Table */}
        <div className="w-full mb-3">
          <table className="w-full border-collapse border border-black text-[10px]">
            <thead>
              <tr className="bg-gray-100">
                <th
                  className="border border-black px-1 py-2 text-center font-bold"
                  style={{ width: "30px" }}
                >
                  ಕ್ರ. ಸಂ.
                </th>
                <th
                  className="border border-black px-1 py-2 text-center font-bold"
                  style={{ width: "120px" }}
                >
                  ಸಾಮಗ್ರಿ ಹೆಸರು
                </th>
                <th
                  className="border border-black px-1 py-2 text-center font-bold"
                  style={{ width: "40px" }}
                >
                  ಪ್ರಮಾಣ
                </th>
                <th
                  className="border border-black px-1 py-2 text-center font-bold"
                  style={{ width: "50px" }}
                >
                  ದರ
                  <br />
                  (as per SR)
                </th>
                <th
                  className="border border-black px-1 py-2 text-center font-bold"
                  style={{ width: "60px" }}
                >
                  ಸರಬರಾಜುದಾರ - 1<br />
                  {contractor1.name}
                  <br />
                  GST:{contractor1.gst}
                </th>
                <th
                  className="border border-black px-1 py-2 text-center font-bold"
                  style={{ width: "60px" }}
                >
                  ಸರಬರಾಜುದಾರ - 2<br />
                  {contractor2.name}
                  <br />
                  GST:{contractor2.gst}
                </th>
                <th
                  className="border border-black px-1 py-2 text-center font-bold"
                  style={{ width: "60px" }}
                >
                  ಸರಬರಾಜುದಾರ - 3<br />
                  {contractor3.name}
                  <br />
                  GST:{contractor3.gst}
                </th>
              </tr>
            </thead>
            <tbody>
              {pageData.map((item, index) => (
                <tr key={startIndex + index}>
                  <td className="border border-black px-1 py-2 text-center">
                    {item.slNo}
                  </td>
                  <td className="border border-black px-1 py-2 text-left break-all">
                    {item.materialName}
                  </td>
                  <td className="border border-black px-1 py-2 text-center">
                    {item.quantity}
                  </td>
                  <td className="border border-black px-1 py-2 text-center">
                    {item.rate}
                  </td>
                  <td className="border border-black px-1 py-2 text-center">
                    {item.contractor1Rate}
                  </td>
                  <td className="border border-black px-1 py-2 text-center">
                    {item.contractor2Rate}
                  </td>
                  <td className="border border-black px-1 py-2 text-center">
                    {item.contractor3Rate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer - Only on last page */}
        {isLastPage && (
          <div className="mt-4">
            <div className="text-xs mb-3 text-justify ">
              ಈ ಮೇಲ್ಕಂಡ ಸರಬರಾಜುದಾರಿಂದ ಬಂದಿರುವ ದರಪಟ್ಟಿಗಳಲ್ಲಿ{" "}
              <span className="underline font-semibold tracking-wide">
                {contractor1.name}
              </span>{" "}
              ರವರ ದರಗಳು ಕಡಿಮೆ ಇರುವುದರಿಂದ ಅವರ ದರಪಟ್ಟಿಯನ್ನು ಅಂಗೀಕರಿಸಿ, ಸಾಮಗ್ರಿ
              ಸರಬರಾಜು ಆದೇಶ ನೀಡಲು ಅನುಮೋದಿಸಲಾಯಿತು
            </div>

            <div className="flex justify-between mt-6">
              <div className="text-center">
                <div className="text-xs font-bold">ನರೇಗಾ ತಾಂತ್ರಿಕ ಸಹಾಯಕರು</div>
                <div className="text-xs">ಗ್ರಾಮ ಪಂಚಾಯತಿ,{gramPanchayat}</div>
              </div>
              <div className="text-center">
                <div className="text-xs font-bold">
                  ಪಂಚಾಯತ ಅಭಿವೃದ್ಧಿ ಅಧಿಕಾರಿಗಳು
                </div>
                <div className="text-xs">ಗ್ರಾಮ ಪಂಚಾಯತಿ,{gramPanchayat}</div>
              </div>
              <div className="text-center">
                <div className="text-xs font-bold">ಅಧ್ಯಕ್ಷರು</div>
                <div className="text-xs">ಗ್ರಾಮ ಪಂಚಾಯತಿ,{gramPanchayat}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderContractorQuotation = (
    contractorNumber: number,
    contractorName: string,
    pageNumber: number
  ) => {
    const startIndex = (pageNumber - 1) * quotationItemsPerPage;
    const endIndex = startIndex + quotationItemsPerPage;
    const pageData = materialData.slice(startIndex, endIndex);
    const isFirstPage = pageNumber === 1;
    const isLastPage = pageNumber === quotationPages;

    return (
      <div
        key={`contractor-${contractorNumber}-${pageNumber}`}
        className="w-full max-w-4xl mx-auto bg-white border-2 border-black mb-8"
        style={{
          height: "297mm", // Portrait: height is larger
          width: "210mm", // Portrait: width is smaller
          fontFamily: "Arial, sans-serif",
          fontSize: "10px",
          lineHeight: "1.3",
          padding: "15mm",
          boxSizing: "border-box"
        }}
      >
        {/* Header - Only on first page */}
        {isFirstPage && (
          <>
            <div className="mb-6">
              <div className="text-left text-sm mb-2">ಗೆ,</div>
              <div className="text-left text-sm mb-1">
                ಅಧ್ಯಕ್ಷರು / ಪಂಚಾಯತ ಅಭಿವೃದ್ಧಿ ಅಧಿಕಾರಿಗಳು,
              </div>
              <div className="text-left text-sm mb-1">
                ಗ್ರಾಮ ಪಂಚಾಯತಿ: {gramPanchayat}
              </div>
              <div className="text-left text-sm mb-1">
                ತಾಲೂಕು: {taluka} / ಜಿಲ್ಲೆ: {district}
              </div>
              <div className="text-left text-sm  mt-4">ಮಾನ್ಯರೆ,</div>
            </div>

            <div className="mb-6 pl-24">
              <div className="text-sm font-semibold mb-2">
                ವಿಷಯ:
                <span className="ml-3">
                  ಸಾಮಗ್ರಿಗಳಿಗೆ ಐಟಂವಾರು ದರಪಟ್ಟಿ ಸಲ್ಲಿಸುವ ಕುರಿತು
                </span>{" "}
              </div>
              <div className="text-sm mb-2 font-semibold">
                ಉಲ್ಲೇಖ:
                <span className="ml-3">
                  ತಮ್ಮ ದರಪಟ್ಟಿ ಆಹ್ವಾನ ಪ್ರಕಟಣೆ ದಿನಾಂಕ : ದಿನಾಂಕ :{" "}
                  {tenderPublishDate}
                </span>
              </div>
              <div className="text-center text-sm mb-4">********</div>
            </div>

            <div className="text-sm mb-6 text-justify leading-relaxed tracking-wide">
              <span className="pl-6"></span> ಈ ಮೇಲ್ಕಂಡಿಸಿದ ವಿಷಯ ಹಾಗೂ ಉಲ್ಲೇಖಕ್ಕೆ
              ಸಂಬಂಧಿಸಿದಂತೆ ನಾನು GST ಅಡಿ ನೋಂದಾಯಿತ ಸಾಮಗ್ರಿ ಸರಬರಾಜುದಾರನಾಗಿದ್ದು,{" "}
              {year} ನೇ ಸಾಲಿನ ಮಹಾತ್ಮ ಗಾಂಧಿ ರಾಷ್ಟ್ರೀಯ ಗ್ರಾಮೀಣ ಉದ್ಯೋಗ ಖಾತ್ರಿ
              ಯೋಜನೆಡಿ ಕೈಗೊಳ್ಳಲಾಗುವ {workName}({workCode}) ಕಾಮಗಾರಿಗೆ ಅವಶ್ಯವಿರುವ
              ಸಾಮಗ್ರಿಗಳಿಗೆ ತಾವು ವಿಧಿಸಿರುವ ಷರತ್ತುಗಳಿಗೆ ಬದ್ಧನಾಗಿ ಈ ಕೆಳಗಿನಂತೆ
              ದರಪಟ್ಟಿಯನ್ನು ಸಲ್ಲಿಸುತ್ತಿದ್ದು, ನನ್ನ ದರಪಟ್ಟಿಯನ್ನು ಅಂಗೀಕರಿಸಿಸಾಮಗ್ರಿ
              ಸರಬರಾಜು ಆದೇಶ ನೀಡಬೇಕಾಗಿ ತಮ್ಮಲ್ಲಿ ಕೋರುತ್ತೇನೆ.
            </div>
          </>
        )}

        {/* Quotation Table */}
        <div className="w-full mb-6">
          <table className="w-full border-collapse border border-black text-[10px]">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-black px-2 py-2 text-center font-bold w-12">
                  ಕ್ರ. ಸಂ.
                </th>
                <th className="border border-black px-2 py-2 text-center font-bold">
                  ಸಾಮಗ್ರಿ ಹೆಸರು
                </th>
                <th className="border border-black px-2 py-2 text-center font-bold w-16">
                  ಪ್ರಮಾಣ
                </th>
                <th className="border border-black px-2 py-2 text-center font-bold w-20">
                  ದರ (as per SR)
                </th>
                <th className="border border-black px-2 py-2 text-center font-bold w-20">
                  ದರ (ಅಂಕಿಗಳಲ್ಲಿ)
                </th>
                <th className="border border-black px-2 py-2 text-center font-bold w-24">
                  ದರ (ಅಕ್ಷರಗಳಲ್ಲಿ)
                </th>
              </tr>
            </thead>
            <tbody>
              {pageData.map((item, index) => {
                const contractorRate =
                  contractorNumber === 1
                    ? item.contractor1Rate
                    : contractorNumber === 2
                      ? item.contractor2Rate
                      : item.contractor3Rate;
                return (
                  <tr key={startIndex + index}>
                    <td className="border border-black px-2 py-2 text-center">
                      {item.slNo}
                    </td>
                    <td className="border border-black px-2 py-2 text-left break-all">
                      {item.materialName}
                    </td>
                    <td className="border border-black px-2 py-2 text-center">
                      {item.quantity}
                    </td>
                    <td className="border border-black px-2 py-2 text-center">
                      {item.rate}
                    </td>
                    <td className="border border-black px-2 py-2 text-center">
                      {contractorRate}
                    </td>
                    <td className="border border-black px-2 py-2 text-center"></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer - Only on last page */}
        {isLastPage && (
          <div className="mt-7">
            <div className="">
              <div className="text-sm mb-2 pr-8 text-right mb-12">
                ತಮ್ಮ ವಿಶ್ವಾಸಿ
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="text-sm mb-1 text-start">ಸ್ಥಳ:</div>
                  <div className="text-sm">ದಿನಾಂಕ:</div>
                </div>
                <div>
                  <div className="text-sm mb-1">ಸರಬರಾಜುದಾರರ ಸಹಿ</div>
                  <div className="text-sm mb-1">ಹೆಸರು: {contractorName}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderSupplyOrderPage = (pageNumber: number) => {
    const startIndex = (pageNumber - 1) * supplyOrderItemsPerPage;
    const endIndex = startIndex + supplyOrderItemsPerPage;
    const pageData = materialData.slice(startIndex, endIndex);
    const isFirstPage = pageNumber === 1;
    const isLastPage = pageNumber === supplyOrderPages;

    return (
      <div
        key={`supply-order-${pageNumber}`}
        className="w-full max-w-4xl mx-auto bg-white border-2 border-black mb-8"
        style={{
          height: "297mm", // Portrait: height is larger
          width: "210mm", // Portrait: width is smaller
          fontFamily: "Arial, sans-serif",
          fontSize: "11px", // Slightly reduced from 12px
          lineHeight: "1.2", // Reduced line height
          padding: "12mm", // Reduced padding from 15mm
          boxSizing: "border-box"
        }}
      >
        {/* Header - Only on first page */}
        {isFirstPage && (
          <>
            {/* Header with logos */}
            <div className="flex items-center justify-between mb-3">
              {" "}
              {/* Reduced margin */}
              <div className="w-14 h-14 flex-shrink-0">
                {" "}
                {/* Slightly smaller logos */}
                <img
                  src="/placeholder.svg?height=64&width=64"
                  alt="Karnataka Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center flex-1 mx-3">
                {" "}
                {/* Reduced margin */}
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-base font-bold">ಕರ್ನಾಟಕ</span>{" "}
                  {/* Reduced font size */}
                  <div className="w-6 h-6">
                    {" "}
                    {/* Smaller center logo */}
                    <img
                      src="/placeholder.svg?height=32&width=32"
                      alt="Center Emblem"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-base font-bold">ಸರ್ಕಾರ</span>
                </div>
                <div className="text-sm font-semibold mb-1">
                  {" "}
                  {/* Reduced font size */}
                  ಗ್ರಾಮ ಪಂಚಾಯತಿ, {gramPanchayat}, ತಾ|| {taluka}. ಜಿ|| {district}
                </div>
                <div className="text-xs mb-1">
                  ಮಹಾತ್ಮ ಗಾಂಧಿ ನರೇಗಾ ಯೋಜನೆ, ಕರ್ನಾಟಕ
                </div>
              </div>
              <div className="w-14 h-14 flex-shrink-0">
                <img
                  src="/placeholder.svg?height=64&width=64"
                  alt="MGNREGA Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="text-center text-xs mb-1">
              ಕ್ರ.ಸಂ/ಗ್ರಾ.ಪಂ./ಮ.ರಾ.ಗ್ರಾ.ಉ.ಖಾ.ಯೋ/ಸಾ.ಸ.ಆ/{year}
            </div>
            <div className="text-right text-xs mb-3">ದಿನಾಂಕ: {date}</div>{" "}
            {/* Reduced margin */}
            <div className="text-center text-base font-bold mb-3 underline">
              ಸಾಮಗ್ರಿ ಸರಬರಾಜು ಆದೇಶ
            </div>{" "}
            {/* Reduced margin */}
            <div className="text-xs mb-3">
              {" "}
              {/* Reduced font size and margin */}
              <strong>ವಿಷಯ:</strong>ಮಹಾತ್ಮ ಗಾಂಧಿ ರಾಷ್ಟ್ರೀಯ ಗ್ರಾಮೀಣ ಉದ್ಯೋಗ ಖಾತ್ರಿ
              ಯೋಜನೆಡಿ ಕೈಗೊಳ್ಳಲಾಗುವ ಕಾಮಗಾರಿಗಳಿಗೆ ಸಾಮಗ್ರಿ ಸರಬರಾಜು ಮಾಡುವ ಕುರಿತು
            </div>
            <div className="text-xs mb-3">
              {" "}
              {/* Reduced font size and margin */}
              <strong>ಉಲ್ಲೇಖ:</strong>ಈ ಕಛೇರಿ ದರಪಟ್ಟಿ ಆಹ್ವಾನ ಪ್ರಕಟಣೆ ದಿನಾಂಕ :{" "}
              {tenderPublishDate}
              <br />
              2) ನೀವು ಸಲ್ಲಿಸಿರುವ ದರಪಟ್ಟಿ ದಿನಾಂಕ: {tenderSubmissionDate || "/ /"}
              /2023
            </div>
            <div className="text-center text-xs mb-3">********</div>{" "}
            {/* Reduced margin */}
            <div className="text-xs mb-4 text-justify leading-tight">
              {" "}
              {/* Reduced font size, margin and line height */}ಈ ಮೇಲ್ಕಂಡ ವಿಷಯ
              ಹಾಗೂ ಉಲ್ಲೇಖಗಳಿಗೆ ಸಂಬಂಧಿಸಿದಂತೆ {year} ನೇ ಸಾಲಿನ ಮಹಾತ್ಮ ಗಾಂಧಿ
              ರಾಷ್ಟ್ರೀಯ ಗ್ರಾಮೀಣ ಉದ್ಯೋಗ ಖಾತ್ರಿ ಯೋಜನೆಡಿ ಕೈಗೊಳ್ಳಲಾಗುತ್ತಿರುವ{" "}
              {workName}({workCode})ಕಾಮಗಾರಿಗಾಗಿ ಸಾಮಗ್ರಿಗಳನ್ನು ಸರಬರಾಜು ಮಾಡಲು
              ಉಲ್ಲೇಖ (1)ರ ಪ್ರಕಾರ ದರಪಟ್ಟಿಯನ್ನು ಆಹ್ವಾನಿಸಲಾಗಿದ್ದು, ಉಲ್ಲೇಖ (2)ರ
              ಪ್ರಕಾರ ನೀವು ಗ್ರಾಮ ಪಂಚಾಯತಿ ವಿಧಿಸಿರುವ ಷರತ್ತುಗಳನ್ನು ಒಪ್ಪಿಕೊಂಡು
              ಸಲ್ಲಿಸಿರುವ ದರಪಟ್ಟಿಯನ್ನು ಅಂಗೀಕರಿಸಲಾಗಿದ್ದು, ಸದರಿ ದರಪಟ್ಟಿಯಂತೆ ಈ
              ಕೆಳಕಂಡ ದರಗಳಲ್ಲಿ ಜಿ.ಎಸ್.ಟಿ. ಬಿಲ್ಲಿನೊಂದಿಗೆ ಸಾಮಗ್ರಿಗಳನ್ನು ಸರಬರಾಜು
              ಮಾಡಲು ಈ ಮೂಲಕ ಸಾಮಗ್ರಿ ಸರಬರಾಜು ಆದೇಶ ನೀಡಲಾಗಿದೆ.
            </div>
          </>
        )}

        {/* Supply Order Table */}
        <div className="w-full mb-4">
          <table className="w-full border-collapse border border-black text-[10px]">
            {" "}
            {/* Reduced font size */}
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-black px-2 py-2 text-center font-bold w-10">
                  ಕ್ರ. ಸಂ.
                </th>
                <th className="border border-black px-2 py-2 text-center font-bold">
                  ಸಾಮಗ್ರಿ ಹೆಸರು
                </th>
                <th className="border border-black px-2 py-2 text-center font-bold w-14">
                  ಪ್ರಮಾಣ
                </th>
                <th className="border border-black px-2 py-2 text-center font-bold w-14">
                  ದರ
                </th>
              </tr>
            </thead>
            <tbody>
              {pageData.map((item, index) => (
                <tr key={startIndex + index}>
                  <td className="border border-black px-2 py-2 text-center">
                    {item.slNo}
                  </td>
                  <td className="border border-black px-2 py-2 text-left break-all">
                    {item.materialName}
                  </td>
                  <td className="border border-black px-2 py-2 text-center">
                    {item.quantity}
                  </td>
                  <td className="border border-black px-2 py-2 text-center">
                    {item.contractor1Rate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer - Only on last page */}
        {isLastPage && (
          <div className="flex justify-between mt-6">
            {" "}
            {/* Reduced margin */}
            <div className="text-xs">
              {" "}
              {/* Reduced font size */}
              <div className="mb-1">
                {" "}
                {/* Reduced margin */}
                <strong>ಗೆ,</strong>
              </div>
              <div className="mb-1">
                <strong>ಶ್ರೀ/ಶ್ರೀಮತಿ :-</strong> {contractor1.name}
              </div>
              <div className="mb-1">
                <strong>GST :-</strong> {contractor1.gst}
              </div>
              <div className="mb-1">
                <strong>ವಿಳಾಸ :-</strong> {address}
              </div>
            </div>
            <div className="text-right text-xs">
              {" "}
              {/* Reduced font size */}
              <div className="font-bold">
                ಪಂಚಾಯತ ಅಭಿವೃದ್ಧಿ ಅಧಿಕಾರಿಗಳು / ಅಧ್ಯಕ್ಷರು
              </div>
              <div>ಗ್ರಾಮ ಪಂಚಾಯತಿ, {gramPanchayat}</div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* Comparative Statement Pages (1-3) - LANDSCAPE */}
      {Array.from({ length: comparativePages }, (_, i) =>
        renderComparativePage(i + 1)
      )}

      {/* Contractor 1 Quotation Pages (4-5) - PORTRAIT */}
      {Array.from({ length: quotationPages }, (_, i) =>
        renderContractorQuotation(1, contractor1.name, i + 1)
      )}

      {/* Contractor 2 Quotation Pages (6-7) - PORTRAIT */}
      {Array.from({ length: quotationPages }, (_, i) =>
        renderContractorQuotation(2, contractor2.name, i + 1)
      )}

      {/* Contractor 3 Quotation Pages (8-9) - PORTRAIT */}
      {Array.from({ length: quotationPages }, (_, i) =>
        renderContractorQuotation(3, contractor3.name, i + 1)
      )}

      {/* Supply Order Pages (10-11) - PORTRAIT */}
      {Array.from({ length: supplyOrderPages }, (_, i) =>
        renderSupplyOrderPage(i + 1)
      )}
    </div>
  );
};

export default ComparativeStatementPDF;
