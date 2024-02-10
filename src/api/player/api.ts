import { http } from "@/utils/http";

// 新增播放器
export const save = (data?: object) => {
  return http.request("post", "/player", { data });
};
