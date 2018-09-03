<template>
  <div class="graph-page">
    <div class="wrapper">
      <b-container fluid>
        <b-row>
          <div class="header">
            <p class="heading circular-black pink-font ft-24">some of our projects</p>
            <div class="d-flex justify-content-start">
              <p class="sub-heading pr-2 ft-22">-</p>
              <p class="sub-heading circular-med ft-22">built with passion</p>
            </div>
          </div>
        </b-row>
        <div class="projects">

          <b-row v-scroll-reveal="{ delay: 75, origin: 'left', distance: '10px' }">
            <b-col xs="12" class="max-1140 mx-auto">
              <a href="http://www.lfthebrand.com" target="_blank">
                <b-row>
                  <b-col class="text-center">
                    <img src="../assets/img/work/lftb-showcase.jpg" class="img-fluid" alt="LF The Brand" />
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col>
                    <div class="work-client circular-black pink-font">LF The Brand</div>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <div class="work-description circular-book">Frontend and backend web development services for Shopify hosted e-commerce store for major fashion retailer.</div>
                  </b-col>
                </b-row>
              </a>
            </b-col>
          </b-row>

          <b-row class="mt-35" v-scroll-reveal="{ delay: 75, origin: 'right', distance: '10px' }">
            <b-col xs="12" class="max-1140 mx-auto">
              <a href="http://www.carmardenim.com" target="_blank">
                <b-row>
                  <b-col>
                    <img src="../assets/img/work/cm-showcase.jpg" class="img-fluid" alt="Carmar Denim" />
                  </b-col>
                </b-row>
                <b-row class="mt-2">
                  <b-col>
                    <div class="work-client circular-black pink-font"><strong>Carmar Denim</strong></div>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <div class="work-description circular-book">Frontend and backend web development services for Shopify hosted e-commerce store for major fashion retailer.</div>
                  </b-col>
                </b-row>
              </a>
            </b-col>
          </b-row>

          <b-row class="mt-35" v-scroll-reveal="{ delay: 75, origin: 'left', distance: '10px' }">
            <b-col xs="12" class="max-1140 mx-auto">
              <a href="http://www.emmaandsam.com" target="_blank">
                <b-row>
                  <b-col>
                    <img src="../assets/img/work/es-showcase.jpg" class="img-fluid" alt="Emma and Sam" />
                  </b-col>
                </b-row>
                <b-row class="mt-2">
                  <b-col>
                    <div class="work-client circular-black pink-font"><strong>Emma and Sam</strong></div>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <div class="work-description circular-book">Frontend and backend web development services for Shopify hosted e-commerce store for major fashion retailer.</div>
                  </b-col>
                </b-row>
              </a>
            </b-col>
          </b-row>

          <b-row class="mt-35 mb-5" v-scroll-reveal="{ delay: 75, origin: 'right', distance: '10px' }">
            <b-col xs="12" class="max-1140 mx-auto">
              <a href="http://www.lifeofthepartypremiere.com" target="_blank">
                <b-row>
                  <b-col>
                    <img src="../assets/img/work/lotp-showcase.jpg" class="img-fluid" alt="Life of the Party" />
                  </b-col>
                </b-row>
                <b-row class="mt-2">
                  <b-col>
                    <div class="work-client circular-black pink-font"><strong>Life of the Party Premiere</strong></div>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <div class="work-description circular-book">Promotional website built for the soon-to-be-released Life of the Party movie. Provided custom built voting functionality for college students to win the world premiere at their college campus.</div>
                  </b-col>
                </b-row>
              </a>
            </b-col>
          </b-row>

        </div>
      </b-container>
    </div>
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
.header {
  position: relative;
  margin-left: 9%;
  margin-top: 130px;
}
.sub-heading {
  color: #000;
  margin-top: -18px;
  line-height: 26px;
}
.max-1140 {
  max-width: 1140px;
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
