export interface JobCity {
  name: string;
}
export interface JobCommitment {
 title: string;
}

export default interface JobComponentProps {
  id: string;
  cities: Array<JobCity>;
  commitment: Array<JobCommitment>;
  slug: string;
  title: string;
  onClick: (id: string) => void;
}