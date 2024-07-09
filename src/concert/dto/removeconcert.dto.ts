import { IsNotEmpty, IsNumber } from 'class-validator';
export class RemoveConcertDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
