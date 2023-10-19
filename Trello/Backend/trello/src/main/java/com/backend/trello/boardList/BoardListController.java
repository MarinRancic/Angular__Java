package com.backend.trello.boardList;

import com.backend.trello.board.BoardModel;
import com.backend.trello.board.BoardService;
import com.backend.trello.boardListCard.BoardListCardModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("api/boardList")
public class BoardListController {

    private final BoardListService boardListService;

    private final BoardService boardService;

    @Autowired
    public BoardListController(BoardListService boardListService, BoardService boardService) {
        this.boardListService = boardListService;
        this.boardService = boardService;
    }

    @PostMapping("/add")
    public ResponseEntity<BoardListModel> newBoardList(@RequestBody Map<String, Object> requestData) {
        Long id = Long.parseLong(requestData.get("id").toString());
        String title = requestData.get("title").toString();

        Optional<BoardModel> boardModelOptional = boardService.getBoardById(id);

        if (boardModelOptional.isPresent()) {
            BoardModel boardModel = boardModelOptional.get();
            BoardListModel boardList = new BoardListModel();
            boardList.setBoard(boardModel);
            boardList.setTitle(title);
            BoardListModel newBoardList = boardListService.addBoardList(boardList);
            return new ResponseEntity<>(newBoardList, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteBoardList(@PathVariable Long id) {
        boardListService.deleteBoardListById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<BoardListModel> updateBoardListTitle(@RequestBody Map<String, Object> requestData) {
        Long id = Long.parseLong(requestData.get("id").toString());
        String title = requestData.get("title").toString();

        Optional<BoardListModel> boardListModelOptional = boardListService.getBoardListById(id);

        if (boardListModelOptional.isPresent()) {
            BoardListModel boardListModel = boardListModelOptional.get();
            boardListModel.setTitle(title);
            BoardListModel newBoardList = boardListService.updateBoardList(boardListModel);
            return new ResponseEntity<>(newBoardList, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/{id}/cards")
    public ResponseEntity<List<BoardListCardModel>> getBoardListCards(@PathVariable Long id){
        Optional<BoardListModel> boardListOptional = boardListService.getBoardListById(id);

        if(boardListOptional.isPresent()){
            List<BoardListCardModel> boardListCards = boardListOptional.get().getCard();
            return new ResponseEntity<>(boardListCards, HttpStatus.OK);
        } else{
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
}