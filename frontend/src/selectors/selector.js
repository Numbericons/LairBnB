export const selectLairsByUserId = (state, userId) => {
  const allLairs = Object.values(state.entities.lairs);
  return allLairs.filter(lair => lair.owner_id == userId);
};

export const selectLairsByType = (state, type) => {
  const allLairs = Object.values(state.entities.lairs);
  return allLairs.filter(lair => lair.type === type)
};

export const selectReviewsByLairId = (state, lairId) => {
  const allReviews = Object.values(state.entities.reviews);
  return allReviews.filter(review => review.lair_id == lairId);
};

export const selectLairsByLocation = (state, lat, lng) => {
  if (!lat || !lng) {
    return [];
  }
  const allLairs = Object.values(state.entities.lairs);
  // return allLairs.filter(lair => {
  //   if (lair.lat )
  // })
}