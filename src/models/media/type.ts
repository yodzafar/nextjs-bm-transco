export interface IMedia {
  id: number
  documentId: string
  name: string
  width: number
  height: number
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null | string
  provider: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}