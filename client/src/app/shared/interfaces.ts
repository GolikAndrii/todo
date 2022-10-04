import {Time} from "@angular/common";

export interface User {
  _id?: string
  password: string
  email: string
}

export interface Category {
  _id?: string
  imageSrc?: string
  name: string
  user?: string
}

export interface Todo {
  _id?: string
  imageSrc?: string
  name: string
  user?: string
  category: string
  dateNow: Date
  timeNow: Time
}

export interface Message{
  message: string
}

export interface Overview {
  gain: OverviewItem
  orders: OverviewItem
}


export interface OverviewItem  {
  percent: number
  compare: number
  yesterday: number
  isHigher: boolean
}
