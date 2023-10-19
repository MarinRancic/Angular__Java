import { BoardList } from "./boardList";

export interface Board {
    id: number;
    title: string;
    list: BoardList;
}