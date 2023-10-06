// declare module "*.module.scss" 

declare module "*.svg" {
    const value: string;
    export default value;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module '*.module.scss' {
    interface IClassNames {
      [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
  }

  declare module '*.css' {
    interface IClassNames {
      [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
  }


cancelIdleCallback