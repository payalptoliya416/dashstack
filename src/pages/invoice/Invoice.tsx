import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { FileText, Send } from "lucide-react";
import InvoiceTable from "../../components/tables/InvoiceTable";
import { motion } from "framer-motion";
import { usePageAnimation } from "../../hooks/usePageAnimation";
import { useFadeIn } from "../../hooks/useFadeIn";
import MainTitle from "../../hooks/useMainTitle";
import type { InvoiceData } from "../../types/Dashboard";

const tableData : InvoiceData[] = [
  { serialno: "1", description: "Children Toy", quantity: "2", basecost: "$20", totalcost: "$80" },
  { serialno: "2", description: "Makeup", quantity: "2", basecost: "$50", totalcost: "$100" },
  { serialno: "3", description: "Asus Laptop", quantity: "5", basecost: "$100", totalcost: "$500" },
  { serialno: "4", description: "Iphone X", quantity: "4", basecost: "$1000", totalcost: "$4000" },
];

function Invoice() {
  const invoiceRef = useRef<HTMLDivElement | null>(null);
  const pageAnimation = usePageAnimation();
  const fadeIn = useFadeIn();

const handleDownloadPdf = () => {
  const products = tableData.map(item => ({
    product_code: item.serialno,
    product_description: item.description,
    quantity: Number(item.quantity),
    amount: parseFloat(item.basecost.replace("$", "")),
    total_amount: parseFloat(item.totalcost.replace("$", "")),
    shipment_costs: 0,
  }));

  const totalAmount = products.reduce((sum, product) => sum + product.total_amount, 0);

  const productRows = products.map(product => `
    <tr>
      <td style="padding: 6px; border: 1px solid #000; font-size: 10px; text-align: center;">${product.product_code}</td>
      <td style="padding: 6px; border: 1px solid #000; font-size: 10px; text-align: center;">${product.product_description}</td>
      <td style="padding: 6px; border: 1px solid #000; font-size: 10px; text-align: center;">${product.quantity}</td>
      <td style="padding: 6px; border: 1px solid #000; font-size: 10px; text-align: center;">$${product.amount.toFixed(2)}</td>
      <td style="padding: 6px; border: 1px solid #000; font-size: 10px; text-align: center;">$${product.total_amount.toFixed(2)}</td>
    </tr>
  `).join('');

  const totalRow = `
    <tr>
      <td colspan="4" style="padding: 6px; border: 1px solid #000; font-size: 10px; text-align: right; font-weight: bold;">Total</td>
      <td style="padding: 6px; border: 1px solid #000; font-size: 10px; text-align: center; font-weight: bold;">$${totalAmount.toFixed(2)}</td>
    </tr>
  `;

  const container = document.createElement("div");
  container.style.position = "absolute";
  container.style.left = "-9999px";
  container.style.width = "210mm";
  container.style.padding = "20px";
  container.style.fontFamily = "Arial, sans-serif";
  container.style.background = "#fff";

  const billContent = document.createElement("div");
  billContent.id = "bill";
  billContent.innerHTML = `
    <div style="width: 100%; box-sizing: border-box;">
      <h2 style="text-align: right; font-size: 12px; margin-bottom: 20px;">TAX INVOICE / OFFICIAL RECEIPT</h2>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
        <thead>
          <tr style="background-color: #f3f3f3;">
            <th style="padding: 6px; border: 1px solid #000; font-size: 11px;">Serial No.</th>
            <th style="padding: 6px; border: 1px solid #000; font-size: 11px;">Description</th>
            <th style="padding: 6px; border: 1px solid #000; font-size: 11px;">	Quantity</th>
            <th style="padding: 6px; border: 1px solid #000; font-size: 11px;">	Base Cost</th>
            <th style="padding: 6px; border: 1px solid #000; font-size: 11px;">Total Cost</th>
          </tr>
        </thead>
        <tbody>
          ${productRows}
          ${totalRow}
        </tbody>
      </table>

      <p style="font-size: 10px; text-align: left; margin-top: 10px;">Computer generated receipt. No signature required.</p>
    </div>
  `;

  container.appendChild(billContent);
  document.body.appendChild(container);

  html2canvas(container, {
    scale: 2,
    useCORS: true,
  }).then((canvas: any) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = 210;
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("invoice.pdf");
    document.body.removeChild(container);
  });
};


  return (
    <>
      <MainTitle title="Invoice" />
      <motion.div
              variants={pageAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        className="border-b border-[#D5D5D5]/60 py-10 px-4 xl:px-8 bg-white rounded-xl"
     ref={invoiceRef}
      >
        <motion.div  variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0} className="grid grid-cols-12 mb-6 md:mb-[58px] lg:mx-10 2xl:mx-44 items-center gap-5 md:gap-1">
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
        </motion.div>

      
          <InvoiceTable data={tableData} />

        <div className="flex justify-end items-center gap-4 mt-[40px]">
          <motion.button
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={2}
            onClick={handleDownloadPdf}
            className="p-4 rounded-xl border border-[#D5D5D5] bg-[#FAFBFD] cursor-pointer"
            title="Download PDF"
          >
            <FileText className="text-[#202224]" size={20} />
          </motion.button>

          <button className="flex items-center bg-[#4880FF] text-white font-semibold rounded-2xl pr-10 pl-6 sm:pl-10 py-4 relative overflow-hidden">
            <span className="z-10 relative text-sm pr-10 sm:pr-14">Send</span>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#6E9AFF] py-2 sm:py-3 px-3 sm:px-4 rounded-md sm:rounded-xl">
              <Send size={16} />
            </span>
          </button>
        </div>
      </motion.div>
    </>
  );
}

export default Invoice;
