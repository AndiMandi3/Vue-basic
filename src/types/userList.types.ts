export type TUserList = {
  info: {
    version: string,
  },
  results: TUser[]
}

export type TUser = {
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

export type TUserPreview = {
  birthday: string,
  age: number,
  name: string,
  thumbnail: string,
  city: string,
  phone: string,
}