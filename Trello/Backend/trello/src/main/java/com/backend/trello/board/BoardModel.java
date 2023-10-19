package com.backend.trello.board;


import com.backend.trello.boardList.BoardListModel;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "board")
public class BoardModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @OneToMany(mappedBy = "board", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<BoardListModel> lists;


    public BoardModel() {}

    public BoardModel(Long id) {
        this.id = id;
    }

    public BoardModel(Long id, String title, List<BoardListModel> lists) {
        this.id = id;
        this.title = title;
        this.lists = lists;
    }

    public BoardModel(String title, List<BoardListModel> lists) {
        this.title = title;
        this.lists = lists;
    }

    public BoardModel(String title) {
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

    public List<BoardListModel> getLists() {
        return lists;
    }

    public void setLists(List<BoardListModel> lists) {
        this.lists = lists;
    }

}