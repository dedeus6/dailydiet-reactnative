import styled from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ContainerImages = styled.View`
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
`;

export const Logo = styled.Image`
    width: 82px;
    height: 37px;
`;

export const Photo = styled.Image`
    width: 40px;
    height: 40px;
`;

export const BackButton = styled.TouchableOpacity`
    flex: 1;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 32,
    color: theme.COLORS.GREEN_DARK
}))`
    width: 24px;
    height: 24px;
`;