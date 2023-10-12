<template>
  <div id="mailing-list" class="signup">
    <FormKit
      type="form"
      outer-class="flex items-center align-middle justify-center"
      submit-label="SUBSCRIBE"
      action="https://fun.us5.list-manage.com/subscribe/post?u=400f118c2dee2a8da8090c928&amp;id=28f5085fd2&amp;f_id=00a3baebf0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_self"
      novalidate=""
      :submit-attrs="{
        inputClass: 'button',
        ignore: false,
      }"
    >
      <FormKit
        type="email"
        name="EMAIL"
        input-class="w-full p-2 text-lg rounded-md bg-zinc-900 text-zinc-50 focus:border-zinc-200 focus:ring-zinc-200"
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
}
.formkit-form {
  @apply flex flex-row gap-x-2 align-middle items-center;
}
</style>
