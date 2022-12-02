// declare module "*.css" {
//   declare const styles: Record<string, string>;

//   export default styles;
// }

declare module "*.scss" {
  // @ts-ignore
  declare const styles: Record<string, string>;

  export default styles;
}

declare module "*.svg"
