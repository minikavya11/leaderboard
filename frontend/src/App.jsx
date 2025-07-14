import { useEffect, useState } from "react";
import API from "./api/api";
import AddUser from "./components/AddUser";
import UserDropdown from "./components/UserDropdown";
import ClaimButton from "./components/ClaimButton";
import Leaderboard from "./components/Leaderboard";
import TopThree from "./components/TopThree";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import toast, { Toaster } from "react-hot-toast";
import useWindowSize from 'react-use/lib/useWindowSize';

export default function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const fetchUsers = async () => {
    try {
      const res = await API.get("/users");
      setUsers(res.data);
    } catch (err) {
      toast.error("Failed to fetch users");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleClaim = async () => {
    if (!selectedUser) return toast.error("Please select a user");

    try {
      const res = await API.post("/claim", { userId: selectedUser });
      const { points, leaderboard } = res.data;
      
      setUsers(leaderboard);

      toast.success(`🎉 You claimed ${points} points!`, { duration: 3000 });

      if (points === 10) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
      }
    } catch (err) {
      toast.error("Claim failed. Try again.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-100 via-white to-pink-100 px-4 sm:px-6 lg:px-8 py-10">
      <Toaster position="top-center" />

      {showConfetti && <Confetti width={width} height={height} />}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto bg-white/70 backdrop-blur-lg border border-indigo-200 shadow-2xl rounded-2xl px-6 py-8"
      >
        <h1 className="text-4xl font-bold text-center text-indigo-700 drop-shadow-lg mb-6">
          🏆 Leaderboard 
        </h1>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <AddUser onAdd={fetchUsers} />
          
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mt-6"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <UserDropdown users={users} onSelect={setSelectedUser} />
          <ClaimButton onClick={handleClaim} />
        </motion.div>

        {/* Top 3 Users */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <TopThree users={users} />
        </motion.div>

        {/* Leaderboard List */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
         <Leaderboard users={users} selectedUser={selectedUser} />

        </motion.div>
      </motion.div>
    </div>
  );
}
