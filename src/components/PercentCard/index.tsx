import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Description, Icon, Percent } from "./styles";

type Props = TouchableOpacityProps & {
    type: ButtonTypeStyleProps;
}

export function PercentCard({ type, ...rest }: Props) {
    return (
        <Container {...rest} type={type}>
            <Icon type={type}/>
            <Percent>90,86%</Percent>
            <Description>das refeições dentro da dieta</Description>
        </Container>
    )
}