<template>
  <div class="graph-page">
    <div class="wrapper" id="wrapper">
      <b-container fluid>
        <b-row>
          <div class="header text-center">
            <p class="heading circular-black pink-font ft-24">Tell us about your project</p>
          </div>
        </b-row>
        <b-row>
          <b-col cols="12" offset-md="1" md="10">
            <div id="contact-form">
              <b-row>
                <b-col cols="12" md="6">
                  <div class="circular-med sub-heading">
                    Interested in developing a fantastic product?
                  </div>
                  <div class="manual-contact">
                    <p class="circular-book">Drop us a line about your project and someone will reach out you to.</p>
                    <div class="mt-5">
                      <p class="circular-book pink-font">Or reach out to us directly:</p>
                      <p class="circular-book mt-2"><a href="mailto:hello@materializelabs.com">hello@materializelabs.com</a></p>
                      <p class="circular-book">(310) 699-0125</p>
                    </div>
                  </div>
                </b-col>
                <b-col cols="12" md="6">
                  <div class="error text-center mb-3" v-show="this.error">
                    An error occurred processing your request.
                  </div>
                  <b-form @submit="onSubmit" v-show="!this.success">
                    <b-form-group label="Your name"
                                  class="circular-black">
                      <b-form-input type="text"
                                    class="form-control mb-3 circular-book"
                                    @input="$v.form.name.$touch()"
                                    :state="$v.form.name.$dirty ? !$v.form.name.$invalid : null"
                                    v-model="form.name">
                      </b-form-input>
                      <b-form-invalid-feedback
                        class="my-2"
                        v-if="$v.form.name.$dirty && !$v.form.name.required">
                        Name is required.
                      </b-form-invalid-feedback>
                      <b-form-invalid-feedback
                        class="my-2"
                        v-if="$v.form.name.$dirty && $v.form.name.$invalid">
                        Name must be at least 2 characters.
                      </b-form-invalid-feedback>
                    </b-form-group>

                    <b-form-group label="Email"
                                  class="circular-black">
                      <b-form-input type="text"
                                    class="form-control mb-3 circular-book"
                                    @input="$v.form.email.$touch()"
                                    :state="$v.form.email.$dirty ? !$v.form.email.$invalid : null"
                                    v-model="form.email">
                      </b-form-input>
                      <b-form-invalid-feedback
                        class="my-2"
                        v-if="$v.form.email.$dirty && $v.form.email.$invalid">
                        Email must be a valid format.
                      </b-form-invalid-feedback>
                    </b-form-group>

                    <b-form-group label="Company"
                                  class="circular-black">
                      <b-form-input type="text"
                                    class="form-control mb-3 circular-book"
                                    @input="$v.form.company.$touch()"
                                    :state="$v.form.company.$dirty ? !$v.form.company.$invalid : null"
                                    v-model="form.company">
                      </b-form-input>
                      <b-form-invalid-feedback
                        class="my-2"
                        v-if="$v.form.company.$dirty && !$v.form.company.required">
                        Company is required.
                      </b-form-invalid-feedback>
                      <b-form-invalid-feedback
                        class="my-2"
                        v-if="$v.form.company.$dirty && $v.form.company.$invalid">
                        Company must be at least 2 characters.
                      </b-form-invalid-feedback>
                    </b-form-group>

                    <b-form-group label="Phone"
                                  class="circular-black">
                      <b-form-input type="text"
                                    class="form-control mb-3 circular-book"
                                    @input="$v.form.phone.$touch()"
                                    :state="$v.form.phone.$dirty ? !$v.form.phone.$invalid : null"
                                    v-model="form.phone">
                      </b-form-input>
                      <b-form-invalid-feedback
                        class="my-2"
                        v-if="$v.form.phone.$dirty && $v.form.phone.$invalid">
                        Phone number must be at least 10 digits.
                      </b-form-invalid-feedback>
                    </b-form-group>

                    <b-form-group label="Message"
                                  class="circular-black">
                      <b-form-textarea v-model="form.message"
                                      placeholder="I have a project that I am interested in developing..."
                                      class="circular-book"
                                      @input="$v.form.message.$touch()"
                                      :state="$v.form.message.$dirty ? !$v.form.message.$invalid : null"
                                      :rows="4"
                                      :max-rows="6">
                      </b-form-textarea>
                      <b-form-invalid-feedback
                        class="my-2"
                        v-if="$v.form.message.$dirty && $v.form.message.$invalid">
                        Message is required.
                      </b-form-invalid-feedback>
                    </b-form-group>

                    <div class="recaptcha-wrapper">
                      <vue-recaptcha
                        ref="invisibleRecaptcha"
                        @verify="onVerify"
                        @expired="onExpired"
                        size="invisible"
                        :sitekey="sitekey">
                      </vue-recaptcha>
                    </div>

                    <b-button
                      class="mt-3 circular-book"
                      type="submit"
                      variant="primary"
                      :disabled="$v.form.$invalid">
                      send
                    </b-button>

                  </b-form>
                  <div class="ft-20 circular-book pink-font text-center success" v-show="this.success">
                    Thank you for your inquiry.<br> Someone will contact you shortly.
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <Footer v-bind:footerRelative="this.footerRelative"></Footer>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { validationMixin } from 'vuelidate';
import VueRecaptcha from 'vue-recaptcha';
import { required, minLength, email } from 'vuelidate/lib/validators';
import Footer from './Footer';

export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      },
      success: false,
      error: false,
      sitekey: '6LcmW2oUAAAAAM4gJE8ovXhDFfWapDKkR5LScQuB',
      footerRelative: false,
    };
  },
  mixins: [
    validationMixin,
  ],
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(2),
      },
      email: {
        required,
        email,
      },
      company: {
        required,
        minLength: minLength(2),
      },
      phone: {
        minLength: minLength(10),
      },
      message: {
        required,
      },
    },
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.$refs.invisibleRecaptcha.execute();
    },
    clearContactForm() {
      this.form.name = '';
      this.form.email = '';
      this.form.company = '';
      this.form.phone = '';
      this.form.message = '';
    },
    onVerify(responseToken) {
      const apiUrl = `${process.env.ROOT_API}/inquire`;
      axios.post(apiUrl, {
        name: this.form.name,
        email: this.form.email,
        company: this.form.company,
        phone: this.form.phone,
        message: this.form.message,
        responseToken,
      }).then(() => {
        this.success = true;
        this.clearContactForm();
      }).catch((error) => {
        console.log(error.response.data);
        console.log('error');
        this.error = true;
      });
    },
    handleResize() {
      const wrapperHeight = document.getElementById('wrapper').clientHeight;
      const viewportHeight = window.innerHeight;
      if (wrapperHeight > viewportHeight) {
        this.footerRelative = true;
      } else {
        this.footerRelative = false;
      }
    },
    onExpired() {
      // console.log('Expired');
    },
  },
  created() {
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  mounted() {
    const wrapperHeight = document.getElementById('wrapper').clientHeight;
    const viewportHeight = window.innerHeight;
    if (wrapperHeight > viewportHeight) {
      this.footerRelative = true;
    } else {
      this.footerRelative = false;
    }
  },
  components: {
    Footer,
    VueRecaptcha,
  },
};
</script>

<style lang="scss" scoped>
  .wrapper {
    min-height: 100vh;
  }
  .header {
    margin-top: 100px;
    width: 100%;
  }
  .heading {
    font-size: 28px;
  }
  #contact-form {
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.58);
    border: 1px solid transparent;
    box-shadow: 0 12px 22px 0 rgba(0,0,0,.24), 0 7px 15px 0 rgba(193,193,193,.5);
  }
  .form-group {
    margin-bottom: 0px !important;
  }
  .recaptcha-wrapper {
    display: none;
  }
  form button {
    background-color: rgba(223, 0, 112, .8);
    width: 100%;
    &.disabled {
      background-color: #505050;
      border: 1px solid red;
    }
  }
  .error {
    color: red;
  }
  .sub-heading {
    font-size: 24px;
  }
  .manual-contact {
    margin-top: 10px;
    p {
      font-size: 20px;
      margin-bottom: 0px !important;
      a {
        color: #08BDBD;
        text-decoration: underline;
      }
    }
  }
  form {
    margin-top: 40px;
  }
  .footer {
    margin-top: 50px;
  }
  .success {
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 768px) {
    .header {
      margin-top: 130px;
    }
    .heading {
      font-size: 42px;
    }
    .sub-heading {
      font-size: 36px;
    }
    .manual-contact {
      p {
        font-size: 22px;
      }
    }
    form {
      margin-top: 0px;
    }
  }
</style>
