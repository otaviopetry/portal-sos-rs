export interface IInitiative {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  regions?: string[];
  types: string[];
  campaignURL: string;
}
