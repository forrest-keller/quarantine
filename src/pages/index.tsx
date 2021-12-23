import {
  Center,
  CenterProps,
  Container,
  ContainerProps,
  Heading,
  HeadingProps,
  Link,
  Stack,
  StackProps,
  Text,
  TextProps,
  LinkProps,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { poems } from "../utilities/poems";
import { Poem } from "../components/poem";

const Home: NextPage = () => {
  const containerProps: ContainerProps = {
    maxWidth: "7xl",
  };
  const centerSectionProps: CenterProps = {
    marginY: "5em",
  };
  const titleHeadingProps: HeadingProps = {
    as: "h1",
    color: "white",
    padding: "0.2em",
    fontSize: "5xl",
    backgroundColor: "red.900",
  };
  const mainStackProps: StackProps = {
    gap: "5em",
  };
  const comingSoonTextProps: TextProps = {
    color: "white",
    padding: "1em",
    backgroundColor: "red.900",
  };
  const footerText = "Made by ";
  const footerTextProps: TextProps = {
    fontSize: "sm",
    color: "blackAlpha.500",
  };
  const footerLinkText = "Forrest Keller";
  const footerLinkProps: LinkProps = {
    href: "https://forrestkeller.com",
  };

  return (
    <Container {...containerProps}>
      <Center {...centerSectionProps}>
        <Heading {...titleHeadingProps}>Quarantine</Heading>
      </Center>
      <Stack {...mainStackProps}>
        {poems.map((poemProps, index) => (
          <Poem key={index} {...poemProps} />
        ))}
      </Stack>
      <Center {...centerSectionProps}>
        <Text {...footerTextProps}>
          {footerText}
          <Link {...footerLinkProps}>{footerLinkText}</Link>
        </Text>
      </Center>
    </Container>
  );
};

export default Home;
