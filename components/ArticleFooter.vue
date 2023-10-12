<template>
  <div class="article-footer mt-6 pt-6 max-w-screen-md">
    <div class="flex justify-between pt-6">
      <div class="mailing-list w-1/2">
        <div class="text-zinc-400 text-xs">
          Subscribe to our newsletter to get monthly updates on our impact,
          funded studios, and upcoming programs.
        </div>
        <div class="mt-2">
          <SubscribeForm />
        </div>
      </div>

      <div class="share">
        <div class="font-semibold u-text-gray-900 uppercase text-sm">Share</div>
        <ul class="flex gap-x-4">
          <li>
            <button
              @click="copyUrlToClipboard"
              class="app-button pv-xSgI8F pc-HTTE6L !p-0 u-text-gray-900 hover:u-text-gray-700"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon icon-leading"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m10 17.55l-1.77 1.72a2.47 2.47 0 0 1-3.5-3.5l4.54-4.55a2.46 2.46 0 0 1 3.39-.09l.12.1a1 1 0 0 0 1.4-1.43a2.75 2.75 0 0 0-.18-.21a4.46 4.46 0 0 0-6.09.22l-4.6 4.55a4.48 4.48 0 0 0 6.33 6.33L11.37 19A1 1 0 0 0 10 17.55ZM20.69 3.31a4.49 4.49 0 0 0-6.33 0L12.63 5A1 1 0 0 0 14 6.45l1.73-1.72a2.47 2.47 0 0 1 3.5 3.5l-4.54 4.55a2.46 2.46 0 0 1-3.39.09l-.12-.1a1 1 0 0 0-1.4 1.43a2.75 2.75 0 0 0 .23.21a4.47 4.47 0 0 0 6.09-.22l4.55-4.55a4.49 4.49 0 0 0 .04-6.33Z"
                ></path></svg
              ><span data-v-d64ec27c=""></span
              ><!---->
            </button>
          </li>
          <li>
            <a
              :href="`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrlRef}`"
              rel="noopener noreferrer"
              target="_blank"
              class="app-button pv-xSgI8F pc-GPR-cZ !p-0 u-text-gray-900"
              disabled="false"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon icon-leading"
                width="1em"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5c0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7c-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5c67.2 0 79.7 44.3 79.7 101.9V416z"
                ></path></svg
              ><span data-v-d64ec27c=""></span
              ><!----></a
            >
          </li>
          <li>
            <a
              data-v-d64ec27c=""
              href="https://twitter.com/intent/tweet?text=I%20found%20this%20article%20interesting%20%20https://nuxt.com/blog/nuxt-on-the-edge&amp;hashtags=nuxt"
              rel="noopener noreferrer"
              target="_blank"
              class="app-button pv-xSgI8F pc-4u4JWI !p-0 u-text-gray-900"
              disabled="false"
              ><svg
                data-v-40670dad=""
                data-v-d64ec27c=""
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon icon-leading"
                width="1em"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645c0 138.72-105.583 298.558-298.558 298.558c-59.452 0-114.68-17.219-161.137-47.106c8.447.974 16.568 1.299 25.34 1.299c49.055 0 94.213-16.568 130.274-44.832c-46.132-.975-84.792-31.188-98.112-72.772c6.498.974 12.995 1.624 19.818 1.624c9.421 0 18.843-1.3 27.614-3.573c-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319c-28.264-18.843-46.781-51.005-46.781-87.391c0-19.492 5.197-37.36 14.294-52.954c51.655 63.675 129.3 105.258 216.365 109.807c-1.624-7.797-2.599-15.918-2.599-24.04c0-57.828 46.782-104.934 104.934-104.934c30.213 0 57.502 12.67 76.67 33.137c23.715-4.548 46.456-13.32 66.599-25.34c-7.798 24.366-24.366 44.833-46.132 57.827c21.117-2.273 41.584-8.122 60.426-16.243c-14.292 20.791-32.161 39.308-52.628 54.253z"
                ></path></svg
              ><span data-v-d64ec27c=""></span
              ><!----></a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();
const currentUrlRef = ref("");

onMounted(() => {
  currentUrlRef.value = `${window.location.origin}${route.path}`;
});

const copyUrlToClipboard = () => {
  const text = new ClipboardItem({
    "text/plain": new Blob([currentUrlRef.value], { type: "text/plain" }),
  });

  navigator.clipboard
    .write([text])
    .then(() => {
      notify();
      console.log("Copied to clipboard successfully!");
    })
    .catch((err) => {
      console.error("Error in copying URL: ", err);
    });
};

const notify = () => {
  useNuxtApp().$toast.success("Link copied to clipboard.", {
    icon: false,
    position: "bottom-left",
    theme: "dark",
    autoClose: 5000,
    dangerouslyHTMLString: true,
  });
};
</script>
<style>
.Toastify__progress-bar-theme--dark {
  background: #daaeff;
}

.Toastify__toast-theme--dark {
  @apply text-zinc-200 font-display uppercase;
}
</style>
