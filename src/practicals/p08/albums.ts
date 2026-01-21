interface FullAlbum {
    userId: number;
    id: number;
    title: string;
}

const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';
const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';


export function mapPhotoToAlbum(userIds?: number[]): Promise<FullAlbum[]>
