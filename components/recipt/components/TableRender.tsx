
// @ts-nocheck
import React from 'react';
import { IselectedOption } from '../../../types/interface';
import InfoRender from './InfoRender';
interface Info extends IselectedOption { }

export interface ITableInfo {
  infos: Info[][];
  title: string;
}

const TableRender: React.FC<ITableInfo> = ({ infos, title }) => {
  return (
    <tr>
      <td style={{ fontSize: '13px', color: '#2c2c2c' }}>
        <div style={{ padding: '20px 10px 0 10px' }}>
          <div
            style={{
              fontSize: '15px',
              fontWeight: 'bold',
              color: '#333333',
              lineHeight: '1.5em',
            }}
          >
            {title}
          </div>
          <table
            style={{
              width: '100%',
              borderTop: '3px solid #333333',
              borderCollapse: 'collapse',
            }}
            border={0}
            cellPadding={0}
            cellSpacing={0}
          >
            <colgroup>
              <col style={{ width: '20%' }} />
              <col style={{ width: '30%' }} />
              <col style={{ width: '20%' }} />
              <col />
            </colgroup>
            <InfoRender infos={infos} />
          </table>
        </div>
      </td>
    </tr>
  );
};

export default TableRender;
