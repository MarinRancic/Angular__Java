package com.backend.trello.boardListCard;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class BoardListCardService {
    private final BoardListCardRepository boardListCardRepository;

    @Autowired
    public BoardListCardService(BoardListCardRepository boardListCardRepository) {
        this.boardListCardRepository = boardListCardRepository;
    }

    public List<BoardListCardModel> getBoardListCards() {
        return boardListCardRepository.findAll();
    }

    public Optional<BoardListCardModel> getBoardListCardById(Long id) {
        return boardListCardRepository.findBoardById(id);
    }

    public BoardListCardModel addBoardListCard(BoardListCardModel boardListCard) {
        return boardListCardRepository.save(boardListCard);
    }

    public BoardListCardModel updateBoardListCard(BoardListCardModel boardListCard) {
        return boardListCardRepository.save(boardListCard);
    }

    @Transactional
    public void deleteBoardListCardById(Long id) {
        boardListCardRepository.deleteBoardListCardModelById(id);
    }
}
