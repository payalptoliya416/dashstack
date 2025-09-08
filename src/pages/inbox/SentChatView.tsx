import { type FC, useState, useRef, useEffect } from "react";
import { EllipsisVertical, FileUp, Link, Mic, Send, X } from "lucide-react";
import type { ChatMessage } from "../../types/Dashboard";

const messageData: ChatMessage[] = [
  {
    id: 1,
    sender: "user",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    time: "6:30 pm",
  },
  {
    id: 2,
    sender: "me",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,",
    time: "6:34 pm",
  },
  {
    id: 3,
    sender: "user",
    text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default.Contrary to popular belief, Lorem Ipsum is not simply random text is the model text for your company.",
    time: "6:38 pm",
  },
];

const SentChatView: FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(messageData);
  const [newMessage, setNewMessage] = useState<string>("");
  const [draftImage, setDraftImage] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const formatTime = () =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const isValidURL = (text: string) => {
    try {
      new URL(text);
      return true;
    } catch {
      return false;
    }
  };
  const handleSend = () => {
    if (!newMessage.trim() && !draftImage) return;

    const trimmed = newMessage.trim();
    const newMsg: ChatMessage = {
      id: Date.now(),
      sender: "me",
      text: draftImage || trimmed,
      time: formatTime(),
      type: draftImage ? "image" : isValidURL(trimmed) ? "link" : "text",
    };

    setMessages((prev) => [...prev, newMsg]);
    setNewMessage("");
    setDraftImage(null);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setDraftImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  const handleSendLink = () => {
    setNewMessage("https://");
  };

  return (
    <div className="flex flex-col h-[698px]">
      {/* Chat messages */}
      <div className="space-y-4 overflow-y-auto p-4 sm:p-6 flex-1">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-2 sm:gap-4 items-end mb-6 ${
              msg.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender === "user" && (
              <img
                src="/images/user.png"
                alt="User"
                className="w-6 sm:w-10 h-6 sm:h-10 rounded-full"
              />
            )}
            <div
              className={`p-3 md:p-5 rounded-t-2xl max-w-[70%] text-sm ${
                msg.sender === "me"
                  ? "bg-blue-light text-white rounded-l-2xl"
                  : "bg-[#F6F6F6] text-darkgray rounded-r-2xl"
              }`}
            >
              <div className="mb-4 md:mb-[21px] break-words">
                {msg.type === "image" ? (
                  <img
                    src={msg.text}
                    alt="uploaded"
                    className="rounded-md max-w-[100px] md:max-w-[200px] h-auto"
                  />
                ) : msg.type === "link" ? (
                  <a
                    href={msg.text}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-200 hover:text-blue-300 break-all"
                  >
                    {msg.text}
                  </a>
                ) : msg.type === "file" ? (
                  <div className="flex items-center gap-2">
                    <FileUp size={16} />
                    <span>{msg.text}</span>
                  </div>
                ) : (
                  <p>{msg.text}</p>
                )}
              </div>

              {/* Footer */}
              <div className="flex justify-end gap-3 sm:gap-4 items-center text-xs">
                <span
                  className={
                    msg.sender === "me" ? "text-white" : "text-[#757575]"
                  }
                >
                  {msg.time}
                </span>
                <EllipsisVertical
                  className={
                    msg.sender === "me" ? "text-white" : "text-[#757575]"
                  }
                  size={16}
                />
              </div>
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-[#E0E0E0]/50 py-3 sm:py-4 px-2 sm:px-6 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Mic className="text-[#9D9D9D] sm:mr-4" />
          <input
            type="text"
            placeholder="Write message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1 rounded-lg text-base focus:outline-none placeholder:text-[#9D9D9D]"
          />
          {draftImage && (
            <div className="relative w-10 h-10 mb-2">
              <img
                src={draftImage}
                alt="preview"
                className="w-10 h-10 object-contain rounded-lg"
              />
              <button
                onClick={() => setDraftImage(null)}
                className="absolute top-0 right-0  bg-white rounded-full shadow-md cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>
          )}
          <div className="flex items-center gap-3 sm:gap-6 xl:gap-[30px]">
            <Link
              className="text-[#9D9D9D] cursor-pointer"
              size={19}
              onClick={handleSendLink}
            />
            <label htmlFor="fileUpload" className="cursor-pointer">
              <FileUp className="text-[#9D9D9D]" size={19} />
            </label>
            <input
              id="fileUpload"
              type="file"
              onChange={handleFileUpload}
              className="hidden"
              accept="image/*"
            />
            <button
              onClick={handleSend}
              className="bg-blue-light py-1 sm:py-[9px] px-3 sm:px-6 text-white flex justify-center items-center gap-2 rounded-md sm:rounded-lg cursor-pointer"
            >
             <span className="hidden sm:block">Send</span>  <Send size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentChatView;
