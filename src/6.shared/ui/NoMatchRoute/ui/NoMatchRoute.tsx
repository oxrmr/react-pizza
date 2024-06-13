import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";

export interface ErrorRouteProps {
  className?: string;
}

export const NoMatchRoute = (props: ErrorRouteProps) => {
  const { className = "" } = props;
  return (
    <div
      className={classNames("", {}, [className])}
      data-testid="route404"
    >
      <AppLink to={"/"}>Back Home</AppLink>
    </div>
  );
};
