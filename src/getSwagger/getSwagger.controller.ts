import { Controller, Get, Query } from '@nestjs/common';
import { GetSwaggerService } from './getSwagger.service';
import { GetSwaggerDto } from './dto/GetSwaggerDto';

@Controller('getSwagger')
export class GetSwaggerController {
  constructor(private readonly getSwaggerService: GetSwaggerService) {}

  @Get()
  async getSwaggerJSON(@Query() url: GetSwaggerDto) {
    const res = await this.getSwaggerService.getSwaggerWithUrl(url.url);
    return res;
  }
}
