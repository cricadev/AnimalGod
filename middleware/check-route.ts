export default defineNuxtRouteMiddleware((to, from) => {
  console.log('middleware', to.path)
  const exclude = ["/", "/login", "/profile/update", "/signup", "/signup-shelter", "/404", "/forgot-password", "/meet-them", "/about-adoption", "/successful-cases", "/tips"];

  if (to.path.startsWith('/meet-them')) {
    return;
  }

  if (!exclude.includes(to.path)) {
    return {
      path: '/login',
    };
  }
});