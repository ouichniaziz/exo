import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LikeModule } from './like.model';
import { Model } from 'mongoose';
interface User {
  username: string;
}
@Injectable()
export class LikeService {
  constructor(@InjectModel('Like') private likeModule: Model<LikeModule>) {}
  async like(user: User) {
    const newUser = new this.likeModule({
      username: user.username,
    });
    try {
      await newUser.save();
    } catch (err) {
      console.log(err);
    }
  }

  async likeMovie(body) {
    await this.likeModule.updateOne(
      { username: body.username },
      { $addToSet: { likes: body.id } },
      { new: true },
    );
  }

  async getUser(username) {
    return await this.likeModule.findOne({ username: username });
  }
}
