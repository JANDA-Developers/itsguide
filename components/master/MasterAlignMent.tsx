import { openModal } from "utils/popUp";
import { ISet, TElements } from "../../types/interface";
import { ViewCount } from "../common/ViewCount";
import Excel from "../excel/Execel";

interface IProps {
    Sort: TElements;
    handleSelectAll: () => void;
    LeftDiv?: TElements;
    viewCount?: number;
    setViewCount: ISet<number>;
    excelData?: any[];
    rightDiv?: TElements;
}

export const MasterAlignMent: React.FC<IProps> = ({
    excelData,
    handleSelectAll,
    Sort,
    LeftDiv,
    viewCount,
    setViewCount,
    rightDiv,
}) => {
    return (
        <div className="alignment">
            <div className="left_div">{LeftDiv}</div>
            <div className="right_div">
                {(rightDiv || excelData) && (
                    <ul className="board_option">
                        <li
                            style={{ display: "none" }}
                            onClick={handleSelectAll}
                        >
                            <a>전체선택</a>
                        </li>
                        {excelData && (
                            <li>
                                <Excel
                                    data={excelData || []}
                                    element={<a>엑셀파일</a>}
                                />
                            </li>
                        )}
                        {rightDiv}
                    </ul>
                )}
                {Sort}
                <ViewCount value={viewCount || 0} onChange={setViewCount} />
            </div>
        </div>
    );
};
