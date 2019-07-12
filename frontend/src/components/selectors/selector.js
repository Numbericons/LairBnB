export const selectLairsByUserId = (state, userId) => {
  const allLairs = Object.values(state.entities.lairs);
  return allLairs.filter(lair => lair.owner_id == userId);
}