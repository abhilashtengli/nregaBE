import React from "react";

const WLFTOPdf = ({
  gramPanchayat = "ರಂಜಣಗಿ",
  taluka = "ಜೇವರ್ಗಿ",
  district = "ಕಲಬುರಗಿ",
  ftoData = [
    {
      slNo: 1,
      jobCardNo: "KN-15-006-030-002/202",
      applicantNo: 1,
      applicantName: "ಹುಸೇನಬಾಶಾ ಮೋಹಿನ್ಸಾಬ್ ಮುಲ್ಲಾ",
      mustrollNo: "42544",
      wageListNo: "1515006040",
      referenceNo: "WL063127",
      ftoNo: "1515006040NRG242",
      verifyPo: "70320242129958",
      status: "YP",
      bankName: "BANK OF MAHARASHTRA",
      wgApbCrAccount: "XXXXXXX XXXX029",
      favoringAsPerBank: "Master MOHIN MGF HUSEN BASHA MULLA"
    },
    {
      slNo: 2,
      jobCardNo: "KN-15-006-030-002/202",
      applicantNo: 5,
      applicantName: "ಸಲಿಮಾಬೇಗಂ ಹುಸೇನಬಾಶಾ",
      mustrollNo: "42544",
      wageListNo: "1515006040",
      referenceNo: "WL063127",
      ftoNo: "1515006040NRG242",
      verifyPo: "70320242129959",
      status: "YP",
      bankName: "PUNJAB NATIONAL BANK",
      wgApbCrAccount: "XXXXXXX XXXX796",
      favoringAsPerBank: "SALIMA BEE"
    },
    {
      slNo: 3,
      jobCardNo: "KN-15-006-030-002/161",
      applicantNo: 1,
      applicantName: "ರಾಜು ಈರಣ್ಣ",
      mustrollNo: "44017",
      wageListNo: "1515006040",
      referenceNo: "WL066355",
      ftoNo: "1515006040NRG240",
      verifyPo: "30420242196403",
      status: "YP",
      bankName: "PUNJAB NATIONAL BANK",
      wgApbCrAccount: "XXXXXXX XXXX886",
      favoringAsPerBank: "RAJASHEKAR IRANNA"
    }
  ]
}) => {
  return (
    <div
      className="w-full max-w-full mx-auto bg-white border-2 border-black mb-8"
      style={{
        height: "210mm", // A4 height in landscape
        width: "297mm", // A4 width in landscape
        fontFamily: "Arial, sans-serif",
        fontSize: "10px",
        lineHeight: "1.2",
        padding: "8mm",
        boxSizing: "border-box"
      }}
    >
      {/* Header with logos */}
      <div className="flex items-center justify-between mb-4">
        {/* Left Logo */}
        <div className="w-16 h-16 flex-shrink-0">
          <img
            src="/placeholder.svg?height=64&width=64"
            alt="Karnataka Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Center Content */}
        <div className="text-center flex-1 mx-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-8 h-8">
              <img
                src="/placeholder.svg?height=32&width=32"
                alt="Center Emblem"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-base font-bold mb-2">
            ಗ್ರಾಮ ಪಂಚಾಯತಿ {gramPanchayat} ತಾ|| {taluka} ಜಿ|| {district}
          </div>
          <div className="text-sm font-semibold mb-1">
            ಪಾವತಿಸಿರುವ ಕೂಲಿ ಮತ್ತು ಸಾಮಗ್ರಿಗಳು ಎಫ್‌ಟಿಒ ಪ್ರತಿಗಳು
          </div>
          <div className="text-sm font-semibold">
            ಮಹಾತ್ಮಾ ಗಾಂಧಿ ನರೇಗಾ ಯೋಜನೆ - ಕರ್ನಾಟಕ
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

      {/* Main Table */}
      <div className="w-full overflow-x-auto mb-6">
        <table className="w-full border-collapse border border-black text-xs min-w-max">
          <thead>
            <tr className="bg-gray-100">
              <th
                className="border border-black px-1 py-2 text-center font-semibold"
                style={{ width: "30px" }}
              >
                <div className="text-[9px]">Sr. No.</div>
              </th>
              <th
                className="border border-black px-1 py-2 text-center font-semibold"
                style={{ width: "80px" }}
              >
                <div className="text-[9px]">Job Card No.</div>
              </th>
              <th
                className="border border-black px-1 py-2 text-center font-semibold"
                style={{ width: "40px" }}
              >
                <div className="text-[9px]">Applicant No.</div>
              </th>
              <th
                className="border border-black px-1 py-2 text-center font-semibold"
                style={{ width: "100px" }}
              >
                <div className="text-[9px]">Applicant Name</div>
              </th>
              <th
                className="border border-black px-1 py-2 text-center font-semibold"
                style={{ width: "50px" }}
              >
                <div className="text-[9px]">Mustroll No.</div>
              </th>
              <th
                className="border border-black px-1 py-2 text-center font-semibold"
                style={{ width: "50px" }}
              >
                <div className="text-[9px]">Wage List No.</div>
              </th>
              <th
                className="border border-black px-1 py-2 text-center font-semibold"
                style={{ width: "60px" }}
              >
                <div className="text-[9px]">Reference No.</div>
              </th>
              <th
                className="border border-black px-1 py-2 text-center font-semibold"
                style={{ width: "80px" }}
              >
                <div className="text-[9px]">Fto No.</div>
              </th>
              <th
                className="border border-black px-1 py-2 text-center font-semibold"
                style={{ width: "70px" }}
              >
                <div className="text-[9px]">Verify Po</div>
              </th>
              <th
                className="border border-black px-1 py-2 text-center font-semibold"
                style={{ width: "40px" }}
              >
                <div className="text-[9px]">Status</div>
              </th>
              <th
                className="border border-black px-1 py-2 text-center font-semibold"
                style={{ width: "80px" }}
              >
                <div className="text-[9px]">Bank_Name</div>
              </th>
              <th
                className="border border-black px-1 py-2 text-center font-semibold"
                style={{ width: "70px" }}
              >
                <div className="text-[9px]">WG APB CR ACCOUNT</div>
              </th>
              <th
                className="border border-black px-1 py-2 text-center font-semibold"
                style={{ width: "100px" }}
              >
                <div className="text-[9px]">Favoring As Per Bank</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {ftoData.map((item, index) => (
              <tr key={index}>
                <td className="border border-black px-1 py-2 text-center text-[9px]">
                  {item.slNo}
                </td>
                <td className="border border-black px-1 py-2 text-[8px] break-all">
                  {item.jobCardNo}
                </td>
                <td className="border border-black px-1 py-2 text-center text-[9px]">
                  {item.applicantNo}
                </td>
                <td className="border border-black px-1 py-2 text-[8px] break-all">
                  {item.applicantName}
                </td>
                <td className="border border-black px-1 py-2 text-center text-[9px]">
                  {item.mustrollNo}
                </td>
                <td className="border border-black px-1 py-2 text-center text-[9px]">
                  {item.wageListNo}
                </td>
                <td className="border border-black px-1 py-2 text-[8px] break-all">
                  {item.referenceNo}
                </td>
                <td className="border border-black px-1 py-2 text-[8px] break-all">
                  {item.ftoNo}
                </td>
                <td className="border border-black px-1 py-2 text-[8px] break-all">
                  {item.verifyPo}
                </td>
                <td className="border border-black px-1 py-2 text-center text-[9px]">
                  {item.status}
                </td>
                <td className="border border-black px-1 py-2 text-[8px] break-all">
                  {item.bankName}
                </td>
                <td className="border border-black px-1 py-2 text-[8px] break-all">
                  {item.wgApbCrAccount}
                </td>
                <td className="border border-black px-1 py-2 text-[8px] break-all">
                  {item.favoringAsPerBank}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Signature Section */}
      <div className="flex justify-end mt-8 ">
        <div className="  text-center">
          <div className="mb-2">
            <span className="text-sm font-semibold">
              ಪಂಚಾಯತಿ ಅಭಿವೃದ್ಧಿ ಅಧಿಕಾರಿಗಳು / ಅಧ್ಯಕ್ಷರು
            </span>
          </div>
          <div>
            <span className="text-sm font-semibold">
              ಗ್ರಾಮ ಪಂಚಾಯತ {gramPanchayat}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WLFTOPdf;
