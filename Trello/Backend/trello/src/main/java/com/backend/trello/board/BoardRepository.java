package com.backend.trello.board;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BoardRepository extends JpaRepository<BoardModel, Long> {

    Optional<BoardModel> findBoardById (Long id);
    void deleteBoardModelById (Long id);
}
