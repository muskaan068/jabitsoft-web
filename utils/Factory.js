//main Url
export const envUrl = {
  baseUrl: "http://localhost:9000/", // Local host connection
  //  baseUrl: "http://192.168.81.217:9000/",// Local host connection
};

export const endPoint = {
  auth: "api/admin/login",
  verifcation: "api/admin/login-verification",
  publishBlog: "api/admin/blogs/publish-blog",
  blogList: "api/admin/blogs/blog-list",
  blogCategory: "api/admin/blogs/blog-category-list",
  blogDraftToPublish: "api/admin/blogs/draft-to-publish",
  blogtoUnpublish: "api/admin/blogs/blog-to-unpublish",
  blogGetById: "api/admin/blogs/blog-getby-id",
  dashboardStats: "api/admin/dashboard/status-count",
  saveUpdatePortfolio: "api/admin/portfolio/save-update",
  uplodPortfolioImages: "api/admin/portfolio/upload-images",
  adminPortfolioList: "api/admin/portfolio/get-portfolio-list",
  adminContactList: "api/admin/contact/contact-list",

  //public blog route
  latestBlogs: "api/jabit/blogs/latest-blogs",
  blogListByCategory: "api/jabit/blogs/blog-list-by-category",
  selectBlogGetById: "api/jabit/blogs/blog-getby-id",
  latestThreeBlogs: "api/jabit/blogs/latest-three-blogs",
  portfolioList: "api/jabit/portfolio/get-portfolio-list",
  selectPortfolioById: "api/jabit/portfolio/get-portfolio-by-id",
  saveContact: "api/jabit/contact/save",
};

// set json pars
export const safelyParseJSON = (json) => {
  let parsed;
  try {
    parsed = JSON.parse(json);
  } catch (e) {
    // whatever...
  }
  return parsed; // Could be undefined!
};

// store data in local storage
export const setLocalStorage = (key, value) => {
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) {
    localStorage.setItem(key, value);
  }
};

// get data from localstorage
export const getLocalStorage = (key) => {
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) {
    return safelyParseJSON(localStorage.getItem(key));
  }
};

// remove LocalStorage Item
export const removeLocalStorage = (key) => {
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) {
    return localStorage.removeItem(key);
  }
};

// clear All localstorage
export const clearLocalStorage = () => {
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) {
    localStorage.clear();
  }
};
