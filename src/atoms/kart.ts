import { atom } from "jotai";
import { ItemProps } from "@/pages/_app";

const kart = atom<ItemProps[]>([])

export { kart }