export type GenderType = "male" | "female"

export type HairData = {
    color: string
    type: string
}

export type CoordinatesData = {
    lat: number
    lng: number
}

export type AddressData = {
    address: string
    city: string
    state: string
    stateCode: string
    postalCode: string
    coordinates: CoordinatesData
    country: string
}

export type BankData = {
    cardExpire: string
    cardNumber: string
    cardType: string
    currency: string
    iban: string
}

export type CompanyData = {
    department: string
    name: string
    title: string
    address: AddressData
}

export type CryptoData = {
    coin: string
    wallet: string
    network: string
}

export type UserData = {
    id: number
    firstName: string
    lastName: string
    maidenName: string
    age: number
    gender: GenderType
    email: string
    phone: string
    username: string
    password: string
    birthDate: string
    image: string
    bloodGroup: string
    height: number
    weight: number
    eyeColor: string
    hair: HairData
    ip: string
    address: AddressData
    macAddress: string
    university: string
    bank: BankData
    company: CompanyData
    ein: string
    ssn: string
    userAgent: string
    crypto: CryptoData
    role: string
}
export type UserResponseData = {
    users: UserData[]
    total: number,
    skip: number
    limit: number
}

export type GroupByDepartmentData = {
    [department: string]: { [gender in GenderType]: number } & {
        ageRange: string,
        hair: Record<string, number>,
        addressUser: Record<string, AddressData['postalCode']>,
    }
}