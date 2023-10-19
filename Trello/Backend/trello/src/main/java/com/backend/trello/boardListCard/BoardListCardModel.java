package com.backend.trello.boardListCard;

import com.backend.trello.boardList.BoardListModel;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
@Table(name="board_list_card")
public class BoardListCardModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String message;

    @ManyToOne
    @JoinColumn(name = "list_id", nullable = false)
    @JsonBackReference
    private BoardListModel boardList;

    public BoardListCardModel(Long id, String message, BoardListModel boardList) {
        this.id = id;
        this.message = message;
        this.boardList = boardList;
    }

    public BoardListCardModel() {
    }

    public BoardListCardModel(Long id, String message) {
        this.id = id;
        this.message = message;
    }

    public Long getId() {
        return id;
    }

    public String getMessage() {
        return message;
    }

    public BoardListModel getBoardList() {
        return boardList;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setBoardList(BoardListModel boardList) {
        this.boardList = boardList;
    }
}
