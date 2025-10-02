import { getRssString } from '@astrojs/rss';
import { S as SITE, M as METADATA, a as getPermalink } from '../chunks/consts_DYY1_ya2.mjs';
import { a as fetchPosts } from '../chunks/blog_V6N0zlCy.mjs';
export { renderers } from '../renderers.mjs';

const GET = async () => {
  const posts = await fetchPosts();
  const rss = await getRssString({
    title: `${SITE.name}’s Blog`,
    description: METADATA?.description,
    site: "https://porto-de-abrigo.com",
    items: posts.map((post) => ({
      link: getPermalink(post.permalink, "post"),
      title: post.title,
      description: post.excerpt,
      pubDate: post.publishDate
    })),
    trailingSlash: SITE.trailingSlash
  });
  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
