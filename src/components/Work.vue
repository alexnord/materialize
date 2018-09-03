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

          <b-row class="project" v-scroll-reveal="{ delay: 75, origin: 'left', distance: '10px' }">
            <b-col cols="12" class="max-1140 mx-auto">
              <a href="http://www.lfthebrand.com" target="_blank">
                <b-row>
                  <b-col class="text-center">
                    <img src="../assets/img/work/lftb-showcase.jpg" class="img-fluid" alt="LF The Brand" />
                  </b-col>
                </b-row>
                <b-row class="project-info mx-auto mt-2 p-2">
                  <b-col cols="12" md="4">
                    <div class="client-name circular-black white-font">LF The Brand</div>
                    <div class="project-type circular-book white-font">e-commerce website</div>
                  </b-col>
                  <b-col cols="12" md="6">
                    <div class="project-description circular-med white-font">Frontend and backend web development services for Shopify hosted e-commerce store for major fashion retailer.</div>
                  </b-col>
                  <b-col cols="12" md="2" class="d-none d-md-block">
                    <div class="project-link circular-book white-font">
                      <div><i class="fas fa-external-link-alt"></i></div>
                    </div>
                  </b-col>
                  <div class="d-block d-md-none position-absolute mobile-project-link">
                    <div class="project-link circular-book white-font">
                      <div><i class="fas fa-external-link-alt"></i></div>
                    </div>
                  </div>
                </b-row>
              </a>
            </b-col>
          </b-row>

          <b-row class="mt-35 project" v-scroll-reveal="{ delay: 75, origin: 'right', distance: '10px' }">
            <b-col cols="12" class="max-1140 mx-auto">
              <a href="http://www.carmardenim.com" target="_blank">
                <b-row>
                  <b-col>
                    <img src="../assets/img/work/cm-showcase.jpg" class="img-fluid" alt="Carmar Denim" />
                  </b-col>
                </b-row>
                <b-row class="project-info mx-auto mt-2 p-2">
                  <b-col cols="12" md="4">
                    <div class="client-name circular-black white-font">Carmar Denim</div>
                    <div class="project-type circular-book white-font">e-commerce website</div>
                  </b-col>
                  <b-col cols="12" md="6">
                    <div class="project-description circular-med white-font">Frontend and backend web development services for Shopify hosted e-commerce store for major fashion retailer.</div>
                  </b-col>
                  <b-col cols="12" md="2" class="d-none d-md-block">
                    <div class="project-link circular-book white-font">
                      <div><i class="fas fa-external-link-alt"></i></div>
                    </div>
                  </b-col>
                  <div class="d-block d-md-none position-absolute mobile-project-link">
                    <div class="project-link circular-book white-font">
                      <div><i class="fas fa-external-link-alt"></i></div>
                    </div>
                  </div>
                </b-row>
              </a>
            </b-col>
          </b-row>

          <b-row class="mt-35 project" v-scroll-reveal="{ delay: 75, origin: 'left', distance: '10px' }">
            <b-col cols="12" class="max-1140 mx-auto">
              <a href="http://www.emmaandsam.com" target="_blank">
                <b-row>
                  <b-col>
                    <img src="../assets/img/work/es-showcase.jpg" class="img-fluid" alt="Emma and Sam" />
                  </b-col>
                </b-row>
                <b-row class="project-info mx-auto mt-2 p-2">
                  <b-col cols="12" md="4">
                    <div class="client-name circular-black white-font">Emma and Sam</div>
                    <div class="project-type circular-book white-font">e-commerce website</div>
                  </b-col>
                  <b-col cols="12" md="6">
                    <div class="project-description circular-med white-font">Frontend and backend web development services for Shopify hosted e-commerce store for major fashion retailer.</div>
                  </b-col>
                  <b-col cols="12" md="2" class="d-none d-md-block">
                    <div class="project-link circular-book white-font">
                      <div><i class="fas fa-external-link-alt"></i></div>
                    </div>
                  </b-col>
                  <div class="d-block d-md-none position-absolute mobile-project-link">
                    <div class="project-link circular-book white-font">
                      <div><i class="fas fa-external-link-alt"></i></div>
                    </div>
                  </div>
                </b-row>
              </a>
            </b-col>
          </b-row>

          <b-row class="mt-35 mb-5 project" v-scroll-reveal="{ delay: 75, origin: 'right', distance: '10px' }">
            <b-col cols="12" class="max-1140 mx-auto">
              <a href="http://www.lifeofthepartypremiere.com" target="_blank">
                <b-row>
                  <b-col>
                    <img src="../assets/img/work/lotp-showcase.jpg" class="img-fluid" alt="Life of the Party" />
                  </b-col>
                </b-row>
                <b-row class="project-info mx-auto mt-2 p-2">
                  <b-col cols="12" md="4">
                    <div class="client-name circular-black white-font">Life of the Party Premiere</div>
                    <div class="project-type circular-book white-font">responsive website</div>
                  </b-col>
                  <b-col cols="12" md="6">
                    <div class="project-description circular-med white-font">Promotional website built for the soon-to-be-released Life of the Party movie. Provided custom built voting functionality for college students to win the world premiere at their college campus.</div>
                  </b-col>
                  <b-col cols="12" md="2" class="d-none d-md-block">
                    <div class="project-link circular-book white-font">
                      <div><i class="fas fa-external-link-alt"></i></div>
                    </div>
                  </b-col>
                  <div class="d-block d-md-none position-absolute mobile-project-link">
                    <div class="project-link circular-book white-font">
                      <div><i class="fas fa-external-link-alt"></i></div>
                    </div>
                  </div>
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

<style lang="scss" scoped>

.header {
  position: relative;
  margin-left: 9%;
  margin-top: 90px;
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
.project-info {
  background-color: rgba(223, 0, 112, .8);
}
.client-name {
  font-size: 24px;
}
.project-type {
  font-size: 18px;
}
.project-description {
  font-size: 18px;
}
.project-link {
  font-size: 26px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mobile-project-link {
  right: 23px;
}

@media (min-width: 768px) {
  .header {
    margin-top: 130px;
  }
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
  .client-name {
    font-size: 30px;
  }
  .project-type {
    font-size: 22px;
  }
  .project-description {
    font-size: 22px;
  }
  .project-link {
    font-size: 32px;
  }
}
</style>
