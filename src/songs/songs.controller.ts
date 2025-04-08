import { Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {

    constructor(private songsService : SongsService){}

    @Get()
    findAll() {
        try{
            return this.songsService.findAll();
        }catch(e){
            throw new HttpException(
                'Server Error', 
                HttpStatus.INTERNAL_SERVER_ERROR,
                {
                    cause : e
                }
            );
        }
        
    }

    @Get(":id")
    findOne(
        @Param(
            'id',
            new ParseIntPipe({errorHttpStatusCode : HttpStatus.NOT_ACCEPTABLE})
        ) 
        id: number
    ): string {
        return `This action returns a song by its id : ${typeof id}`;
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
