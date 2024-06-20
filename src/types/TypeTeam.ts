interface TeamMember {
  name: {
    first: string;
    last: string;
  };
  location: {
    city: string;
    country: string;
  };
  email: string;
  picture: {
    large: string;
  };
}