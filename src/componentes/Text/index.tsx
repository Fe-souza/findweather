import React, { ReactNode } from "react";
import { TextProps } from "react-native";

import * as Styled from "./styles";

export interface IText extends TextProps {
   children: ReactNode;
   color: string;
   fontFamily: string;
   fontSize: number;
}

const Text = ({
   color,
   fontFamily, 
   fontSize,
   children,
   ...rest
}: IText): JSX.Element => {
return (
   <Styled.Text
        color={color}
        fontFamily={fontFamily}
        fontSize={fontSize}
     {...rest}
   >
     {children}
   </Styled.Text>
);
};

export default Text;