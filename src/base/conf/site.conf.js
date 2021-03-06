import env from '../shared/Env';

const Author = 'Shamsudeen Muhammed Adam';
const SiteTitle = Author;
const SiteDescription = `Sitio web de ${ Author }`;
const BlogTitle = 'Dinisoft';
const BlogDescription = `${ BlogTitle }: JavaScript, JavaScript y más JavaScript.`;
const KeyWords = 'javascript, react, redux, rxjs, immutable, webassembly, wasm, rust, angular, angularjs, webpack, es6, observables, programación reactiva, blog, rxjs, vue, serviceworker, ecma 2018, pwa, progressive web app';
const numPosts = 10;
const blogImage = 'https://pablomagaz.com/assets/images/postcover/blog.svg';
const blogTitleImage = 'assets/images/share/ElBlogIsomorfico.png';
const brandTitleImage = 'assets/images/share/PabloMagaz.png';
const postOpeningChars = 500;
const codeHighlightDelay = 750;
const postOpeningSplitChar = '</h2>';
const addThisUrl = 'http://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-59c0d1b1697ac737';
const socialLinks = {
  linkedIn: 'https://www.linkedin.com/in/shamsudeen-muhammed-adam-5339b1142/',
  twitter: 'https://twitter.com/adamdini7',
  gmail: 'deensname@gmail.com',
  github: 'https://github.com/dini-adam'
};

let HostName;
let ServerUrl;
let SiteUrl;
let BlogUrl;
let GhostUrl;
let ImageUrl;
let BaseApiUrl;
let PostsApiUrl;
let clientSecret;
let PostApiUrl;
let PostsApi;
let PostApi;
let ContentPath;
let Ssl;
let Protocol;
let uniqueImagePath;
let GoogleAnaliticsId;
let DisqusSettings;

if (env === 'development') {
  Ssl = false;
  Protocol = Ssl ? 'https://' : 'http://';
  HostName = 'localhost:8000';
  ServerUrl = `http://${ HostName }`;
  SiteUrl = `${ ServerUrl }`;
  clientSecret = '285ee4eda6c3';
  BlogUrl = `${ SiteUrl }/blog`;
  GhostUrl = 'http://pablomagaz.com/';
  ImageUrl = GhostUrl;
  ContentPath = '/Users/Pablo/js/ghost/content';
  BaseApiUrl = `${ GhostUrl }/ghost/api/v0.1/`;
  PostApiUrl = 'https://pablomagaz.com/api/post/';
  PostsApiUrl = 'https://pablomagaz.com/api/posts/';
  PostsApi = `${ BaseApiUrl }posts/?client_id=ghost-frontend&client_secret=${ clientSecret }&include=tags&fields=id,uuid,title,slug,html,image,feature_image,tags,updated_at,updated_at,published_at&order=published_at desc`;
  PostApi = `${ BaseApiUrl }posts/slug/:slug/?client_id=ghost-frontend&client_secret=${ clientSecret }&include=tags`;
  GoogleAnaliticsId = 'UA-104300440-3';
  DisqusSettings = {
    shortName: 'el-blog-isomorfico',
    identifier: 'el-blog-isomofico-dev'
  };
} else {
  Ssl = true;
  Protocol = Ssl ? 'https://' : 'http://';
  HostName = 'dinisoft.dev';
  ServerUrl = `${ Protocol }${ HostName }`;
  SiteUrl = `${ ServerUrl }`;
  clientSecret = '113542417eed';
  BlogUrl = `${ SiteUrl }/blog`;
  GhostUrl = 'http://localhost:2369';
  ImageUrl = `${ Protocol }${ HostName }`;
  ContentPath = '/var/www/ghost/content';
  BaseApiUrl = `${ GhostUrl }/ghost/api/v0.1/`;
  PostApiUrl = `${ Protocol }${ HostName }/api/post/`;
  PostsApiUrl = `${ Protocol }${ HostName }/api/posts/`;
  PostsApi = `${ BaseApiUrl }posts/?client_id=ghost-frontend&client_secret=${ clientSecret }&include=tags&fields=id,uuid,title,slug,html,image,feature_image,tags,updated_at,updated_at,published_at&order=published_at desc`;
  PostApi = `${ BaseApiUrl }posts/slug/:slug/?client_id=ghost-frontend&client_secret=${ clientSecret }&include=tags`;
  uniqueImagePath = '/assets/images/postcovers';
  GoogleAnaliticsId = 'UA-104300440-2';
  DisqusSettings = {
    shortName: 'el-blog-isomorfico',
    identifier: 'el-blog-isomofico'
  };
}

export const SiteConf = {
  ServerUrl,
  Author,
  SiteTitle,
  SiteUrl,
  numPosts,
  BlogDescription,
  KeyWords,
  BlogTitle,
  BlogUrl,
  blogImage,
  blogTitleImage,
  brandTitleImage,
  SiteDescription,
  ImageUrl,
  ContentPath,
  PostApi,
  PostsApi,
  PostApiUrl,
  PostsApiUrl,
  postOpeningChars,
  postOpeningSplitChar,
  codeHighlightDelay,
  GoogleAnaliticsId,
  Ssl,
  uniqueImagePath,
  socialLinks,
  DisqusSettings,
  addThisUrl
};
