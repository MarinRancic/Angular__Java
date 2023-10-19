package com.backend.trello.boardList;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BoardListRepository extends JpaRepository<BoardListModel, Long> {
    Optional<BoardListModel> findBoardListById (Long id);
    void deleteBoardListModelById (Long id);
}
