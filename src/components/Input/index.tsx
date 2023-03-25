import { RefObject } from "react";

import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Container } from "./styles";

type Props = TextInputProps & {
    inputRef?: RefObject<TextInput>;
};

export default function Input({ inputRef, ...rest }: Props) {
    const { COLORS } = useTheme();

    return (
        <Container
            ref={inputRef}
            placeholderTextColor={COLORS.GRAY_300}
            {...rest}
        />
    );
}
