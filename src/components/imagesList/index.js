import ImageItem from '../imageItem';

const ImagesList = ({images}) => (
    images?.map((item) => {
        return <ImageItem item={item} key={item?.url}/>
    })
)

export default ImagesList;
