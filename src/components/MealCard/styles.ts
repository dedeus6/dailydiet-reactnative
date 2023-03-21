import { TouchableOpacity, View } from "react-native";
import styled, { css } from "styled-components/native";

export type CircleTypeStyleProps = true | false;

type Props = {
    inDiet: CircleTypeStyleProps;
}


export const Container = styled(TouchableOpacity)`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    border-radius: 6px;
    padding: 12px;
    border: 1px solid;
    border-color: ${({ theme }) => theme.COLORS.GRAY_300};
    margin-bottom: 10px;
`;

export const InfoContainer = styled.View`
    flex: 1;
    flex-direction: row;
`;

export const Hour = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_700};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SIZE_12}px;
        border-right-width: 1px;
        border-right-color: ${theme.COLORS.GRAY_400};
        padding-right: 8px;
    `}
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_600};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SIZE_12}px;
        margin-left: 8px;
    `}
`;

export const Circle = styled(View)<Props>`
    width: 14px;
    height: 14px;
    border-radius: 100px;
    background-color: ${({ theme, inDiet }) => inDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;