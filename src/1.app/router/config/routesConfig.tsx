export enum Route {
  HOME = "home",
  CART = "cart",
}

export const RoutePath: Record<Route, string> = {
  [Route.HOME]: "/",
  [Route.CART]: "/cart",
};
