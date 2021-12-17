import {
  Box,
  Center,
  Heading,
  HeadingProps,
  Spacer,
  Stack,
  StackProps,
  Text,
  TextProps,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image, { ImageProps } from "next/image";
import { CSSProperties, FunctionComponent } from "react";

export interface PoemProps {
  title: string;
  number: number;
  imageSrc: ImageProps["src"];
  imageAlt: string;
}

export const Poem: FunctionComponent<PoemProps> = ({
  title,
  number,
  imageAlt,
  imageSrc,
  children,
}) => {
  const headingStyleProps = useBreakpointValue<CSSProperties>(
    {
      lg: {
        writingMode: "sideways-lr",
      },
    },
    "lg"
  );
  const headingProps: HeadingProps = {
    style: headingStyleProps,
  };
  const textProps: TextProps = {
    whiteSpace: "pre-line",
    lineHeight: "2em",
  };
  const imageProps: Partial<ImageProps> = {
    width: 500,
    height: 500,
  };
  const stackProps: StackProps = {
    direction: { base: "column", lg: "row" },
    gap: "1em",
  };
  const headingStackProps: StackProps = {
    direction: { lg: "column-reverse" },
    width: { base: 500, lg: "3em" },
    alignSelf: { base: "center", lg: "initial" },
  };

  return (
    <Stack {...stackProps}>
      <Stack {...headingStackProps}>
        <Heading {...headingProps}>{number}</Heading>
        <Spacer />
        <Heading {...headingProps}>{title}</Heading>
      </Stack>
      <Center>
        <Image src={imageSrc} alt={imageAlt} {...imageProps} />
      </Center>
      <Center>
        <Text {...textProps}>{children}</Text>
      </Center>
    </Stack>
  );
};
