import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';

@Controller('cars')
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
        return this.carsService.create(createCardDto);
    }

    @Patch(':id')
    public updateCar(
        @Param('id', ParseUUIDPipe) id : string,
        @Body() updateCarDto : UpdateCarDto
    ){
        return this.carsService.update(id, updateCarDto);
    }

    @Delete(':id')
    public deleteCar(@Param('id', ParseUUIDPipe) id : string){
        return this.carsService.delete(id);
    }
}
