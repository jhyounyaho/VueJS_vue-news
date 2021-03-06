// api/index.js API 로직 
import axios from 'axios';

// 1. HTTP Requeset & Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/', 
}

// 2. API 함수들을 정리  
/*
function fetchNewsList() {
  return axios.get(`${config.baseUrl}news/1.json`);    
}
function fetchAskList() {
  return axios.get(`${config.baseUrl}ask/1.json`);    
}
function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);    
}
*/
function fetchList(pageName) {
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
}
function fetchUserInfo(userId) {
  return axios.get(`${config.baseUrl}user/${userId}.json`);    
}
function fetchCommentItem(id) {
  return axios.get(`${config.baseUrl}item/${id}.json`);    
}

// 3. export 
export {
  /*
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  */
  fetchList,
  fetchUserInfo,
  fetchCommentItem,
}