import { useState } from "react";
import { projects } from "./UserProfileData";
import { MessageSquareMore, Paperclip } from "lucide-react";
import UseProgressBar from "../../hooks/useProgressBar";
import ActionMenu from "./ActionMenu";

function ProfileProject() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
        {projects.map((project) => (
            <div className="shadow-sm rounded-lg p-6 bg-white">
                <div className="flex justify-between items-center mb-8">
                  <button
                    className="py-[5px] px-[7px] rounded-full text-[11px] leading-[11px]"
                    style={{ color: project.typeColor, backgroundColor: project.typeBg }}
                  >
                    {project.type}
                  </button>
                  <ActionMenu />
                </div>
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-[#252f4A] text-[13px] sm:text-[15px] leading-[15px] mb-1">{project.title}</h3>
                    <div className="text-[#6B7177] text-sm flex items-center">
                      <span>Client: </span>
                      <button className="text-[#6B7177] text-[11px] leading-[11px] py-[5px] px-[7px] bg-[#F1F2F3] ms-1">{project.client}</button>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm text-[#6B7177]">Started: <span className="text-xs text-[#25B865]">{project.started}</span></h3>
                    <h3 className="text-sm text-[#6B7177]">Deadline: <span className="text-xs text-[#D13B4C]">{project.deadline}</span></h3>
                  </div>
                </div>
                <p className="mb-4 text-sm text-[#6B7177]">{project.description}</p>
                <div className="mb-8">
                  <UseProgressBar
                    label="Inprogress"
                    amount=""
                    percentage={project.progress}
                    barColor={project.progressColor}
                  />
                </div>
                <div className="flex justify-between gap-3 items-center">
                  <div className="flex items-center">
                    {project.team.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt=""
                        className={`w-[27px] h-[27px] rounded-full outline-1 outline-white  ${idx !== 0 ? "-ms-2" : ""} 
                      transition-all duration-300 ease-in-out
                      hover:scale-110
                      cursor-pointer`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <div className="text-sm text-[#6B7177]">
                      <Paperclip className="inline-block rotate-[317deg]" size={12} /> {project.attachments}
                    </div>
                    <div className="text-sm text-[#6B7177]">
                      <MessageSquareMore className="inline-block" size={12} /> {project.comments}
                    </div>
                  </div>
                </div>
              </div>
        ))}

      </div>
      <div className="flex justify-center">
        <button
          onClick={handleClick}
          disabled={loading}
          className="py-[10px] px-5 bg-white rounded-full text-sm text-[#252F4A] my-7 flex items-center gap-2 border border-gray-200 hover:bg-gray-50 transition cursor-pointer"
        >
          {loading ? (
            <>
              <span className="w-3 h-3 border-2 border-t-transparent rounded-full animate-spin mr-1"></span>
              Loading...
            </>
          ) : (
            "Load more..."
          )}
        </button>
      </div>
    </>
  );
}

export default ProfileProject;
