import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {


    private readonly songs : String[] = [];


    create(song : string){
        this.songs.push(song);
        return this.songs;
    }
    
    findAll(){
        throw new Error('Method not implemented');
        return this.songs;
    }
}
