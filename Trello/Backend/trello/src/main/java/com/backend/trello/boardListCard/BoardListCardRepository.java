package com.backend.trello.boardListCard;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BoardListCardRepository extends JpaRepository<BoardListCardModel, Long> {
    Optional<BoardListCardModel> findBoardById (Long id);
    void deleteBoardListCardModelById (Long id);
}
