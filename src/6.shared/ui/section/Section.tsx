import { FC, ReactNode } from "react";

interface SectionProps {
  title?: string;
  children: ReactNode;
  sectionClassName?: string;
  titleClassName?: string;
}

export const Section: FC<SectionProps> = (props) => {
  const { title, children, sectionClassName, titleClassName } = props;

  return (
    <section className={sectionClassName}>
      {title && <h2 className={titleClassName}>{title}</h2>}
      {children}
    </section>
  );
};
