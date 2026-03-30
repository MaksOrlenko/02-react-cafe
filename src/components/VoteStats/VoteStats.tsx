import type { Votes } from '../../types/votes';
import css from './VoteStats.module.css';

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

export default function VoteStats({
  votes,
  totalVotes,
  positiveRate,
}: VoteStatsProps) {
  return (
    <div>
      <p>Good: {votes.good}</p>
      <p>Neutral: {votes.neutral}</p>
      <p>Bad: {votes.bad}</p>
      <p>Total: {totalVotes}</p>
      <p>Positive: {positiveRate}%</p>
    </div>
  );
}

<p className={css.text}>No feedback yet</p>