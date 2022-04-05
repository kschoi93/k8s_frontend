import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export default function Sidebar(){
    return (
        <SidebarWrapper>
            <MenuItem><MenuLink to='sign-up'>sign-up</MenuLink></MenuItem>
        </SidebarWrapper>
    );
}

const MenuLink = styled(Link)`
    font-size: 14px;
    text-decoration: none;
    color: black;
    padding: 10px 0;
`;

const MenuItem = styled.div`
    padding: 10px 0;
`;

const SidebarWrapper = styled.div`
    width: 120px;
    height: 100vh;
    padding: 20px 30px;
    border-right: 1px solid #454DB6;
`;