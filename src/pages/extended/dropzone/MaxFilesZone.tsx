import { useDropzone } from "react-dropzone";
import { useState } from "react";
import { Trash2, Upload } from "lucide-react";

interface FilePreview {
  file: File;
  preview: string;
}

function MaxFilesZone() {
  const [files, setFiles] = useState<FilePreview[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 5,
    maxSize: 5 * 1024 * 1024, // 5 MB
    onDrop: (acceptedFiles) => {
      const newFiles = acceptedFiles.map((file) =>
        Object.assign({ file, preview: URL.createObjectURL(file) })
      );
      setFiles((prev) => [...prev, ...newFiles].slice(0, 5)); // keep max 5
    },
  });

  const removeFile = (file: File) => {
    setFiles((prev) => prev.filter((f) => f.file !== file));
  };

  return (
    <>
      {/* Dropzone Area */}
      <div
        {...getRootProps({
          className:
            "border border-gray-300 rounded border-dotted p-4 sm:p-6 min-h-[300px] flex justify-center items-center flex-col cursor-pointer mb-6 text-center",
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
          Max <strong>5 files</strong> and max size of <strong>5 MB</strong>
        </p>
      </div>

      {/* Uploaded Files List */}
      {files.map((f, i) => (
        <div
          key={i}
          className="border border-gray-100 rounded px-2 sm:px-4 py-2 flex justify-between items-center mb-2"
        >
          <div className="flex gap-3 sm:gap-5 items-center">
            <img
              src={f.preview}
              alt={f.file.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="text-[#252f4a] text-sm font-semibold">
                {f.file.name}
              </h3>
              <p className="text-[#6B7177] text-sm">
                {(f.file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>
          <Trash2
            className="text-[#d13b4c] cursor-pointer"
            size={16}
            onClick={() => removeFile(f.file)}
          />
        </div>
      ))}
    </>
  );
}

export default MaxFilesZone;
