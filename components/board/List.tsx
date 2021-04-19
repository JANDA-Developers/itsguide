import { Paginater } from 'components/common/Paginator';
import React from 'react';
import SearchMini from 'components/common/SearchMini';
import { IPageInfo, TElements } from 'types/interface';
import { autoComma } from 'utils/formatter';

interface IProp {
  context?: any;
  onWrite?: () => void;
  FilterSort?: TElements;
  onSearch?: (value: string) => void;
  pageInfo?: IPageInfo;
  totalCount?: number;
}

export const BoardList: React.FC<IProp> = ({ context, FilterSort, children, onWrite, onSearch: handleSearch, pageInfo, totalCount }) => {
  return <div className="board_box">
    <div className="w1200">
      <div className="alignment">
        <div className="left_div"><span className="infotxt">총 <strong>{autoComma(totalCount || 0)}</strong>개</span></div>
        <div className="right_div">
          {FilterSort}
        </div>
      </div>
      <div className="board_list st01">
        <div className="tbody">
          {children}
        </div>
      </div>
      <Paginater pageInfo={pageInfo} />
      <div className="tl list_bottom">
        <div className="btn_footer">
          {onWrite && <button onClick={onWrite} type="submit" className="btn medium pointcolor">글쓰기</button>}
        </div>
        {handleSearch && <SearchMini onSubmit={handleSearch} />}
      </div>
    </div>
  </div>
};

export default BoardList;