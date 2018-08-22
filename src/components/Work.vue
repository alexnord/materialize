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
  		<b-row class="projects">
  			<b-col xs="12" class="text-center">
  				<img src="../assets/img/work/lftb-showcase.jpg" class="img-fluid" alt="LF The Brand" />
  			</b-col>
  		</b-row>
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
	}
</style>
