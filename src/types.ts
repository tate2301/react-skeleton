export type SkeletonColumn = {
  start: number;
  length: number;
  size?: number;
  radius?: number;
  type?: 'circle' | 'square' | 'gutter';
  rows?: SkeletonRow[];
};

export type SkeletonRow = {
  type: 'row';
  height?: number;
  repeat: number;
  columns: SkeletonColumn[];
};
