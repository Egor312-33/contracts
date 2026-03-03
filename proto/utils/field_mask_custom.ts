// field_mask_custom.ts
export interface FieldMask {
  paths: string[];
}

export const FieldMask = {
  fromJSON(object: any): FieldMask {
    return {
      paths: Array.isArray(object?.paths) ? object.paths.map(String) : [],
    };
  },
  toJSON(message: FieldMask): unknown {
    return { paths: message.paths };
  },
};
