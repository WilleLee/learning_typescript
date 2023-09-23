type Address = {
  code: string;
  address: string;
  detailedAddress?: string;
};

type Author = {
  firstName: string;
  lastName: string;
  address: Address;
};

type Poem = {
  author: Author;
  title: string;
};

const poem: Poem = {
  author: {
    firstName: "William",
    lastName: "Shakespeare",
    address: {
      code: "SE1 9GF",
      address: "21 New Globe Walk",
    },
  },
  title: "Sonnet 18",
};
