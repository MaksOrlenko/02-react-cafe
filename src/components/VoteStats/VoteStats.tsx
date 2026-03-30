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
    <div className={css.container}>
      <p className={css.item}>Good: {votes.good}</p>
      <p className={css.item}>Neutral: {votes.neutral}</p>
      <p className={css.item}>Bad: {votes.bad}</p>
      <p className={css.item}>Total: {totalVotes}</p>
      <p className={css.item}>Positive: {positiveRate}%</p>
    </div>
  );
}