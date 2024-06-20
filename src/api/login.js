//引入封装好的 service
import request from "@/utils/request";
// 登录
export function login(data) {
  return request({
    url: "/admin/login/login",
    method: "post",
    data: data,
  });
}
