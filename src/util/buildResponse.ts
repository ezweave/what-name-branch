import { Presponses, Responses } from "@ezweave/constants"
import { getRandomElementFromArray } from "./getRandomElementFromArray"

const getRandomPresponse = getRandomElementFromArray(Presponses);
const getRandomResponse = getRandomElementFromArray(Responses);

export const buildResponse = (
  branchName: string
): string => `${getRandomPresponse()}\nYour branch name is: ${branchName}\n${getRandomResponse()}`;