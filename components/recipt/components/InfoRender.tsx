

// @ts-nocheck
import React, { Fragment } from 'react';
import { IselectedOption } from '../../../types/interface';
interface Info extends IselectedOption { }

interface IProps {
  infos: Info[][];
}

const InfoRender: React.FC<IProps> = ({ infos }) => {
  return (
    <tbody>
      {infos.map((g, i) => (
        <tr key={'RecipRenderInfoRender' + i}>
          {g.map((gg, i) => {
            return (
              <Fragment key={'RecipRenderInfoRenderInfo' + i}>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '1% 2%',
                    fontWeight: 'bold',
                    border: '1px solid #cfcfcf',
                    background: '#e8e8e8',
                  }}
                >
                  <strong>{gg.label}</strong>
                </th>
                <td
                  style={{
                    textAlign: 'left',
                    padding: '1% 2%',
                    border: '1px solid #cfcfcf',
                    background: '#ffffff',
                    fontFamily: '돋움, AppleGothic, sans-serif',
                  }}
                >
                  {gg.value}
                </td>
              </Fragment>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default InfoRender;
