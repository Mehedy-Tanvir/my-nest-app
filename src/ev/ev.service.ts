import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EvService {
  constructor(private readonly configureService: ConfigService) {}

  getDbUrl() {
    return this.configureService.get<string>('DATABASE_URL');
  }
}
