import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
@UsePipes(ValidationPipe)
export class CarsController {
    constructor(
        private readonly carsService : CarsService
    ){}
    
    @Get()
    public getAllCars(){
        return this.carsService.findAll();
    }

    @Get(':id')
    public getCarById(@Param('id', ParseUUIDPipe) id : string){
        return this.carsService.findOneById(id);
    }

    @Post()
    public createCar(@Body() createCardDto : CreateCarDto){
        return createCardDto;
    }

    @Patch(':id')
    public updateCar(
        @Param('id', ParseIntPipe) id : number,
        @Body() body : any
    ){
        return body;
    }

    @Delete(':id')
    public deleteCar(@Param('id', ParseIntPipe) id : number){
        return {
            method: 'delete',
            id
        }
    }
}
