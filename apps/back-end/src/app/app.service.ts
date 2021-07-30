import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LollyINT } from './interface/lolly.interface';

@Injectable()
export class AppService {
  constructor(@InjectModel('Lollies') private lollyModel: Model<LollyINT>) {}

  getData(): { message: string } {
    return { message: 'Welcome to back-end!' };
  }

  async createLolly(lolly: LollyINT): Promise<LollyINT> {
    const newLolly = new this.lollyModel(lolly);
    return await newLolly.save();
  }

  async getLollyById(id: string): Promise<LollyINT> {
    return await this.lollyModel.findById(id);
  }
}
