type THumanList = {
  info: {
    version: string,
  },
  results: THuman[]
}

type THuman = {
  phone: string,
  dob: {
    date: Date,
    age: number,
  }
  name: {
    title: string,
    first: string,
    last: string,
  }
  picture: {
    thumbnail: string,
  },
  location: {
    city: string,
  },
  id: {
    name: string,
    value: string,
  }
}

type THumanPreview = {
  birthday: string,
  age: number,
  name: string,
  thumbnail: string,
  city: string,
  phone: string,
}

export type { THumanList, THuman, THumanPreview }