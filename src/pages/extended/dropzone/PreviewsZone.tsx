import { useDropzone } from "react-dropzone";
import { useState, useEffect } from "react";
import { Upload, X } from "lucide-react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

interface FilePreview {
  file: File;
  preview: string;
}

function PreviewsZone() {
  const [files, setFiles] = useState<FilePreview[]>([]);

  // Dropzone setup
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => {
      const newFiles = acceptedFiles.map((file) =>
        Object.assign({ file, preview: URL.createObjectURL(file) })
      );
      setFiles((prev) => [...prev, ...newFiles]);
    },
  });

  // Cleanup previews
  useEffect(() => {
    return () => files.forEach((f) => URL.revokeObjectURL(f.preview));
  }, [files]);

  // Delete confirmation
  const handleDelete = (file: File) => {
    MySwal.fire({
      html: `
        <div class="text-center">
            <h1 class="text-xl font-bold text-[#252f4a] mb-2 pt-7">Are you sure?</h1>
            <p class='text-sm'>You won't be able to revert this!</p>
        </div>
      `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      buttonsStyling: false,
      didOpen: () => {
        const confirm = document.querySelector(
          ".swal2-confirm"
        ) as HTMLButtonElement;
        if (confirm)
          confirm.className =
            "bg-[#3E97FF] text-white px-4 py-2 rounded text-sm font-semibold";

        const cancel = document.querySelector(
          ".swal2-cancel"
        ) as HTMLButtonElement;
        if (cancel)
          cancel.className =
            "bg-[#D13B4C] text-white px-4 py-2 rounded text-sm font-semibold ms-2";
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setFiles((prev) => prev.filter((f) => f.file !== file));
        MySwal.fire({
          html: `
            <div class="text-center">
              <h1 class="text-xl font-bold text-[#252f4a] mb-2 pt-7">Deleted!</h1>
              <p class='text-sm'>Your file has been deleted.</p>
            </div>
          `,
          icon: "success",
          confirmButtonText: "OK",
          buttonsStyling: false,
          didOpen: () => {
            const confirm = document.querySelector(
              ".swal2-confirm"
            ) as HTMLButtonElement;
            if (confirm)
              confirm.className =
                "bg-[#3E97FF] text-white px-4 py-2 rounded text-sm font-semibold";
          },
        });
      }
    });
  };

  return (
    <>
      {/* Dropzone Area */}
      <div
        {...getRootProps({
          className:
            "border border-gray-300 rounded border-dotted p-4 sm:p-6 min-h-[300px] flex justify-center items-center flex-col cursor-pointer text-center",
        })}
      >
        <input {...getInputProps()} />
        <div className="w-12 sm:w-[60px] h-12 sm:h-[60px] rounded-full bg-[#f1f2f3] border border-gray-300 flex justify-center items-center mx-auto mb-4">
          <Upload size={20} />
        </div>
        <h3 className="text-[#252f4a] text-base mb-2 font-bold">
          Drop files here or click to upload.
        </h3>
        <p className="text-[#6B7177] text-sm">
          (This is just a demo drop zone. Selected files are not actually
          uploaded.)
        </p>
      </div>

      {/* Preview Thumbnails */}
      <div className="flex gap-2 items-center mt-5 flex-wrap">
        {files.map((f, i) => (
          <div
            key={i}
            className="border border-gray-100 rounded p-1 w-32 h-32 relative group"
          >
            <img
              src={f.preview}
              alt={f.file.name}
              className="h-full w-full object-cover rounded"
            />
            <div
              className="absolute right-1 top-1 w-7 h-7 rounded-full bg-white shadow flex justify-center items-center cursor-pointer opacity-80 hover:opacity-100"
              onClick={() => handleDelete(f.file)}
            >
              <X size={16} className="text-red-500" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PreviewsZone;
