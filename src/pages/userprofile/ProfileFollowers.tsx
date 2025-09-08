import { useState } from "react";
import { usersData } from "./UserProfileData";
import toast from "react-hot-toast";
import type { UserType } from "../../types/UserProfile";
import { motion } from "framer-motion";
import { usePageAnimation } from "../../hooks/usePageAnimation";

function ProfileFollowers() {
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);

  const [users, setUsers] = useState<UserType[]>(usersData);

  const handleFollowusersDataToggle = (index: number) => {
    setLoadingIndex(index);

    setTimeout(() => {
      setUsers((prev) => {
        const wasFollowing = prev[index].following;

        const updated = prev.map((user, i) =>
          i === index ? { ...user, following: !user.following } : user
        );

        if (!wasFollowing) {
          toast.success(`You are now following ${prev[index].name}`);
        } else {
          toast.error(`You unfollowed ${prev[index].name}`);
        }

        return updated;
      });

      setLoadingIndex(null);
    }, 800);
  };

  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
     <motion.div
      {...usePageAnimation()}
      className="overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {users.map((user, index) => (
          <div key={index} className="py-10 px-6 rounded-lg shadow-sm bg-white">
            <div className="flex justify-center flex-col items-center">
              <img
                src={user.img}
                alt={user.name}
                className="w-20 h-20 rounded-full mb-6"
              />
              <h3 className="text-darkgray mb-2 text-sm text-center">
                {user.name}
              </h3>
              <p className="text-13 text-graytext mb-4 text-center">
                {user.email}
              </p>
              <button
                onClick={() => handleFollowusersDataToggle(index)}
                disabled={loadingIndex === index}
                className={`py-2 px-4 rounded-full text-sm border border-gray-100 transition-all duration-200 ${
                  user.following
                    ? "text-[#25b865] bg-[#e9f8f0]"
                    : "text-[#252F4A] bg-white"
                }`}
              >
                {loadingIndex === index ? (
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 border-2 border-t-transparent border-gray-400 rounded-full animate-spin"></span>
                    Loading...
                  </span>
                ) : user.following ? (
                  "Following"
                ) : (
                  "Follow"
                )}
              </button>
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
      </motion.div>
    </>
  );
}

export default ProfileFollowers;
