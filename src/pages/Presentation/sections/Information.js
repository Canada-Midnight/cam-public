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

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";

// Images
import vtm from "assets/images/examples/vtm_card.jpg";
import vtd from "assets/images/examples/da_card.jpg";
import ctd from "assets/images/examples/ctd_card.jpg";
import wta from "assets/images/examples/wta_card.jpg";
import Divider from "@mui/material/Divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircleIcon from "@mui/icons-material/Circle";
import ShieldIcon from "@mui/icons-material/Shield";
import Bright from "@mui/icons-material/Brightness4";
import MKTypography from "../../../components/MKTypography";
import MKAlert from "../../../components/MKAlert";

function Information() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <MKAlert color="dark">
          <MKTypography verticalAlign="center" fontWeight="bold" color="Light">
            <h1 align="center">Chronicles presented by Canada at Midnight</h1>
          </MKTypography>
        </MKAlert>
        <Grid container item xs={11} lg={11} sx={{ mx: "auto" }}>
          <Grid item xs={11} md={5.5} display="block" marginBottom={5} marginLeft={5}>
            <RotatingCard>
              <RotatingCardFront
                color="light"
                textColor="bnw"
                image={vtm}
                icon={<i className="fa-solid fa-ghost" />}
              />
              <RotatingCardBack
                color="bnw"
                image={vtm}
                title="Vampire the Masquerade"
                description="A Brave New World for you to explore."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "The Embrace awaits",
                }}
              />
            </RotatingCard>
          </Grid>
          <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
          <Grid item xs={11} md={5.5} display="block" marginBottom={5} marginLeft={5}>
            <RotatingCard>
              <RotatingCardFront color="light" icon={<ShieldIcon />} textColor="da" image={vtd} />
              <RotatingCardBack
                color="da"
                image={vtd}
                title="Vampire the Dark Ages"
                description="What would happen if you changed history?"
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "Join the Caravan",
                }}
              />
            </RotatingCard>
          </Grid>
          <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
          <Grid item xs={11} md={5.5} display="block" marginBottom={5} marginLeft={5}>
            <RotatingCard>
              <RotatingCardFront textColor="ctd" color="light" image={ctd} icon={<Bright />} />
              <RotatingCardBack
                color="ctd"
                image={ctd}
                title="Changeling the Dreaming"
                description="Will you dream the dream?"
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "Down the rabbit hole",
                }}
              />
            </RotatingCard>
          </Grid>
          <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
          <Grid item xs={11} md={5.5} display="block" marginBottom={5} marginLeft={5}>
            <RotatingCard>
              <RotatingCardFront color="light" icon={<CircleIcon />} textColor="wta" image={wta} />
              <RotatingCardBack
                color="wta"
                image={wta}
                title="Werewolf the Apocalypse"
                description="Will you ride the waves of Rage?"
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "Make wonders",
                }}
              />
            </RotatingCard>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
