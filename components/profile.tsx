"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Profile = () => {
  const [avatarsVisible, setAvatarsVisible] = useState(false);
  const [scoresVisible, setScoresVisible] = useState(false);
  const [animatedScores, setAnimatedScores] = useState<number[]>([]);

  const users = [
    { id: 1, avatar: "/user1.jpg", score: 95 },
    { id: 2, avatar: "/user2.jpg", score: 88 },
    { id: 3, avatar: "/user3.jpg", score: 92 },
    { id: 4, avatar: "/user4.jpg", score: 85 },
    { id: 5, avatar: "/user5.jpg", score: 90 },
  ];

  useEffect(() => {
    setAvatarsVisible(true);
  }, []);

  const handleAvatarAnimationComplete = (index: number) => {
    if (index === users.length - 1) {
      // شروع انیمیشن امتیازها پس از اتمام آخرین عکس
      setScoresVisible(true);
    }
  };

  const handleScoreAnimationComplete = (userId: number) => {
    setAnimatedScores((prev) => [...prev, userId]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="flex gap-8 items-end">
        {users.map((user, index) => (
          <div key={user.id} className="relative h-40 flex justify-center">
            {/* عکس پروفایل */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                avatarsVisible
                  ? {
                      opacity: 1,
                      y: scoresVisible ? -user.score : 0,
                    }
                  : {}
              }
              transition={{
                delay: scoresVisible ? index * 0.2 : index * 0.2,
                duration: 0.5,
                type: "spring",
              }}
              onAnimationComplete={() => handleAvatarAnimationComplete(index)}
              className="absolute"
              style={{ bottom: scoresVisible ? `${user.score}px` : "0" }}
            >
              <img
                src={user.avatar}
                alt={`User ${user.id}`}
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </motion.div>

            {/* ستون امتیاز */}
            {scoresVisible && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: user.score,
                  opacity: 1,
                }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.8,
                  type: "spring",
                }}
                onAnimationComplete={() =>
                  handleScoreAnimationComplete(user.id)
                }
                className="w-12 bg-blue-400 rounded-t-lg relative"
              >
                {/* نمایش امتیاز */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                             bg-blue-600 text-white px-3 py-1 rounded-full text-sm 
                             font-bold shadow-md"
                >
                  {user.score}
                </motion.div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
