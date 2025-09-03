
import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

function TinyMCE() {
  const editorRef = useRef<any>(null);
  const [content, setContent] = useState<string>("Welcome to TinyMCE!");

  // const [contentFull, setContentFUll] = useState<string>("Welcome to Full Feature TinyMCE!");

  return (
    <>
      <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        {/* Header */}
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Basic
        </div>

        {/* Editor */}
        <div className="p-6">
          <Editor
            apiKey="YOUR_TINYMCE_API_KEY" 
            onInit={(_evt, editor) => (editorRef.current = editor)}
            initialValue={content}
            init={{
              height: 400,
              menubar: true,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={(newContent) => setContent(newContent)}
          />
        </div>
      </div>

      <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
      {/* Header */}
      <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
        Full Feature Editor
      </div>

      {/* Editor */}
      <div className="p-6">
        <Editor
          apiKey="no-api-key" // 🔑 Get free API key from https://www.tiny.cloud/ (or keep no-api-key for testing)
          onInit={(_evt, editor) => (editorRef.current = editor)}
          initialValue={content}
          init={{
            height: 500,
            menubar: "file edit view insert format tools table help",
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "help",
              "wordcount",
              "emoticons",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic underline strikethrough forecolor backcolor | " +
              "alignleft aligncenter alignright alignjustify | " +
              "bullist numlist outdent indent | link image media emoticons | " +
              "table code fullscreen preview | removeformat help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",

            // ✅ Image upload handler
            images_upload_handler: (blobInfo : any, success : any) => {
              // For demo: convert to base64
              const base64 = "data:" + blobInfo.blob().type + ";base64," + blobInfo.base64();
              success(base64);

              // 🔥 Real project ma tamara backend API call karo (example below):
              /*
              const formData = new FormData();
              formData.append("file", blobInfo.blob(), blobInfo.filename());

              fetch("http://localhost:5000/upload", {
                method: "POST",
                body: formData,
              })
                .then((res) => res.json())
                .then((data) => success(data.url)) // server should return image URL
                .catch(() => failure("Image upload failed"));
              */
            },
          }}
          onEditorChange={(newContent) => setContent(newContent)}
        />
      </div>
    </div>
    </>
  );
}

export default TinyMCE;
