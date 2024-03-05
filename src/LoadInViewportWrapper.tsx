import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

export default function LoadInViewportWrapper({ children }: LoadInViewportWrapperProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    fallbackInView: true,
  });
  return <div ref={ref}>{inView ? children : null}</div>;
}


interface LoadInViewportWrapperProps {
  children: ReactNode;
}