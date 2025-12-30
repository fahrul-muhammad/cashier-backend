export interface ApiResponse<T> {
  status: "success";
  statusCode: number;
  data: T;
}
