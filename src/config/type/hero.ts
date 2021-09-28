export interface IHero {
  image: string;
  name: string;
  description: string;
}

export interface IHeroCardList extends IHero {
  cardId: number;
  rareness: number;
  rarenessName: string;
  type: string;
  race: string;
  attribute: string;
  attackRange: string;
  rate: number;
  role: string;
}

export interface IAttributes {
  traitType: string;
  value: string;
  displayType?: number;
}

export interface IHeroDetails {
  name: string;
  description: string;
  image: string;
  externalLink: string;
  sellerFeeBasisPoints: number;
  feeRecipient: string;
  attributes: IAttributes[];
}
