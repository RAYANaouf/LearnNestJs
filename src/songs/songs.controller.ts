import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {

    constructor(private songsService : SongsService){}

    @Get()
    findAll() {
        return this.songsService.findAll();
    }

    @Get(":id")
    findOne(): string {
        return `This action returns a song by its fid`;
    }

    @Put(":id")
    update(): string {
        return `This action updates a song by its fid`;
    }

    @Post()
    create(){
        return this.songsService.create('Song number 1')
    }

    @Delete(":id")
    remove(): string {
        return `This action removes a song by its fid`;
    }
}
