import {  BOARD_CONTROl_MASTER, BOARD_LIST, MY_BOARD_LIST } from "../apollo/gql/board";
import { boardControlMaster, boardControlMasterVariables, BoardList, BoardListVariables, BoardList_BoardList_data, myBoardList, myBoardListVariables, myBoardList_MyBoardList_data, _BoardFilter, _BoardSort } from "../types/api";
import { generateListQueryHook, generateMutationHook, generateQueryHook } from "../utils/query";

//클라이언트 페이지네이션 써야됨 
export const useBoardList = generateListQueryHook<_BoardFilter,_BoardSort,BoardList, BoardListVariables, BoardList_BoardList_data>(BOARD_LIST);
export const useMyBoardList = generateListQueryHook<_BoardFilter,_BoardSort,myBoardList,myBoardListVariables,myBoardList_MyBoardList_data>(MY_BOARD_LIST);
export const useBoardControl = generateMutationHook<boardControlMaster,boardControlMasterVariables>(BOARD_CONTROl_MASTER)