export type MoveType =
  | 'nature'
  | 'fire'
  | 'psychic'
  | 'water'
  | 'electric'
  | 'cosmic'
  | 'toxic'
  | 'dream'
  | 'crystal'
  | 'sound'
  | 'strength';

export type BackgroundColor =
  | 'indigo'
  | 'purple'
  | 'green'
  | 'blue'
  | 'red'
  | 'yellow'
  | 'pink'
  | 'orange'
  | 'teal'
  | 'cyan';

export interface CardMove {
  title: string;
  description: string;
  iconCount: number;
  damage: number;
  type: MoveType;
}

export interface CardData {
  name: string;
  hp: number;
  image: string;
  tagline: string;
  moves: CardMove[];
  backgroundColor: BackgroundColor | [BackgroundColor, BackgroundColor];
}

export interface TypeConfig {
  icon: string;
  color: string;
  name: string;
}