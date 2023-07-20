export default eventHandler((event) => {
  const config = {
    "User-agent": "*",
    Disallow: "/",
    Sitemap: `${useRuntimeConfig().baseURL}/sitemap.xml`,
  };
  event.node.res.setHeader("Content-Type", "text/plain");

  return Object.keys(config)
    .map((key) => `${key}: ${config[key]}`)
    .join("\n");
});
