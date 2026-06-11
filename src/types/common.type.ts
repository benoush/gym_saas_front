export type QueryParamsPagnination = {
  page: number
  limit: number
}

export type ApiResponsePagination<TableData> = {
  page: number
  limit: number
  data: Data<TableData>
}

export type Data<Row> = {
  count: number
  rows: Row[]
}

export type ApiResponse<TableData> = {
  success: boolean
  data: Data<TableData>
  message: string
}
