import {
    HATS_PAGE,
    HOME_PAGE, 
    TIES_PAGE, 
    SINKS_PAGE, 
    BOXES_PAGE, 
    SPACE_PAGE, 
    CLOTHES_PAGE, 
    SUNGLASSES_PAGE
} from "./pageNames";

import {
    Hats,
    Ties,
    Home,
    Boxes,
    Sinks,
    Space,
    Clothes,
    Sunglasses,
} from "../pages";

export const categoryArray = [
    {
        page: Home,
        name: HOME_PAGE,
    },
    {
        page: Boxes,
        name: BOXES_PAGE,
    },
    {
        page: Clothes,
        name: CLOTHES_PAGE,
    },
    {
        page: Hats,
        name: HATS_PAGE,
    },
    {
        page: Ties,
        name: TIES_PAGE,
    },
    {
        page: Sinks,
        name: SINKS_PAGE,
    },
    {
        page: Sunglasses,
        name: SUNGLASSES_PAGE,
    },
    {
        page: Space,
        name: SPACE_PAGE,
    }
];