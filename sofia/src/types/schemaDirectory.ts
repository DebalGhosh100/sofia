import { DataType } from "@/types/dataType";
import { Property, Schema } from "@/types/schema";

export type Directory = {
  subDirectories: Directory[];
  schemas: Schema[];
  directoryName: string;
};
