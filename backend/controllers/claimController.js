import User from '../models/User.js';
import ClaimHistory from '../models/ClaimHistory.js';

export const claimPoints = async (req, res) => {
  const { userId } = req.body;
  const points = Math.floor(Math.random() * 10) + 1;

  const user = await User.findById(userId);
  user.totalPoints += points;
  await user.save();

  const history = new ClaimHistory({ userId, pointsClaimed: points });
  await history.save();

  const users = await User.find().sort({ totalPoints: -1 });
  res.json({ points, leaderboard: users });
};
