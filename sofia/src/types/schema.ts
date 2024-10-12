import { DataType } from "@/types/dataType";

export type AnyOf = {
  anyOf: DataType[] | DataType;
};

export type Property = {
  type: AnyOf;
  title: string;
  id: string;
  description: string;
  required: boolean;
  nullable: boolean;
};

export type Schema = {
  title: string;
  description: string;
  type: DataType;
  required: boolean;
  nullable: boolean;
  properties: Property[];
};
