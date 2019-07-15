import axios from 'axios';

export const getReviewsByLairId = (lairId) => {
  return axios.get(`/api/reviews/lairs/${lairId}`)
};

export const getReviews = () => {
  return axios.get('/api/reviews');
}

export const postReview = (review) => {
  return axios.post('/api/reviews', review)
}