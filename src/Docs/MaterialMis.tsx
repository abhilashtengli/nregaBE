import React from "react";

interface Material {
  material: string;
  unitPrice: string;
  quantity: string;
  amount: string;
}

interface PDFData {
  workName: string;
  year: string;
  workCode: string;
  vendorName: string;
  financialYear: string;
  billNo: string;
  billAmount: string;
  billDate: string;
  dateOfPayment: string;
  materials: Material[];
  totalAmount: string;
}

interface PDFTableStructureProps {
  data?: PDFData;
  itemsPerPage?: number;
}

export default function PDFTableStructure({
  data,
  itemsPerPage = 15
}: PDFTableStructureProps) {
  if (!data) {
    return <div>No data provided.</div>;
  }

  // Split materials into pages
  const pages = [];
  for (let i = 0; i < data.materials.length; i += itemsPerPage) {
    pages.push(data.materials.slice(i, i + itemsPerPage));
  }

  return (
    <div className="w-full">
      {pages.map((pageMaterials, pageIndex) => (
        <div
          key={pageIndex}
          className="w-full max-w-[794px] mx-auto bg-white print:p-4 print:text-[10px]"
          style={{
            pageBreakAfter: pageIndex < pages.length - 1 ? "always" : "auto",
            marginBottom: pageIndex < pages.length - 1 ? "50px" : "0"
          }}
        >
          {/* Work Code Header */}
          <div className="w-full border-2 border-black">
            <div className="py-1 px-0.5 bg-purple-200 border-b border-black">
              <span className="font-bold text-[10px]">
                Work Code: {data.workName} ({data.year}){data.workCode}
              </span>
            </div>

            {/* Material Sections for current page */}
            {pageMaterials.map((material, index) => (
              <div key={index}>
                {/* Bill Information Row */}
                <div className="grid grid-cols-4 text-[10px] bg-[#f0e3ee] border-b border-black">
                  <div className="py-1 px-0.5 border-r font-bold border-black">
                    <span className="font-bold">Bill No.:</span>
                    {data.billNo}
                  </div>
                  <div className="py-1 px-0.5 border-r font-bold border-black">
                    <span className="font-bold">Bill Amount:</span>
                    {data.billAmount}
                  </div>
                  <div className="py-1 px-0.5 border-r font-bold border-black">
                    <span className="font-bold">Bill Date:</span>
                    {data.billDate}
                  </div>
                  <div className="py-1 px-0.5 font-bold">
                    <span className="font-bold">Date of Payment:</span>
                    {data.dateOfPayment}
                  </div>
                </div>

                {/* Vendor Information Row */}
                <div className="grid grid-cols-2 border-b border-black bg-[#f0e3ee] text-[10px]">
                  <div className="py-1 px-0.5 border-r font-bold border-black">
                    <span className="font-bold">Vendor name:</span>
                    {data.vendorName}
                  </div>
                  <div className="py-1 px-0.5 text-right font-bold">
                    <span className="font-bold">Financial Year:</span>
                    {data.financialYear}
                  </div>
                </div>

                {/* Material Header Row */}
                <div className="grid grid-cols-4 border-b border-black bg-[#f0e3ee] text-[10px]">
                  <div className="py-1 px-0.5 border-r border-black font-bold text-blue-600">
                    Material
                  </div>
                  <div className="py-1 px-0.5 border-r border-black font-bold text-blue-600 text-center">
                    Unit Price (In Rupees)
                  </div>
                  <div className="py-1 px-0.5 border-r border-black font-bold text-blue-600 text-center">
                    Quantity
                  </div>
                  <div className="py-1 px-0.5 font-bold text-blue-600 text-center">
                    Amount (In Rupees)
                  </div>
                </div>

                {/* Material Data Row */}
                <div className="grid grid-cols-4 font-bold border-b border-black bg-[#f0e3ee] text-[10px]">
                  <div className="py-1 px-0.5 border-r border-black">
                    {material.material}
                  </div>
                  <div className="py-1 px-0.5 border-r border-black text-left">
                    {material.unitPrice}
                  </div>
                  <div className="py-1 px-0.5 border-r border-black text-left">
                    {material.quantity}
                  </div>
                  <div className="py-1 px-0.5 text-left">{material.amount}</div>
                </div>
              </div>
            ))}

            {/* Total Amount Row - only on last page */}
            {pageIndex === pages.length - 1 && (
              <div className="grid grid-cols-4 bg-[#f0e3ee] text-[10px]">
                <div className="p-1 col-span-3 text-center border-r border-black font-bold">
                  Total Amount
                </div>
                <div className="p-1 col-span-1 text-center font-bold">
                  {data.totalAmount}
                </div>
              </div>
            )}
          </div>

          {/* Page number footer */}
          {pages.length > 1 && (
            <div className="text-center mt-4 text-[8px]">
              Page {pageIndex + 1} of {pages.length}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
