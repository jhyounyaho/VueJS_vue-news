import { 
  /*
  fetchNewsList, 
  fetchAskList, 
  fetchJobsList, 
  */
  fetchList,
  fetchUserInfo,
  fetchCommentItem,
} from '../api/index.js';

export default {
  // actions 비동기 호출
  /*
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(res => {
        context.commit('SET_NEWS', res.data)
        return res;
      })
      .catch(err => console.log(err))
  },
  FETCH_ASK(context) {
    fetchAskList()
      .then(res => {
        context.commit('SET_ASK', res.data)
        return res;
      })
      .catch(err => console.log(err))
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => {
        commit('SET_JOBS', data)
        return data;
      })
      .catch(err => console.log(err))
  },
  */
  FETCH_USER({ commit }, userId) {
    fetchUserInfo(userId)
      .then(({ data }) => commit('SET_USER', data))
      .catch(err => console.log(err));
  },
  FETCH_ITEM({ commit }, id) {
    fetchCommentItem(id)
      .then(({ data }) => commit('SET_ITEM', data))
      .catch(err => console.log(err));
  },
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName)
      .then(({ data }) => commit('SET_LIST', data)) 
      .catch(err => console.log(err));
  },
}