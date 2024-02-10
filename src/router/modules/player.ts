import { $t } from "@/plugins/i18n";
import { songsheet } from "@/router/enums";

export default {
  path: "/player",
  redirect: "/player",
  meta: {
    icon: "bi:music-player-fill",
    title: $t("menus.hsmusicPlayerManagement"),
    rank: songsheet
  },
  children: [
    {
      path: "/player/index",
      name: "Player",
      component: () => import("@/views/player/index.vue"),
      meta: {
        icon: "carbon:data-player",
        title: $t("menus.hsmusicPlayerList"),
        showParent: true
      }
    }
  ]
} satisfies RouteConfigsTable;


