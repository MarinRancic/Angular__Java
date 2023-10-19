import { BoardListCard } from "./boardListCard";

export interface BoardList {
    id: number;
    title: string;
    card: BoardListCard;
    board_id: number;
}