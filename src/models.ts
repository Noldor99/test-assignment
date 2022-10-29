export interface IUser{
  id: number
  name: string
  email: string
  phone: string
  position: string
  position_id: number
  photo: string
  registration_timestamp: number
}

export interface IPositionsGet{
  positions:IPositions[]
}

export interface IPositions{
  id: number
  name: string
  checked?: boolean
}