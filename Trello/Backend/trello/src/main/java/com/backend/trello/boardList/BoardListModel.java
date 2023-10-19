package com.backend.trello.boardList;

import com.backend.trello.board.BoardModel;
import com.backend.trello.boardListCard.BoardListCardModel;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "board_list")
public class BoardListModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @OneToMany(mappedBy = "boardList", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<BoardListCardModel> card;

    @ManyToOne
    @JoinColumn(name = "board_id", nullable = false)
    @JsonBackReference
    private BoardModel board;

    public BoardListModel(Long id, String title, List<BoardListCardModel> card, BoardModel board) {
        this.id = id;
        this.title = title;
        this.card = card;
        this.board = board;
    }

    public BoardListModel(String title, BoardModel board) {
        this.title = title;
        this.board = board;
    }

    public BoardListModel() {
    }

    public BoardListModel(Long id, String title) {
        this.id = id;
        this.title = title;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<BoardListCardModel> getCard() {
        return card;
    }

    public void setCards(List<BoardListCardModel> card) {
        this.card = card;
    }

    public BoardModel getBoard() {
        return board;
    }

    public void setBoard(BoardModel board) {
        this.board = board;
    }
}
