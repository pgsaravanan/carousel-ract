import React from 'react';
import styled from 'styled-components';
import { themesDefinition } from '../../../styles/themeConstants';

export const NavStyled = styled.nav`
        overflow: hidden;

        .topnav {
            background-color: #333;
            overflow: hidden;
        }
        
        /* Style the links inside the navigation bar */
        .topnav a {
            float: left;
            display: block;
            color: #f2f2f2;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 17px;
        }
        
        /* Change the color of links on hover */
        .topnav a:hover {
            background-color: #ddd;
            color: black;
        }
        
        /* Add an active class to highlight the current page */
        .topnav a.active {
            background-color:#f7833d;
            color: white;
        }
        
        button {
            display: flex;
            flex-direction: column;
            padding: 10px;
            margin: auto;
        }
        
        button {
            margin: 5px 5px 5px auto;
        }

        a {
            float: left;
            display: block;
            background-color: #ddd;
            color: black;
            text-align: center;
            padding: 8px 16px;
            text-decoration: none;
            font-size: 20px;
            border-radius: 4px;
            margin: 10px 10px;
            position: relative;
            top: 12px
        }

        a:hover {
            background-color: #ddd;
            color: black;
        }

        a.active {
            background-color: ${({ theme }) => themesDefinition[theme].navLinkActiveColor};
            color: white;
            cursor: default;
        }

        transition: background-color 0.5s ease;
        background-color: ${({ theme }) => themesDefinition[theme].navBgColor}
`;
