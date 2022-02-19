import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Routes ,Route } from 'react-router-dom';

import { getAllCategory } from '../services/getAllCategory';

import { setCategoryNames } from '../redux/actions/categoryAction';

import { categoryArray } from "./pageArray";

const AppRouting = () => {
    const dispatch = useDispatch()
    const [ready, setReady] = useState(false)

    useEffect(() => {
        getAllCategory()?.then(res => {
            dispatch(setCategoryNames(res))
            setReady(true)
        })
    },[])

    return (
       <div>
            {ready && categoryArray?.map((routes) => (
                <Routes key={routes.name}>
                    <Route path={routes.name} element={<routes.page />}/>
                </Routes>
            ))}
       </div>
    )
}

export default AppRouting;
