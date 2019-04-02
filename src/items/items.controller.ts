import { Param, Req, Get, Post, Put, Delete, Body, Controller, Res } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Request, Response } from 'express';
@Controller('items')

/**
 * ItemController
 */
export class ItemsController {
    @Get() 
    findAll(): string {
        return 'GET ALL ITEMS'
    }
    
    @Post() 
    create(@Body() createItemDto: CreateItemDto): string {
        return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`;
    }

    @Get(':id')
        findOne(@Param('id') id): string {
            return `Item ${id}`;
    }

    @Delete(':id') 
        delete(@Param('id'), id): string {
            return `Delete ${id}`;
        }

    @Put(':id')
        update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
            return `Update ${id} - Name: ${updateItemDto.name}`
        }
}

