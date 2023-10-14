<script setup>
const { page } = useContent();

useContentHead(page);

useJsonld({
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  datePublished: page._value.date,
  headline: page._value.title,
  image: page._value.image
    ? page._value.image
    : "https://babyghosts.fund/img/cards/placeholder-card.png",
  author: [
    { name: "Eileen Mary Holowka", url: "https://eileenmary.net" },
    { name: "Jennie Robinson Faber", url: "https://jenniefaber.com" },
  ],
});
</script>

<template>
  <ContentDoc>
    <template #default="{ doc }">
      <section>
        <NuxtLink
          to="/news"
          class="mb-12 uppercase font-black text-xl inline-block no-underline"
          >&larr;</NuxtLink
        >

        <h1 class="article-title">
          {{ doc.title }}
        </h1>
        <p class="uppercase font-black text-sm inline-block">
          {{ $dayjs(doc.date).format("MMMM D, YYYY") }}
        </p>
        <article class="prose lg:prose-xl max-w-screen-md">
          <ContentRenderer :value="doc" />
        </article>
        <ArticleFooter />
      </section>
    </template>
    <template #not-found>
      <div class="article max-w-5xl mx-auto">
        <h1 class="article-title">404</h1>
        <p class="text-center">
          Sorry, that news item wasn't found for some reason!
        </p>
      </div>
    </template>
  </ContentDoc>
</template>

<style lang="postcss">
.article-title {
  @apply text-5xl;
}
.article {
  @apply text-zinc-200 p-4;

  @screen md {
    @apply p-12;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    a {
      @apply no-underline font-bold;
    }
  }

  h2 {
    @apply text-3xl mb-4 mt-2;
  }

  h3 {
    @apply text-xl uppercase tracking-wide text-body mb-2;
  }

  p {
    @apply mb-6 text-xl;
  }

  blockquote {
    p {
      @apply mb-0;
    }
  }

  ul {
    @apply list-disc list-outside ml-8 mt-4 mb-6;

    li {
      @apply text-xl;
    }
  }

  h1 {
    @apply leading-none font-black text-center mt-0 text-5xl;
  }

  &-date {
    color: var(--app-font-color);
    @apply font-mono mt-4;
    font-size: 0.8em;
  }

  & blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
  }

  & table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;

    th {
      vertical-align: bottom;
      border-bottom: 2px solid #ddd;
    }

    td {
      border-top: 1px solid #ddd;
      padding: 8px;
      line-height: 1.42857143;
      vertical-align: top;
    }

    tr:nth-child(odd) td {
      background-color: #f9f9f9;
    }
  }

  & img {
    margin: auto;
    width: 80%;
    display: block;
    margin: 10px auto;
  }
}
</style>
