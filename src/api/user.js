//引入封装好的 service
import request from "@/utils/request";
// 登录
export function getUserList(params) {
  return request({
    url: "/admin/login/list",
    method: "get",
    params: params,
  });
}
