export default function PlaceImage({place,index=0,className = null}){
    if(!place.image?.length) {
        return ""};
    if(!className){
        className = "object-cover rounded-2xl";
    }
    return (
        
            <img className={className} src={'http://localhost:8080/controller/images/'+place.image[index]} alt="" />
    )
}