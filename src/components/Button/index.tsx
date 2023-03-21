import { ButtonTypeStyleProps, Container, Icon, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ButtonLabel } from "@screens/Home/styles";

type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap;
    type?: ButtonTypeStyleProps;
}

export function Button({ type = "PRIMARY", icon, ...rest }: Props) {
    return (
        <Container {...rest} type={type}>
            <Icon type={type} name={icon}/>
            <Title type={type}>Nova refeição</Title>
        </Container>
    )
}