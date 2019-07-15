import { RECEIVE_REVIEWS, RECEIVE_REVIEW} from '../../actions/reviews_actions.js'

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return Object.assign({}, state, action.reviews)
    case RECEIVE_REVIEW:
      return Object.assign({}, state, {[action.review.id]: action.review})
    default:
      return state;
  }
}

export default reviewsReducer;