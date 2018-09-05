<template>
  <div>
    <b-modal
      id="contact-form"
      size="md"
      title="contact us"
      ref="contactRef"
      :hide-footer=true
    >
      <div class="error text-center mb-3" v-show="this.error">
        An error occurred processing your request.
      </div>
      <form @submit="onSubmit" v-show="!this.success">
        <b-form-input type="text"
                      class="form-control mb-3"
                      placeholder="name"
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

        <b-form-input type="text"
                      class="form-control mb-3"
                      placeholder="email"
                      @input="$v.form.email.$touch()"
                      :state="$v.form.email.$dirty ? !$v.form.email.$invalid : null"
                      v-model="form.email">
        </b-form-input>
        <b-form-invalid-feedback
          class="my-2"
          v-if="$v.form.email.$dirty && $v.form.email.$invalid">
          Email must be a valid format.
        </b-form-invalid-feedback>

        <b-form-input type="text"
                      class="form-control mb-3"
                      placeholder="company"
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

        <b-form-input type="text"
                      class="form-control mb-3"
                      placeholder="phone (optional)"
                      @input="$v.form.phone.$touch()"
                      :state="$v.form.phone.$dirty ? !$v.form.phone.$invalid : null"
                      v-model="form.phone">
        </b-form-input>
        <b-form-invalid-feedback
          class="my-2"
          v-if="$v.form.phone.$dirty && $v.form.phone.$invalid">
          Phone number must be at least 10 digits.
        </b-form-invalid-feedback>

        <b-form-textarea v-model="form.message"
                        placeholder="Message"
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
          class="mt-3"
          type="submit"
          variant="primary"
          :disabled="$v.form.$invalid">
          send
        </b-button>
      </form>
      <div class="pt-4 pb-4 pl-2 pr-2 text-center ft-20" v-show="this.success">
        Thank you for your inquiry. Someone will contact you shortly.
      </div>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios';
import { validationMixin } from 'vuelidate';
import VueRecaptcha from 'vue-recaptcha';
import { required, minLength, email } from 'vuelidate/lib/validators';

export default {
  name: 'ContactForm',
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
      }).catch(() => {
        this.error = true;
      });
    },
    onExpired() {
      // console.log('Expired');
    },
  },
  components: {
    VueRecaptcha,
  },
};
</script>

<style lang="scss" scoped>
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
</style>
