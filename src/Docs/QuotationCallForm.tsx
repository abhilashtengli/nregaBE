import React from "react";

const QuotationCallPDF = ({
  gramPanchayat = "ಹಸೂಡಿ",
  taluka = "ಶಿವಮೊಗ್ಗ",
  district = "ಶಿವಮೊಗ್ಗ",
  year = "2020-2021",
  administrativeSanction = "1524005018/2020-2021/770080/AS",
  date = "23/10/2020",
  workCode = "1524005018/IF/93393042892575291",
  workName = "ಭದ್ರಾಪುರ ಗ್ರಾಮದ ಕೆಂಚಮ್ಮ ಕೋಂ ಹನುಮಂತಪ್ಪರವರ ಮನೆಯಲ್ಲಿ ಸೋಕ್ ಪೀಟ್ ನಿರ್ಮಾಣ ಕಾಮಗಾರಿ",
  lastSubmissionDate = "15/10/2020",
  materialData = [
    {
      slNo: 1,
      materialName: "0295-Stone Aggregate(single size):20 mm nominal size",
      quantity: "0.484",
      price: "1504"
    },
    {
      slNo: 2,
      materialName: "0367-Portland Cement",
      quantity: "0.066",
      price: "15000"
    },
    {
      slNo: 3,
      materialName: "0982-Coarse sand (zone III)",
      quantity: "0.579",
      price: "11838"
    },
    {
      slNo: 4,
      materialName: "10-Miscellaneous /Contingencies charges",
      quantity: "1",
      price: "160.32"
    },
    {
      slNo: 5,
      materialName: "3-Display Board",
      quantity: "1",
      price: "800"
    },
    {
      slNo: 6,
      materialName: "7318-Plasticizer / super plasticizer",
      quantity: "0.62",
      price: "0159.32"
    },
    {
      slNo: 7,
      materialName: "MR9431-Broken stone aggregate 12 mm to 10 mm size",
      quantity: "0.0488",
      price: "1428"
    },
    {
      slNo: 8,
      materialName: "MR9432-Broken stone aggregate 20 mm size",
      quantity: "0.0938",
      price: "1504"
    },
    {
      slNo: 9,
      materialName: "MR9528-Rubble stones",
      quantity: "2.025",
      price: "619.05"
    },
    {
      slNo: 10,
      materialName: "MR9609-Add",
      quantity: "1",
      price: "281"
    },
    {
      slNo: 11,
      materialName: "MR9670-Stone spalls of minimum 25 mm size",
      quantity: "0.484",
      price: "333.3"
    },
    {
      slNo: 12,
      materialName: "MR9675-HOM of Vibrator 0.71 days",
      quantity: "0.0147",
      price: "169"
    },
    {
      slNo: 13,
      materialName: "MR9678-Mixer (concrete) - 1 cum Capacity",
      quantity: "0.0147",
      price: "1356"
    },
    {
      slNo: 14,
      materialName:
        "MR9752-Add Handling , loading and unloading at 1% on Material",
      quantity: "1",
      price: "0.74281"
    },
    {
      slNo: 15,
      materialName:
        "MR9757-Miscellaneous/Unforeseen charges which are necessary during execution.",
      quantity: "1",
      price: "557.33961"
    },
    {
      slNo: 16,
      materialName: "MR9762-Add sundries charges at 1 % on Material",
      quantity: "1",
      price: "0.8491"
    },
    {
      slNo: 17,
      materialName: "MR9773-Add watering charges at 1 % on Material",
      quantity: "1",
      price: "7.75621"
    },
    {
      slNo: 18,
      materialName: "MR9862-RCC Cap 1000 mm dia, 100 mm thick",
      quantity: "1",
      price: "750"
    },
    {
      slNo: 19,
      materialName: "MR9863-Quarry Spalls",
      quantity: "0.405",
      price: "285.71"
    },
    {
      slNo: 20,
      materialName: "MR9867-Charcoal",
      quantity: "5",
      price: "30"
    },
    {
      slNo: 21,
      materialName: "MR9868-Aqua Nylon mesh",
      quantity: "2.25",
      price: "125"
    },
    {
      slNo: 22,
      materialName: "MR9961-Cost of 6.5mm M.S. Coil",
      quantity: "16.5",
      price: "33.89"
    },
    {
      slNo: 23,
      materialName: "MR9962-Fabrication charges.",
      quantity: "16.5",
      price: "11"
    },
    {
      slNo: 24,
      materialName:
        "MR9963-Transportation charges of materials beyond 5 KM @ 10%",
      quantity: "1",
      price: "75.411"
    },
    {
      slNo: 25,
      materialName: "MR9984-PVC pipe of 10kg\\cum,90 mm",
      quantity: "10",
      price: "337.55"
    }
  ]
}) => {
  const itemsPerPage = 15; // Based on the PDF structure
  const totalPages = Math.ceil(materialData.length / itemsPerPage);

  const renderPage = (pageNumber: number) => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = materialData.slice(startIndex, endIndex);
    const isFirstPage = pageNumber === 1;
    const isLastPage = pageNumber === totalPages;

    return (
      <div
        key={pageNumber}
        className="w-full max-w-4xl mx-auto bg-white border-2 border-black mb-8"
        style={{
          width: "210mm", // A4 width
          minHeight: "297mm", // A4 height
          fontFamily: "Arial, sans-serif",
          fontSize: "12px",
          lineHeight: "1.3",
          padding: "15mm",
          boxSizing: "border-box"
        }}
      >
        {/* Header - Only on first page */}
        {isFirstPage && (
          <>
            {/* Header with logos */}
            <div className="flex border-b-2 border-black items-center justify-between mb-4">
              {/* Left Logo */}
              <div className="w-16 h-16 flex-shrink-0">
                <img
                  src="/placeholder.svg?height=64&width=64"
                  alt="MGNREGA Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Center Content */}
              <div className="text-center flex-1 mx-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-lg font-bold">ಕರ್ನಾಟಕ</span>
                  <div className="w-8 h-8">
                    <img
                      src="/placeholder.svg?height=32&width=32"
                      alt="Karnataka Government Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-lg font-bold">ಸರ್ಕಾರ</span>
                </div>
                <div className="text-base font-semibold mb-2">
                  ಗ್ರಾಮ ಪಂಚಾಯತಿ, {gramPanchayat}, ತಾ|| {taluka}. ಜಿ|| {district}
                </div>
                <div className="text-sm mb-2">
                  ಮಹಾತ್ಮ ಗಾಂಧಿ ನರೇಗಾ ಯೋಜನೆ, ಕರ್ನಾಟಕ
                </div>
              </div>

              {/* Right Logo */}
              <div className="w-16 h-16 flex-shrink-0">
                <img
                  src="/placeholder.svg?height=64&width=64"
                  alt="MGNREGA Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="">
              <div className=" flex justify-between">
                <div className="text-sm mb-4">
                  ಕ್ರ.ಸಂ/ಗ್ರಾ.ಪಂ./ಮ.ರಾ.ಗ್ರಾ.ಉ.ಖಾ.ಯೋ/ದ.ಪ.ಅ.ತು.ಪ/{year}
                </div>
                <div className="text-sm mb-4">ದಿನಾಂಕ: {date}</div>
              </div>
              <div className="text-base font-bold mb-2 text-center">
                ದರಪಟ್ಟಿ ಆಹ್ವಾನ ಪ್ರಕಟಣೆ
              </div>
            </div>

            {/* Subject */}
            <div className="mb-4  px-8">
              <div className="text-xs space-x-3 flex font-semibold mb-4">
                <div>ವಿಷಯ:</div>
                <div className="leading-relaxed">
                  ಮಹಾತ್ಮ ಗಾಂಧಿ ರಾಷ್ಟ್ರೀಯ ಗ್ರಾಮೀಣ ಉದ್ಯೋಗ ಖಾತ್ರಿ ಯೋಜನೆಯಲ್ಲಿ
                  ಕೈಗೊಳ್ಳಲಾಗುವ ಕಾಮಗಾರಿಗಳಿಗೆ ಸಾಮಗ್ರಿ ಸರಬರಾಜು ಮಾಡಲು ದರಪಟ್ಟಿ
                  ಆಹ್ವಾನಿಸುವ ಬಗ್ಗೆ.
                </div>
              </div>

              <div className="text-xs mb-2 space-x-3 font-semibold flex">
                <div>ಉಲ್ಲೇಖ :</div>
                <div className="leading-relaxed">
                  <h2>
                    {" "}
                    1) ಮಹಾತ್ಮ ಗಾಂಧಿ ನರೇಗಾ ಯೋಜನೆ ಮಾರ್ಗಸೂಚಿ ಪ್ಯಾರಾ 7.1.7 ಪ್ರಕಾರ
                  </h2>
                  <h2>
                    2) ಕಾಮಗಾರಿ ಆಡಳಿತಾತ್ಮಕ ಅನುಮೋದನೆ ಸಂಖ್ಯೆ :{" "}
                    {administrativeSanction}
                  </h2>
                  <h2>ದಿನಾಂಕ :{date}</h2>
                </div>
              </div>

              <div className="text-center mb-">********</div>
            </div>

            {/* Main Content */}
            <div className="mb-6 text-justify text-sm">
              <p className="mb-4 leading-relaxed">
                ಈ ಮೇಲ್ಕಂಡ ವಿಷಯ ಹಾಗೂ ಉಲ್ಲೇಖಗಳಿಗೆ ಸಂಬಂಧಿಸಿದಂತೆ {year} ನೇ ಸಾಲಿನ
                ಮಹಾತ್ಮ ಗಾಂಧಿ ರಾಷ್ಟ್ರೀಯ ಗ್ರಾಮೀಣ ಉದ್ಯೋಗ ಖಾತ್ರಿ ಯೋಜನೆಯಲ್ಲಿ
                ಕೈಗೊಳ್ಳಲಾಗುವ {workName} ({workCode} ) ಕಾಮಗಾರಿ ಅನುಷ್ಠಾನ ಮಾಡಲು ಈ
                ಕೆಳಕಂಡ ಸಾಮಗ್ರಿಗಳು ಅವಶ್ಯವಿದ್ದು, ಅವುಗಳನ್ನು ಅಹರ್ GST ನಂಬರ್ ಹೊಂದಿರುವ
                ಸರಬರಾಜುದಾರರಿಂದ ದರಪಟ್ಟಿಯನ್ನು ಆಹ್ವಾನಿಸಲಾಗಿದೆ. ಆಸಕ್ತಿ ಹೊಂದಿರುವ
                ಸರಬರಾಜುದಾರರು ಇದಕ್ಕೆ ಲಗತ್ತಿಸಿದ ನಮೂನೆಯಲ್ಲಿ ಐಟಂವಾರು ಅಂಕಿ &
                ಅಕ್ಷರಗಳಲ್ಲಿ ದರವನ್ನು ನಮೂದಿಸಿ, ಸದರಿ ದರಪಟ್ಟಿಯನ್ನು ದಿನಾಂಕ{" "}
                {lastSubmissionDate} ರಂದು ಸಂಜೆ 5.00 ಗಂಟೆಯೊಳಗಾಗಿ ಈ ಕಛೇರಿಗೆ ಈ
                ಕೆಳಕಂಡ ಷರತ್ತುಗಳಿಗೆ ಒಳಪಟ್ಟು ಸಲ್ಲಿಸತಕ್ಕದ್ದು, ನಂತರ ಬರುವ ಯಾವುದೇ
                ದರಪಟ್ಟಿಗಳನ್ನು ಸ್ವೀಕರಿಸುವುದಿಲ್ಲ.
              </p>
            </div>
          </>
        )}

        {/* Material Table */}
        <div className="w-full mb-6">
          <table className="w-full border-collapse border border-black text-xs">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-black px-2 py-2 text-center font-semibold w-12">
                  ಕ್ರ. ಸಂ.
                </th>
                <th className="border border-black px-2 py-2 text-center font-semibold">
                  ಸಾಮಗ್ರಿ ಹೆಸರು
                </th>
                <th className="border border-black px-2 py-2 text-center font-semibold w-20">
                  ಪ್ರಮಾಣ
                </th>
                <th className="border border-black px-2 py-2 text-center font-semibold w-24">
                  ದರ (as per SR)
                </th>
              </tr>
            </thead>
            <tbody>
              {pageData.map((item, index) => (
                <tr key={startIndex + index}>
                  <td className="border border-black px-2 py-2 text-center">
                    {item.slNo}
                  </td>
                  <td className="border border-black px-2 py-2">
                    {item.materialName}
                  </td>
                  <td className="border border-black px-2 py-2 text-center">
                    {item.quantity}
                  </td>
                  <td className="border border-black px-2 py-2 text-center">
                    {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Terms and Conditions - Only on last page */}
        {isLastPage && (
          <>
            <div className="mb-6">
              <div className="text-sm font-semibold mb-3">ಷರತ್ತುಗಳು :</div>
              <div className="text-[10px] space-y-2 leading-relaxed">
                <div>1) ಸಾಮಗ್ರಿಗಳು ಉತ್ತಮ ಗುಣಮಟ್ಟವನ್ನು ಹೊಂದಿರಬೇಕು.</div>
                <div>
                  2) ಸರಬರಾಜುದಾರರು ಸಲ್ಲಿಸುವ ದರಗಳು ತೆರಿಗೆಯನ್ನು ಒಳಗೊಂಡಿದೆ ಅಥವಾ
                  ಇಲ್ಲವೆಂಬುದನ್ನು ನಮೂದಿಸಬೇಕು.
                </div>
                <div>
                  3) ಆಯ್ಕೆಯಾದ ಸರಬರಾಜುದಾರರು ಸಾಮಗ್ರಿಗಳನ್ನು ತಮ್ಮ ಖರ್ಚಿನಲ್ಲಿಯೇ
                  ಕಾಮಗಾರಿ ಸ್ಥಳಕ್ಕೆ ಸರಬರಾಜು ಮಾಡಲು ಬದ್ಧರಾಗಿರಬೇಕು.
                </div>
                <div>
                  4) ಸರಬರಾಜು ಮಾಡುವ ಸಾಮಗ್ರಿಗಳಿಗೆ ನಿಯಮಾನುಸಾರ ವಾರಂಟಿ ಇದ್ದಲ್ಲಿ,
                  ಅವಧಿಯೊಳಗೆ ಬದಲಾಯಿಸಿಕೊಡಲು ಬದ್ಧರಾಗಿರಬೇಕು.
                </div>
                <div>
                  5) ಸಾಮಗ್ರಿ ಬಿಲ್ಲನ್ನು ಸರ್ಕಾರವು ಅನುದಾನ ಬಿಡುಗಡೆ ಮಾಡಿದಾಗ
                  ಸ್ವೀಕರಿಸಲು ಬದ್ಧರಾಗಿರಬೇಕು ಸಾಮಗ್ರಿ ಬಿಲ್ಲನ್ನು ಸರ್ಕಾರವು ಅನುದಾನ
                  ಬಿಡುಗಡೆ ಮಾಡಿದಾಗ ಸ್ವೀಕರಿಸಲು ಬದ್ಧರಾಗಿರಬೇಕು ಸಾಮಗ್ರಿ ಬಿಲ್ಲನ್ನು
                  ಸರ್ಕಾರವು ಅನುದಾನ ಬಿಡುಗಡೆ ಮಾಡಿದಾಗ ಸ್ವೀಕರಿಸಲು ಬದ್ಧರಾಗಿರಬೇಕು
                </div>
                <div>
                  6) ಸಾಮಗ್ರಿ ಸರಬರಾಜು ಆದೇಶ ನೀಡುವ ಸಂದರ್ಭದಲ್ಲಿ ಗ್ರಾಮ ಪಂಚಾಯಿತಿಯು
                  ವಿಧಿಸುವ / ಒಪ್ಪುವ ಇನ್ನಿತರ ಷರತ್ತುಗಳಿಗೆ ಬದ್ಧರಾಗಿರಬೇಕು.
                </div>
              </div>
            </div>

            {/* Signature */}
            <div className="text-right mb-6">
              <div className="text-sm font-semibold">
                ಪಂಚಾಯತ ಅಭಿವೃದ್ಧಿ ಅಧಿಕಾರಿಗಳು / ಅಧ್ಯಕ್ಷರು
              </div>
              <div className="text-sm pr-16 font-semibold pt-2">
                ಗ್ರಾಮ ಪಂಚಾಯತಿ, {gramPanchayat}
              </div>
            </div>

            {/* Copy Distribution */}
            <div className="text-xs">
              <div className="font-semibold mb-2">ಪ್ರತಿಯನ್ನು :</div>
              <div className="mb-1">1. ಸ್ಥಳೀಯ ಅಹರ್ ಸರಬರಾಜುದಾರಿಗೆ</div>
              <div>2. ಕಛೇರಿ ಸೂಚನಾ ಫಲಕ ಪ್ರತಿ/ ಕಾಮಗಾರಿ ಕಡತ ಪ್ರತಿ</div>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="w-full">
      {Array.from({ length: totalPages }, (_, i) => renderPage(i + 1))}
    </div>
  );
};

export default QuotationCallPDF;
