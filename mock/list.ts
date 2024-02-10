import { defineFakeRoute } from "vite-plugin-fake-server/client";

export default defineFakeRoute([
  {
    url: "/get-card-list",
    method: "post",
    response: () => {
      return {
        success: true,
        data: {
          list: [
          {
              index: 7,
              isSetup: false,
              type: 1,
              banner: "https://tdesign.gtimg.com/tdesign-pro/t-sec.jpg",
              name: "CVM",
              description:
                "腾讯安全云防火墙产品，是腾讯云安全团队结合云原生的优势，自主研发的SaaS化防火墙产品，无需客无需客无需客无需客无需客无需客无需客"
            },
            {
              index: 1,
              isSetup: true,
              type: 4,
              banner: "https://tdesign.gtimg.com/tdesign-pro/cloud-server.jpg",
              name: "SSL证书",
              description:
                "SSL证书又叫服务器证书，腾讯云为您提供证书的一站式服务，包括免费、付费证书的申请、管理及部"
            },
            {
              index: 2,
              isSetup: false,
              type: 4,
              banner: "https://tdesign.gtimg.com/tdesign-pro/t-sec.jpg",
              name: "人脸识别",
              description:
                "SSL证书又叫服务器证书，腾讯云为您提供证书的一站式服务，包括免费、付费证书的申请、管理及部"
            },
            {
              index: 3,
              isSetup: false,
              type: 5,
              banner: "https://tdesign.gtimg.com/tdesign-pro/ssl.jpg",
              name: "CVM",
              description:
                "云硬盘为您提供用于CVM的持久性数据块级存储服务。云硬盘中的数据自动地可用区内以多副本冗"
            }
          ]
        }
      };
    }
  }
]);
