import React from "react";
import { Link } from "react-router-dom";

import { SIDEBAR_ITEMS_ARRAY } from "../../constants/sideBarItems";

import './style.scss';

const Sidebar = () => (
    <div className="sidebar">
        {SIDEBAR_ITEMS_ARRAY?.map((item) => (
            <Link key={item} className="sidebar__item" to={'/' + item}>{item !== '/' && item}</Link>
        ))}
    </div>
)

export default Sidebar;
