/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "../../../../components/MKButton";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
import post1 from "assets/images/examples/vtm.jpg";
import post2 from "assets/images/examples/da.jpg";
import post3 from "assets/images/examples/ctd.jpg";
import post4 from "assets/images/examples/wta.jpg";

function Places() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h2" mb={6}>
            My characters
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="Zalan Sarkany"
              description="Luminary Elder of the Carpathian, member of the Camarilla."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "error",
                label: "Zalan's information page",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              title="Sri Namdev Dhanvantari"
              description="Ancillae Unicorn, Living in an Ashirra dominated domain."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "black",
                label: "Sri's information page",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="François-Xavier Pierre Marie Juchault des Jamonières"
              description="Sidhe Courtier of House Balor."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "Francois-Xavier's information page",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post4}
              title="Giggle the Stern"
              description="Fostern Ahroun of the White Howler. Lovely, yet deadly."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "success",
                label: "Giggle's information page",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
