import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
    ${({ theme, type }) => css`
        background-color: ${type === 'PRIMARY' ? theme.COLORS.GRAY_600 : theme.COLORS.GRAY_200};
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 50px;
        border-radius: 10px;
        border: 1px solid;
        border-color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_600};
    `}
`;

export const Title = styled.Text<Props>`
    ${({ theme, type }) => css`
        color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
        font-size: ${theme.FONT_SIZE.SIZE_14}px;
        font-family: ${ theme.FONT_FAMILY.BOLD};
    `}
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
    size: 24,
    color: type === "PRIMARY" ? theme.COLORS.WHITE  : theme.COLORS.GRAY_700,
    weight: "light"
}))`
    margin-right: 5px;
    height: 24px;
    width: 24px;
`;