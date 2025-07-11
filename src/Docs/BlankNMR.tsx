import React from "react";

const NMRPDF = ({
  masterRollNo = "30515",
  district = "ಕಲಬುರಗಿ",
  taluka = "ಜೇವರ್ಗಿ",
  gramPanchayat = "ರಂಜಣಗಿ",
  financialYear = "2024-2025",
  workCode = "1515006040/RC/93393042892451831",
  workName = "ಜೇಸಣಗಿ ಗಾ್ಮದ ಮಲಗಣಗಾಗಣಗೊಲಗಂದ ಗೋಗಾಗಳಪಗ ಗದಗಪಗ ರವರ ಗೊಲದ ವಗೆೆ ರಗೆಗಸುಗಾರೆ ಗಾಮಾ",
  fromDate = "01/01/2025",
  toDate = "07/01/2025",
  technicalSanctionNo = "1515006040/2024-2025/324546/TS",
  technicalSanctionDate = "10/10/2024",
  financialSanctionNo = "1515006040/2024-2025/324546/AS",
  financialSanctionDate = "23/11/2024",
  workerData = [
    {
      slNo: 1,
      jobCardNo: "KN-15-006-030-002/426",
      familyHeadName: "ಶಗಗರಪೇಲ ಗಾಗೇಬಪೇಲ",
      requestLetterFrom: "ಶಗಗರಪೇಲ ಗಾಗೇಬಪೇಲ",
      village: "ರಂಜಣಗಿ",
      accountNo: "PUNJAB NATIONAL BANK XXXXXXXXXXX1522"
    },
    {
      slNo: 2,
      jobCardNo: "KN-15-006-030-002/232",
      familyHeadName: "ಯಾಕುಬ",
      requestLetterFrom: "ಯಾಕುಬ",
      village: "ರಂಜಣಗಿ",
      accountNo: "AIRTEL PAYMENTS BANK LIMITED XXXXXXXXXXX1156"
    },
    {
      slNo: 3,
      jobCardNo: "KN-15-006-030-002/510",
      familyHeadName: "ಅಗಾಗಪೇಲ ಸಯಗದಪೇಲ",
      requestLetterFrom: "ಅಗಾಗಪೇಲ ಸಯಗದಪೇಲ",
      village: "ರಂಜಣಗಿ",
      accountNo: "INDIA POST PAYMENTS BANK LIMITED XXXXXXXXXXX3136"
    }
  ]
}) => {
  const rowsPerPage = workerData.length > 20 ? 20 : workerData.length; // Dynamic based on data
  const totalPages = Math.ceil(workerData.length / rowsPerPage);

  const renderPage = (pageNumber: number) => {
    const startIndex = (pageNumber - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const pageData = workerData.slice(startIndex, endIndex);
    const isFirstPage = pageNumber === 1;
    const isLastPage = pageNumber === totalPages;

    return (
      <div
        key={pageNumber}
        className="w-full max-w-full mx-auto bg-white border-2 border-black mb-8"
        style={{
          height: "210mm", // A4 height in landscape
          width: "297mm", // A4 width in landscape
          fontFamily: "Arial, sans-serif",
          fontSize: "7px", // Further reduced font size
          lineHeight: "1.0",
          padding: "6mm", // Reduced padding
          boxSizing: "border-box",
          pageBreakAfter: "always"
        }}
      >
        {/* Header - Only on first page */}
        {isFirstPage && (
          <>
            {/* Title Section */}
            <div className="text-center mb-2">
              <div className="text-sm font-bold mb-1">
                ಮಹಾತ್ಮ ಗಾಂಧಿ ರಾಷ್ಟ್ರೀಯ ಉದ್ಯೋಗ ಖಾತರಿ ಯೋಜನೆ
              </div>
              <div className="text-xs font-semibold mb-1">
                ಮಸ್ಟರ್ ರೋಲ್ (For Unskilled Labour)
              </div>
            </div>

            {/* Basic Information */}
            <div className="mb-2 text-xs leading-tight">
              <div className="flex justify-between mb-1">
                <span>
                  <span className="font-semibold">
                    ಅಳತೆ ಪುಸ್ತಕ (MB) ಸಂಖ್ಯೆ:
                  </span>{" "}
                  _______
                </span>
                <span>
                  <span className="font-semibold">Page No:</span> _________
                </span>
              </div>
              <div className="flex justify-between mb-1">
                <span>
                  <span className="font-semibold">ರಾಜ್ಯ:</span> ಕರ್ನಾಟಕ
                </span>
                <span>
                  <span className="font-semibold">ಮಸ್ಟರ್ ರೋಲ್ ಸಂಖ್ಯೆ:</span>{" "}
                  {masterRollNo}
                </span>
                <span>
                  <span className="font-semibold">
                    Muster roll Printing Date:
                  </span>{" "}
                  ____
                </span>
              </div>
              <div className="flex justify-between mb-1">
                <span>
                  <span className="font-semibold">ಜಿಲ್ಲೆ:</span> {district}
                </span>
                <span>
                  <span className="font-semibold">ತಾಲೂಕು:</span> {taluka}
                </span>
                <span>
                  <span className="font-semibold">ಗ್ರಾಮ ಪಂಚಾಯತ:</span>{" "}
                  {gramPanchayat}
                </span>
                <span>
                  <span className="font-semibold">Financial Year:</span>{" "}
                  {financialYear}
                </span>
              </div>
            </div>

            {/* Work Details */}
            <div className="mb-2 text-xs leading-tight">
              <div className="mb-1">
                <span className="font-semibold">ಕಾಮಗಾರಿ ಹೆಸರು:</span> {workName}{" "}
                ({financialYear})
              </div>
              <div className="flex justify-between mb-1">
                <span>
                  <span className="font-semibold">ಕಾಮಗಾರಿ ಸಂಕೇತ ಸಂಖ್ಯೆ:</span>{" "}
                  {workCode}
                </span>
              </div>
              <div>
                <span>
                  <span className="font-semibold">ದಿನಾಂಕದಿಂದ:</span> {fromDate}
                </span>
                <span className="ml-3">
                  <span className="font-semibold">ದಿನಾಂಕದವರೆಗೆ:</span> {toDate}
                </span>
              </div>
              <div className="flex justify-between mb-1">
                <span>
                  <span className="font-semibold">
                    Technical Sanction No & Date:
                  </span>{" "}
                  {technicalSanctionNo} ({technicalSanctionDate})
                </span>
                <span>
                  <span className="font-semibold">
                    Financial Sanction No & Date:
                  </span>{" "}
                  {financialSanctionNo} ({financialSanctionDate})
                </span>
              </div>
              <div className="flex justify-between mb-1">
                <span>
                  <span className="font-semibold">
                    Name of the Technical Staff Responsible for Measurement:
                  </span>{" "}
                  ____________________(TAE)
                </span>
                <span>
                  <span className="font-semibold">ಕಾರ್ಯನಿರ್ವಹಣೆ ಇಕಾಯಿ:</span>{" "}
                  GRAM PANCHAYAT
                </span>
              </div>
            </div>
          </>
        )}

        {/* Main Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse border border-black text-xs">
            <thead>
              <tr className="bg-gray-100">
                <th
                  className="border border-black px-1 py-1 text-center font-semibold"
                  style={{ width: "20px" }}
                >
                  <div className="transform  text-[10px]">ಕ್ರ.ಸಂ.</div>
                </th>
                <th
                  className="border border-black px-1 py-1 text-center font-semibold"
                  style={{ width: "70px" }}
                >
                  <div className="text-[10px]">ಹೆಸರು / ನೋಂದಣಿ ಸಂಖ್ಯೆ</div>
                </th>
                <th
                  className="border border-black px-1 py-1 text-center font-semibold"
                  style={{ width: "60px" }}
                >
                  <div className="text-[10px]">ಕುಟುಂಬದ ಮುಖ್ಯಸ್ಥರ ಹೆಸರು</div>
                </th>
                <th
                  className="border border-black px-1 py-1 text-center font-semibold"
                  style={{ width: "60px" }}
                >
                  <div className="text-[10px]">ಅರ್ಜಿದಾರರ ಹೆಸರು</div>
                </th>
                <th
                  className="border border-black px-1 py-1 text-center font-semibold"
                  style={{ width: "35px" }}
                >
                  <div className="text-[10px]">ಹಳ್ಳಿ</div>
                </th>
                <th
                  className="border border-black px-1 py-1 text-center font-semibold"
                  style={{ width: "80px" }}
                >
                  <div className="text-[10px]">ಖಾತೆ ಸಂಖ್ಯೆ</div>
                </th>
                {/* Date columns - 7 blank columns */}
                {Array.from({ length: 7 }, (_, i) => (
                  <th
                    key={`date-${i}`}
                    className="border border-black px-1 py-1 text-center font-semibold"
                    style={{ width: "18px" }}
                  >
                    <div className="transform text-[10px]">{i + 1}</div>
                  </th>
                ))}
                <th
                  className="border border-black px-1 py-1 text-center font-semibold"
                  style={{ width: "30px" }}
                >
                  <div className="text-[10px]">ಒಟ್ಟು ಹಾಜರಾತಿ</div>
                </th>
                <th
                  className="border border-black px-1 py-1 text-center font-semibold"
                  style={{ width: "35px" }}
                >
                  <div className="text-[10px]">ಒಂದು ದಿನದ ವೇತನ</div>
                </th>
                <th
                  className="border border-black px-1 py-1 text-center font-semibold"
                  style={{ width: "40px" }}
                >
                  <div className="text-[10px]">ಹಾಜರಾತಿ ತಕ್ಕಂತೆ ಬಾಕಿ ಹಣ</div>
                </th>
                <th
                  className="border border-black px-1 py-1 text-center font-semibold"
                  style={{ width: "30px" }}
                >
                  <div className="text-[10px]">ಪ್ರಯಾಣ ವೆಚ್ಚ</div>
                </th>
                <th
                  className="border border-black px-1 py-1 text-center font-semibold"
                  style={{ width: "35px" }}
                >
                  <div className="text-[10px]">
                    Implements / Sharpening Charge
                  </div>
                </th>
                <th
                  className="border border-black px-1 py-1 text-center font-semibold"
                  style={{ width: "35px" }}
                >
                  <div className="text-[10px]">ಒಟ್ಟು ನಗದು ಪಾವತಿ</div>
                </th>
                <th
                  className="border border-black px-1 py-1 text-center font-semibold"
                  style={{ width: "50px" }}
                >
                  <div className="text-[10px]">
                    ಅರ್ಜಿದಾರರ ಸಹಿ / ಹೆಬ್ಬೆರಳು ಗುರುತು
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {pageData.map((worker, index) => (
                <tr key={startIndex + index}>
                  <td className="border border-black px-1 py-1 text-center text-xs">
                    {worker.slNo}
                  </td>
                  <td
                    className="border border-black px-1 py-1 text-xs break-all"
                    style={{ maxWidth: "70px" }}
                  >
                    {worker.jobCardNo}
                  </td>
                  <td
                    className="border border-black px-1 py-1 text-[10px] break-all"
                    style={{ maxWidth: "60px" }}
                  >
                    {worker.familyHeadName}
                  </td>
                  <td
                    className="border border-black px-1 py-1 text-[10px] break-all"
                    style={{ maxWidth: "60px" }}
                  >
                    {worker.requestLetterFrom}
                  </td>
                  <td
                    className="border border-black px-1 py-1 text-center text-[10px]"
                    style={{ maxWidth: "50px" }}
                  >
                    {worker.village}
                  </td>
                  <td
                    className="border border-black px-1 py-1 text-[10px] break-all"
                    style={{ maxWidth: "80px" }}
                  >
                    {worker.accountNo}
                  </td>
                  {/* Date columns - 7 blank columns */}
                  {Array.from({ length: 7 }, (_, i) => (
                    <td
                      key={`date-${i}`}
                      className="border border-black px-1 py-1 text-center h-6"
                      style={{ width: "18px" }}
                    ></td>
                  ))}
                  <td
                    className="border border-black px-1 py-1 text-center"
                    style={{ width: "30px" }}
                  ></td>
                  <td
                    className="border border-black px-1 py-1 text-center"
                    style={{ width: "35px" }}
                  ></td>
                  <td
                    className="border border-black px-1 py-1 text-center"
                    style={{ width: "40px" }}
                  ></td>
                  <td
                    className="border border-black px-1 py-1 text-center"
                    style={{ width: "30px" }}
                  ></td>
                  <td
                    className="border border-black px-1 py-1 text-center"
                    style={{ width: "35px" }}
                  ></td>
                  <td
                    className="border border-black px-1 py-1 text-center"
                    style={{ width: "35px" }}
                  ></td>
                  <td
                    className="border border-black px-1 py-1 text-center"
                    style={{ width: "50px" }}
                  ></td>
                </tr>
              ))}
              {/* Total row */}
              <tr className="bg-gray-100 font-semibold">
                <td
                  className="border border-black px-1 py-1 text-center text-xs"
                  colSpan={6}
                >
                  ಒಟ್ಟು
                </td>
                {/* Date columns - 7 blank columns */}
                {Array.from({ length: 7 }, (_, i) => (
                  <td
                    key={`total-date-${i}`}
                    className="border border-black px-1 py-1"
                  ></td>
                ))}
                <td className="border border-black px-1 py-1 text-center"></td>
                <td className="border border-black px-1 py-1 text-center"></td>
                <td className="border border-black px-1 py-1 text-center"></td>
                <td className="border border-black px-1 py-1 text-center"></td>
                <td className="border border-black px-1 py-1 text-center"></td>
                <td className="border border-black px-1 py-1 text-center"></td>
                <td className="border border-black px-1 py-1 text-center"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer - Only on last page */}
        {isLastPage && (
          <div className="mt-6">
            <div className="flex justify-between items-end">
              <div className="text-left">
                <p className="text-sm font-semibold">ಹಾಜರ ಪಡೆದವರ ಹೆಸರು (ಸಹಿ)</p>
                <div className="mt-8 border-b border-black w-48"></div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold">ಪರಿಶೀಲನೆ ಮಾಡಿದವರ (ಸಹಿ)</p>
                <div className="mt-8 border-b border-black w-48"></div>
              </div>
            </div>
          </div>
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

export default NMRPDF;
