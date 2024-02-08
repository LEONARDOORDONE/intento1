import { SvgXml } from "react-native-svg";
import { starProp } from "./Evaluacion";
import { Pressable } from "react-native";

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="#eba421" width="800px" height="800px" viewBox="0 0 24 24"><path d="M22 9.74l-7.19-.62L12 2.5 9.19 9.13 2 9.74l5.46 4.73-1.64 7.03L12 17.77l6.18 3.73-1.63-7.03L22 9.74zM12 15.9V6.6l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.9z"/></svg>
`;

const StarHalf = (props: starProp) => {
    const handleOnPress = ()=> {
        props.onClick(props.posicion);
    };

    return  (<Pressable
                onPress={handleOnPress}>
        <SvgXml xml={xml} width={50} height={50} />
    </Pressable> 
    );
};

export default StarHalf;
