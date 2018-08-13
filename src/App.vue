<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
    <Footer></Footer>
    <b-modal
      id="contact-form"
      size="lg"
      title="contact us"
      ref="contactRef"
      :ok-only=true
      ok-title="send"
      @ok="handleOk"
    >
      <form>
        <b-form-input type="text"
                      class="form-control mb-2"
                      placeholder="first name"
                      v-model="form.first_name">
        </b-form-input>
        <b-form-input type="text"
                      class="form-control mb-2"
                      placeholder="last name"
                      v-model="form.last_name">
        </b-form-input>
        <b-form-input type="text"
                      class="form-control mb-2"
                      placeholder="email"
                      v-model="form.email">
        </b-form-input>
        <b-form-input type="text"
                      class="form-control mb-2"
                      placeholder="company"
                      v-model="form.company">
        </b-form-input>
        <b-form-input type="text"
                      class="form-control mb-2"
                      placeholder="phone (optional)"
                      v-model="form.phone">
        </b-form-input>
        <b-form-textarea v-model="form.message"
                         placeholder="I want to add shopify to my website and improve the buying experience for my customers."
                         :rows="4"
                         :max-rows="6">
        </b-form-textarea>
      </form>
    </b-modal>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/css/styles.css';
import './assets/css/hamburgers.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

export default {
  name: 'App',
  data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      },
    };
  },
  methods: {
    handleOk(e) {
      e.preventDefault();
      this.clearContactForm();
      this.$refs.contactRef.hide();
    },
    clearContactForm() {
      this.form.first_name = '';
      this.form.last_name = '';
      this.form.email = '';
      this.form.company = '';
      this.form.phone = '';
      this.form.message = '';
    },
  },
  components: {
    Nav,
    Footer,
  },
};
</script>

<style>
#app {}
#particles-js {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: transparent;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}
.body-particles{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}
</style>
