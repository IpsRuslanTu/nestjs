import {Body, Controller, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {CreatePostDto} from "./dto/create-post.dto";
import {PostsService} from "./posts.service";
import {ApiTags} from "@nestjs/swagger";
import {FileInterceptor} from "@nestjs/platform-express";


@ApiTags('Посты')
@Controller('posts')
export class PostsController {
    constructor(private postService: PostsService) {
    }

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost(@Body() dto: CreatePostDto, @UploadedFile() image) {
        return this.postService.createPost(dto, image)
    }
}
