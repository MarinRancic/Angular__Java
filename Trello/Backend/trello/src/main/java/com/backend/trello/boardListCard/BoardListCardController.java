package com.backend.trello.boardListCard;

import com.backend.trello.boardList.BoardListModel;
import com.backend.trello.boardList.BoardListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("api/boardListCard")
public class BoardListCardController {

    private final BoardListCardService boardListCardService;

    private final BoardListService boardListService;

    @Autowired
    public BoardListCardController(BoardListCardService boardListCardService, BoardListService boardListService) {
        this.boardListCardService = boardListCardService;
        this.boardListService = boardListService;
    }

    @PostMapping("/add")
    public ResponseEntity<BoardListCardModel> newBoardListCard(@RequestBody Map<String, Object> requestData) {
        Long id = Long.parseLong(requestData.get("id").toString());
        String message = requestData.get("message").toString();

        Optional<BoardListModel> boardListModelOptional = boardListService.getBoardListById(id);

        if(boardListModelOptional.isPresent()) {
            BoardListModel boardListModel = boardListModelOptional.get();
            BoardListCardModel boardListCardModel = new BoardListCardModel();
            boardListCardModel.setBoardList(boardListModel);
            boardListCardModel.setMessage(message);
            BoardListCardModel newBoardListCard = boardListCardService.addBoardListCard(boardListCardModel);
            return new ResponseEntity<>(newBoardListCard, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteBoardListCard(@PathVariable Long id) {
        boardListCardService.deleteBoardListCardById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<BoardListCardModel> updateBoardListCard(@RequestBody Map<String, Object> requestData) {
        Long id = Long.parseLong(requestData.get("id").toString());
        String message = requestData.get("message").toString();

        Optional<BoardListCardModel> boardListCardModelOptional = boardListCardService.getBoardListCardById(id);

        if(boardListCardModelOptional.isPresent()){
            BoardListCardModel boardListCardModel = boardListCardModelOptional.get();
            boardListCardModel.setMessage(message);
            BoardListCardModel newBoardListCard = boardListCardService.updateBoardListCard(boardListCardModel);
            return new ResponseEntity<>(newBoardListCard, HttpStatus.CREATED);
        } else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
