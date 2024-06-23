export enum Route {
  HOME = "home",
  CART = "cart",
}

export const routesPath: Record<Route, string> = {
  [Route.HOME]: "/",
  [Route.CART]: "/cart",
};
