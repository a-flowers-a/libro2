export interface SubUnit {
  name: string;
  path: string;
  level: number;
}

export interface Unit {
  name: String,
  content: Array<SubUnit>
}

//export type Unit = Array<SubUnit>;

