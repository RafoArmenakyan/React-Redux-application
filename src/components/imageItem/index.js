const ImageItem = ({item}) => (
    <img 
        alt={item?.id} 
        src={item?.url} 
        style={{
            margin: '15px',
            width: '200px' || item?.width, 
            height: '200px' || item?.height
        }}
    />
)

export default ImageItem;
