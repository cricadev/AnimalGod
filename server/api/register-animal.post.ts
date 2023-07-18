export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  fetch("https://if-api.prismic.io/if/write/animalgod--register_animal", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwcmlzbWljLmlvIiwiaWF0IjoxNjg5NTU2NDQ3ODAwLCJjYXRhbG9nSWQiOiJhbmltYWxnb2QtLXJlZ2lzdGVyX2FuaW1hbCJ9.2kD4J0S0XTiYkd5OlBHSEVcjIqLHPFPlCCC07p9HRPI",
    },
    body,
  });
});
