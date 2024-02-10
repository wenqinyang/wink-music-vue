import { $t } from "@/plugins/i18n";
import { songsheet } from "@/router/enums";

export default {
  path: "/song-sheet",
  redirect: "/song-sheet",
  meta: {
    icon: "material-symbols:library-music",
    title: $t("menus.hsmusicSheetManagement"),
    rank: songsheet
  },
  children: [
    {
      path: "/song-sheet/index",
      name: "SongSheet",
      component: () => import("@/views/song-sheet/index.vue"),
      meta: {
        icon: "material-symbols:music-note",
        title: $t("menus.hsmusicSheetList"),
        showParent: true
      }
    }
  ]
} satisfies RouteConfigsTable;


