import React, { lazy, ReactNode, Suspense } from "react"
import { JSX } from "react/jsx-runtime"

export default function loadable(factory: Factory, fallback: ReactNode = null) {
  const componentPromise = factory
  const LazyComponent = lazy(componentPromise)

  return (props: JSX.IntrinsicAttributes) => (
    <Suspense fallback={fallback || null}>
      <LazyComponent {...props} />
    </Suspense>
  )
}

type Factory = () => Promise<{
  default: React.ComponentType<unknown>;
}>