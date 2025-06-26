const RatingDetails = async ({
  params
}: {
  params: Promise<{ ratingId: string; productId: string }>;
}) => {
  const { productId, ratingId } = await params;

  return (
    <div>
      Rating Details of Product: {productId} and rating: {ratingId}
    </div>
  );
};

export default RatingDetails;
