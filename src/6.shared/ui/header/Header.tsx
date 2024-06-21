// import type { FC, ReactNode } from "react";
// import { Link } from "react-router-dom";

// interface HeaderProps {
//   children?: ReactNode;
// }

// export const Header: FC<HeaderProps> = (props) => {
//   return (
//     <header className="header">
//       <Logo className="header__logo" />
//       {location.pathname === RoutePath.home && (
//         <Link
//           className="header__cart-link header-cart-link"
//           role={AppLinkRoles.button}
//           theme={AppLinkThemes.accent}
//           to={RoutePath.cart}
//         // >
//           <span className="header-cart-link__price">{totalPrice} ₴</span>
//           <CartSVG className="header-cart-link__cartSvg" />
//           <span className="header-cart-link__ quantity">{totalItems}</span>
//         </Link>
//       )}
//     </header>
//   );
// };
