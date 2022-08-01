import { trim as trimLodash } from "lodash";

/** 
 * TS has issues with the types for lodash' trim, so we wrap it. 
 */
export const trim = (str: string) => trimLodash(str);