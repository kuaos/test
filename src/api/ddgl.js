//引入封装好的 service
import request from "@/utils/request";
// 登录
export function orderList(params) {
  return request({
    url: "/admin/order/conditionSearch",
    method: "get",
    params: params,
  });
}
