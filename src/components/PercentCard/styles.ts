import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
    width: 100%;
    background-color: ${({ theme, type }) => type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    justify-content: center;
    align-items: center;
    height: 102px;
`;

export const Percent = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SIZE_32}px;
        color: ${theme.COLORS.GRAY_700};
    `}
`;

export const Description = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_600};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SIZE_14}px;
    `}
`;

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
    color: type === "PRIMARY" ? theme.COLORS.GREEN_DARK  : theme.COLORS.RED_DARK,
}))`
    position: absolute;
    top: 10px;
    right: 10px;
`;