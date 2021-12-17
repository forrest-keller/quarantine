import {
  Center,
  Container,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import documentsImage from "../../public/images/documents.jpg";
import { Poem } from "../components/poem";

const docmentsImageAlt = "Image of documents on a wooden floor";
const documentsTitle = "Documents";
const documentsText = `How can they reduce a person to numbers?
Cold hands from above guide both reflections on the glass pane.
Does either party know the significance of what they hold?
Beneath the pulp, ink loses figure, diminished to reality.
The stamp marks: Approved.`;

const Home: NextPage = () => {
  return (
    <Container maxWidth="7xl">
      <Center marginY="5em">
        <Heading as="h1" fontSize="5xl" color="red.700">
          Quarantine
        </Heading>
      </Center>
      <Stack gap="1em">
        <Poem
          title={documentsTitle}
          number={1}
          imageSrc={documentsImage}
          imageAlt={docmentsImageAlt}
        >
          {documentsText}
        </Poem>
      </Stack>
      <Center marginY="5em">
        <Text color="gray.400">
          Made by&nbsp;
          <Link href="https://forrestkeller.com" isExternal>
            Forrest Keller
          </Link>
        </Text>
      </Center>
    </Container>
  );
};

export default Home;
