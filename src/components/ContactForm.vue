<template>
  <div>
    <b-modal
      id="contact-form"
      size="md"
      title="contact us"
      ref="contactRef"
      :hide-footer=true
    >
      <form @submit="onSubmit" v-show="!this.success">
        <b-form-input type="text"
                      class="form-control mb-3"
                      placeholder="first name"
                      @input="$v.form.first_name.$touch()"
                      :state="$v.form.first_name.$dirty ? !$v.form.first_name.$invalid : null"
                      v-model="form.first_name">
        </b-form-input>
        <b-form-invalid-feedback
          class="my-2"
          v-if="$v.form.first_name.$dirty && !$v.form.first_name.required">
          First name is required.
        </b-form-invalid-feedback>
        <b-form-invalid-feedback
          class="my-2"
          v-if="$v.form.first_name.$dirty && $v.form.first_name.$invalid">
          First name must be at least 2 characters.
        </b-form-invalid-feedback>

        <b-form-input type="text"
                      class="form-control mb-3"
                      placeholder="last name"
                      @input="$v.form.last_name.$touch()"
                      :state="$v.form.last_name.$dirty ? !$v.form.last_name.$invalid : null"
                      v-model="form.last_name">
        </b-form-input>
        <b-form-invalid-feedback
          class="my-2"
          v-if="$v.form.last_name.$dirty && !$v.form.last_name.required">
          Last name is required.
        </b-form-invalid-feedback>
        <b-form-invalid-feedback
          class="my-2"
          v-if="$v.form.last_name.$dirty && $v.form.last_name.$invalid">
          Last name must be at least 2 characters.
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
import { required, minLength, email } from 'vuelidate/lib/validators';

export default {
  name: 'ContactForm',
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
      success: false,
    };
  },
  mixins: [
    validationMixin,
  ],
  validations: {
    form: {
      first_name: {
        required,
        minLength: minLength(2),
      },
      last_name: {
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
        minLength: minLength(2),
      },
      message: {
        required,
      },
    },
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      const apiUrl = `${process.env.ROOT_API}/inquire`;
      axios.post(apiUrl, {
        first_name: this.form.first_name,
        last_name: this.form.last_name,
        email: this.form.email,
        company: this.form.company,
        phone: this.form.phone,
        message: this.form.message,
      }).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });

      this.success = true;
      this.clearContactForm();
    },
    clearContactForm() {
      this.form.first_name = '';
      this.form.last_name = '';
      this.form.email = '';
      this.form.company = '';
      this.form.phone = '';
      this.form.message = '';
    },
    onModalClose() {
      alert('hey');
    },
  },
  components: {},
};
</script>

<style scoped>
form button {
  background-color: rgba(223, 0, 112, .8);
  width: 100%;
}
form button:hover {
  background-color: rgba(223, 0, 112, .8);
  width: 100%;
}
</style>
