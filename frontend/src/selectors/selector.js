export const selectLairsByUserId = (state, userId) => {
  const allLairs = Object.values(state.entities.lairs);
  return allLairs.filter(lair => lair.owner_id == userId);
}

export const selectReviewsByLairId = (state, lairId) => {
  const allReviews = Object.values(state.entities.reviews);
  return allReviews.filter(review => review.lair_id == lairId);
}

export const selectReviewsByHostId = (state, hostId) => {
  const allReviews = Object.values(state.entities.reviews);
  const allLairs = Object.values(state.entities.lairs);
  const hostsLairs = {};
  for (let i=0,fin=allLairs.length; i<fin; i++) {
    const lair = allLairs[i];
    if (lair.owner_id === hostId) {
      hostsLairs[lair._id] = true;
    }
  }
  return allReviews.filter(review => hostsLairs[review.lair_id]);
}