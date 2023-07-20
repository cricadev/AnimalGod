export default eventHandler((event) => {
  event.context.message = "Hello from log middleware!";
});
