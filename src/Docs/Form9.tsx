import React from "react";

const Form9PDF = ({
  district = "ವಿಜಯಪುರ",
  taluka = "ಮುದ್ದೇಬಿಹಾಳ",
  gramPanchayat = "ಕಾಳಗಿ",
  date = "09/08/2021",
  workCode = "1507004008/AV/93393042892262348",
  workName = "ಕಾಳಗಿ ಗ್ರಾಮ ಪಂಚಾಯತಿಯ ಘನತ್ಯಾಜ್ಯ ವಿಲೇವಾರಿ ಘಟಕ ನಿರ್ಮಾಣ",
  workLocation = "ಕಾಳಗಿ",
  workingDays = "ದಿನಾಂಕ : 09/08/2021ರಿಂದ15/08/2021ವರೆಗೆ",
  workerData = [
    {
      slNo: 1,
      name: "ಸಂಗಪ್ಪ ಬಸಪ್ಪ ಕುಂಬಾರ",
      jobCardNo: "KN-07-004-008-002/276"
    },
    {
      slNo: 2,
      name: "ಸುಜಾತಾ",
      jobCardNo: "KN-07-004-008-002/276"
    },
    {
      slNo: 3,
      name: "ಶಾಹೀನ ಮೈಬೂಸಾ ವಾಲಿಕಾರ",
      jobCardNo: "KN-07-004-008-002/244"
    },
    {
      slNo: 4,
      name: "ಶಿವಾನಂದ ನಾಗಪ್ಪ ಹೆಳವರ",
      jobCardNo: "KN-07-004-008-002/385"
    },
    {
      slNo: 5,
      name: "ಸಾಬವ್ವ ಶಿವಾನಂದ ಹೆಳವರ",
      jobCardNo: "KN-07-004-008-002/385"
    },
    {
      slNo: 6,
      name: "ಸಿದ್ದಲಿಂಗಪ್ಪ ಶಿವಾನಂದ ಹೆಳವರ",
      jobCardNo: "KN-07-004-008-002/385"
    },
    {
      slNo: 7,
      name: "ದೀಪಾ ಸಿದ್ದಲಿಂಗಪ್ಪ ಹೆಳವರ",
      jobCardNo: "KN-07-004-008-002/385"
    },
    {
      slNo: 8,
      name: "ಸುವರ್ಣ ಸಿದ್ದನಗೌಡ ಬಿರಾದಾರ",
      jobCardNo: "KN-07-004-008-002/398"
    },
    {
      slNo: 9,
      name: "ಬಸಮ್ಮ ಶರಣಪ್ಪ ಬೋರಗಿ",
      jobCardNo: "KN-07-004-008-002/77"
    },
    {
      slNo: 10,
      name: "ನೀಲಮ್ಮ ಶರಣಪ್ಪ ಕುಂಬಾರ",
      jobCardNo: "KN-07-004-008-002/384"
    },
    {
      slNo: 11,
      name: "ಶರಣಪ್ಪ ಬಸಪ್ಪ ಕುಂಬಾರ",
      jobCardNo: "KN-07-004-008-002/384"
    },
    {
      slNo: 12,
      name: "ಬಾಯವ್ವ ಮುದಿಗೌಡ ಬಿರಾದರ",
      jobCardNo: "KN-07-004-008-002/400"
    },
    {
      slNo: 13,
      name: "ಅಮ್ಮವ್ವ ತಿಪ್ಪಣ್ಣ ಹೆಳವರ",
      jobCardNo: "KN-07-004-008-002/374"
    },
    {
      slNo: 14,
      name: "ತಿಪ್ಪಣ್ಣ ಬುಡ್ಡಪ್ಪ ಹೆಳವರ",
      jobCardNo: "KN-07-004-008-002/374"
    },
    {
      slNo: 15,
      name: "ಲಕ್ಷ್ಮೀಬಾಯಿ ಮುತ್ತಪ್ಪ ಮಸೂತಿ",
      jobCardNo: "KN-07-004-008-002/387"
    },
    {
      slNo: 16,
      name: "ಶ್ರೀಶೈಲ ಮುತ್ತಣ್ಣ ಮಸೂತಿ",
      jobCardNo: "KN-07-004-008-002/387"
    },
    {
      slNo: 17,
      name: "ಸಾವಿತ್ರಿ ಶ್ರೀಶೈಲ ಮಸೂತಿ",
      jobCardNo: "KN-07-004-008-002/387"
    },
    {
      slNo: 18,
      name: "ಗುರುಪಾದಪ್ಪ ಭೀಮನಗೌಡ ಬೋರಗಿ",
      jobCardNo: "KN-07-004-008-002/407"
    },
    {
      slNo: 19,
      name: "ಸಾವಿತ್ರಿ ಪರಶುರಾಮ ಮಾದರ",
      jobCardNo: "KN-07-004-008-002/376"
    },
    {
      slNo: 20,
      name: "ಬಸವರಾಜ ಚಂದ್ರಾಮಪ್ಪ ಹಂಚನಾಳ",
      jobCardNo: "KN-07-004-008-002/323"
    },
    {
      slNo: 21,
      name: "ಮಂಜುಳಾ",
      jobCardNo: "KN-07-004-008-002/323"
    },
    {
      slNo: 22,
      name: "ಮಾಳವ್ವ ಲಕ್ಷ್ಮಣ ಡೋಣೂರ",
      jobCardNo: "KN-07-004-008-002/334"
    },
    {
      slNo: 23,
      name: "ಲಕ್ಷ್ಮಣ",
      jobCardNo: "KN-07-004-008-002/334"
    },
    {
      slNo: 24,
      name: "ಸಿದ್ದಪ್ಪ ಸಿದ್ದಪ್ಪ ಗಂಗೂರ",
      jobCardNo: "KN-07-004-008-002/351"
    },
    {
      slNo: 25,
      name: "ಸೀತಮ್ಮ ಸಿದ್ದಪ್ಪ ಗಂಗೂರ",
      jobCardNo: "KN-07-004-008-002/351"
    },
    {
      slNo: 26,
      name: "ಸಂಗಪ್ಪ ನಿಜಪ್ಪ ಮಾದರ",
      jobCardNo: "KN-07-004-008-002/363"
    },
    {
      slNo: 27,
      name: "ಶಿದ್ದಪ್ಪ ಮಸೂತಿ",
      jobCardNo: "KN-07-004-008-002/131"
    },
    {
      slNo: 28,
      name: "ಬೋರಮ್ಮ ಮಸೂತಿ",
      jobCardNo: "KN-07-004-008-002/131"
    },
    {
      slNo: 29,
      name: "ನೀಲಪ್ಪ ಬಸಪ್ಪ ಹೆಳವರ",
      jobCardNo: "KN-07-004-008-002/411"
    },
    {
      slNo: 30,
      name: "ಶೈಲಾ ನೀಲಪ್ಪ ಹೆಳವರ",
      jobCardNo: "KN-07-004-008-002/411"
    }
  ]
}) => {
  const itemsPerPage = 20; // Based on the PDF structure
  const totalPages = Math.ceil(workerData.length / itemsPerPage);

  const renderPage = (pageNumber: number) => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = workerData.slice(startIndex, endIndex);
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
            <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4">
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
                <div className="text-base font-semibold">
                  ಗ್ರಾಮ ಪಂಚಾಯತಿ, {gramPanchayat}, ತಾ|| {taluka}. ಜಿ|| {district}
                </div>
                <div className="text-sm mb-1 font-bold">ನಮೂನೆ-9</div>
                <div className="text-base font-bold ">
                  ಕೆಲಸಕ್ಕೆ ಹಾಜರಾಗಲು ತಿಳಿಸುವ ಸಾರ್ವಜನಿಕ ನೋಟೀಸು
                </div>
                <div className="text-sm">
                  ಮಹಾತ್ಮ ಗಾಂಧಿ ನರೇಗಾ ಯೋಜನೆ - ಕರ್ನಾಟಕ
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

            {/* Notice Content */}
            <div className="mb-6 text-justify text-sm leading-relaxed">
              <p className="mb-4 text-xs leading-relaxed">
                ಈ ಕೆಳಗಿನ ಪಟ್ಟಿಯಲ್ಲಿರುವಂತೆ ಅಕುಶಲ ಉದ್ಯೋಗಕ್ಕಾಗಿ ನೋಂದಾಯಿಸಿರುವ
                ವ್ಯಕ್ತಿಗಳು, ಈ ಕೆಳಗೆ ವಿವರಿಸಿರುವ ಕಾಮಗಾರಿಯ ಮೇಲ್ವಿಚಾರಕರಲ್ಲಿ ದಿನಾಂಕ{" "}
                {date} ರಂದು ಕೆಲಸಕ್ಕೆ ವರದಿ ಮಾಡಿಕೊಳ್ಳಲು ಸೂಚಿಸಿದೆ. ಎಂಬುದಾಗಿ
                ಸಂಬಂಧಿಸಿದ ವ್ಯಕ್ತಿಗಳ ಹಾಗೂ ಸಾರ್ವಜನಿಕರ ಗಮನಕ್ಕೆ ಈ ಮೂಲಕ ತರಲಾಗಿದೆ.
              </p>
            </div>

            {/* Work Details Table */}
            <div className="mb-6">
              <table className="w-full  text-sm">
                <tbody>
                  <tr>
                    <td className=" px-2 py-1 font-semibold w-8">1</td>
                    <td className=" px-2 py-1 font-semibold">ಯೋಜನೆಯ ಸಂಖ್ಯೆ</td>
                    <td className=" px-2 py-1">{workCode}</td>
                  </tr>
                  <tr>
                    <td className=" px-2 py-1 font-semibold">2</td>
                    <td className=" px-2 py-1 font-semibold">ಕಾಮಗಾರಿಯ ಹೆಸರು</td>
                    <td className=" px-2 py-1">{workName}</td>
                  </tr>
                  <tr>
                    <td className=" px-2 py-1 font-semibold">3</td>
                    <td className=" px-2 py-1 font-semibold">ಕಾಮಗಾರಿಯ ಸ್ಥಳ</td>
                    <td className=" px-2 py-1">{workLocation}</td>
                  </tr>
                  <tr>
                    <td className=" px-2 py-1 font-semibold">4</td>
                    <td className=" px-2 py-1 font-semibold">
                      ಕಾರ್ಯನಿರ್ವಹಣಾ ಏಜೆನ್ಸಿ
                    </td>
                    <td className=" px-2 py-1">ಗ್ರಾಮ ಪಂಚಾಯತ</td>
                  </tr>
                  <tr>
                    <td className=" px-2 py-1 font-semibold">5</td>
                    <td className=" px-2 py-1 font-semibold">
                      ಅನುಷ್ಠಾನ ಏಜೆನ್ಸಿ
                    </td>
                    <td className=" px-2 py-1">ಗ್ರಾಮ ಪಂಚಾಯತ</td>
                  </tr>
                  <tr>
                    <td className=" px-2 py-1 font-semibold">6</td>
                    <td className=" px-2 py-1 font-semibold">
                      ಕೆಲಸಕ್ಕೆ ನೀಡಿದ ದಿನಗಳು
                    </td>
                    <td className=" px-2 py-1">{workingDays}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Worker Table */}
        <div className="w-full mb-6">
          <table className="w-full border-collapse border border-black text-xs">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-black px-2 py-2 text-center font-semibold w-12">
                  ಕ್ರ.ಸಂ.
                </th>
                <th className="border border-black px-2 py-2 text-center font-semibold">
                  ಹೆಸರು
                </th>
                <th className="border border-black px-2 py-2 text-center font-semibold w-40">
                  ಉದ್ಯೋಗ ಚೀಟಿ ಸಂಖ್ಯೆ
                </th>
              </tr>
            </thead>
            <tbody>
              {pageData.map((worker, index) => (
                <tr key={startIndex + index}>
                  <td className="border border-black px-2 py-2 text-center">
                    {worker.slNo}
                  </td>
                  <td className="border border-black px-2 py-2">
                    {worker.name}
                  </td>
                  <td className="border border-black px-2 py-2 text-center">
                    {worker.jobCardNo}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer - Only on last page */}
        {isLastPage && (
          <div className="mt-8">
            <div className="flex justify-between">
              <div>
                <p className="text-xs mb-2">ದಿನಾಂಕ: 06/08/2021</p>
              </div>
              <div className="mb-2">
                <p className="text-xs">ಗ್ರಾ.ಪಂ.ಮೊಹರು</p>
              </div>
              <div>
                <p className="text-xs font-semibold">
                  ಪಂಚಾಯತ ಅಭಿವೃದ್ಧಿ ಅಧಿಕಾರಿ
                </p>
                <p className="text-xs pl-5">ಗ್ರಾಮ ಪಂಚಾಯತಿ, {gramPanchayat}.</p>
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

export default Form9PDF;
