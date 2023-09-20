<template>
  <div id="mailing-list" class="signup">
    <FormKit
      type="form"
      submit-label="SUBSCRIBE"
      action="https://fun.us5.list-manage.com/subscribe/post?u=400f118c2dee2a8da8090c928&amp;id=28f5085fd2&amp;f_id=00a3baebf0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      class="validate mt-5 w-1/2"
      target="_self"
      novalidate=""
      :submit-attrs="{
        inputClass: 'my-input-class',
        wrapperClass:
          'inline-block uppercase font-bold text-xl leading-none mt-3 inline-flex w-full items-center justify-center rounded-md bg-lavenderHush px-3 py-2 text-zinc-800 shadow-sm hover:bg-purpleHaze focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  sm:w-auto uppercase tracking-widest',
        ignore: false,
      }"
    >
      <FormKit
        type="email"
        name="EMAIL"
        class="email"
        id="mce-EMAIL"
        required=""
        value=""
        placeholder="you@example.com"
      />
      <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
      <div id="mce-responses" class="clear">
        <div
          class="response"
          id="mce-error-response"
          style="display: none"
        ></div>
        <div
          class="response"
          id="mce-success-response"
          style="display: none"
        ></div>
      </div>
      <div aria-hidden="true" style="position: absolute; left: -5000px">
        <FormKit
          type="text"
          name="b_400f118c2dee2a8da8090c928_28f5085fd2"
          tabindex="-1"
          value=""
        />
      </div>
    </FormKit>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
.signup {
  input[type="email"] {
    @apply w-96 rounded-md text-xl border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-jadeMist text-zinc-800;
  }
  input {
    @apply text-black;
  }
}
</style>
