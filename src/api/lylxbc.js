//引入封装好的 service
import request from "@/utils/request";
// 景区列表
export function getSpotList(params) {
  return request({
    url: "/spot/list",
    method: "get",
    params: params,
  });
}
// 景点详情
export function getSpotDetail(params) {
  return request({
    url: "/spot/detail",
    method: "get",
    params: params,
  });
}
// 景区新增
export function createSpot(data) {
  return request({
    url: "/spot/create",
    method: "post",
    data: data,
  });
}
// 景区编辑
export function editSpot(data) {
  return request({
    url: "/spot/edit",
    method: "post",
    data: data,
  });
}
// 景区删除
export function deleteSpot(data) {
  return request({
    url: "/spot/delete",
    method: "post",
    params: data,
  });
}
// 路线列表
export function getLineList(params) {
  return request({
    url: "/line/list",
    method: "get",
    params: params,
  });
}
// 路线详情
export function getLineDetail(params) {
  return request({
    url: "/line/detail",
    method: "get",
    params: params,
  });
}

// 路线新增
export function createLine(data) {
  return request({
    url: "/line/create",
    method: "post",
    data: data,
  });
}
// 路线编辑
export function editLine(data) {
  return request({
    url: "/line/edit",
    method: "post",
    data: data,
  });
}
// 路线删除
export function deleteLine(data) {
  return request({
    url: "/line/delete",
    method: "post",
    params: data,
  });
}
// 配置列表
export function getBaseList(params) {
  return request({
    url: "/base/list",
    method: "get",
    params: params,
  });
}
// 配置新增
export function createBase(data) {
  return request({
    url: "/base/create",
    method: "post",
    data: data,
  });
}
// 配置编辑
export function editBase(data) {
  return request({
    url: "/base/edit",
    method: "post",
    data: data,
  });
}
// 配置删除
export function deleteBase(data) {
  return request({
    url: "/base/delete",
    method: "post",
    data: data,
  });
}
// 公共
export function pubList(params) {
  return request({
    url: "/main/picture/list",
    method: "get",
    params: params,
  });
}
// 附件新增
export function addFile(data) {
  return request({
    url: "/attach/add",
    method: "post",
    headers: { "Content-Type": "multipart/form-data" },
    data: data,
  });
}
