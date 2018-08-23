<template>
  <div id="work-page">
    <b-container fluid>
      <b-row>
        <div class="header">
          <p class="heading">some of our projects</p>
          <div class="d-flex justify-content-start">
            <p class="sub-heading pr-2">-</p>
            <p class="sub-heading">built for happy clients</p>
          </div>
        </div>
      </b-row>
      <div class="projects">
        <!-- <b-row>
          <a href="http://www.lfthebrand.com" target="_blank">
            <b-col xs="12" class="text-center">
              <b-row>
                <b-col>
                  <img src="../assets/img/work/lftb-showcase.jpg" class="img-fluid" alt="LF The Brand" />
                </b-col>
              </b-row>
              <b-row class="mt-2">
                <b-col>
                  <div class="work-client"><strong>LF The Brand</strong></div>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <div class="work-description mx-auto">Frontend and backend web development services for Shopify hosted e-commerce store for major fashion retailer.</div>
                </b-col>
              </b-row>
            </b-col>
          </a>
        </b-row> -->

        <b-row v-scroll-reveal="{ delay: 75, origin: 'left', distance: '10px' }">
          <b-col xs="12" class="text-center">
            <a href="http://www.lfthebrand.com" target="_blank">
              <b-row>
                <b-col>
                  <img src="../assets/img/work/lftb-showcase.jpg" class="img-fluid" alt="LF The Brand" />
                </b-col>
              </b-row>
              <b-row class="mt-3">
                <b-col>
                  <div class="work-client"><strong>LF The Brand</strong></div>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <div class="work-description mx-auto">Frontend and backend web development services for Shopify hosted e-commerce store for major fashion retailer.</div>
                </b-col>
              </b-row>
            </a>
          </b-col>
        </b-row>

        <b-row class="mt-35" v-scroll-reveal="{ delay: 75, origin: 'right', distance: '10px' }">
          <b-col xs="12" class="text-center">
            <a href="http://www.carmardenim.com" target="_blank">
              <b-row>
                <b-col>
                  <img src="../assets/img/work/cm-showcase.jpg" class="img-fluid" alt="Carmar Denim" />
                </b-col>
              </b-row>
              <b-row class="mt-2">
                <b-col>
                  <div class="work-client"><strong>Carmar Denim</strong></div>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <div class="work-description mx-auto">Frontend and backend web development services for Shopify hosted e-commerce store for major fashion retailer.</div>
                </b-col>
              </b-row>
            </a>
          </b-col>
        </b-row>

        <b-row class="mt-35" v-scroll-reveal="{ delay: 75, origin: 'left', distance: '10px' }">
          <b-col xs="12" class="text-center">
            <a href="http://www.emmaandsam.com" target="_blank">
              <b-row>
                <b-col>
                  <img src="../assets/img/work/es-showcase.jpg" class="img-fluid" alt="Emma and Sam" />
                </b-col>
              </b-row>
              <b-row class="mt-2">
                <b-col>
                  <div class="work-client"><strong>Emma and Sam</strong></div>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <div class="work-description mx-auto">Frontend and backend web development services for Shopify hosted e-commerce store for major fashion retailer.</div>
                </b-col>
              </b-row>
            </a>
          </b-col>
        </b-row>

        <b-row class="mt-35 mb-5" v-scroll-reveal="{ delay: 75, origin: 'right', distance: '10px' }">
          <b-col xs="12" class="text-center">
            <a href="http://www.lifeofthepartypremiere.com" target="_blank">
              <b-row>
                <b-col>
                  <img src="../assets/img/work/lotp-showcase.jpg" class="img-fluid" alt="Life of the Party" />
                </b-col>
              </b-row>
              <b-row class="mt-2">
                <b-col>
                  <div class="work-client"><strong>Life of the Party Premiere</strong></div>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <div class="work-description mx-auto">Promotional website built for the soon-to-be-released Life of the Party movie. Provided custom built voting functionality for college students to win the world premiere at their college campus.</div>
                </b-col>
              </b-row>
            </a>
          </b-col>
        </b-row>

      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Work',
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
  #work-page {
    position: relative;
    top: 100px;
  }
  .header {
    position: relative;
    left: 9%;
  }
  .heading {
    font-size: 24px;
  }
  .sub-heading {
    font-size: 22px;
    color: #b1b1b1;
    margin-top: -18px;
    line-height: 26px;
  }
  .projects {
    margin-top: 20px;
  }
  .projects a {
    color: #000;
  }
  .projects a:hover {
    text-decoration: none;
  }
  .work-client {
    font-size: 24px;
  }
  .work-description {
    font-size: 16px;
    max-width: 1140px;
  }

  @media (min-width: 768px) {
    #work-page {
      top: 160px;
    }
    .heading {
      font-size: 36px;
    }
    .sub-heading {
      font-size: 30px;
    }
    .projects {
      margin-top: 50px;
    }
    .work-client {
      font-size: 30px;
    }
    .work-description {
      font-size: 22px;
    }
  }
</style>
