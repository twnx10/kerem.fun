<template>
  <div class="py-4">
    <div class="space-y-6 sm:w-9/12">
      <header class="space-y-4">
        <div class="space-y-1">
          <h1
            class="text-2xl font-semibold text-gray-900 sm:text-3xl dark:text-gray-100"
          >
            HabboZEN
          </h1>

          <div class="space-y-2 text-gray-800 dark:text-gray-200">
            <p>
              Make new friends, own your own seat in the game and play an important role in our development!
            <br><br>> <a href="https://habbozen.com"> Go to HabboZEN </a>
            </p>
          </div>
        </div>
      </header>

      <section class="space-y-4">
        <h2 class="text-lg text-gray-900 dark:text-gray-100">HabboZEN Teams</h2>

        <div class="grid gap-4">
          <div
            v-for="(account, index) in accounts"
            :key="`account-${index}`"
            class="flex items-center h-full"
          >
            <div class="bg-gray-300 rounded-tl rounded-bl dark:bg-gray-800">
              <SkeletonLoader
                type="image"
                :image-url="account.avatar"
                class="w-24 h-24"
              />
            </div>

            <div
              class="flex items-center w-full h-full pl-4 bg-gray-200 rounded-tr rounded-br dark:bg-gray-700"
            >
              <div>
                <h3 class="font-medium text-gray-900 dark:text-gray-100">
                  {{ account.name }}
                </h3>

<font size=-2>
                <span
                  class="text-gray-800 dark:text-gray-200"
                >
                  {{ account.rank }}
                </span></font>

                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      accounts: [
        {
          avatar: "https://cdn.discordapp.com/avatars/851418617072975902/01bc3eef878522ed44321faea1eb77d2.webp?size=128",
          name: "incifix#0616",
          rank: "Owner",
          revealed: true,
        },
        {
          avatar: "https://cdn.discordapp.com/avatars/715503800693162005/7123aa498548f2dc3cb1c6262aa93dce.png?size=128",
          name: "larwiee#2612",
          rank: "Owner",
          revealed: true,
        },
        {
          avatar: "https://discord.com/assets/c09a43a372ba81e3018c3151d4ed4773.png",
          name: "twn#1296",
          rank: "Developer",
          revealed: true,
        },
      ],
    }
  },
  head() {
    const title = "Donate"
    const description =
      "Like my projects? You can donate me to boost my performance and make me create more, better projects in the future!"

    return {
      title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: description,
        },
        {
          hid: "og:title",
          name: "og:title",
          content: title,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: description,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: description,
        },
      ].map((i) => {
        i.property = i.property || i.name || null
        return i
      }),
      link: [
        {
          rel: "canonical",
          href: "https://kerem.fun/donate",
        },
      ],
    }
  },
  computed: {
    /**
     * Returns the Sponsor object in runtime config.
     * @returns {object}
     */
    getSponsorLinks() {
      return this.$config.sponsor
    },
  },
}
</script>
