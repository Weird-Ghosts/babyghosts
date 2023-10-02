<template>
  <div id="mailing-list" class="signup">
    <FormKit
      type="form"
      submit-label="SUBSCRIBE"
      action="https://fun.us5.list-manage.com/subscribe/post?u=400f118c2dee2a8da8090c928&amp;id=28f5085fd2&amp;f_id=00a3baebf0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_self"
      novalidate=""
      :submit-attrs="{
        inputClass:
          'inline-block uppercase font-bold text-xl leading-none transition-all ease-in-out duration-300 bg-zinc-100 px-8 py-4 rounded-2xl border-2',
        wrapperClass: 'button lavenderHush ',
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
    @apply w-96 rounded-md text-xl border-0 py-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-jadeMist text-zinc-800;
  }
  input {
    @apply text-black;
  }
}
.formkit-form {
  @apply flex flex-row gap-x-2 align-middle items-center;
}
</style>
