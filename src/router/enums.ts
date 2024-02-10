// 完整版菜单比较多，将 rank 抽离出来，在此方便维护

const home = 0, // 平台规定只有 home 路由的 rank 才能为 0 ，所以后端在返回 rank 的时候需要从 1 开始哦
  components = 100,
  able = 200,
  table = 300,
  list = 400,
  result = 500,
  error = 600,
  frame = 700,
  nested = 800,
  permission = 900,
  system = 1000,
  tabs = 1100,
  about = 1200,
  editor = 1300,
  flowchart = 1400,
  formdesign = 1500,
  board = 1600,
  ppt = 1700,
  guide = 1800,
  menuoverflow = 1900,
  songsheet = 1;

export {
  home,
  components,
  able,
  table,
  list,
  result,
  error,
  frame,
  nested,
  permission,
  system,
  tabs,
  about,
  editor,
  flowchart,
  formdesign,
  board,
  ppt,
  guide,
  menuoverflow,
  songsheet
};