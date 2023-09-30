import React from "react"
import './PageLoader.scss';
import { classNames } from "shared/lib/classNames";


interface PageLoaderProps{
className?: string;
}

 export const PageLoader = ({className}:PageLoaderProps) => {
  return (
    <div className={classNames("Page__Loader", {}, [className])}>
      <div className="lds-hourglass"></div>
    </div>
  )
};

