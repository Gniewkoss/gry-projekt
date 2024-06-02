import { getAvgRating } from "@/app/actions/rating";

export default async function RatingAvg({ gameId }: { gameId: number }) {
  const avarageRate = await getAvgRating(gameId);

  return (
    <div>
      <h3>Avg rating: {avarageRate} </h3>
    </div>
  );
}
