import React from "react";

const Form6PDF = ({
  gramPanchayat = "ಕಾಳಗಿ",
  taluka = "ಮುದೆ್ೕಬಹಾಳ",
  district = "ವಜಯಪುರ",
  date = "26/05/2021",
  applicationNumber = "3",
  applicantsData = [
    {
      slNo: 1,
      applicantName: "ಯಮನಪ್ ಮಲ್ಪ್ ಹಂಗರಗ",
      address: "ಚಲಮ",
      jobCardNo: "KN-07-004-008-002/315",
      workDuration: "29/05/2021 - 04/06/2021",
      childCareRequired: "ಇಲ್",
      signature: "ಇಲ್"
    },
    {
      slNo: 2,
      applicantName: "ರಾಯಮ್",
      address: "ಚಲಮ",
      jobCardNo: "KN-07-004-008-002/315",
      workDuration: "29/05/2021 - 04/06/2021",
      childCareRequired: "ಇಲ್",
      signature: "ಇಲ್"
    },
    {
      slNo: 3,
      applicantName: "ಮಾಳಪ್ ಭೕಮಪ್ ಮಾ್ಗೇರ",
      address: "ಚಲಮ",
      jobCardNo: "KN-07-004-008-002/316",
      workDuration: "29/05/2021 - 04/06/2021",
      childCareRequired: "ಇಲ್",
      signature: "ಇಲ್"
    },
    {
      slNo: 4,
      applicantName: "ಯಲ್ಪ್",
      address: "ಚಲಮ",
      jobCardNo: "KN-07-004-008-002/316",
      workDuration: "29/05/2021 - 04/06/2021",
      childCareRequired: "ಇಲ್",
      signature: "ಇಲ್"
    },
    {
      slNo: 5,
      applicantName: "ಬೕರಪ್ ಭೕಮಪ್ ಮಾ್ಗೇರ",
      address: "ಚಲಮ",
      jobCardNo: "KN-07-004-008-002/316",
      workDuration: "29/05/2021 - 04/06/2021",
      childCareRequired: "ಇಲ್",
      signature: "ಇಲ್"
    },
    {
      slNo: 6,
      applicantName: "ಭೕಯಪ್ ಮಲ್ಪ್ ಮಾ್ಗೇರ",
      address: "ಚಲಮ",
      jobCardNo: "KN-07-004-008-002/316",
      workDuration: "29/05/2021 - 04/06/2021",
      childCareRequired: "ಇಲ್",
      signature: "ಇಲ್"
    }
  ]
}) => {
  const rowsPerPage = 13; // Based on the PDF structure, approximately 13 rows per page
  const totalPages = Math.ceil(applicantsData.length / rowsPerPage);

  const renderPage = (pageNumber: number) => {
    const startIndex = (pageNumber - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const pageData = applicantsData.slice(startIndex, endIndex);
    const isFirstPage = pageNumber === 1;
    const isLastPage = pageNumber === totalPages;

    return (
      <div
        key={pageNumber}
        className="w-full max-w-4xl mx-auto bg-white border-2 border-black mb-8"
        style={{
          minHeight: "297mm",
          width: "210mm",
          fontFamily: "Arial, sans-serif",
          fontSize: "11px",
          lineHeight: "1.2",
          padding: "15mm"
        }}
      >
        {/* Header - Only on first page */}
        {isFirstPage && (
          <>
            {/* Header with logos */}
            <div className="flex items-center justify-between mb-6">
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
                <div className="text-base font-semibold mb-2">
                  ಗ್ರಾಮ ಪಂಚಾಯತ್, {gramPanchayat}, ತಾ|| {taluka}. ಜ|| {district}
                </div>
                <div className="text-sm mb-2">ಅನುಬಂಧ - III A/B (ನಮೂನೆ-6)</div>
                <div className="text-sm mb-2">
                  ಕೆಲಸಕ್ಕಾಗಿ ಅರ್ಜಿ ನಮೂನೆ (ವೈಯಕ್ತಿಕ / ಗುಂಪು)
                </div>
                <div className="text-sm mb-4">
                  ಮಹಾತ್ಮಾ ಗಾಂಧ ನರೇಗಾ ಯೕಜನೆ ಅನುಸೂಚ II ಕಂಡಕೆ 9 ಕಾಯ್ 3(1) ರಂತೆ
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

            {/* Application number and date with borders */}
            <div className="border-t-2 border-b-2 border-black py-2 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">
                  ಅಜರ ಸಂಖೆ್ {applicationNumber}
                </span>
                <span className="text-sm font-medium">ದನಾಂಕ {date}</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="mb-2">ಗೆ,</div>
              <div className="mb-1">ಅಧ್ಯಕ್ಷರು / ಪಂಚಾಯತಿ ಅಭಿವೃದ್ಧಿ ಅಧಿಕಾರಿ</div>
              <div className="mb-1">{gramPanchayat} ಪಂಚಾಯತಿ</div>
              <div className="mb-1">{taluka} ತಾಲೂಕು</div>
              <div className="mb-4">{district} ಜಿಲ್ಲೆ</div>
            </div>
            <div className="text-center mb-6">
              <div className="text-base font-semibold">
                ವಿಷಯ: ಕೆಲಸಕ್ಕಾಗಿ ಅರ್ಜಿ
              </div>
            </div>
            <div className="mb-6">
              <div className="mb-2">ಮಾನ್ರೆ,</div>
              <div className="mb-4 text-justify">
                ಮಹಾತ್ಮಾ ಗಾಂಧಿ ನರೆಗಾ ಯೋಜನೆ ಅನುಸೂಚಿ II ಕಂಡಕೆ 9 ಕಾಯ್ 3(1) ರನ್ಯ
                ಕೆಲಸಕ್ಕಾಗಿ ಅರ್ಜಿ ಸಲ್ಲಿಸುತ್ತಿದ್ದೇವೆ . ಇದರ ಪ್ರಕಾರ ನಮ್ಮ ಕೋರಿಕೆಯನು
                ಮತ್ತು ನಮ್ಮ ಉದ್ಯೋಗದ ಅವಧಿಯ ವಿವರವನ್ನು ನೀಡುತ್ತಿದ್ದೇವೆ.
              </div>
            </div>
          </>
        )}

        {/* Table */}
        <div className="w-full">
          <table className="w-full border-collapse border-2 border-black text-xs">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-black px-1 py-2 text-center font-semibold w-8">
                  ಕ್ರ.ಸಂ.
                </th>
                <th className="border border-black px-2 py-2 text-center font-semibold w-32">
                  ಅರ್ಜಿದಾರರ ಹೆಸರು
                </th>
                <th className="border border-black px-2 py-2 text-center font-semibold w-20">
                  ವಿಳಾಸ
                </th>
                <th className="border border-black px-2 py-2 text-center font-semibold w-32">
                  ಉದ್ಯೋಗ ಚೀಟಿ ಸಂಖ್ಯೆ
                </th>
                <th className="border border-black px-2 py-2 text-center font-semibold w-24">
                  ಉದ್ಯೋಗ ಕೊಡಲಾದ ಅವಧಿ
                </th>
                <th className="border border-black px-2 py-2 text-center font-semibold w-20">
                  ಶಿಶು ವಿಹಾರ ಅಗತ್ಯ ವಿದೇಯ (ಹೌದು / ಇಲ್)
                </th>
                <th className="border border-black px-2 py-2 text-center font-semibold w-16">
                  ಸಹ / ಹೆಬೆ್ಟು್
                </th>
              </tr>
            </thead>
            <tbody>
              {pageData.map((applicant, index) => (
                <tr key={startIndex + index}>
                  <td className="border border-black px-1 py-2 text-center">
                    {applicant.slNo}
                  </td>
                  <td className="border border-black px-2 py-2">
                    {applicant.applicantName}
                  </td>
                  <td className="border border-black px-2 py-2 text-center">
                    {applicant.address}
                  </td>
                  <td className="border border-black px-2 py-2 text-center">
                    {applicant.jobCardNo}
                  </td>
                  <td className="border border-black px-2 py-2 text-center">
                    {applicant.workDuration}
                  </td>
                  <td className="border border-black px-2 py-2 text-center">
                    {applicant.childCareRequired}
                  </td>
                  <td className="border border-black px-2 py-2 text-center">
                    {applicant.signature}
                  </td>
                </tr>
              ))}
              {/* Add empty rows to maintain table structure if needed */}
              {pageData.length < rowsPerPage && (
                <>
                  {Array.from(
                    { length: rowsPerPage - pageData.length },
                    (_, i) => (
                      <tr key={`empty-${i}`}>
                        <td className="border border-black px-1 py-2 text-center h-8"></td>
                        <td className="border border-black px-2 py-2"></td>
                        <td className="border border-black px-2 py-2"></td>
                        <td className="border border-black px-2 py-2"></td>
                        <td className="border border-black px-2 py-2"></td>
                        <td className="border border-black px-2 py-2"></td>
                        <td className="border border-black px-2 py-2"></td>
                      </tr>
                    )
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer - Only on last page */}
        {isLastPage && (
          <div className="mt-6">
            <div className="mb-4">
              <p className="text-sm">
                ನಮಗೆ ನೀಡುವ ಕೆಲಸದ ಆಧಾರದ ಮೇಲೆ ಕನಿಷ್ಠ 6 ದಿನಗಳು ನರಂತರ ಕೆಲಸ ಮಾಡಲು
                ಇಚ್ಛಿಸುತ್ತೇವೆ.
              </p>
            </div>
            <div className="mb-6 text-center">
              <p className="text-sm">ಸಹಿ / ಅರ್ಜಿದಾರರ ಎಡಗೈ ಹೆಬ್ಬೆಟ್ಟು ಗುರುತು</p>
            </div>
            <div className="mt-8">
              <div className="text-sm font-semibold mb-2">ಸೂಚನೆ</div>
              <div className="text-xs space-y-1">
                <div>
                  1.ಕೆಲಸಕ್ಕಾಗಿ ಅರ್ಜಿಯನ್ನು ಗ್ರಾಮ ಪಂಚಾಯತ್ / ಕಾರ್ಯಕ್ರಮ ಅಧಿಕಾರಿಗೆ
                  ಸಲ್ಲಿಸಲಾಗಿದೆ ಸಲ್ಲಿಸತಕದು
                </div>
                <div>
                  2. ಉದ್ಯೋಗ ಚೀಟಿಯನ್ನು ಹೊಂದಿರುವ ಕಾರ್ಮಿಕರು ಕೆಲಸದ ಸ್ಥಳದಲ್ಲಿ
                  ಅರ್ಜಿಯನ್ನು ಸಲ್ಲಿಸಬಹುದು.
                </div>
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

export default Form6PDF;
