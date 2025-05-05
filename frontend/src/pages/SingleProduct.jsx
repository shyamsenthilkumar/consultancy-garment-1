import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Heading,
  Spinner,
  Text,
  useToast,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { addToBag, addToWishlist } from "../redux/bagReducer/action";

export const SingleProductPage = () => {
  const { id, category } = useParams();
  const [singleproduct, setSingleProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [bag, setBag] = useState(false);
  const [wish, setWish] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleBag = () => {
    const obj = { ...singleproduct, quantity: 1 };
    dispatch(addToBag(obj));
    toast({
      position: "top",
      title: "Product Added to Your Bag",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setBag(true);
  };

  const handleWishlist = () => {
    const obj = { ...singleproduct, quantity: 1 };
    dispatch(addToWishlist(obj));
    toast({
      position: "top",
      title: "Product Added to Wishlist",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setWish(true);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/${category}/${id}`)
      .then((res) => {
        setSingleProduct(res.data?.msg || {});
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, category]);

  if (loading) {
    return (
      <Box mt={"40vh"} textAlign="center">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (!singleproduct || !singleproduct.name) {
    return <Text textAlign="center">Product not found.</Text>;
  }

  return (
    <>
      <Box padding="5px" margin="30px 0px 30px 20px">
        <Breadcrumb fontWeight="medium" fontSize="14px">
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">
              {category === "dress" ? "Dress" : "Shoes"}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink color="gray">{singleproduct.name}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>

      <Flex className="singleproductcontainer">
        <Box className="imagecontainer">
          <img src={singleproduct.img} alt={singleproduct.name} />
        </Box>

        <Flex className="infocontainer">
          <Box className="infocontainertextside">
            <Flex className="infoselectioncontainer">
              <Box className="info">
                <Heading fontWeight="medium" as="h1">
                  {singleproduct.name}
                </Heading>
                <Text className="infotext">
                  <u>The {singleproduct.brand} Collection By Anthropologie</u>
                </Text>
                <Text className="infotext">⭐⭐⭐⭐ (45)</Text>
                <Text fontSize="xl">${singleproduct.price}</Text>
                <Text className="infotext">
                  Or 4 interest-free installments with <b>Klarna</b> or <b>Afterpay</b>
                </Text>
                <Text className="infotext">Online Exclusive</Text>
                <Text className="infotext">
                  <b>In Stock:</b>{" "}
                  {singleproduct.quantity > 0
                    ? singleproduct.quantity
                    : "Out of Stock"}
                </Text>
              </Box>

              <Box className="selection">
                <Text fontSize="large">Color:</Text>
                <span className="color">🔵</span>
                <span className="color">🔴</span>
                <span className="color">🟡</span>
                <span className="color">🟠</span>
                <span className="color">🟢</span>

                <Text fontSize="large">Fit:</Text>
                <Flex className="fitcontainer">
                  <Box className="fit">Standard</Box>
                  <Box className="fit">Petite</Box>
                  <Box className="fit">Plus</Box>
                </Flex>

                <Text fontSize="large">Size:</Text>
                <Flex className="sizecontainer">
                  <Box className="Size">S</Box>
                  <Box className="Size">M</Box>
                  <Box className="Size">L</Box>
                  <Box className="Size">XL</Box>
                  <Box className="Size">XXL</Box>
                </Flex>

                <Flex className="buttoncontainer" gap="10px" mt="10px">
                  <Button
                    borderRadius="0px"
                    backgroundColor="#4b5666"
                    color="white"
                    _hover={{ bg: "#3c4552" }}
                    isDisabled={wish}
                    onClick={handleWishlist}
                  >
                    Add To Wishlist
                  </Button>
                  <Button
                    borderRadius="0px"
                    backgroundColor="#4b5666"
                    color="white"
                    _hover={{ bg: "#3c4552" }}
                    isDisabled={bag || singleproduct.quantity <= 0}
                    onClick={handleBag}
                  >
                    Add To Bag
                  </Button>
                </Flex>

                <Box className="accordioncontainer" mt="20px">
                  <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box flex="1" textAlign="left">
                            <Text fontSize="xl">Product Details</Text>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        Style No. 4130318350035; Color Code: 066. This item is flattering and
                        versatile. Cotton blend. Smocked waist. Pullover styling. Machine washable.
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box flex="1" textAlign="left">
                            <Text fontSize="xl">Shipping & Returns</Text>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        We accept returns for unworn and unwashed items within 30 days. For more
                        details, check our return policy.
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Box>
              </Box>
            </Flex>
          </Box>

          <Box className="infoimagegrid">
            {[
              "https://images.urbndata.com/is/image/Anthropologie/4130318350035_066_b?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=100",
              "https://images.urbndata.com/is/image/Anthropologie/4130647160167_041_b?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=100",
              "https://images.urbndata.com/is/image/Anthropologie/4130647160167_063_b?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=100",
              "https://images.urbndata.com/is/image/Anthropologie/4130646420031_014_b?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=100",
              "https://images.urbndata.com/is/image/Anthropologie/4130646420009_001_b17?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=100",
            ].map((src, index) => (
              <Box className="gridImages" key={index}>
                <img src={src} alt={`detail-${index}`} />
              </Box>
            ))}
          </Box>
        </Flex>
      </Flex>

      <Box className="recommendation" mt="40px">
        <Heading>Recommended For You</Heading>
      </Box>

      <Flex className="swipercontainer" mt="20px" gap="15px" overflowX="auto">
        {[
          "https://images.urbndata.com/is/image/Anthropologie/4130370060133_018_b2?$an-category$&qlt=80&fit=constrain",
          "https://images.urbndata.com/is/image/Anthropologie/4130916210154_053_b2?$an-category$&qlt=80&fit=constrain",
          "https://images.urbndata.com/is/image/Anthropologie/4130916210140_010_b?$an-category$&qlt=80&fit=constrain",
          "https://images.urbndata.com/is/image/Anthropologie/4130089540094_030_b2?$an-category$&qlt=80&fit=constrain",
        ].map((src, i) => (
          <Box className="swiperimagecontainer" key={i}>
            <img src={src} alt={`recommend-${i}`} />
          </Box>
        ))}
      </Flex>
    </>
  );
};
