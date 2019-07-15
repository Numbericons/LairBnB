import { postReview, getReviewsByLairId, getReviews } from '../util/review_api_util';
import { receiveErrors } from './errors_actions';
import { receiveUsers } from './session_actions';
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";

export const receiveReview = (review) => {
  return ({
    type: RECEIVE_REVIEW,
    review
  })
};

export const receiveReviews = (reviews) => {
  return ({
    type: RECEIVE_REVIEWS,
    reviews
  })
};

export const fetchReviewsByLairId = lairId => dispatch => {
  return getReviewsByLairId(lairId)
    .then(payload => {
      dispatch(receiveReviews(payload.data.reviews));
      dispatch(receiveUsers(payload.data.users));
    })
};

export const fetchReviews = () => dispatch => {
  return getReviews()
    .then(payload => {
      dispatch(receiveReviews(payload.data));
    })
};

export const createReview = (review) => (dispatch) => {
  return postReview(review)
    .then(review => {
      return dispatch(receiveReview(review.data))
    }, err => {
      dispatch(receiveErrors(err.response.data))
    })
}