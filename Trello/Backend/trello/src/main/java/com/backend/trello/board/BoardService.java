package com.backend.trello.board;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class BoardService {
    private final BoardRepository boardRepository;

    @Autowired
    public BoardService(BoardRepository boardRepository) {
        this.boardRepository = boardRepository;
    }

    public List<BoardModel> getBoards() {

        return boardRepository.findAll();
    }

    public Optional<BoardModel> getBoardById(Long id) {
        return boardRepository.findBoardById(id);
    }

    public BoardModel addBoard(BoardModel board) {
        return boardRepository.save(board);
    }

    public BoardModel updateBoard(BoardModel board){
        return boardRepository.save(board);
    }

    @Transactional
    public void deleteBoardById(Long id){
        boardRepository.deleteBoardModelById(id);
    }
}
