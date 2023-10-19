package com.backend.trello.board;

import com.backend.trello.boardList.BoardListModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path="api/board")
public class BoardController {

    private final BoardService boardService;

    @Autowired
    public BoardController(BoardService boardService) {
        this.boardService = boardService;
    }

    @GetMapping
    public List<BoardModel> getBoards() {
        return boardService.getBoards();
    }

    @GetMapping(path="/{id}")
    public ResponseEntity<BoardModel> getBoard(@PathVariable("id") Long id) {
        Optional<BoardModel> board = this.boardService.getBoardById(id);
        return board.map(boardModel -> new ResponseEntity<>(boardModel, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/add")
    public ResponseEntity<BoardModel> newBoard(@RequestBody BoardModel board){
        BoardModel newBoard = boardService.addBoard(board);
        return new ResponseEntity<>(newBoard, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteBoard(@PathVariable("id") Long id) {
        boardService.deleteBoardById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<BoardModel> updateBoard(@RequestBody BoardModel board) {
        BoardModel updatedBoard = boardService.updateBoard(board);
        return new ResponseEntity<>(updatedBoard, HttpStatus.OK);
    }

    @GetMapping("/{id}/lists")
    public ResponseEntity<List<BoardListModel>> getBoardLists(@PathVariable Long id){
        Optional<BoardModel> boardModelOptional = boardService.getBoardById(id);
        if(boardModelOptional.isPresent()) {
            List<BoardListModel> boardLists = boardModelOptional.get().getLists();
            return new ResponseEntity<>(boardLists, HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
