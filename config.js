require('dotenv').config();
 
module.exports = {
   baseUrl: process.env.BASE_URL,
   postUrl: process.env.POST_URL,
   putUrl:  process.env.PUT_URL,
   getUrl:  process.env.GET_URL,
   deleteUrl: process.env.DELETE_URL
};