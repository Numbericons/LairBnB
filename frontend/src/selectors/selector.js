export const selectLairsByUserId = (state, userId) => {
  const allLairs = Object.values(state.entities.lairs);
  return allLairs.filter(lair => lair.owner_id == userId);
}

export const selectReviewsByLairId = (state, lairId) => {
  const allReviews = Object.values(state.entities.reviews);
  return allReviews.filter(review => review.lair_id == lairId);
}