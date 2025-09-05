import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Trash2, Upload } from "lucide-react";

interface FileWithPreview extends File {
  preview: string;
}

function BasicDropZone() {
  const [files, setFiles] = useState<FileWithPreview[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const mapped = acceptedFiles.map((file) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      );
      setFiles((prev) => [...prev, ...mapped]);
    },
  });

  const removeFile = (name: string) => {
    setFiles((prev) => prev.filter((file) => file.name !== name));
  };

  return (
    <>
      <div
        {...getRootProps()}
        className="border border-gray-300 rounded border-dotted p-6 min-h-[300px] 
                   flex justify-center items-center flex-col mb-7 cursor-pointer"
      >
        <input {...getInputProps()} />
        <div className="w-[60px] h-[60px] rounded-full bg-[#f1f2f3] border border-gray-300 flex justify-center items-center mx-auto mb-4">
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

      {/* File preview list */}
      <div className="space-y-3">
        {files.map((file) => (
          <div
            key={file.name}
            className="border border-gray-100 rounded px-4 py-2 flex justify-between items-center"
          >
            <div className="flex gap-5 items-center">
              <img
                src={file.type.startsWith("image/") ? file.preview : "/images/file-icon.png"}
                alt={file.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-[#252f4a] text-sm font-semibold">
                  {file.name}
                </h3>
                <p className="text-[#6B7177] text-sm">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            </div>
            <Trash2
              className="text-[#d13b4c] cursor-pointer"
              size={16}
              onClick={() => removeFile(file.name)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default BasicDropZone;
