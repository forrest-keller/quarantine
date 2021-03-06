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
  text: string;
  imageSrc: ImageProps["src"];
  imageAlt: string;
}

export const Poem: FunctionComponent<PoemProps> = ({
  title,
  number,
  text,
  imageAlt,
  imageSrc,
}) => {
  const headingStyleProps = useBreakpointValue<CSSProperties>(
    {
      lg: {
        writingMode: "vertical-lr",
        transform: "rotate(180deg)",
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
    objectFit: "cover",
  };
  const stackProps: StackProps = {
    direction: { base: "column", lg: "row" },
    gap: "1em",
  };
  const headingStackProps: StackProps = {
    direction: { lg: "column-reverse" },
    width: { lg: "3em" },
  };

  return (
    <Stack {...stackProps}>
      <Stack {...headingStackProps}>
        <Heading
          color="blackAlpha.500"
          {...headingProps}
        >{`${number}.`}</Heading>
        <Spacer />
        <Heading {...headingProps}>{title}</Heading>
      </Stack>
      <Center>
        <Image
          placeholder="blur"
          src={imageSrc}
          alt={imageAlt}
          {...imageProps}
        />
      </Center>
      <Center>
        <Text {...textProps}>{text}</Text>
      </Center>
    </Stack>
  );
};
