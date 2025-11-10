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
}

export type TUserPreview = {
  mainInfo: {
    name: TUserValues,
    thumbnail: TUserValues,
  },
  extraInfo: {
    birthday: TUserValues,
    city: TUserValues,
    phone: TUserValues,
  },
}

type TUserValues = {
  value: string,
  component?: any,
}