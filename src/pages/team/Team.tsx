import { Link } from "react-router-dom";
import MainTitle from "../../hooks/MainTitle";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

function Team() {
  const members = useSelector((state: RootState) => state.teammember.members);
  return (
    <>
      <div className="flex justify-between items-start mb-[6px]">
        <MainTitle title="Team" />
        <Link to='/team/add-team-member' className="text-white text-sm font-bold bg-[#4379EE] rounded-md py-2 sm:py-[11px] px-[27px] transition-all duration-200 hover:shadow-md">
          Add New Member
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-[30px]">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-[url('/images/teambg.png')] bg-cover bg-white rounded-xl flex justify-center items-center pt-[46px] pb-9 flex-col"
          >
            <div className="w-[110px] h-[110px] rounded-full mb-6">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full w-[110px] h-[110px]"
              />
            </div>
            <div className="text-center">
              <h2 className="text-[#202224] text-base font-bold mb-1">{member.name}</h2>
              <h3 className="text-[#202224]/60 text-sm font-semibold mb-[9px]">{member.position}</h3>
              <a
                href={`mailto:${member.email}`}
                className="text-sm text-[#202224]/80 font-normal"
              >
                {member.email}
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Team;
