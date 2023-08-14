import config from "../config/config";

export default function PlaceImage({place,index=0,className = null}){
    if(!place.image?.length) {
        return ""};
    if(!className){
        className = "object-cover rounded-2xl";
    }
    return (
        
            <img className={className} src={config.production.backendUrl + '/controller/images/' + place.image[index]} alt="" />
    )
}