import { IsNotEmpty, IsNumber } from 'class-validator';
export declare class RemoveConcertShowTimeDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
