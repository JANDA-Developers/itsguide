import React from 'react';

interface IProp { }

export const ProfileBusi: React.FC<IProp> = () => {
    return <div>
        <div className="top_visual">
            <div
                className="sub_header sub_bg"
                style={{ backgroundImage: `url(/img/work_top_bg2.jpg)` }}
            >
                <div className="w1200">
                    <h2 className="title">Master</h2>
                    <p className="text">���� ������ ��������~!~~!!!!!</p>
                </div>
            </div>
            <div className="header_nav">
                <ul>
                    <li className="home">
                        <a href="/index"></a>
                    </li>
                    <li className="homedeps1">Master</li>
                    <li className="homedeps2">
                        <a href="/">ȸ����������</a>
                    </li>
                </ul>
            </div>
        </div>


        <div className="master_box">
            <div className="w1200">
                <ul className="subtop_nav">
                    <li><a href="/m_member.html">ȸ������</a></li>
                    <li><a href="/m_goods.html">��ǰ����</a></li>
                    <li className="on"><a href="../sub/m_reservation.html">�������</a></li>
                    <li><a href="/m_design.html">�����μ���</a></li>
                    <li><a href="/m_homepage.html">Ȩ����������</a></li>
                </ul>

                <div className="in_content">{/* 
                    <input id="tab-1" type="radio" name="radio-set" className="tab tab-selector-1" checked="checked">
                    <label for="tab-1" className="tab-label-1 deps3"><b>����ȸ��</b></label>
                    <input id="tab-2" type="radio" name="radio-set" className="tab tab-selector-2">
                    <label for="tab-2" className="tab-label-2 deps3"><b>�����Ʈ�� ȸ��</b></label>
                    <input id="tab-3" type="radio" name="radio-set" className="tab tab-selector-3">
                    <label for="tab-3" className="tab-label-3 deps3"><b>������Ʈ�� ȸ��</b></label>
                    <input id="tab-4" type="radio" name="radio-set" className="tab tab-selector-4">
                    <label for="tab-4" className="tab-label-4 deps3"><b>Ż�� ȸ��</b></label>
                    <input id="tab-5" type="radio" name="radio-set" className="tab tab-selector-5">
                    <label for="tab-5" className="tab-label-5 deps3"><b>ȸ�� ��� ����</b></label>
                    <input id="tab-6" type="radio" name="radio-set" className="tab tab-selector-6">
                    <label for="tab-6" className="tab-label-6 deps3"><b>�޴��� ����</b></label>*/}

                                           
                    <div className="con family" id="con01">
                        <div className="con_box_top pb5">
                            <h3>����ȸ��</h3>
                            <div className="alignment">
                                <div className="left_div"><span className="infotxt">�� <strong>22,222</strong>��</span></div>
                                <div className="right_div">
                                    <button type="button" className="btn_top check">��μ���</button>
                                    <button type="button" className="btn_top excel">����</button>
                                    <select className="sel01">
                                        <option>��õ��</option>
                                        <option>�����</option>
                                        <option>��ȸ��</option>
                                    </select>
                                    <select className="sel02">
                                        <option>10�� ����</option>
                                        <option>50�� ����</option>
                                        <option>100�� ����</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="con_box_body">
                            <div className="list_head">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">�̸�</span>
                                <span className="td03">���̵�</span>
                                <span className="td04">����</span>
                                <span className="td05">������/�ܱ���</span>
                                <span className="td06">��������</span>
                                <span className="td07">�ֱٷα��α��</span>
                                <span className="td08">�󼼺���</span>
                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">�����</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">��</span>
                                <span className="td05">�ܱ���</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">�󼼺���</i></span>

                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">�����</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">��</span>
                                <span className="td05">�ܱ���</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">�󼼺���</i></span>

                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">�����</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">��</span>
                                <span className="td05">�ܱ���</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">�󼼺���</i></span>

                            </div>
                        </div>

                    </div>


                    <div className="con" id="con02">
                        <div className="con_box_top pb5">
                            <h3>�����Ʈ�� ȸ��</h3>
                            <div className="alignment">
                                <div className="left_div"><span className="infotxt">�� <strong>22,222</strong>��</span></div>
                                <div className="right_div">
                                    <button type="button" className="btn_top check">��μ���</button>
                                    <button type="button" className="btn_top excel">����</button>
                                    <select className="sel01">
                                        <option>��õ��</option>
                                        <option>�����</option>
                                        <option>��ȸ��</option>
                                    </select>
                                    <select className="sel02">
                                        <option>10�� ����</option>
                                        <option>50�� ����</option>
                                        <option>100�� ����</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="con_box_body">
                            <div className="list_head">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">�̸�</span>
                                <span className="td03">���̵�</span>
                                <span className="td04">����</span>
                                <span className="td05">������/�ܱ���</span>
                                <span className="td06">��������</span>
                                <span className="td07">�ֱٷα��α��</span>
                                <span className="td08">�󼼺���</span>
                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">�����</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">��</span>
                                <span className="td05">�ܱ���</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">�󼼺���</i></span>

                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">�����</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">��</span>
                                <span className="td05">�ܱ���</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">�󼼺���</i></span>

                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">�����</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">��</span>
                                <span className="td05">�ܱ���</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">�󼼺���</i></span>

                            </div>
                        </div>
                    </div>




                    <div className="con" id="con03">
                        <div className="con_box_top pb5">
                            <h3>������Ʈ�� ȸ��</h3>
                            <div className="alignment">
                                <div className="left_div"><span className="infotxt">�� <strong>22,222</strong>��</span></div>
                                <div className="right_div">
                                    <button type="button" className="btn_top check">��μ���</button>
                                    <button type="button" className="btn_top excel">����</button>
                                    <select className="sel01">
                                        <option>��õ��</option>
                                        <option>�����</option>
                                        <option>��ȸ��</option>
                                    </select>
                                    <select className="sel02">
                                        <option>10�� ����</option>
                                        <option>50�� ����</option>
                                        <option>100�� ����</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="con_box_body">
                            <div className="list_head">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">�̸�</span>
                                <span className="td03">���̵�</span>
                                <span className="td04">����</span>
                                <span className="td05">������/�ܱ���</span>
                                <span className="td06">��������</span>
                                <span className="td07">�ֱٷα��α��</span>
                                <span className="td08">�󼼺���</span>
                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">�����</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">��</span>
                                <span className="td05">�ܱ���</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">�󼼺���</i></span>

                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">�����</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">��</span>
                                <span className="td05">�ܱ���</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">�󼼺���</i></span>

                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">�����</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">��</span>
                                <span className="td05">�ܱ���</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">�󼼺���</i></span>

                            </div>
                        </div>
                    </div>



                    <div className="con" id="con04">
                        <div className="con_box_top pb5">
                            <h3>Ż�� ȸ��</h3>
                            <div className="alignment">
                                <div className="left_div"><span className="infotxt">�� <strong>22,222</strong>��</span></div>
                                <div className="right_div">
                                    <button type="button" className="btn_top check">��μ���</button>
                                    <button type="button" className="btn_top excel">����</button>
                                    <select className="sel01">
                                        <option>��õ��</option>
                                        <option>�����</option>
                                        <option>��ȸ��</option>
                                    </select>
                                    <select className="sel02">
                                        <option>10�� ����</option>
                                        <option>50�� ����</option>
                                        <option>100�� ����</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="con_box_body">
                            <div className="list_head">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">�̸�</span>
                                <span className="td03">���̵�</span>
                                <span className="td04">����</span>
                                <span className="td05">������/�ܱ���</span>
                                <span className="td06">��������</span>
                                <span className="td07">�ֱٷα��α��</span>
                                <span className="td08">�󼼺���</span>
                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">�����</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">��</span>
                                <span className="td05">�ܱ���</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">�󼼺���</i></span>

                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">�����</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">��</span>
                                <span className="td05">�ܱ���</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">�󼼺���</i></span>

                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">�����</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">��</span>
                                <span className="td05">�ܱ���</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">�󼼺���</i></span>

                            </div>
                        </div>
                    </div>

                    <div className="con" id="con05">

                        <div className="con_box_top pb5">
                            <h3>ȸ�� ��� ����</h3>
                            <div className="alignment">
                                <div className="left_div"><span className="infotxt">�� <strong>22,222</strong>��</span></div>
                                <div className="right_div">
                                    <button type="button" className="btn_top check">��μ���</button>
                                    <button type="button" className="btn_top excel">����</button>
                                    <select className="sel01">
                                        <option>��õ��</option>
                                        <option>�����</option>
                                        <option>��ȸ��</option>
                                    </select>
                                    <select className="sel02">
                                        <option>10�� ����</option>
                                        <option>50�� ����</option>
                                        <option>100�� ����</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="con_box_body">
                            <div className="list_head">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">�̸�</span>
                                <span className="td03">���̵�</span>
                                <span className="td04">����</span>
                                <span className="td05">������/�ܱ���</span>
                                <span className="td06">��������</span>
                                <span className="td07">�ֱٷα��α��</span>
                                <span className="td08">�󼼺���</span>
                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">�����</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">��</span>
                                <span className="td05">�ܱ���</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">�󼼺���</i></span>

                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">�����</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">��</span>
                                <span className="td05">�ܱ���</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">�󼼺���</i></span>

                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">�����</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">��</span>
                                <span className="td05">�ܱ���</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">�󼼺���</i></span>

                            </div>
                        </div>
                    </div>

                    <div className="con" id="con06">

                        <div className="con_box_top pb5">
                            <h3>�޴��� ����</h3>
                            <div className="alignment">
                                <div className="left_div"><span className="infotxt">�� <strong>22,222</strong>��</span></div>
                                <div className="right_div">
                                    <button type="button" className="btn_top check">��μ���</button>
                                    <button type="button" className="btn_top excel">����</button>
                                    <select className="sel01">
                                        <option>��õ��</option>
                                        <option>�����</option>
                                        <option>��ȸ��</option>
                                    </select>
                                    <select className="sel02">
                                        <option>10�� ����</option>
                                        <option>50�� ����</option>
                                        <option>100�� ����</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="con_box_body">
                            <div className="list_head">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">�̸�</span>
                                <span className="td03">���̵�</span>
                                <span className="td04">����</span>
                                <span className="td05">������/�ܱ���</span>
                                <span className="td06">��������</span>
                                <span className="td07">�ֱٷα��α��</span>
                                <span className="td08">�󼼺���</span>
                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">�����</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">��</span>
                                <span className="td05">�ܱ���</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">�󼼺���</i></span>

                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">�����</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">��</span>
                                <span className="td05">�ܱ���</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">�󼼺���</i></span>

                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">�����</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">��</span>
                                <span className="td05">�ܱ���</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">�󼼺���</i></span>

                            </div>
                        </div>
                    </div>
               </div>
          
            </div>    
    </div>
</div>
}

export default ProfileBusi