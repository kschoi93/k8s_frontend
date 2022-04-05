import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';


export default function Header(){

    return (
        <HeaderWrapper>
            <MenuItem><MenuLink to='ml'>ML</MenuLink></MenuItem>
            <MenuItem><MenuLink to='sign-up'>sign-up</MenuLink></MenuItem>
            <SearchWrapper>
                <InputText type="text" placeholder='검색어를 입력하세요'></InputText>
            </SearchWrapper>
        </HeaderWrapper>
    );
}

const InputText = styled.input`
    width: 160px;
    height: 20px;
    align-self: center;
`;

const SearchWrapper = styled.div`
    width: 100%;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: end;
    padding-right: 20px;
`;

const MenuLink = styled(Link)`
    color: white;
    text-decoration-line: none;
`;

const MenuItem = styled.div`
    width: 100px;
    padding-left: 20px;
    text-align: center;
`;

const HeaderWrapper = styled.div`
    height: 60px;
    line-height: 60px;
    display: flex;
    background-color: #454DB6;
`;