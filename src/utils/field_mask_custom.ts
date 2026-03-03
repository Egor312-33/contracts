// field_mask_custom.ts
export interface FieldMask {
  paths: string[];
}

export const FieldMask = {
  fromJSON(object: any): FieldMask {
    console.log("я тут");
    return {
      paths: Array.isArray(object?.paths) ? object.paths.map(String) : [],
    };
  },

  toJSON(message: FieldMask): unknown {
    console.log("я тут");
    return { paths: message.paths };
  },
};
