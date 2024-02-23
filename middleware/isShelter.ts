export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();
  if (user.value?.user_metadata.isShelter) {
    return navigateTo("/");
  }

});