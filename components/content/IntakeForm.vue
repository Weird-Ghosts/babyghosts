<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const router = useRouter();
const formSubmitted = ref(false);

watch(router.currentRoute, (to) => {
  if (to.query.success) {
    formSubmitted.value = true;
  } else {
    formSubmitted.value = false;
  }
});

const handleSubmit = async function (payload, node) {
  const intakeForm = document.getElementById("intake-form");
  let formData = new FormData(intakeForm);

  try {
    const response = await fetch("/cohort-3/intake?success", {
      method: "POST",
      body: formData,
    });

    if (response.status == 200) {
      await navigateTo({
        path: "/cohort-3/intake",
        query: {
          success: true,
        },
      });
    } else {
      node.restoreCache();
      console.log(node);
      if (response.status == 400) {
        node.setErrors([
          "There was an error in submitting. This is likely because your file upload is too large – it must be under 8MB.",
        ]);
      } else {
        node.setErrors([
          "There was an error submitting your form. Please correct any errors and try again, or email us at hello@babyghosts.fund.",
        ]);
      }
    }
  } catch (error) {
    console.log(`error in submitting the form data: ${error}`);
    node.restoreCache();
  }
};
</script>

<template>
  <section
    class="py-6 my-6 md:my-12 glow-bg mx-6 bg-zinc-300 ghostie-bg text-zinc-800 prose"
  >
    <div id="thank-you" v-if="formSubmitted == true">
      <div class="mb-12 w-full lg:w-2/3 lg:pr-10">
        <h2 class="text-4xl font-black block mb-6">Thank you!</h2>
        <p>
          You and your team will receive more information and invitations
          shortly.
        </p>
        <p>
          If you have any questions in the meantime, feel free to reach out via
          email. See you on November 1!
        </p>
      </div>
    </div>

    <div id="intake-form-wrapper" v-else>
      <FormKit
        type="form"
        #default="{ value }"
        :actions="false"
        wrapper-class="w-full"
        enctype="application/x-www-form-urlencoded"
        method="POST"
        @submit="handleSubmit"
        name="cohort-3-intake"
        id="intake-form"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        netlify
      >
        <FormKit
          type="hidden"
          id="form-name"
          name="form-name"
          value="cohort-3-intake"
        />
        <FormKit wrapper-class="w-full" type="multi-step" tab-style="progress">
          <!-- :allow-incomplete="false" -->
          <IntakeStep1 />
          <IntakeStep2 />
          <IntakeStep3 />
        </FormKit>
      </FormKit>
    </div>
  </section>
</template>

<style lang="postcss">
#intake-form {
  h3 {
    @apply m-0 p-0;
  }
  .formkit-steps {
    @apply mt-12;
  }
  .form-section {
    @apply mb-8 flex flex-wrap;
    .instructions {
      @apply w-full md:w-1/3 pr-10;
    }
    .response {
      @apply w-full md:w-2/3 mr-0;
    }
    p {
      @apply mt-0 mb-4;
    }
  }
  .formkit-outer[data-type="multi-step"] > .formkit-wrapper {
    @apply max-w-none;
  }
  .formkit-add-button {
    @apply mt-4 flex justify-end;
    button {
      @apply bg-zinc-600 px-3 py-2 text-zinc-200 mx-auto rounded-lg;
    }
  }
  .formkit-outer[data-type="multi-step"]
    > [data-tab-style="progress"]
    > .formkit-steps {
    box-shadow: none;
    @apply border-none p-0 mx-auto;
  }

  .formkit-outer[data-type="multi-step"] .formkit-step-actions {
    @apply flex justify-between mt-6 p-6;
    button {
      @apply bg-zinc-600 px-3 py-2 text-zinc-200 mx-auto rounded-lg;
    }
  }
}
</style>
