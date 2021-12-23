import axios from "../config/axios";

// const baseUrl =
//   process.env.NODE_ENV === "production"
//     ? "https://www.stealfood.com/v1/"
//     : "http://127.0.0.1:8110/";
const baseUrl = 'https://www.stealfood.com/v1/'




export const getComment = params => axios.get(`${baseUrl}comment/get`, { params });

export const commentLike = id => axios.post(`${baseUrl}comment/like/${id}`);

export const addReply = params => axios.put(`${baseUrl}reply/add`, { ...params });

export const getReply = params => axios.get(`${baseUrl}reply/get`, { params });

export const addArticleLike = () => axios.put(`${baseUrl}hero/add`, { ...params });

export const addCommentLike = () => axios.put(`${baseUrl}hero/add`, { ...params });

export const replyCommentLike = () => axios.put(`${baseUrl}hero/add`, { ...params });

// 文章点赞喜欢
export const articleLike = id => axios.post(`${baseUrl}article/like/${id}`);

// 新增文章评论
export const addComment = params => axios.put(`${baseUrl}comment/add`, { ...params });

/**
 * 获取所有文章
 * @param {*} params {limit: 10, pape: 1}
 * @returns
 */
export const getArticles = (params = {}) => axios.get(`${baseUrl}post`, { params });

/**
 * 获取文章详情
 * @param {*} params
 * @returns
 */
export const getArticleDetails = id => axios.get(`${baseUrl}post/${id}`)

// 获取所有分类
export const getCategory = () => axios.get(`${baseUrl}category`);

// 获取留言板
export const getHero = () => axios.get(`${baseUrl}heropost`);

// 添加留言
export const addHero = params => axios.post(`${baseUrl}heropost`, { ...params });

// 获取项目
export const getProject = params => axios.get(`${baseUrl}project`, { params });
