export interface TaskType {
    _id: string,
    name: string,
    image_url: string,
    owner_name: string,
    likes: [],
    dislikes: [],

    species: string,
    age: number,
    poddy_trained: boolean,
}
