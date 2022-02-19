import React, { useEffect, useState, useRef, useMemo } from "react"
import { useSelector } from "react-redux"

import Sidebar from '../../components/sidebar'
import ImagesList from "../../components/imagesList"
import LoadMoreButton from "../../components/loadMoreButton"

import { getAllCategories } from "../../redux/selectors/getCategories"

import { getImages } from "../../services/getImages"

import { BOXES_PAGE } from "../../routes/pageNames"

const Boxes = () => {
    const  allCategories = useSelector(getAllCategories)
    
    const imagesRef = useRef(null)

    const [page, setPage] = useState(10)
    const [images, setImages] = useState([])

    const id = useMemo(() => (
        allCategories.find(el => el?.name === BOXES_PAGE)
    ),[allCategories])?.id

    useEffect(() => {
        getImages?.(page, id)?.then((res) => {
            setImages([...imagesRef.current, ...res])
        })
    },[page])

    useEffect(() => {
        imagesRef.current = images
    },[images])

    const loadMoreClickHandler = () => {
        setPage(page + 10)
    } 

    return (
        <div>
            <Sidebar />
            <LoadMoreButton clickHandler={loadMoreClickHandler}/>
            <ImagesList images={images} />
        </div>
    )
}

export default Boxes;
