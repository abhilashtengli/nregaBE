import React from "react";

const MGNREGAFrontPage = ({
  state = "ಕರ್ನಾಟಕ",
  district = "ವಿಜಯಪುರ",
  taluka = "ಮುದ್ದೇಬಿಹಾಳ",
  gramPanchayat = "ಕಾಳಗಿ",
  workCode = "1507004008/AV/93393042892262348",
  sanctionedYear = "2021-2022",
  technicalSanctionNo = "1507004008/2021-2022/567750/TS",
  projectLocation = "ಕಾಳಗಿ",
  grama = "ಕಾಳಗಿ",
  gramaPanchayat = "ಕಾಳಗಿ",
  talukaDetails = "ಮುದ್ದೇಬಿಹಾಳ",
  districtDetails = "ವಿಜಯಪುರ",
  legislativeAssemblyConstituency = "ಮುದ್ದೇಬಿಹಾಳ",
  lokSabhaConstituency = "ವಿಜಯಪುರ",
  stateDetails = "ಕರ್ನಾಟಕ",
  workStartDate = "8/7/2021",
  estimateLabourCharge = "167606.13",
  estimatedMaterialCharge = "1033000",
  estimatedTotal = "1199999.87",
  throughMGNREGAfunding = "1200000",
  spentLabourCharges = "",
  spentMaterialCharges = "",
  spentTotalCharges = "",
  leftLogoUrl = "",
  rightLogoUrl = ""
}) => {
  return (
    <div
      className="max-w-4xl mx-auto p-6 bg-white"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      {/* Decorative Border */}
      <div
        className="border-4 border-black p-6"
        style={{ borderStyle: "double" }}
      >
        {/* Header Section with Logos */}
        <div className="flex justify-between items-start mb-6">
          {/* Left Logo */}
          <div className="w-24 h-24 flex-shrink-0">
            {leftLogoUrl ? (
              <img
                src={leftLogoUrl}
                alt="Government Logo"
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 border border-gray-400 flex items-center justify-center">
                <span className="text-xs text-gray-600">Logo</span>
              </div>
            )}
          </div>

          {/* Center Title */}
          <div className="flex-1 text-center px-4">
            <h1 className="text-lg font-bold mb-2">
              ಮಹಾತ್ಮಾ ಗಾಂಧಿ ರಾಷ್ಟ್ರೀಯ ಗ್ರಾಮೀಣ
            </h1>
            <h2 className="text-lg font-bold mb-2">ಉದ್ಯೋಗಾರಿ ಪಾತಣಿ ಯೋಜನೆ</h2>
            <p className="text-sm mb-2">
              ರಾಜ್ಯ: {state}, ಜಿಲ್ಲೆ: {district}, ತಾ: {taluka}
            </p>
            <h3 className="text-base font-bold">
              ಗ್ರಾಮ ಪಂಚಾಯತಿ: {gramPanchayat}
            </h3>
          </div>

          {/* Right Logo */}
          <div className="w-24 h-24 flex-shrink-0">
            {rightLogoUrl ? (
              <img
                src={rightLogoUrl}
                alt="MGNREGA Logo"
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 border border-gray-400 flex items-center justify-center">
                <span className="text-xs text-gray-600">Logo</span>
              </div>
            )}
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-black border-t-2 mb-6" />

        {/* Content Section */}
        <div className="space-y-4">
          {/* 1. Work Details */}
          <div className="flex">
            <span className="font-bold mr-2">1.</span>
            <div>
              <span className="font-bold">
                ಕಾಮಗಾರಿ ಸಂಕೇತ: {gramPanchayat} ಗ್ರಾಮ ಪಂಚಾಯತಿಯ ಘನತ್ಯಾಜ್ಯ ವಿಲೇವಾರಿ
                ಘಟಕ ನಿರ್ಮಾಣ
              </span>
              <br />
              <span className="font-bold">
                ಕಾಮಗಾರಿ ಸಂಕೇತ ಸಂಖ್ಯೆ: {workCode}
              </span>
            </div>
          </div>

          {/* 2. Sanctioned Year */}
          <div className="flex">
            <span className="font-bold mr-2">2.</span>
            <span className="font-bold">
              ಕಾಮಗಾರಿ ಅನುಮೋದನ ವರ್ಷ: {sanctionedYear}
            </span>
          </div>

          {/* 3. Technical Sanction */}
          <div className="flex">
            <span className="font-bold mr-2">3.</span>
            <span className="font-bold">
              ತಾಂತ್ರಿಕ ಅನುಮತಿ ಪತ್ರ ಸಂಖ್ಯೆ: <u>{technicalSanctionNo}</u>
            </span>
          </div>

          {/* 4. Project Location Details */}
          <div className="flex">
            <span className="font-bold mr-2">4.</span>
            <span className="font-bold">ಕಾಮಗಾರಿ ಸ್ಥಳ: {projectLocation}</span>
          </div>

          {/* Location Grid */}
          <div className="ml-6 grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <div>ಎ. ಗ್ರಾಮ : {grama}</div>
            <div>ಬಿ. ಗ್ರಾಮ ಪಂಚಾಯತಿ : {gramaPanchayat}</div>
            <div>ಸಿ. ತಾಲೂಕು : {talukaDetails}</div>
            <div>ಡಿ. ಜಿಲ್ಲೆ : {districtDetails}</div>
            <div>ಇ. ವಿಧಾನಸಭಾ ಮತದಾತಿ : {legislativeAssemblyConstituency}</div>
            <div>ಎಫ್. ಲೋಕ ಸಭಾ ಮತದಾತಿ : {lokSabhaConstituency}</div>
            <div>ಜಿ. ರಾಜ್ಯ : {stateDetails}</div>
          </div>

          {/* 5. Administrative Category */}
          <div className="flex">
            <span className="font-bold mr-2">5.</span>
            <span className="font-bold">
              ಕಾಮಗಾರಿ ಅನುಷ್ಠಾನ ಏಜೆನ್ಸಿ: Gram Panchayat (3)
            </span>
          </div>

          {/* 6. Department */}
          <div className="flex">
            <span className="font-bold mr-2">6.</span>
            <span className="font-bold">
              ಕಾಮಗಾರಿ ವಿಭಾಗ (ಗುತ್ತಿ): <u>Anganvany</u>
            </span>
          </div>

          {/* 7. Work Start Date */}
          <div className="flex">
            <span className="font-bold mr-2">7.</span>
            <span className="font-bold">
              ಕಾಮಗಾರಿ ಪ್ರಾರಂಭ ದಿನಾಂಕ : {workStartDate}
            </span>
          </div>

          {/* 8. Estimated Cost Header */}
          <div className="flex">
            <span className="font-bold mr-2">8.</span>
            <span className="font-bold">ಕಾಮಗಾರಿ ಮುಕ್ತಾಯ ದಿನಾಂಕ :</span>
          </div>

          {/* 9. Estimated Cost Details */}
          <div className="flex">
            <span className="font-bold mr-2">9</span>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold">ಅಂದಾಜು ವೆಚ್ಚ (ರೂ. ಗಳಲ್ಲಿ) :</span>
                <div className="flex space-x-8">
                  <span className="font-bold">
                    ಕೂಲಿ: {estimateLabourCharge}
                  </span>
                  <span className="font-bold">
                    ಸಾಮಗ್ರಿ: {estimatedMaterialCharge}
                  </span>
                  <span className="font-bold">ಒಟ್ಟು: {estimatedTotal}</span>
                </div>
              </div>
              <div className="text-sm">
                <div>a. MGNREGA ನಿಧಿಯಿಂದ: {throughMGNREGAfunding}</div>
                <div>b. ಒಗ್ಗೂಡಿಕೆಯ ಇತರೆ (ಯೋಜನೆಯ ಸಂಕೇತ):</div>
              </div>
            </div>
          </div>

          {/* 10. Other Fund Details */}
          <div className="flex">
            <span className="font-bold mr-2">10.</span>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold">ಖರ್ಚಾದ ವೆಚ್ಚ (ರೂ. ಗಳಲ್ಲಿ) :</span>
                <div className="flex space-x-8">
                  <span className="font-bold">ಕೂಲಿ: {spentLabourCharges}</span>
                  <span className="font-bold">
                    ಸಾಮಗ್ರಿ: {spentMaterialCharges}
                  </span>
                  <span className="font-bold">ಒಟ್ಟು: {spentTotalCharges}</span>
                </div>
              </div>
              <div className="text-sm">
                <div>a. MGNREGA ನಿಧಿಯಿಂದ:</div>
                <div>b. ಒಗ್ಗೂಡಿಕೆಯ ಇತರೆ (ಯೋಜನೆಯ ಸಂಕೇತ):</div>
              </div>
            </div>
          </div>

          {/* 11. Asset Details */}
          <div className="flex">
            <span className="font-bold mr-2">11.</span>
            <div>
              <span className="font-bold">ಆಸ್ತಿಯ ಜಿಯೋಟ್ಯಾಗ್:</span>
              <div className="ml-4 text-sm mt-1">
                <div>a. ಆಸ್ತಿಯ ಗುರುತಿನ ಸಂಖ್ಯೆ (Asset Id):</div>
                <div>b. GPS Location: Lat: &nbsp;&nbsp;&nbsp;&nbsp; Lan:</div>
              </div>
            </div>
          </div>

          {/* 12. GRS Details */}
          <div className="flex">
            <span className="font-bold mr-2">12.</span>
            <span className="font-bold">ಗ್ರಾಮ ರೋಜಗಾರ ಸಹಾಯಕ (GRS) ಸಂಕೇತ:</span>
          </div>

          {/* 13. TA/JE/BFT Details */}
          <div className="flex">
            <span className="font-bold mr-2">13.</span>
            <span className="font-bold">TA/ JE/ BFT ಸಂಕೇತ:</span>
          </div>

          {/* 14. Social Audit */}
          <div className="flex">
            <span className="font-bold mr-2">14.</span>
            <span className="font-bold">
              ಸಾಮಾಜಿಕ ಲೇಖೆ ಪರಿಶೋಧನೆ ಮಾಡಲಾಗಿದೆಯೇ (ಹೌದು / ಇಲ್ಲ):
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MGNREGAFrontPage;
