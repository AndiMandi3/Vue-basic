const RouteName = {
  MAIN_LAYOUT: "MainLayout",
  LOGIN_PAGE: "Login",
  PUBLIC_PAGE: "Public",
  PROTECTED_PAGE: "Protected" 
} as const;

const RouteTitle = {
  MAIN_LAYOUT: "Default page",
  LOGIN_PAGE: "Авторизация",
  PUBLIC_PAGE: "Публичная страница",
  PROTECTED_PAGE: "Защищенная страница" 
} as const;

export { RouteName, RouteTitle }