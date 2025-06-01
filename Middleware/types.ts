import { ObjectId } from "mongodb";

export type dniModel = {
    _id: ObjectId
    dni: string;
}
export type Character = {
    id: string,
    name: string,
    species: string,
    gender: string,
    house: string,
    alive: boolean,
    image: string
    favorito: boolean;
}
export type CharacterModel = {
    _id:ObjectId,
    id: string,
    name: string,
    species: string,
    gender: string,
    house: string,
    alive: boolean,
    image: string
    favorito: boolean;
}
export type info = {
    data: Character[];
    
}