<template>
  <div class="footer pl-2 pr-2">
    <div class="d-flex justify-content-between">
      <div class="copyright">&copy; {{ new Date().getFullYear() }} Materialize, LLC</div>
      <div class="social d-flex justify-content-center">
        <div v-b-modal.contact-form><i class="far fa-paper-plane"></i></div>
        <div><a href="https://www.facebook.com/materializelabs/" target="_blank"><i class="fab fa-facebook-square"></i></a></div>
        <div><a href="https://www.linkedin.com/company/materialize/" target="_blank"><i class="fab fa-linkedin"></i></a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {};
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  width: 100%;
  bottom: 5px;
}
.copyright {
  font-size: 14px;
}
.social a {
  color: #000;
}
.social i {
  cursor: pointer;
  margin-left: 10px;
  font-size: 24px;
  &:hover {
    color: #DF0070;
  }
}
@media (min-width: 768px) {
  .footer {
    bottom: 20px;
  }
  .copyright {
    margin-left: 40px;
    font-size: 18px;
  }
  .social {
    margin-right: 40px;
    bottom: 10px;
  }
  .social i {
    margin-left: 18px;
    font-size: 36px;
  }
}
</style>
