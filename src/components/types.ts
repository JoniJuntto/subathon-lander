export enum Social {
  GitHub,
  LinkedIn,
  Twitter,
  Instagram,
}

export type SocialInfo = {
  url: string;
  social: Social;
};
