interface Person {
  adult: boolean;
  gender: number;
  id: number;
  name: string;
  profile_path: string;
  known_for_department: string;
  original_name: string;
  credit_id: string;
  popularity: number | string;
}

export interface Actor extends Person {
  cast_id: number;
  character: string;
  order: number;
}

export interface CrewMember extends Person {
  department: string;
  job: string;
}

export interface MappedActor {
  id: number;
  fullname: string;
  character: string;
  image: string;
}
