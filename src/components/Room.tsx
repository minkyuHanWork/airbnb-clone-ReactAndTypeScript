import {
  VStack,
  Button,
  Grid,
  HStack,
  Box,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

interface IRoomProps {
  pk: number;
  imageUrl: string;
  name: string;
  rating: number;
  city: string;
  country: string;
  price: number;
}

export default function Room({
  pk,
  imageUrl,
  name,
  rating,
  city,
  country,
  price,
}: IRoomProps) {
  const grayContent = useColorModeValue("gray.600", "gray.300");
  const starHoverColor = useColorModeValue("yellow.400", "yellow.300");
  return (
    <Link to={`/rooms/${pk}`}>
      <VStack spacing={1} alignItems={"flex-start"}>
        <Box position={"relative"} overflow={"hidden"} mb={3} rounded="2xl">
          <Image minH="280" src={imageUrl} />
          <Button
            variant={"unstyled"}
            position={"absolute"}
            top={0}
            right={0}
            color={"White"}
          >
            <FaRegHeart size={"20px"} />
          </Button>
        </Box>
        <Box>
          <Grid gap={2} templateColumns={"6fr 1fr"}>
            <Text as={"b"} noOfLines={1} fontSize={"md"}>
              {name}
            </Text>
            <HStack
              _hover={{
                color: starHoverColor,
              }}
              spacing={1}
            >
              <FaStar size={"15px"} />
              <Text>{rating}</Text>
            </HStack>
          </Grid>
          <Text fontSize={"s"} color={grayContent}>
            {city}, {country}
          </Text>
        </Box>
        <Text fontSize={"s"} color={grayContent}>
          <Text as="b">₩{price}</Text> / 박
        </Text>
      </VStack>
    </Link>
  );
}
