import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    padding: 24px;
    margin-top: 40px;
`;

export const ButtonLabel = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_700};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SIZE_16}px;
        margin-bottom: 8px;
        margin-top: 50px;
    `}
`;