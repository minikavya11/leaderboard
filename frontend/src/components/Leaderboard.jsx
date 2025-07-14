import React from "react";
import { FaCrown } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Leaderboard({ users, selectedUser }) {
  const sortedUsers = [...users].sort((a, b) => b.totalPoints - a.totalPoints);

  const getBadge = (index) => {
    const colors = ["text-yellow-500", "text-gray-400", "text-orange-400"];
    return index < 3 ? (
      <FaCrown className={`inline-block mr-2 ${colors[index]}`} />
    ) : null;
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-indigo-600 mb-4 text-center">
        📋 Full Leaderboard
      </h2>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {sortedUsers.map((user, index) => (
            <motion.li
              key={user._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              className={`flex justify-between items-center px-4 py-3 transition ${
                user._id === selectedUser
                  ? "bg-indigo-100 font-semibold text-indigo-800"
                  : "hover:bg-indigo-50 text-gray-800"
              }`}
            >
              {/* Rank + Crown + Name */}
              <span className="flex items-center gap-2">
                <span className="text-sm text-gray-500 w-5 text-right">{index + 1}.</span>
                {getBadge(index)}
                {user.name}
              </span>

              {/* Masked points */}
              <span className="text-sm text-gray-600">
  ⭐ {user.totalPoints} points
</span>

            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
