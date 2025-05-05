import { Box, Divider, Flex, Grid, Heading, Img, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Homepage = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Box padding={7}>
      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gap={2}
      >
        <Img
          width={"100%"}
          src="https://images.ctfassets.net/5de70he6op10/6cJlIZxdaH7ca8byJOWbO8/2d0d3645b510486977ee3e5a96fe2a88/495283951-ls_m0_banner_c.jpg?w=630&q=80&fm=webp"
        />
        <Img
          width={"100%"}
          src="https://images.ctfassets.net/5de70he6op10/2UC2jkd3poP95pUuyOl1cx/aa23b4b9afcd023c55cb384fbe2abcff/495283960-ls_m0_banner_h.jpg?w=630&q=80&fm=webp"
        />
        <Img
          width={"100%"}
          src="https://images.ctfassets.net/5de70he6op10/2U3XO63HzwxpzqC2f7W20B/187c1de646474bd5ea7b3081cb192132/495283954-ls_m0_banner_e.jpg?w=630&q=80&fm=webp"
        />
        <Img
          width={"100%"}
          src="https://images.ctfassets.net/5de70he6op10/5cOu4Ui5611HHArvXrQNdV/6de14ad2beb96aa703169fca97ff9e61/495283950-ls_m0_banner_b.jpg?w=630&q=80&fm=webp"
        />
      </Grid>
      <Flex direction={{ base: "column", md: "row" }} gap={4} mt={10}>
        <Img
          width={{ base: "100%", md: "66.33%", lg: "66.33%" }}
          src="https://ramrajcotton.in/cdn/shop/files/1_970a2f21-1654-479a-8ba1-49191a48aab9.jpg?v=1724760815"
        />
        <Img
          width={{ base: "100%", md: "33%", lg: "33%" }}
          src="https://global.karagiri.com/cdn/shop/products/designer-banarasi-saree-kumkum-red-and-orange-woven-designer-banarasi-saree-with-embroidered-silk-blouse-silk-saree-online-14856033370215.jpg?v=1668413015"
        />
      </Flex>
      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
        mt={5}
      >
        <Img src="https://kavani.in/cdn/shop/files/201.png?v=1682391141" />
        <Img src="https://lajreedesigner.com/cdn/shop/files/Aayna-40100-Black_2_900x1350_crop_center@2x.jpg?v=1712809934" />
        <Img src="https://ramrajcotton.in/cdn/shop/files/Default_3fb453b5-31cf-451d-9740-c3e79606bc92.jpg?v=1720256916" />
      </Grid>
      <Grid gap={4} mt={5}>
        <Img src="https://images.ctfassets.net/5de70he6op10/5YVazy6p6NRSq5r0UJZyik/40ab870dc9b33c82e81a0dee81fee6e1/495283984-ls_m3.jpg?w=2641&q=80&fm=webp" />
      </Grid>
      <Grid gap={4} mt={5}>
        <Img src="https://lh4.googleusercontent.com/proxy/0c3Nu4RqEDxzM8vHbI62BwZH2XNGNhuT04rIdbjEIbXYm_tVxQP22Vo1wK82CR2uy5IwfpH9UgUXWW-2uy77GDw8SuisEd2t_f2EoMgYAlTwB96f6RxsamingBCxLMwkLUIU7fIJzTJ96oDThh0N2nEp_a0tqbjuuuMITqLMiKGHUv9Wz-Tw_VHTtBFL49jpDnSssrI6gzAWv4ZUOwA7MV9HyTqzEmK_LOBKHrdGhvgnwwOej3mV9bIAAWHcESuqrLJz33-8Sje3ROu-f0iD3Tf0rq0OF2Vm3vzRNdsaPd-_O_q7A0JelCKI79jWRPQHftNX6FDTho9Jzu-JHRjvHxZlsrF9dCNj3m_S" />
      </Grid>
      <Box mt={5} textAlign={"left"}>
        <Text fontSize={"xl"}>Top-Rated Picks</Text>
      </Box>
      <Divider borderWidth={"5"} borderColor={"blackAlpha.500"} mt={3} />
      {/* <Grid gap={4} mt={5}>
        
      </Grid> */}
      <Carousel
        transitionDuration={1}
        keyBoardControl={true}
        infinite={true}
        swipeable={true}
        responsive={responsive}
        autoPlay={true}
        arrows={false}
      >
        <Box m={5}>
          <Img
            height={450}
            w={"100%"}
            src="https://cdn.prod.website-files.com/637f32081b68888e6d1bdd50/64d50fa5286d458d5a0935e8_131.jpg"
          />
          <Text mt={3} fontSize={"xl"} textAlign={"left"} fontWeight={400}>
            The Bettin ShirtDress
          </Text>
          <Box textAlign={"left"}>
            {Array(5)
              .fill(" ")
              .map((_, i) => (
                <StarIcon key={i} mt={3} boxSize={"4"} />
              ))}
          </Box>
          <Text textAlign={"left"} fontWeight={300} mt={3}>
            I’m obsessed with this dress and have it in 3 colors.
          </Text>
          <Text
            textAlign={"left"}
            fontWeight={400}
            mt={4}
            color={"teal"}
            cursor={"pointer"}
          >
            Shop Now
          </Text>
        </Box>
        <Box m={5}>
          <Img
            height={450}
            w={"100%"}
            src="https://images.ctfassets.net/5de70he6op10/186VttmY6C7Y7xyqF5B83p/9abc3222cd23ed4ff9a386059b3950e7/495283935-ls_customerfave_b.jpg?w=630&q=80&fm=webp"
          />
          <Text mt={3} fontSize={"xl"} textAlign={"left"} fontWeight={400}>
            The Pier Slingbacks
          </Text>

          <Box textAlign={"left"}>
            {Array(5)
              .fill(" ")
              .map((_, i) => (
                <StarIcon key={i} mt={3} boxSize={"4"} />
              ))}
          </Box>
          <Text textAlign={"left"} fontWeight={300} mt={3}>
            Love love love! Extremely comfortable.
          </Text>
          <br />
          <Text
            textAlign={"left"}
            fontWeight={400}
            mt={4}
            color={"teal"}
            cursor={"pointer"}
          >
            Shop Now
          </Text>
        </Box>

        <Box m={5}>
          <Img
            height={450}
            w={"100%"}
            src="https://infinitylearn.com/surge/wp-content/uploads/2023/12/Traditional-Dress-of-Tamil-Nadu-Women.jpg"
          />
          <Text mt={3} fontSize={"xl"} textAlign={"left"} fontWeight={400}>
            The Naomi Flare Pants
          </Text>
          <Box textAlign={"left"}>
            {Array(5)
              .fill(" ")
              .map((_, i) => (
                <StarIcon key={i} mt={3} boxSize={"4"} />
              ))}
          </Box>
          <Text textAlign={"left"} fontWeight={300} mt={3}>
            These pants have great structure and stretch making them super
            comfortable and flattering.
          </Text>
          <Text
            textAlign={"left"}
            fontWeight={400}
            mt={4}
            color={"teal"}
            cursor={"pointer"}
          >
            Shop Now
          </Text>
        </Box>
        <Box m={5}>
          <Img
            height={450}
            w={"100%"}
            src="https://images.ctfassets.net/5de70he6op10/2EBL8ztboPJO842bDhSREt/380e2fcbf684fddc6855902ffb087511/495284023-ss_customerfave_d.jpg?w=1125&q=80&fm=webp"
          />
          <Text mt={3} fontSize={"xl"} textAlign={"left"} fontWeight={400}>
            The Aperture Mirror
          </Text>
          <Box textAlign={"left"}>
            {Array(5)
              .fill(" ")
              .map((_, i) => (
                <StarIcon key={i} mt={3} boxSize={"4"} />
              ))}
          </Box>
          <Text textAlign={"left"} fontWeight={300} mt={3}>
            It is just the right color of gold...It’s elegant and made very
            well.
          </Text>
          <Text
            textAlign={"left"}
            fontWeight={400}
            mt={4}
            color={"teal"}
            cursor={"pointer"}
          >
            Shop Now
          </Text>
        </Box>
        <Box m={5}>
          <Img
            height={450}
            w={"100%"}
            src="https://st.adda247.com/https://www.adda247.com/ta/wp-content/uploads/2022/06/saree.jpeg"
          />
          <Text mt={3} fontSize={"xl"} textAlign={"left"} fontWeight={400}>
            The Somerset Maxi Dress
          </Text>
          <Box textAlign={"left"}>
            {Array(5)
              .fill(" ")
              .map((_, i) => (
                <StarIcon key={i} mt={3} boxSize={"4"} />
              ))}
          </Box>
          <Text textAlign={"left"} fontWeight={300} mt={3}>
            Extremely versatile, for every style. The perfect outfit
          </Text>
          <Text
            textAlign={"left"}
            fontWeight={400}
            mt={4}
            color={"teal"}
            cursor={"pointer"}
          >
            Shop Now
          </Text>
        </Box>
        <Box m={5}>
          <Img
            height={450}
            w={"100%"}
            src="https://st.adda247.com/https://www.adda247.com/ta/wp-content/uploads/2022/06/saree.jpeg"
          />
          <Text mt={3} fontSize={"xl"} textAlign={"left"} fontWeight={400}>
            The Somerset Mini Dress
          </Text>
          <Box textAlign={"left"}>
            {Array(5)
              .fill(" ")
              .map((_, i) => (
                <StarIcon key={i} mt={3} boxSize={"4"} />
              ))}
          </Box>
          <Text textAlign={"left"} fontWeight={300} mt={3}>
            The perfect outfit, for everything
          </Text>
          <br />
          <Text
            textAlign={"left"}
            fontWeight={400}
            mt={4}
            color={"teal"}
            cursor={"pointer"}
          >
            Shop Now
          </Text>
        </Box>
        <Box m={5}>
          <Img
            height={450}
            w={"100%"}
            src="https://www.shutterstock.com/shutterstock/photos/1099329095/display_1500/stock-photo-attractive-happy-north-indian-couple-in-traditional-dress-1099329095.jpg"
          />
          <Text mt={3} fontSize={"xl"} textAlign={"left"} fontWeight={400}>
            The Somerset Mini Dress
          </Text>
          <Box textAlign={"left"}>
            {Array(5)
              .fill(" ")
              .map((_, i) => (
                <StarIcon key={i} mt={3} boxSize={"4"} />
              ))}
          </Box>
          <Text textAlign={"left"} fontWeight={300} mt={3}>
            The perfect outfit, for everything you like
            <br />
            <br />
          </Text>
          <Text
            textAlign={"left"}
            fontWeight={400}
            mt={4}
            color={"teal"}
            cursor={"pointer"}
          >
            Shop Now
          </Text>
        </Box>
      </Carousel>

      <Box mt={5}>
        <Heading fontWeight={300} fontFamily={"monospace"}>
          More To Explore
        </Heading>
        <Divider borderWidth={"10"} borderColor={"blackAlpha.800"} mt={3} />
      </Box>

      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
        }}
        gap={4}
        mt={5}
      >
        <Box>
          <Img src="https://images.ctfassets.net/5de70he6op10/795jY9vsHgllpp6tBIpNlt/54269e8671d86ca24da2b49a10257fba/495284000-mte_1.jpg?w=856&q=80&fm=webp" />
          <Text mt={3} fontSize={"xl"} textAlign={"left"} fontWeight={400}>
            Summer Denim
          </Text>
          <Text textAlign={"left"} fontWeight={300} mt={3}>
            Dive deep into a sea of cool blue.
          </Text>
        </Box>
        <Box>
          <Img src="https://images.ctfassets.net/5de70he6op10/5I2jvcqlqyMhysLWGwcdzS/b92825853281f2fe530f106c720de29d/495284004-mte_2.jpg?w=856&q=80&fm=webp" />
          <Text mt={3} fontSize={"xl"} textAlign={"left"} fontWeight={400}>
            Gone Viral
          </Text>
          <Text textAlign={"left"} fontWeight={300} mt={3}>
            See the products everyone is talking about.
          </Text>
        </Box>
        <Box>
          <Img src="https://images.ctfassets.net/5de70he6op10/52jeOJDFZ1YX46tsXmaCAi/6f28bdddc510789e7bdf3406f54ad4cf/495284007-mte_3.jpg?w=856&q=80&fm=webp" />
          <Text mt={3} fontSize={"xl"} textAlign={"left"} fontWeight={400}>
            The ASAP Mother's Day Gift!
          </Text>
          <Text textAlign={"left"} fontWeight={300} mt={3}>
            Treat her to what she really wants.
          </Text>
        </Box>
      </Grid>

      <Divider borderWidth={"5"} borderColor={"blackAlpha.500"} mt={7} />
      <Box textAlign={"left"} mt={5}>
        <Text fontSize={"xl"}>About Us</Text>
        <Text
          mt={4}
          fontSize={"md"}
          fontWeight={200}
          fontFamily={"inherit"}
          lineHeight={"20px"}
        >
          The GRT Textile Booking System is a full-stack web application designed to streamline the management of textile product orders, specifically focusing on categories such as dresses and shoes. Built using the MERN stack (MongoDB, Express.js, React, and Node.js), the system enables users to browse products, check availability, and place orders efficiently. It incorporates key features such as user authentication, real-time inventory tracking, quantity management, and order history. The admin panel allows for easy product and inventory management, ensuring smooth operations. Enhanced with Redux for state management and styled using Chakra UI for a responsive interface, the GRT Textile Booking System provides a modern, scalable, and user-friendly platform for both customers and administrators.


        </Text>
      </Box>
    </Box>
  );
};
