package com.backend.trello.boardList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class BoardListService {

    private final BoardListRepository boardListRepository;

    @Autowired
    public BoardListService(BoardListRepository boardListRepository){
        this.boardListRepository = boardListRepository;
    }

    public BoardListModel addBoardList(BoardListModel boardList) {
        return boardListRepository.save(boardList);
    }

    public List<BoardListModel> getBoardLists() {
        return boardListRepository.findAll();
    }

    public Optional<BoardListModel> getBoardListById(Long id) {
        return boardListRepository.findBoardListById(id);
    }

    public BoardListModel updateBoardList(BoardListModel boardList) {
        return boardListRepository.save(boardList);
    }

    @Transactional
    public void deleteBoardListById(Long id){
        boardListRepository.deleteBoardListModelById(id);
    }
}
