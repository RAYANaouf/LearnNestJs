import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {


    private readonly songs : String[] = [];


    create(song : string){
        this.songs.push(song);
        return this.songs;
    }
    
    findAll(){
        return this.songs;
    }
}
