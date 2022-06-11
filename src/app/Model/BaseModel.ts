export interface BaseModel {
  readonly id: string;
  name: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export type OmitValues = "id" | "createdAt" | "updatedAt"