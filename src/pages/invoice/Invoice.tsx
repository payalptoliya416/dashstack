import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { FileText, Send } from "lucide-react";
import InvoiceTable from "../../components/tables/InvoiceTable";
import MainTitle from "../../hooks/MainTitle";

function Invoice() {
  const invoiceRef = useRef<HTMLDivElement | null>(null);

    const handleDownloadPDF = async () => {
      if (!invoiceRef.current) {
        console.error("Invoice ref not found");
        return;
      }

      const invoiceElement = invoiceRef.current;

      // Fix for unsupported 'oklab' color in html2canvas by overriding colors to hex
      invoiceElement.querySelectorAll("*").forEach((el) => {
        const computedStyle = getComputedStyle(el);
        if (computedStyle.color.includes("oklab")) {
          (el as HTMLElement).style.color = "#000000"; // fallback black
        }
        if (computedStyle.backgroundColor.includes("oklab")) {
          (el as HTMLElement).style.backgroundColor = "#ffffff"; // fallback white
        }
      });

      try {
        const canvas = await html2canvas(invoiceElement, {
          scale: 2,
          useCORS: true,
          logging: false,
          scrollY: -window.scrollY, // fix for scroll offset
          backgroundColor: "#ffffff", // white background for PDF
        });

        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4",
        });

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

        pdf.save("invoice.pdf");
      } catch (error) {
        console.error("Failed to generate PDF:", error);
      }
    };

  return (
    <>
      <MainTitle title="Invoice" />
      <div
        className="border-b border-[#D5D5D5]/60 py-10 px-4 xl:px-8 bg-white rounded-xl"
     ref={invoiceRef}
      >
        <div className="grid grid-cols-12 mb-6 md:mb-[58px] lg:mx-10 2xl:mx-44 items-center gap-5 md:gap-1">
          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            <h3 className="text-[#404040] text-base font-semibold mb-3">
              Invoice From :
            </h3>
            <h2 className="mb-1 text-base font-bold text-[#404040]">
              Virginia Walker
            </h2>
            <p className="text-[#565656] text-sm font-semibold">
              9694 Krajcik Locks Suite 635
            </p>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            <h3 className="text-[#404040] text-base font-semibold mb-3">
              Invoice To :
            </h3>
            <h2 className="mb-1 text-base font-bold text-[#404040]">
              Austin Miller
            </h2>
            <p className="text-[#565656] text-sm font-semibold">Brookview</p>
          </div>
          <div className="col-span-12 md:col-span-4">
            <h3 className="text-[#404040] text-base font-semibold mb-3">
              Invoice Date : 12 Nov 2019
            </h3>
            <h3 className="text-[#404040] text-base font-semibold mb-3">
              Due Date : 25 Dec 2019
            </h3>
          </div>
        </div>

        <InvoiceTable />

        <div className="flex justify-end items-center gap-4 mt-[40px]">
          <button
            onClick={handleDownloadPDF}
            className="p-4 rounded-xl border border-[#D5D5D5] bg-[#FAFBFD]"
            title="Download PDF"
          >
            <FileText className="text-[#202224]" size={20} />
          </button>

          <button className="flex items-center bg-[#4880FF] text-white font-semibold rounded-2xl pr-10 pl-6 sm:pl-10 py-4 relative overflow-hidden">
            <span className="z-10 relative text-sm pr-10 sm:pr-14">Send</span>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#6E9AFF] py-2 sm:py-3 px-3 sm:px-4 rounded-md sm:rounded-xl">
              <Send size={16} />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Invoice;
